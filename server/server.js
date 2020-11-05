"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.set('view engine', 'html');
app.use(express_1.default.static(__dirname + '/views/'));
app.get('/', (__req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'views', 'index.html'));
});
app.post('/api/sql', (req, res) => {
    let { people: AllSimpsons, places: AllPlaces } = req.body;
    const simpsons = {
        people: AllSimpsons, places: AllPlaces
    };
    console.log(AllSimpsons);
    console.log(AllPlaces);
    res.send(AllSimpsons);
});
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);
module.exports = app;
//# sourceMappingURL=server.js.map