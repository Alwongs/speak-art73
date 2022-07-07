module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/speak-art73/" : "/",
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "@/assets/styles.scss";'
            }
        }
    }
}