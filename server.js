const express = require('express')
const app = express()

const PORT = 5000

app.use(express.static('public'));

app.set("port", process.env.PORT || PORT)

var server = app.listen(app.get("port"), function () {
  console.log(`Server running at port ${server.address().port}...`)
})

var routes = require('./src/routes/fileAPI.routes.js')(app)
