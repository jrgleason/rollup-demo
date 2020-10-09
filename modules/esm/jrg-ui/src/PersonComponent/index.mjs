import {ShadowElement} from "../ShadowElement.mjs";
import template from "./component.html"

class PersonService {
    constructor(onResult){
        let xhttp = new XMLHttpRequest();
        xhttp.addEventListener("load", function(){
            if (this.readyState === 4 && this.status === 200) {
                // Typical action to be performed when the document is ready:
                onResult(null, xhttp.responseText);
            } else {
                onResult("There was an error with the http request");
            }
        });
        xhttp.open("GET", "/db");
        xhttp.send();
    }
}
class PersonComponent extends ShadowElement{
    constructor() {
        super(template);
        this.service = new PersonService(this.onResult.bind(this));
        this.render();
    }
    onResult(err, results){
        if(err){
            // TOO: Show the error on the component
            console.log(`There was an error onResults ${err}`);
            return;
        }else{
            this.onChange({
                people: JSON.parse(results)
            })
        }

    }
    postRender(){
    }
}
export {PersonComponent}