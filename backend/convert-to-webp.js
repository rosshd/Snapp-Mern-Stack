import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = '../frontend/src/assets';
const outputDir = '../frontend/src/assets';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error reading input directory:', err);
        return;
    }

    files.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        if (ext === '.png') {
            const inputFile = path.join(inputDir, file);
            const outputFile = path.join(outputDir, path.basename(file, ext) + '.webp');

            sharp(inputFile)
                .toFormat('webp')
                .toFile(outputFile, (err, info) => {
                    if (err) {
                        console.error('Error converting file:', inputFile, err);
                    } else {
                        console.log('Converted', inputFile, 'to', outputFile);
                    }
                });
        }
    });
});
