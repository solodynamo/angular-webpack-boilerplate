module.exports = {
 entry: ["./app/app.js"],
 output: {
   path: 'app/build',
   filename: "bundle.js"
 },
 module:{

loaders: [{test: /\.css$/, loader: 'style!css'}]
 
}
 

}