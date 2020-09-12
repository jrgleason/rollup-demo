import {Button} from "@material/mwc-button/mwc-button";
import {CREATE_ELEMENT} from "@jrg-material/core";

export class MyButton extends Button{
    constructor(mode = 'open') {
        super();
        this.mode = mode;
        // TODO: Fix Shadow-DOM
        // this.attachShadow({mode});
    }
}
CREATE_ELEMENT("jrg-button", MyButton, {})
