
const http = require('http')
const port = 3000

const hostName = '127.0.0.1'

const server = http.createServer((req, res) =>{

    res.writeHead(202, {'Content-Type':'text/html'});

    res.write('<h1>This is your first server created</h1>')
    res.write('<h1>This is your first server created</h1>')
    res.write('<h1>This is your first server created</h1>')
    res.end()
});

server.listen(port, hostName, () =>{

    console.log(`Server is running successfully at http://${hostName}:${port}`)
})
 