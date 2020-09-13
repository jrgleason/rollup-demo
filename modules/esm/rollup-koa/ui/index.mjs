import {Button} from "@material/mwc-button";
import {StatefulComponent} from "./StatefulComponent/index.mjs";
import {ShadowStatefulComponent} from "./ShadowStatefulComponent/index.mjs";
import {CREATE_ELEMENT} from "@jrg-material/core";

// Make global instead of individual
CREATE_ELEMENT("jrg-stateful", StatefulComponent, {});
CREATE_ELEMENT("jrg-shadow", ShadowStatefulComponent, {});