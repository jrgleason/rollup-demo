import {StatefulElement} from "./StatefulElement";
import mustache from "mustache";

export class ShadowElement extends StatefulElement{
    constructor(stateConfig, template, mode = 'open'){
        super(stateConfig,template)
        this.mode = mode;
        this.attachShadow({mode});
        this.initialized = true
    }
    render(){
        if(!this.initialized) return; // TODO: Rethink for now just ignore changes until init
        if(!this.template) throw new Error("Cannot render because there is no template");
        this.shadowRoot.innerHTML = mustache.render(this.template, this.state);
        this?.postRender();
    }
}