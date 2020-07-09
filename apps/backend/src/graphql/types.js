const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs } = require('@graphql-tools/merge')

const typesArray = loadFilesSync(path(__dirname, './**/*.graphql'))

module.exports = mergeTypeDefs(typesArray, { all: true })
