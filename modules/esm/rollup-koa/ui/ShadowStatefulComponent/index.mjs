import {ShadowElement} from "../ShadowElement.mjs";
import template from "./component.html"
import {BASIC_TOGGLE} from "../StatefulElement";

export class ShadowStatefulComponent extends ShadowElement{
    constructor() {
        super(BASIC_TOGGLE, template);
        this.render();
    }
    postRender(){
        const toggleButtons = this.shadowRoot.querySelectorAll(".toggle-btn");
        for (let i = 0; i < toggleButtons.length; i++) {
            toggleButtons[i].onclick = this.toggle.bind(this);
        }
    }
    toggle(){
        this.send("TOGGLE");
    }
}