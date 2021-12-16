import EventHandler from "./EventHandler";


export default abstract class AbstractShareButton {

    clazz: string
    eventHandler: EventHandler;

    constructor(domEventHandler: EventHandler ,clazz: string) {
        this.clazz = clazz;
        this.eventHandler = domEventHandler ;
    }

    abstract createAction(): any;

    bind() {
        const action = this.createAction();

        this.eventHandler.addEventListenerToClass(this.clazz,'click', action);
    }
}