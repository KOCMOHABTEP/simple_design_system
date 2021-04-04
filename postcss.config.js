module.exports = ({ env }) => ({
    "plugins": [
        "postcss-flexbugs-fixes",
        [
            "postcss-preset-env",
            {
                "autoprefixer": {
                    "flexbox": "no-2009"
                },
                "stage": 3,
                "features": {
                    "nesting-rules": true,
                    "custom-properties": {
                        "importFrom": "./src/styles/vars.css",
                        "preserve": false
                    }
                }
            }
        ]
    ]
})