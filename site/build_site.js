var fs = require('fs')
  , marked = require('marked')
  , mote = require('../mote')
  , about = marked(fs.readFileSync(__dirname + '/about.md', 'utf8'))
  , docs = marked(fs.readFileSync(__dirname + '/docs.md', 'utf8'))
  , index = fs.readFileSync(__dirname + '/index.html.mote', 'utf8')
  , templates = fs.readFileSync(__dirname + '/templates.html', 'utf8');

index = mote.compile(index);
about = mote.compilePartial('about', about);
docs = mote.compilePartial('docs', docs);
templates = mote.compilePartial('templates', templates);

fs.writeFileSync(
  __dirname.replace(/\w+$/, '') + 'index.html',
  index()
);

