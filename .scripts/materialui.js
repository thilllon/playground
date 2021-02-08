const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'SomeComponent.jsx');
const fd = fs.openSync(dir, 'w+');
const data = fs.readFileSync(dir, { encoding: 'utf-8' });
data = data
  .split('\n')
  .map((line) => {
    // if()
  })
  .join('\n');
fs.writeFileSync(dir, data, { encoding: 'utf-8' });
