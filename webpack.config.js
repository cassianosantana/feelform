module.exports = {
  entry:'./main.js',
  output:{
    path:'./',
    fileName:'index.js'
  },
  devServer:{
    inline:true,
    port:2112
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel',
        query:{
          presets:['es2015', 'react']
        }

    }
  ]
  }
}
