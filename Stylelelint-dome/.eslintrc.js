module.exports = {
    root:true,
    parser: "babel-eslint",
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-console":[
          2,
          { "allow":["warn","info","error"]}
         ],
    }
};
