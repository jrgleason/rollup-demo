import {StatefulElement} from "./StatefulElement";
import mustache from "mustache";

export class ShadowElement extends HTMLElement{
    constructor(template, mode = 'open'){
        super();
        this.mode = mode;
        this.template = template;
        this.attachShadow({mode});
        this.initialized = true
    }
    render(){
        if(!this.initialized) return; // TODO: Rethink for now just ignore changes until init
        // if(!this.template) throw new Error("Cannot render because there is no template");
        if(this.template) this.shadowRoot.innerHTML = mustache.render(this.template, this.state);
        this?.postRender();
    }
}