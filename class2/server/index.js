const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.send("Home Page")
})

// app.post()

// app.put()

// app.delete()

app.listen(8000, () => {
    console.log("Server Started")
})
