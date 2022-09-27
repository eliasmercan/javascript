const fs = require('fs')
const pdfParse = require('pdf-parse')

let extractPDF = async (file) => {
  let fileSync = fs.readFileSync(file)
  try {
    let Parse = await pdfParse(fileSync)
    console.log('Content: ', Parse.text)
    console.log('PDF pages: ', Parse.numpages)

    console.log('File content: ', Parse.info)
  } catch (e) {
    throw new Error(e)
  }
}

let pdfRead = './pdf/sample.pdf'
extractPDF(pdfRead)

