const express = require('express');
const app = express();
const vision = require('@google-cloud/vision');

app.listen(5000, '127.0.0.1', () => console.log('Server running'));

// Creates a client https://googleapis.dev/nodejs/vision/latest/
const client = new vision.ImageAnnotatorClient({
    keyFilename: 'OCRKEY.json'
  });
  
  // Performs label detection on the image file
  client
    .labelDetection('dog.jpg')
    .then(results => {
      const labels = results[0].labelAnnotations;
  
      console.log('Labels:');
      labels.forEach(label => console.log(label));
      //console.log(results);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  
  app.listen(8080, '127.0.0.1', () => console.log('Server running'));
