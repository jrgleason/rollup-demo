import {Drawer} from "@material/mwc-drawer";
import {css} from "lit-element";
export class MyDrawer extends Drawer{
    static get styles(){
        return [
            Drawer.styles,
            css`
            .mdc-drawer{
              border:0;!important;
            }
            `
        ]
    }
}