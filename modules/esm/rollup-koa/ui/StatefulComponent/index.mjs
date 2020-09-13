import {BASIC_TOGGLE, StatefulElement} from "../StatefulElement";
import {CREATE_ELEMENT} from "@jrg-material/core";
import template from "./component.html"

export class StatefulComponent extends StatefulElement{
    constructor() {
        super(BASIC_TOGGLE, template);
        this.render();
    }
    postRender(){
        const toggleButtons = this.getElementsByClassName("toggle-btn");
        for (let i = 0; i < toggleButtons.length; i++) {
            toggleButtons[i].onclick = this.toggle.bind(this);
        }
    }
    toggle(){
        this.send("TOGGLE");
    }
}