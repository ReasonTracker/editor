import React, { Component } from 'react';
import { RepositoryLocalPure, Messenger, calculateScoreActions, Action, ScoreTree, RsData } from "@reasonscore/core";
import ScoreElement from './ScoreElement';
import { selectElement } from './selectElement';

declare global {
    interface Window {
        RsDatabase: any;
    }
}

type MyProps = {
    scoreTreeId: string,
    repository: RepositoryLocalPure,
    messenger: Messenger,
    settings: any,
    selectId?: string | null,
};

type MyState = {
    settings: {
        [others: string]: boolean;
    }
    settingsOpen: boolean,
    scoreTree?: ScoreTree,
    tempVisualLog: string,
};

class Menu extends Component<MyProps, MyState> {

    constructor(props: MyProps) {
        super(props);

        this.state = {
            settings: {
                ...{
                    numbers: false,
                    lines: true,
                    scoreDescriptions: {
                        impact: [
                            { min: -10, desc: "Myth" },
                            { min: -.1, desc: "Unsupported" },
                            { min: .1, desc: "Weak" },
                            { min: .5, desc: "" },
                            { min: .9, desc: "Srong" },
                            { min: 1.1, desc: "Very Srong" },
                        ],
                        result: [
                            { min: -10, desc: "Myth" },
                            { min: -.1, desc: "Unsupported" },
                            { min: .1, desc: "Possible" },
                            { min: .5, desc: "Likely" },
                            { min: .9, desc: "Probable" },
                            { min: 1.1, desc: "Probable" },
                        ]
                    },
                }, ...this.props.settings
            },
            settingsOpen: false,
            scoreTree: undefined,
            tempVisualLog: "",
        };
    }

    async componentDidMount() {
        const scoreTree = await this.props.repository.getScoreTree(this.props.scoreTreeId)
        this.setState({
            scoreTree: scoreTree,
        })
        this.props.messenger.subscribe(this.handleDataDispatch)

        //Open the proper scores for display
        // TODO: sleep hack because children may take awhile to be created. How can we do this better?
        setTimeout(() => {
            if (this.props.selectId) {
                selectElement(this.props.selectId, this.props.repository.rsData, this.state.settings);
            } else if (!this.props.settings.startClosed && scoreTree) {
                selectElement(scoreTree.topScoreId, this.props.repository.rsData, this.state.settings);
            }
        }, 500);


    }

    handleDataDispatch = async (actions: Action[]) => {
        for (const action of actions) {
            const { newData, type, dataId } = action;
            let newState: Partial<MyState> = {}
            if (type === "modify_scoreTree" && dataId === this.state.scoreTree?.id) {
                newState.scoreTree = { ...this.state.scoreTree, ...newData };
            }

            this.setState(newState as MyState);
        }
    }

    handleSave = async () => {
        //TODO: Save Log to databse?


        // This JSON parsing also some undefineds that will cause Firestore to error out
        const rsDataCleanedForTransfer = this.getRsDataCleanedForTransfer();

        //Save the scores to Firebase
        try {
            await window.RsDatabase.doc(this.state.settings.dbCollection).set(rsDataCleanedForTransfer)
            let newState: Partial<MyState> = { tempVisualLog: `${Date()}: Document successfully written!` };
            this.setState(newState as MyState);
        } catch (error) {
            let newState: Partial<MyState> = { tempVisualLog: `${Date()}: Error writing document:${error}` };
            this.setState(newState as MyState);
        }
    }

    getRsDataCleanedForTransfer = () => {
        const rsDataWithtouUndefined = JSON.parse(JSON.stringify(this.props.repository.rsData)) as RsData;
        rsDataWithtouUndefined.actionsLog = [];
        return rsDataWithtouUndefined;
    }

    handleImport = () => {
        //TODO: HACKs: File Import needs to be completely re-done
        const element = document.createElement('div');
        element.innerHTML = '<input type="file">';
        const fileInput = element.firstChild as HTMLInputElement;
        const that = this;
        if (fileInput) {
            fileInput.addEventListener('change', function () {
                if (fileInput.files) {
                    var file = fileInput.files[0];
                    if (file.name.match(/\.(txt|json)$/)) {
                        var reader = new FileReader();

                        reader.onload = async function () {
                            that.props.repository.rsData = JSON.parse(reader.result as string);
                            const scoreTree = that.state.scoreTree;
                            that.setState({ scoreTree: undefined })
                            await calculateScoreActions({
                                actions: [new Action(scoreTree, undefined, "add_scoreTree")],
                                repository: that.props.repository,
                            }).then((updatedScores: any) => {
                                setTimeout(function () {
                                    that.setState({ scoreTree: scoreTree })
                                }, 100);
                            });
                        }
                        reader.readAsText(file);
                    } else {
                        alert("File not supported, .txt or .json files only");
                    }
                }
            });
            fileInput.click();
        }
    }


    handleExport = async () => {
        // @ts-ignore
        if (window.showSaveFilePicker) {
            // @ts-ignore
            const fileHandle = await window.showSaveFilePicker();
            // Create a FileSystemWritableFileStream to write to.
            const writable = await fileHandle.createWritable();
            // Write the contents of the file to the stream.
            await writable.write(JSON.stringify(this.getRsDataCleanedForTransfer()));
            // Close the file and write the contents to disk.
            await writable.close();
        } else {
            if (window.confirm("Please use Chrome version 91 or above to download large files. Do you want to attepmt anyay?")) {
                var hiddenElement = document.createElement('a');
                hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(JSON.stringify(this.getRsDataCleanedForTransfer()));
                hiddenElement.target = '_blank';
                hiddenElement.download = 'rsData.json';
                hiddenElement.click();
            }
        }


    }

    toggleSettings = () => {
        this.setState({
            settingsOpen: !this.state.settingsOpen
        })
    }

    handleSetting = (setting: string, e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                [setting]: e.currentTarget.checked,
            }
        })
    }

    classNames() {
        let classes = "";
        for (const className in this.state.settings) {
            if (this.state.settings[className]) {
                classes += "s-" + className + " ";
            }
        }
        return classes;
    }

    render() {
        const settings = this.state.settings;
        return (<>
            <div className={this.classNames()}>
                {this.state.scoreTree &&
                    <ScoreElement
                        scoreId={this.state.scoreTree.topScoreId}
                        repository={this.props.repository}
                        proMainContext={true}
                        messenger={this.props.messenger}
                        settings={this.state.settings}
                        scoreTree={this.state.scoreTree}
                    />
                }
            </div>
            <div className="Content">
                <div style={{ maxWidth: "600px", margin: "10px", padding: "1rem 0 .5rem 0", opacity: .3 }} className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group mr-3" role="group" aria-label="Save">
                        {!settings.DbNotAvailable && settings.editable && settings.saveToCloud &&
                            <button onClick={this.handleSave} type="button" value="Submit" className="btn btn-secondary">Save to cloud</button>
                        }
                        {settings.portData && <>
                            <button onClick={this.handleImport} type="button" value="download" className="btn btn-secondary">Import</button>
                            <button onClick={this.handleExport} type="button" value="download" className="btn btn-secondary">Export</button>
                        </>}

                    </div>
                    <div className="btn-group mr-3 float-right btn-settings" role="group" aria-label="Settings">
                        <svg onClick={this.toggleSettings} style={{ cursor: "pointer", height: "1em", fill: "#aaa", stroke: "none" }} viewBox="0 0 1280.000000 1280.000000">
                            <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>
                            <g transform="translate(0,1280) scale(0.1,-0.1)">
                                <path d="M5664 11538 c-38 -40 -55 -68 -68 -113 -19 -65 -44 -149 -70 -235 -9 -30 -74 -248 -145 -484 l-128 -429 -97 -33 c-176 -60 -334 -125 -503 -209 l-168 -83 -100 53 c-55 29 -154 82 -220 117 -66 36 -147 80 -180 98 -232 125 -441 239 -505 275 -41 22 -100 54 -131 70 l-57 29 -108 -101 c-60 -56 -315 -308 -568 -561 l-458 -460 54 -98 c30 -55 77 -139 103 -189 26 -49 62 -115 78 -145 17 -30 57 -103 89 -162 32 -60 86 -159 119 -220 34 -62 84 -156 112 -208 27 -52 56 -104 63 -115 8 -11 14 -26 14 -35 0 -8 -31 -76 -69 -150 -90 -176 -178 -385 -247 -587 -18 -50 -20 -52 -74 -68 -30 -10 -73 -23 -95 -30 -34 -11 -101 -31 -140 -41 -5 -2 -41 -12 -80 -24 -38 -12 -77 -23 -85 -25 -8 -2 -46 -13 -85 -25 -38 -12 -77 -23 -85 -25 -8 -2 -69 -20 -135 -40 -177 -53 -269 -81 -370 -110 -82 -24 -95 -31 -147 -83 l-57 -57 -1 -712 c0 -688 0 -713 19 -722 10 -6 56 -21 102 -35 46 -13 170 -50 274 -81 105 -31 197 -58 205 -60 8 -2 47 -14 85 -25 111 -34 154 -47 245 -73 113 -33 287 -85 326 -98 27 -8 34 -18 49 -67 79 -263 165 -482 275 -702 l68 -136 -52 -100 c-29 -54 -81 -151 -116 -214 -34 -63 -79 -146 -100 -185 -21 -38 -65 -119 -97 -180 -97 -177 -187 -344 -236 -436 l-46 -85 510 -510 509 -509 58 29 c31 17 91 49 132 71 82 46 409 224 535 291 44 24 134 72 200 109 66 36 152 82 191 102 l71 36 179 -90 c98 -50 240 -114 314 -143 74 -29 144 -56 155 -61 18 -7 175 -57 231 -74 14 -3 25 -19 32 -43 18 -63 66 -228 112 -377 11 -38 23 -77 25 -85 3 -13 70 -240 139 -470 13 -41 40 -132 61 -203 l38 -127 723 0 723 0 55 66 c31 36 56 68 57 72 1 13 8 37 29 107 12 39 23 77 25 85 2 8 13 47 25 85 12 39 23 77 25 85 2 8 13 44 24 80 11 36 63 211 116 390 53 179 100 332 105 340 4 8 48 28 97 44 156 50 363 137 548 229 l180 90 55 -29 c30 -16 118 -63 195 -105 125 -68 203 -110 445 -241 36 -20 119 -65 185 -100 66 -36 159 -86 206 -111 47 -26 92 -47 101 -47 18 0 1118 1103 1118 1122 0 7 -12 33 -26 58 -14 25 -45 81 -69 125 -23 44 -71 132 -105 195 -35 63 -138 255 -230 426 -93 170 -177 326 -189 345 -11 19 -21 41 -21 50 0 9 27 69 60 133 53 104 109 230 156 351 9 22 19 47 23 55 4 8 25 69 46 135 21 66 43 125 49 132 6 6 52 23 101 38 148 44 177 52 250 75 39 11 77 23 85 25 8 2 47 13 85 25 39 12 77 23 85 25 8 2 47 13 85 25 39 12 77 23 85 25 8 2 69 20 135 40 66 20 158 47 204 60 74 21 91 30 138 77 l53 52 0 722 0 722 -62 21 c-59 19 -325 98 -358 106 -8 2 -46 14 -85 25 -105 32 -151 46 -250 75 -49 15 -126 37 -170 50 -44 13 -118 35 -165 49 -47 13 -114 33 -150 45 l-65 20 -34 103 c-67 211 -195 507 -293 684 l-45 80 80 145 c43 79 99 182 124 229 57 106 223 413 360 665 24 44 51 95 60 113 l17 33 -499 499 c-275 275 -507 500 -515 500 -9 0 -24 -6 -35 -13 -11 -8 -58 -34 -105 -59 -90 -48 -253 -136 -447 -242 -65 -35 -145 -78 -178 -96 -92 -49 -169 -91 -302 -164 l-121 -66 -159 79 c-192 96 -331 153 -523 216 -80 26 -154 51 -166 55 -15 6 -26 29 -43 86 -33 117 -60 207 -161 544 -51 168 -102 341 -115 385 -13 44 -33 112 -45 150 -12 39 -23 78 -25 88 -2 9 -7 22 -10 27 -4 7 -260 10 -729 10 l-723 0 -49 -52z m981 -3342 c83 -16 89 -17 166 -35 248 -57 582 -231 789 -413 344 -302 557 -671 644 -1118 23 -119 27 -176 27 -362 0 -163 -9 -263 -30 -361 -6 -23 -13 -58 -16 -77 -13 -77 -89 -282 -150 -405 -178 -362 -407 -601 -735 -767 -355 -180 -750 -252 -1120 -203 -63 8 -126 17 -140 20 -14 3 -47 10 -75 16 -91 18 -310 97 -423 154 -560 280 -966 827 -1058 1425 -30 198 -30 501 1 650 3 14 8 41 11 60 31 174 128 426 228 593 120 200 230 324 406 456 216 163 515 302 745 346 73 14 203 35 240 39 83 9 412 -4 490 -18z" />
                            </g>
                        </svg>
                    </div>
                    <div className="tempVisualLog">{this.state.tempVisualLog}</div>
                </div>
                <div className={"settings-container " + (this.state.settingsOpen && "show-settings")}>
                    <div className={"settings-grid "}>
                        {Object.keys(this.state.settings).map((setting) => (
                            <div key={setting}>
                                {// TODO: make setting componant handle more than booleans
                                    (this.state.settings[setting] === true || this.state.settings[setting] === false) &&
                                    <>
                                        <input type="checkbox" id={'s-' + setting} checked={this.state.settings[setting]} onChange={this.handleSetting.bind(this, setting)} />
                                        <label htmlFor={'s-' + setting}>{setting}</label>
                                    </>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <svg style={{ display: "none" }}>
                <symbol id="callout" viewBox="0 0 30 30">
                    <g>
                        <path d="M 18,28 C 10,28 4,28 2,20 L 10,2 c 0,10 0,23 8,26 z"></path>
                    </g>
                </symbol>
            </svg>
            <svg height="20px" width="20px" style={{ display: "none" }}>
                <symbol id="expander" viewBox="0 0 10 10" >
                    <g>
                        <path d="m1 1 7 4-7 4z" />
                    </g>
                </symbol>
            </svg>
        </>);
    }
}

export default Menu;