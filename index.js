let fs = require('fs'),
  PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
  fs.writeFile("./iatabash_gym.json", JSON.stringify(pdfData), function(err, result) {
    if(err) console.log('error', err);
  });
});

pdfParser.loadPDF("./itabashi_gym.pdf");
