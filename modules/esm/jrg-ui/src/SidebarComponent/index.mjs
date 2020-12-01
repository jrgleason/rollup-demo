import {ShadowElement} from "../ShadowElement.mjs";
import template from "./component.html"
import style from "./style.css"
class ConfigurationService{
    constructor(url) {
        this.url = url;
    }
    getConfiguration(){
        return new Promise((res)=>{
            const listener = function(){
                res(JSON.parse(this.responseText));
            }
            let oReq = new XMLHttpRequest();
            oReq.addEventListener("load", listener);
            oReq.open("GET", this.url);
            oReq.send();
        })
    }
}
export class SidebarComponent extends ShadowElement {
    constructor() {
        super(template);
        this.open = true;
        // TODO: add default config
        this.service = new ConfigurationService(this.getAttribute("url"));
        this.service.getConfiguration().then((config)=>{
            this.config = config;
            this.pages = config.pages;
            this.render();
        });
    }

    onClick(){
        const server = this.getAttribute("server");
        const url = this.getAttribute("url");
        console.log(
            `Element was clicked \n ${server}`+
            `${url}`
        );
        console.log(`parent ${this.parentElement.nodeName} ${this.parentElement.parentElement.nodeName}`)
        // TODO: Something better than this.
        Array.from(this.parentElement.parentElement.querySelectorAll("jrg-markdown"))
            .map((element)=>{
                element.setAttribute("server", server);
                element.setAttribute("url", url);
                element.render();
            })
    }
    postRender(){
        this.items = Array.from(this.shadowRoot
            .querySelectorAll(".drawer-item"))
            .map((element)=>{
                element.addEventListener("click", this.onClick.bind(element));
                return element;
            });
        const sty = document.createElement("style");
        sty.innerHTML = style;
        this.shadowRoot.append(sty);
        document.onreadystatechange = this.onReady.bind(this);
        this.reformat();
        return Promise.resolve();
    }
    reformat(){
        Array.from(
            this.shadowRoot.querySelectorAll("mwc-drawer")
        ).forEach((drawerElement)=>{
            Array.from(
                drawerElement.shadowRoot.querySelectorAll(".mdc-drawer")
            ).forEach((element)=>{
                element.style.border = "0";
            })
        });
    }
    onReady(){
        let state = document.readyState;
        if (state === 'complete') {
            this.reformat();
        }
    }
}