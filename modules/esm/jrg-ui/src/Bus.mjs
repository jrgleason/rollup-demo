import {Observable} from "rxjs";
class BusParticipant{
    constructor() {
        this.observable = new Observable(subscriber=>{
            this.subscriber = subscriber;
        });
    }
    send(msg){
        this.subscriber.next(msg);
    }
    subscribe(next){
        this.observable.subscribe({
            next
        })
    }
}
class Bus{
    // constructor() {
    //     this.channels = {};
    // }
    // onObservation(subscriber){
    //     console.log("I saw something!");
    //     this.subscriber = subscriber;
    // }
    // observer(name, value){
    //     const channel = this.createChannel(name);
    // }
    // createChannel(name){
    //     if(!this.channels[name]){
    //         this.channels[name] = new Observable(this.onObservation.bind(this));
    //     }
    //     return this.channels[name]
    // }
}

export {BusParticipant}