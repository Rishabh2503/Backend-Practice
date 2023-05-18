// npm - global command ,comes with Node
// npm --version
// local dependency - use it only in the particular project 
// npm i <packageName>
// global dependency - use it any project
// npm install -g <packageName>
// sudo npm install -g <packageName>


// package.json - manifest file (store important info about project/package)
// manual approch (create package.json in the root, create properties etc)
// npm init










// const http = require('http');
// const { version } = require('os');

// const server = http.createServer((req,res) => {
//           if(req.url === '/'){
//             res.end('Welcome to our home page')
//           }  
//           if(req.url === '/about'){
//             res.end('Here is our short history')
//           }
// res.end(`
//           <h1>Oops!</h1>
//           <p>We can't seem to find the page you are looking for</p>
//           <a href="/">back home</a>
//           `)
// })
// server.listen(5000)

const _ = require("lodash")

const item = [1,[2,[3,[4]]]]
const newitems = _.flattenDeep(item)
console.log(newitems)
