const sharp = require('sharp');
const path = require('path');


const images = [
  {
    input: 'public/compressed-images/Group 63.png',
    output: 'public/compressed-images/Group 63.webp'
  },
  {
    input: 'public/compressed-images/Group 69.png',
    output: 'public/compressed-images/Group 69.webp'
  },
];

images.forEach(({ input, output }) => {
  const inputPath = path.join(__dirname, input);
  const outputPath = path.join(__dirname, output);

  sharp(inputPath)
    .toFormat('webp')
    .toFile(outputPath, (err, info) => {
      if (err) {
        console.error(`Error converting ${input} to WebP:`, err);
      } else {
        console.log(`Image ${input} converted successfully to ${output}:`, info);
      }
    });
});
