import {ShadowElement} from "../ShadowElement.mjs";
import template from "./component.html"
export class SidebarComponent extends ShadowElement {
    constructor() {
        super(template);
        this.render();
    }
}