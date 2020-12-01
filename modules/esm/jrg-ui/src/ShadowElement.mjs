import "tailwindcss/tailwind.css"
import mustache from "mustache";
import style from "./SplashComponent/style.css";

export class ShadowElement extends HTMLElement{
    constructor(template, style, mode = 'open'){
        super();
        this.mode = mode;
        this.template = template;
        this.style = style;
        this.attachShadow({mode});
        this.initialized = true
        this.style.display="none"
    }
    render(){
        if(!this.initialized) return; // TODO: Rethink for now just ignore changes until init
        // if(!this.template) throw new Error("Cannot render because there is no template");
        if(this.template) this.shadowRoot.innerHTML = mustache.render(this.template, this);
        // if(this.style) this.renderStyle();
        if(this.postRender) this.postRender().then(()=>this.initialize());
        else this.initialize();
    }
    renderStyle(){
        const sty = document.createElement("style");
        sty.innerHTML = style;
        this.shadowRoot.append(sty);
    }
    initialize(){
        this.style.display="initial"
    }
}