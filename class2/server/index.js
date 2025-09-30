const express = require('express')

const app = express()
app.use(express.json())

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
    res.status(200).send('courses retrieved')
})

app.get('/courses/:course_id', (req, res) =>{
    console.log(req.params)
    let course = courses.find((course) => course.course_id === parseInt(req.params.course_id))
    if(!course) return res.status(404).send('course not found')
    res.send(course)
    res.status(200).send('course retrieved')
})

app.post('/courses', (req, res) =>{
    // let course = req.body
    let course = {
        course_id: req.body.course_id,
        name: req.body.name,
        instructor: req.body.instructor
    }
    courses.push(course)
    res.status(201).send('course created')
})

app.put('/courses/:course_id', (req, res) =>{
    let course = courses.find((course) => course.course_id === parseInt(req.params.course_id))
    if(!course) return res.status(404).send('course not found')

    course.name = req.body.name
    course.instructor = req.body.instructor
    res.status(200).send('course updated')
})

app.delete('/courses/:course_id', (req, res) =>{
    let course = courses.find((course) => course.course_id === parseInt(req.params.course_id))
    if(!course) return res.status(404).send('course not found')

    courses = courses.filter((course) => course.course_id !== parseInt(req.params.course_id))
    res.status(200).send('course deleted')
})

app.listen(8000, () => {
    console.log("Server Started")
})
