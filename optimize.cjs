const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'src/assets/images');

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (fullPath.match(/\.(jpg|jpeg|png)$/i)) {
      console.log(`Optimizing: ${fullPath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
      
      try {
        const buffer = await fs.promises.readFile(fullPath);
        let optimizedBuffer;
        
        if (fullPath.match(/\.png$/i)) {
          optimizedBuffer = await sharp(buffer)
            .png({ quality: 80, compressionLevel: 9 })
            .toBuffer();
        } else {
          optimizedBuffer = await sharp(buffer)
            .jpeg({ quality: 75, mozjpeg: true })
            .toBuffer();
        }
        
        await fs.promises.writeFile(fullPath, optimizedBuffer);
        
        const newStat = fs.statSync(fullPath);
        console.log(`-> Reduced to: ${(newStat.size / 1024 / 1024).toFixed(2)} MB`);
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err);
      }
    }
  }
}

processDirectory(dir).then(() => console.log('Optimization complete.'));
