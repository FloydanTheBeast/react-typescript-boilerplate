const gulp = require('gulp')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

gulp.task('webpack', () => {
    const webpackConfig = require('./webpack.config.js')

    new WebpackDevServer(webpack(webpackConfig), {
            publicPath: webpackConfig.devServer.publicPath,
            historyApiFallback: webpackConfig.devServer.historyApiFallback,
            stats: {
                colors: true
            }
    }).listen(webpackConfig.devServer.port, 'localhost')
})

gulp.task('default', gulp.parallel('webpack'))