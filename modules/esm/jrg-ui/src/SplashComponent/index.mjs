import {ShadowElement} from "../ShadowElement.mjs";
import template from "./component.html";
import style from "./style.css"

export class SplashComponent extends ShadowElement {
    constructor() {
        super(template);
        this.render();
    }
    postRender(){
        const sty = document.createElement("style");
        sty.innerHTML = style;
        this.shadowRoot.append(sty);
        return Promise.resolve();
    }
}