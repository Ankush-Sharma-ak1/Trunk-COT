"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function autobind(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
exports.autobind = autobind;
//# sourceMappingURL=autobind-decorator.js.map