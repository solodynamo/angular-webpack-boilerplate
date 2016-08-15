module.exports = {
 entry: ["./app/app.js","./app/app.controller.js"],
 output: {
   path: 'app/build',
   filename: "bundle.js"
 },
 module:{

     loaders: [{ test: /\.scss$/, loader: 'style!css!sass' }, { test: /\.html$/, loader: 'raw' }]
 
}
 

}