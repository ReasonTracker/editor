import React from 'react';
import './BucketElement.scss';

type MyProps = {
    percentage: number,
};



class EditorElement extends React.Component<MyProps> {

    constructor(props: MyProps) {
        super(props);
    }

    render() {
        let p = this.props.percentage;
        if (p>0 && p<4) p=4;
        if (p>95) p=95;
        return (
            <>
                <div className="rs-bucket">
                    <div className="rs-bucket-fill" style={{height: `${p}%`}}></div>
                </div>
            </>
        );
    }
}

export default EditorElement;