"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
Object.defineProperty(exports, "__esModule", { value: true });
let Demo = (() => {
    let _classDecorators = [ClassDec];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _set_surname_decorators;
    let _exec_decorators;
    var Demo = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [FieldDec];
            _set_surname_decorators = [isString];
            _exec_decorators = [Max(10)];
            __esDecorate(this, null, _set_surname_decorators, { kind: "setter", name: "surname", static: false, private: false, access: { has: obj => "surname" in obj, set: (obj, value) => { obj.surname = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _exec_decorators, { kind: "method", name: "exec", static: false, private: false, access: { has: obj => "exec" in obj, get: obj => obj.exec }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Demo = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        name = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, 'test'));
        _surname = __runInitializers(this, _name_extraInitializers);
        set surname(value) {
            this._surname = value;
        }
        exec(a) {
            console.log(a);
        }
    };
    return Demo = _classThis;
})();
function ClassDec(target, context) {
    console.log('Init class');
}
function FieldDec(target, context) {
    console.log('Init field');
    return function (value) {
        console.log('Init field function');
        return value;
    };
}
function isString(target, context) {
    console.log('Init setter decorator');
    console.log(context);
    context.addInitializer(() => {
        console.log('Initializer');
    });
    return function (value) {
        if (typeof value !== 'string') {
            throw new Error('Значение должно быть строкой');
        }
        target.call(this, value);
    };
}
function methodDec(target, context) {
    console.log('Init method');
    return function (...args) {
        const res = target.call(this, ...args);
        return res;
    };
}
function Max(num) {
    return function (target, context) {
        return function (...args) {
            if (args[0] > num) {
                throw new Error(`Значение больше ${num}`);
            }
            const res = target.call(this, ...args);
            return res;
        };
    };
}
const demo = new Demo();
demo.exec(1);
// demo.exec(11)
//demo.surname = 1 as unknown as string
//# sourceMappingURL=app.js.map