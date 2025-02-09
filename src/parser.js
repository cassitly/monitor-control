/** CENTRALIZED PARSER */
module.exports = function parse(lines) {
    return lines
        .filter(line => line.trim() && !line.startsWith("#")) // Ignore empty lines and comments
        .map(line => {
            
            /** TEMPLATE DEFAULT */
            if (line.startsWith("@empty")) {
                /**
                 * @description This is a default template
                 * @empty <value>
                 * @example
                 * @empty Hello
                 */
                return { type: "Default Example", value: line.match(/@empty (.*)/) };
            }
            
            /** GENERIC STATEMENTS */
            else {
                // Handle generic statements
                return { type: "Generic", content: line };
            }
        });
};