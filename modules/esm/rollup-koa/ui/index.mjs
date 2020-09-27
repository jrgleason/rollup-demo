import {Button} from "@material/mwc-button";
import {TopAppBarFixed} from "@material/mwc-top-app-bar-fixed";
import {Drawer} from "@material/mwc-drawer";
function CREATE_ELEMENT(name, object, params) {
    customElements.get(name) ||
    customElements.define(name, object, params);
}
import {StatefulComponent} from "./StatefulComponent/index.mjs";
import {PersonComponent} from "./PersonComponent/index.mjs";
import {BusParticipant} from "./Bus.mjs";
import {MarkdownComponent} from "./MarkdownComponent/index.mjs";
import {SidebarComponent} from "./SidebarComponent/index.mjs";

window.person = new BusParticipant();
window.person.subscribe((val)=>{
    console.log("Next");
});
window.person.send("Test");

// Make global instead of individual
CREATE_ELEMENT("jrg-stateful", StatefulComponent, {});
CREATE_ELEMENT("jrg-person", PersonComponent, {});
CREATE_ELEMENT('jrg-markdown', MarkdownComponent, {});
CREATE_ELEMENT('jrg-sidebar', SidebarComponent, {});