/** Function to process individual AST nodes */
function pre(node, context) {
    switch (node.type) {
        /** Music handling */
        case "Default Example":
            /** Do nothing */
            break;
            
        /** Generic handling */
        case "Generic":
            console.log("Generic: \n", node);
            break;

        default:
            console.log(`Unknown node type: ${node.type}`);
            break;
    }
};

/** Post-process the AST */
function post(ast, context) {
    const {} = context; // Provide the context

    ast.forEach((node) => {
        if (node.type) {
            // Process the node (EMPTY)
        }
        // Unknown Generations
        else {
            // Handle unknown node types
            if (node.type === "Generic") return false;
            console.log("Unknown node type:", node.type);
        }
    });
};

module.exports = { post, pre };