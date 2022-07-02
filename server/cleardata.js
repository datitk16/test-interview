var fs = require('fs');
fs.writeFileSync('server/data.json', JSON.stringify({}, null, 2));
