const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'August' : './javascript/August.js',
	'addEmployee' : './javascript/addEmployee.js',
	'addAugust' : './javascript/addAugust.js',
	'editAugust' : './javascript/editAugust.js',
	'editEmployee' : './javascript/editEmployee.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};