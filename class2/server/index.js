const express = require('express')

const app = express()

const courses = [
    { course_id: 1, name: "Course 1", instructor: "Instructor 1" },
    { course_id: 2, name: "Course 2", instructor: "Instructor 2" },
    { course_id: 3, name: "Course 3", instructor: "Instructor 3" }
]

app.get('/', (req, res) =>{
    res.send("Home Page")
})

app.get('/courses', (req, res) =>{
    res.send(courses)
})

app.get('/courses/:course_id', (req, res) =>{
    console.log(req.params)
    let course = courses.find((course) => course.course_id === parseInt(req.params.course_id))
    res.send(course)
})

// app.post()

// app.put()

// app.delete()

app.listen(8000, () => {
    console.log("Server Started")
})
