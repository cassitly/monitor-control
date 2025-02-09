// Set your defined configuration here.
function defineContext() {
    const context = {}; // Create the context
    return context; // Return the context
}

function defineConfig() {
    const config = { modules: { api_plugin: "./packages/api-plugin/config.yml.js" } } // Create the configuration
    return config; // Returns the configuration settings
}

// WIP: This is not finished
function defineModules() {
    const modules = [ "api-plugin.module" ] // Registers the modules
    return modules; // Returns the modules directories && settings
}

module.exports = { defineContext, defineConfig, defineModules };