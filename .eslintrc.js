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
        "no-param-reassign": 1
    }
}
