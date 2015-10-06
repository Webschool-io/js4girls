var markdownpdf = require("markdown-pdf")
  , fs = require("fs");

fs.createReadStream("./etapa-1/apostila.md")
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream("./etapa-1/apostila.pdf"))
 

// markdownpdf()
// .from("./etapa-1/apostila.md")
// .to("/etapa-1/apostila.pdf", function () {
//   console.log("Apostila criada <3 em /etapa-1/apostila.pdf")
// });