module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'prettier',
        'prettier/react'
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "parser": 'babel-eslint',
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
          'warn',
          {
            extensions: ['.js', '.jsx']
          }
        ],
        'import/prefer-default-export': 'off',
        'jsx-quotes': [
          'error',
          'prefer-single'
        ]
    }
}
