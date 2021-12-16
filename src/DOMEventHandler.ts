// classe que lida com eventos em no DOM
import EventHandler from "./EventHandler";

export class DOMEventHandler implements EventHandler {
    addEventListenerToClass(clazz: string, event: string, fn: any ) {
        const elements: any  = document.querySelectorAll(clazz);

        for (const element of elements) {
            element.addEventListener(event, fn);
        }
    }
}