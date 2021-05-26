/* eslint-disable no-undef */
(function () {
    let rootAddress = window.location.hostname !== "localhost" ? "https://reasonscore.com" : "";
    const scripts1 = [
        "https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js",
        "https://www.gstatic.com/firebasejs/7.3.0/firebase-auth.js",
        "https://www.gstatic.com/firebasejs/7.3.0/firebase-firestore.js",
    ]
    const scripts2 = [
        rootAddress + "/static/js/bundle.js",
        rootAddress + "/static/js/0.chunk.js",
        rootAddress + "/static/js/main.chunk.js",
    ]

    // default settings
    if (!window.RsSettings) {
        window.RsSettings = {
            disableExternalDb: false,
            numbers: true,
            largeNumbers: true,
            lines: false,
            editable: true,
            startClosed: false,
            portData: true,
            scoreDescription: false,
            saveToCloud: false,
            moreInfo: true,
        }
        window.RsSettings.dbCollection = "f-" + new URL(window.location.href).searchParams.get("i");

    }

    // Add Standard CSS
    const r = document.createElement('div')
    r.innerHTML = `<link href="${rootAddress}/static/css/main.chunk.css" rel="stylesheet">`;
    document.body.appendChild(r);

    // Run any code that requires Javascript to have already been loaded and run 
    onload1 = function () {
        // console.log("scripts1 done")
        // Firestore Setup
        if (!window.RsSettings || !window.RsSettings.disableExternalDb) {
            firebase.initializeApp({
                apiKey: "AIzaSyBmu9Lhj9Stp8dhamvCA4oi16o_jU4qnQM",
                authDomain: "reason-score.firebaseapp.com",
                databaseURL: "https://reason-score.firebaseio.com",
                projectId: "reason-score",
                storageBucket: "reason-score.appspot.com",
                messagingSenderId: "403624872089",
                appId: "1:403624872089:web:5d9685888a79f58ebe5008"
            });

            //Add Firestore to the global for the page so it can be accessed by other objects on the page
            window.RsDatabase = firebase
                .firestore()
                .collection("beta01")
        }

        // React Script: I hope this doesn't change.

        // eslint-disable-next-line
        !function (e) { function r(r) { for (var n, i, l = r[0], f = r[1], a = r[2], c = 0, s = []; c < l.length; c++)i = l[c], Object.prototype.hasOwnProperty.call(o, i) && o[i] && s.push(o[i][0]), o[i] = 0; for (n in f) Object.prototype.hasOwnProperty.call(f, n) && (e[n] = f[n]); for (p && p(r); s.length;)s.shift()(); return u.push.apply(u, a || []), t() } function t() { for (var e, r = 0; r < u.length; r++) { for (var t = u[r], n = !0, l = 1; l < t.length; l++) { var f = t[l]; 0 !== o[f] && (n = !1) } n && (u.splice(r--, 1), e = i(i.s = t[0])) } return e } var n = {}, o = { 1: 0 }, u = []; function i(r) { if (n[r]) return n[r].exports; var t = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(t.exports, t, t.exports, i), t.l = !0, t.exports } i.m = e, i.c = n, i.d = function (e, r, t) { i.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t }) }, i.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, i.t = function (e, r) { if (1 & r && (e = i(e)), 8 & r) return e; if (4 & r && "object" == typeof e && e && e.__esModule) return e; var t = Object.create(null); if (i.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) i.d(t, n, function (r) { return e[r] }.bind(null, n)); return t }, i.n = function (e) { var r = e && e.__esModule ? function () { return e.default } : function () { return e }; return i.d(r, "a", r), r }, i.o = function (e, r) { return Object.prototype.hasOwnProperty.call(e, r) }, i.p = "/"; var l = this.webpackJsonpeditor = this.webpackJsonpeditor || [], f = l.push.bind(l); l.push = r, l = l.slice(); for (var a = 0; a < l.length; a++)r(l[a]); var p = f; t() }([])

        if (window.location.hostname !== "localhost" ||
            (window.location.hostname === "localhost" && window.location.pathname.length > 1)) { //If it is the home page on local host then there is no need to load therse scripts as they ate included by React
            let lastScriptElement2
            for (const scriptName of scripts2) {
                lastScriptElement2 = document.createElement('script')
                lastScriptElement2.src = scriptName
                lastScriptElement2.async = false;
                document.body.appendChild(lastScriptElement2);
            }
            lastScriptElement2.onload = function () {
                window.rsStartApp(); //Start React App
            }
        } else {
            window.rsStartApp(); //Start React App
        }
    }


    //append first batch of scripts (listed out of order)
    // TODO: Correct order of these scripts
    let lastScriptElement;
    if (window.RsSettings.disableExternalDb) {
        onload1();
    } else {
        for (const scriptName of scripts1) {
            lastScriptElement = document.createElement('script')
            lastScriptElement.src = scriptName
            lastScriptElement.async = false;
            document.body.appendChild(lastScriptElement);
        }
        lastScriptElement.onload = onload1
    }
})();