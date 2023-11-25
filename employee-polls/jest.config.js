/** @type {import('jest').Config} */
const config = {
    verbose: true,
    displayName: {
        name: 'CLIENT',
        color: 'red'
    },
    collectCoverage: true,
    testPathIgnorePatterns: ['./node_modules/'],
};

module.exports = config;
