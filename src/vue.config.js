const path = require('path');
const resolve = dir =>{
    return path.join(__dirname,dir);
}
const BASE_URL = process.env.NODE_ENV === 'production'?'/':'/';
module.exports={
    baseUrl:BASE_URL,
    outputDir:'dist',
    assetsDir:'',
    indexPath:'index.html',
    pages:undefined,
    productionSourceMap:false,
    chainWebpack:config=>{
        config.resolve.alias
        .set('@',resolve('src'))
        .set('_c',resolve('src/components'))
    },
    css:{
        modules:false,
        extract:true,
        sourceMap:false,
        loaderOptions:{}
    },
    devServer:{
        port:8080,
        proxy:'http://www.easy-mock.com'
    }
}