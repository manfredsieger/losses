module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "airbnb",
    "plugins": ["react"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "camelcase": 1,
        "no-param-reassign": 1,
        "no-unused-vars": 1,
        "import/no-dynamic-require": 1,
        "global-require": 1,
        "jsx-a11y/no-noninteractive-element-interactions": 1,
        "jsx-a11y/click-events-have-key-events": 1,
        "eol-last": 0,
        "max-len": [1, { "code": 120 }]
    }
}
