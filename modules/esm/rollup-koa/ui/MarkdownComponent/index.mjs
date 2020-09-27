import marked from "marked";
import {ShadowElement} from "../ShadowElement.mjs";
export class MarkdownComponent extends ShadowElement{
    constructor() {
        super();
        this.githubUrl = this.getAttribute("server");
        // TODO: Allow bowser bar based url in GET param
        this.url = this.getAttribute("url");
        this.render();
    }
    get remoteUrl(){
        return this.githubUrl+this.url;
    }
    getMarkdown(){
        if(this.url) return new Promise(this.handleResponse.bind(this))
    }
    handleResponse(res){
        // TODO: Handle non-success
        const listener = function(){
            console.log(`Response text is ${this.responseText}`);
            res(this.responseText);
        }
        let oReq = new XMLHttpRequest();
        oReq.addEventListener("load", listener);
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
        console.log(`Getting ${this.href}`);
    }

    postRender(){
        if(this.wrapper){
            // It exists so lets remove it
            this.shadowRoot.removeChild(this.wrapper);
        }
        this.wrapper = document.createElement("div");
        this.wrapper.style.margin = "0 8px";
        return this.getMarkdown().then((md)=>{
            this.wrapper.innerHTML = marked(md);
            const links = this.wrapLinks();
            const refs = links.map((element)=> element?.href);
            refs.forEach((url)=>{
                console.log(`The url is ${url}`);
            })
            console.log(`There were ${links.length} links`);
            this.shadowRoot.append(this.wrapper);
        });
    }
}