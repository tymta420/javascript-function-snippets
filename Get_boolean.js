const intermediateAppPath = path.join(buildOutputPath, 'app');
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const results = await Promise.all(resultingPromises);