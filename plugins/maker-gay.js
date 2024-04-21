const { create, decryptMedia } = require('@open-wa/wa-automate');
const fs = require('fs');

create().then((client) => start(client));

async function start(client) {
  client.onMessage(async (message) => {
    const command = message.body.toLowerCase();
    
    // Log the received message for debugging
    console.log('Received message:', message.body);

    if (command === '!sendpdf') {
      try {
        // Get the PDF file path
        const pdfFilePath = './pdf/Forget_me_not_.pdf';

        // Log the file path for debugging
        console.log('PDF file path:', pdfFilePath);

        // Read the PDF file
        const pdfData = fs.readFileSync(pdfFilePath);

        // Send the PDF
        await client.sendDocument(message.from, pdfData, {
          mimetype: 'application/pdf',
          filename: 'error.pdf',
        });

        // Log a success message for debugging
        console.log('PDF sent successfully');
      } catch (error) {
        console.error('Error sending PDF:', error);
      }
    }
  });
}
