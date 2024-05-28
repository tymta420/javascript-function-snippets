var regexp  = new RegExp('{{([^}]+)}}', 'g');
const isEven = (num) => num % 2 === 0;
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');