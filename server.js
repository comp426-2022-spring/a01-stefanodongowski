// Require http module
const http = require('http')

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/html')


//     res.end('./www/index.html')
// })

const args = require('minimist')(process.argv.slice(2))
args['port'] //joe

const server = http.createServer(function (req, res) {
    const fs = require('fs')

    fs.readFile('./www/index.html', function (err, data) {
        //step 3
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
});

const fs = require('fs')



const port = args.port || process.env.PORT || 3000

fs.readFile('./www/index.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
        process.exit(1)
    }


    server.listen(port, () => {
        console.log(`Server running at port ${port}`)
    })

})