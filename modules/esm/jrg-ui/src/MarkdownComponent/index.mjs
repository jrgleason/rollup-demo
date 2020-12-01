import marked from "marked";
import {ShadowElement} from "../ShadowElement.mjs";
import style from "./style.css"
export class MarkdownComponent extends ShadowElement{
    constructor() {
        super();
        this.githubUrl = this.getAttribute("server");
        // TODO: Allow bowser bar based url in GET param
        this.url = this.getAttribute("url");
        this.render();
    }
    get remoteUrl(){
        return this.getAttribute("server")+
            this.getAttribute("url");
    }
    getMarkdown(){
        if(this.url) return new Promise(this.handleResponse.bind(this))
    }
    handleResponse(res){
        // TODO: Handle non-success
        let oReq = new XMLHttpRequest();
        oReq.addEventListener("load", function(){
            res(this.responseText);
        });
        oReq.open("GET", this.remoteUrl);
        oReq.send();
    }

    get links(){
        if(this.wrapper) return Array.from(
            this.wrapper.getElementsByTagName("a")
        );
    }

    get markdownLinks(){
        return this.links?.filter((link)=>
            link.href.toLowerCase().includes(window.location.href.toLowerCase()) &&
            link.href.toLowerCase().includes(".md")
        )
    }

    wrapLinks(){
        return this.markdownLinks.map(anchor=>{
            anchor.parent = this;
            anchor.addEventListener("click", this.onLinkClick.bind(anchor));
            return anchor;
        })
    }

    onLinkClick(e){
        e.preventDefault();
        this.parent.url = this.href.replace(window.location.href.toLowerCase(),'/');
        this.parent.setAttribute("url", this.parent.url);
        this.parent.render();
    }

    postRender(){
        if(this.wrapper){
            // It exists so lets remove it
            this.shadowRoot.removeChild(this.wrapper);
        }
        this.wrapper = document.createElement("article");
        this.wrapper.style.margin = "0 8px";
        this.wrapper.style.display = "flex";
        this.wrapper.style.flexDirection = "column";
        this.wrapper.className = "markdown-body";
        return this.getMarkdown().then((md)=>{
            this.wrapper.innerHTML = marked(md);
            this.wrapLinks();
            const sty = document.createElement("link");
            sty.setAttribute("rel", "stylesheet");
            sty.setAttribute('href',"https://unpkg.com/@jrg/github-markdown-css/github-markdown.css");
            const sty2 = document.createElement("style");
            sty2.innerHTML = style;
            this.shadowRoot.innerHTML = null;
            this.shadowRoot.append(this.wrapper);
            this.shadowRoot.append(sty);
            this.shadowRoot.append(sty2);
        });
    }
}