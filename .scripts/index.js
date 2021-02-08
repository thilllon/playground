const fs = require('fs');
const path = require('path');
// const dir = path.join(__dirname, 'titleAndContents.txt');
// const outdir = path.join(__dirname, 'file1.txt');
// const lines = fs.readFileSync(dir, { encoding: 'utf-8' });
// let candies = lines
//   .split(' ')
//   .filter((elem) => elem.includes('��'))
//   .sort((a, b) => (a > b ? 1 : -1))
//   .filter((elem, idx, arr) => (idx > 0 ? arr[idx] !== arr[idx - 1] : true));
// let replaceList = [
//   ['90��', '90'],
//   ['He��s', "He's"],
//   ['can��t', "can't"],
//   ['doesn��t', "doesn't"],
//   ['don��t', "don't"],
//   ['hadn��t', "hadn't"],
//   ['isn��t', "isn't"],
//   ['it��s', "it's"],
//   ['man��s', "man's"],
//   ['other��s', "other's"],
//   ['partner��s', "partner's"],
//   ['she��s', "she's"],
//   ['that��s', "that's"],
//   ['woman��s', "woman's"],
//   ['won��t', "won't"],
//   ['you��re', "you're"],
//   // ['��mountain��.', '��mountain��.'],
// ];

// let newContents = replaceList.reduce(
//   (prv, cur) => prv.replaceAll(cur[0], cur[1]),
//   lines
// );
// // 100 Kamasutra sex positions
// console.info(newContents);

// const file1 = fs.openSync(outdir, 'w+');
// fs.writeSync(file1, newContents);
// ******************************
// ******************************
// ******************************

// const outdir2 = path.join(__dirname, 'file2.json');

// const file1 = fs.openSync(outdir, 'r+');
// const file2 = fs.openSync(outdir2, 'w+');
// const lines = fs.readFileSync(outdir, 'utf-8');
// const titles = [];
// const contentsList = [];
// lines.split('\n').forEach((elem, idx) => {
//   if (idx % 2 === 0) {
//     titles.push(elem);
//   } else {
//     contentsList.push(elem);
//   }
// });
// const obj = [];
// titles.forEach((title, idx) => {
//   title = title.trim();
//   const contents = contentsList[idx]?.trim();
//   obj.push({ title, contents });
// });
// console.info(obj);

// fs.writeFileSync(outdir2, JSON.stringify(obj), { encoding: 'utf-8' });
// ******************************
// ******************************
// ******************************

const outdir = path.join(__dirname, 'file3.json');

const k1 = require('./kohma.json');
const { cardData } = require('./kohma2.js');
const k = k1.map((elem, idx) => {
  return {
    id: idx + 1,
    fileName: cardData.fileName[idx],
    title: k1[idx].title.split('. ')[1].trim(),
    content: k1[idx].contents,
    url: cardData.url[idx],
  };
});
console.info(k);
fs.writeFileSync(outdir, JSON.stringify(k), { encoding: 'utf-8' });
