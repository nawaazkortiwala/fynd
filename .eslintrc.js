module.exports = {
    extends: 'react-app',
    settings: {
        'import/resolver': {
            node: {
                paths: ['./'],
            },
        },
    },
    rules: {
        'react-hooks/rules-of-hooks': 'warn',
    },
}
