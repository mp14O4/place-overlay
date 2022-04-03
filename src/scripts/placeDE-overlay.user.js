// ==UserScript==
// @name         r/placeDE Template
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the canvas!
// @author       mp1404
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/mp14O4/place-overlay/raw/main/src/scripts/overlay.js
// @downloadURL  https://github.com/mp14O4/place-overlay/raw/main/src/scripts/overlay.js
// ==/UserScript==
let url = "https://raw.githubusercontent.com/placeDE/pixel/main/overlay.png"
//url = "https://i.imgur.com/0fRq2nu.png"
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = url;
                i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
                return i;
            })())
    }, false);
}
