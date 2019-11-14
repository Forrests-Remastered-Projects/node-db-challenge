const server = require("./server");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3100;

server.listen(port, () => console.log(`Server running on ${port}`));
