import '@material/mwc-button/mwc-button';
import '@material/mwc-top-app-bar-fixed/mwc-top-app-bar-fixed.js';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-icon-button/mwc-icon-button.js'

function CREATE_ELEMENT(name, object, params) {
    customElements.get(name) ||
    customElements.define(name, object, params);
}
import {StatefulComponent} from "./StatefulComponent/index.mjs";
import {PersonComponent} from "./PersonComponent/index.mjs";
import {BusParticipant} from "./Bus.mjs";
import {MarkdownComponent} from "./MarkdownComponent/index.mjs";
import {SidebarComponent} from "./SidebarComponent/index.mjs";
import {TopBarFixed} from "./TopBarFixedComponent/index.mjs";
import {SplashComponent} from "./SplashComponent/index.mjs";
import {MyDrawer} from "./MyDrawerComponent/index.mjs";


window.person = new BusParticipant();
window.person.subscribe((val)=>{
    console.log("Next");
});
window.person.send("Test");
document.onreadystatechange = function () {
    let state = document.readyState;
    if (state === 'complete') {
        console.log("loaded");
    }
};
// Make global instead of individual
CREATE_ELEMENT("jrg-drawer", MyDrawer, {});
CREATE_ELEMENT("jrg-stateful", StatefulComponent, {});
CREATE_ELEMENT("jrg-person", PersonComponent, {});
CREATE_ELEMENT('jrg-markdown', MarkdownComponent, {});
CREATE_ELEMENT('jrg-sidebar', SidebarComponent, {});
CREATE_ELEMENT('jrg-top-bar-fixed', TopBarFixed, {});
CREATE_ELEMENT('jrg-splash', SplashComponent, {});