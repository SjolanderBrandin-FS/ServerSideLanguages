var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");




http.createServer(function (req, res) {

    var parsed = url.parse(req.url);
    var filename = path.parse(parsed.pathname);
    if (filename.name == "") {
        fileN = "index";
    } else {
        fileN = filename.name;
    }

    fs.readFile(fileN + ".html", function (err, data) {


        res.writeHead(200); //header()
        res.write("<script>var name ='Brand';</script>");
        res.end(data);
    })

}).listen("8080")