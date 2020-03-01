"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Constants
const PORT = +process.env.PORT | 8080;
const HOST = '0.0.0.0';
let counter = 0;
// App
const app = express_1.default();
app.get('/', (req, res) => {
    const out = `request number = ${++counter}`;
    res.send(out);
    console.log(out);
});
app.listen(PORT);
console.log(`Running on http://:${PORT}`);
//# sourceMappingURL=index.js.map