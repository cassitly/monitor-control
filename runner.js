const parse = require("./src/parser.js");
const execute = require("./src/executor.js");

// Main Compiler Function
async function action(lines) {
    const main = parse(lines);
    await centralExecutor(main);
};

module.exports = async function run(content) {
    // Parse the output from the AI
    const lines = content.split("\n").map(line => line.trim());
    action(lines); // sends segmented lines to parse
};