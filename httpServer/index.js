const http = reqire('http')

const myServer = http.createServer((req, res) => {
    console.log('Req made')
    console.log(req)
    console.timeLog('This is my server')
})

myServer.listen(8001, () => {
    console.log('Server is listening on port 8001')
})