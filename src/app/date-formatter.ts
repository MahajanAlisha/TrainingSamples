import { DatePipe } from '@angular/common';

// Property Decorator
export function dateFormatter(): PropertyDecorator {
    return function (target: Object, key: string | symbol) {

        Object.defineProperty(target, key, {
            set: function (value) {
                console.log('date formatter steps in');
                target[key] = new DatePipe('en-US').transform(value, 'yyyy-mm-dd');
            },
            get: function () {
                return target[key];
            },
            enumerable: true,
            configurable: true,
        });
    };
}
