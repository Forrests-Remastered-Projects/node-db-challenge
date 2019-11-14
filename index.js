const server = require("./server");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3100;

server.listen(PORT, () => console.log(`Server running on ${port}`));
