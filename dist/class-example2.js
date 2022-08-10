"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestClass2 = void 0;
const Component = (options) => {
    return (target) => {
        target.id = options.id;
    };
};
let TestClass2 = class TestClass2 {
};
TestClass2 = __decorate([
    Component({
        id: "Hello world",
    })
], TestClass2);
exports.TestClass2 = TestClass2;
//# sourceMappingURL=class-example2.js.map