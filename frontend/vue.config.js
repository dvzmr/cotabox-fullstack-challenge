const {defineConfig} = require('@vue/cli-service')
const webpack = require('webpack');

module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000/participants', // Replace with your API URL
                changeOrigin: true, // Ensures the origin header is rewritten
                pathRewrite: {
                    '^/api': '' // Removes /api from the request path
                }
            }
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                // Vue CLI is in maintenance mode, and probably won't merge my PR to fix this in their tooling
                // https://github.com/vuejs/vue-cli/pull/7443
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
            })
        ],
    },
});


