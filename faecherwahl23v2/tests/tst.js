function draw_text_to_pdf(name, location_x, location_y, firstPage, helveticaFont, rgb) {
    firstPage.drawText(name, {
        x: location_x,
        y: location_y,
        size: 10,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    })
}
var PDFDocument = PDFLib.PDFDocument
var rgb = PDFLib.rgb
var StandardFonts = PDFLib.StandardFonts
var degrees = PDFLib.degrees
var firstname = 'Hallo'
var lastname =  'Welt'

async function modifyPdf() {
    const url = 'Hi.pdf'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const {
        width,
        height
    } = firstPage.getSize()

    draw_text_to_pdf(firstname, 135, height - 80, firstPage, helveticaFont, rgb)
    draw_text_to_pdf(lastname, 320, height - 80, firstPage, helveticaFont, rgb)

    const pdfBytes = await pdfDoc.save()
    download(pdfBytes, "Wahlen_QP_" + firstname + "_" + lastname + ".pdf", "application/pdf")
}