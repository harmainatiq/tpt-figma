const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/Images';
const outputDir = 'public/compressed-images';

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}

const images = ['Group 63.png', 'Group 69.png']; 

images.forEach(image => {
    const inputFile = path.join(inputDir, image);
    const outputFile = path.join(outputDir, image);

    sharp(inputFile)
      .png({ quality: 80 })
      .toFile(outputFile)
      .then(() => {
        console.log(`Compressed ${image} successfully`);
      })
      .catch(err => {
        console.error(`Error compressing ${image}:`, err);
      });
});
