module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({ autoprefixer: false }),
        require('postcss-pxtorem')({
            rootValue: '16',
            replace: 'false',
            propWhiteList: [],
            selectorBlackList: [':before', ':after', '::before', '::after']
        })
    ]
}
