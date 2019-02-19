const fs = require('fs');
const path = require('path');
const {promisify} = require('util');
const sizeOf = promisify(require('image-size'));

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

function readdirAsync(path) {
  return new Promise(function(resolve, reject) {
    fs.readdir(path, function(error, result) {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

async function main() {
  const galleryPath = path.resolve('./assets/images/gallery');
  const items = await readdirAsync(galleryPath);

  const filePath = path.resolve('./assets/gallery.json');
  const json = [];

  await asyncForEach(items, async item => {
    if (['png', 'jpg', 'jpeg'].includes(item.split('.')[1].toLowerCase())) {
      const {width, height} = await sizeOf(`./assets/images/gallery/${item}`);

      json.push({
        src: item,
        width,
        height,
      });
    }
  });

  fs.writeFile(filePath, JSON.stringify(json, null, 2), err => {
    if (err) {
      console.log(err);
    } else {
      console.log('Gallery file written.');
    }
  });
}

main();
