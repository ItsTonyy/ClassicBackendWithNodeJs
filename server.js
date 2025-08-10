"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`backend is running on port ${port}`));
app.get('/', (req, res) => {
    console.log('I hit the endpoint', req.method);
    res.status(200);
});
console.log('teste');
//# sourceMappingURL=server.js.map