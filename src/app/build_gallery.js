const fs = require('fs');
const path = require('path');

function main() {
  const galleryPath = path.resolve('./assets/images/gallery');

  fs.readdir(galleryPath, function(err, items) {
    const filePath = path.resolve('./assets/gallery.json');
    const json = [];

    for (let i = 0; i < items.length; i++) {
      if (['png', 'jpg', 'jpeg'].includes(items[i].split('.')[1].toLowerCase())) {
        json.push(items[i]);
      }
    }

    fs.writeFile(filePath, JSON.stringify(json, null, 2), err => {
      if (err) {
        console.log(err);
      } else {
        console.log('Gallery file written.');
      }
    });
  });
}

main();
