const PDFJS = require("./lib/pdf");
PDFJS.disableWorker = true;
module.exports = PDFJS;
