const multer = require('multer')
const uploadDirectory = multer({dest: "../uploads/"})
const path = require('path')

var routes = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../views/home.html'))
  })

  app.post("/post-file/", uploadDirectory.single("input-file"), function(req, res) {
    res.json({"size": req.file.size})
  })
}

module.exports = routes
