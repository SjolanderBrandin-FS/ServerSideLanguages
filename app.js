
var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");


http.createServer(function (req, res) {

    var parsed = url.parse(req.url);
    var filename = path.parse(parsed.pathname);

    filen = filename.name || "" + "index"; filename.name;
    ext = filename.ext || "" + ".html"; filename.ext;
    dir = filename.dir == "/" + ""; filename.dir + "/";
    page = filename.name || "" + "index.html"; filename.name;

    console.log(">>>>>>>>>>>>>>>>>>> ", dir, filen, ext);

    f = (dir + filen + ext).toString().replace("/", "");


    var mimeTypes = {
        'html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'text/png',
        '.jpg': 'text/jpg',
        '.gif': 'text/gif',
    };

    if (f) {
        fs.readFile(f, function (err, data) {
            //console.log(err);
            if (page) {
                if (mimeTypes.hasOwnProperty(ext)) {
                    res.writeHead(200, { 'Content-Type': 'text/html' }); //header()
                    res.write("<script>var page=" + 'utf8' + ";</script>");
                    res.write("<script>var page=" + f + ";</srcipt>");
                    res.end(data);

                }
            }
        })
    }



}).listen("8080", function (err) {
    console.log("info", 'Server is a port : ' + 8080);
    console.log(err);
})