import { computedFrom } from "aurelia-framework";

export class Item {
    activate(context) {
        this.context = context;
        
        this.data = context.data;
        this.error = context.error;

        this.options = this.context.context.options;

        if (this.options.type !== 'SEWING') {
            this.readOnly = true;
        }
    }
}