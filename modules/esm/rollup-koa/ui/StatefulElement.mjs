
import mustache from "mustache"
import {createMachine, interpret} from "@xstate/fsm";

const BASIC_TOGGLE = {
    id: 'toggle',
    initial: "inactive",
    states: {
        inactive: { on: { TOGGLE: "active" } },
        active: { on: { TOGGLE: "inactive" } }
    }
}
class StatefulElement extends HTMLElement{
    constructor(config, template) {
        super();
        this.template = template;
        this.machine = createMachine(config);
        this.service = interpret(this.machine);
        this.service.start();
        this.service.subscribe(this.onChange.bind(this));
        this.state = this.service.state
    }
    onChange(state){
        this.state = state;
        this.render();
    }
    send(value){
        this.service.send(value);
    }
    render(){
        if(!this.template) throw new Error("Cannot render because there is no template");
        this.innerHTML = mustache.render(this.template, this.state);
        this?.postRender();
    }
}

export {BASIC_TOGGLE, StatefulElement}