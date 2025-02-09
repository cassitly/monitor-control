const { pre, post } = require("./processor.js")
const { defineContext } = require('../config.yml.js');

/** Main Executor Function */
module.exports = async function execute(ast) {
    const context = defineContext();

    /** Process each node in the AST */
    for (const node of ast) {
        try {
            await pre(node, context);  
        } catch (error) {
            console.error(`Error processing node of type ${node.type}: ${error}`);
        }
    }

    /** Handle post-processing for collected functions and IfStatements */
    post(ast, context);
};