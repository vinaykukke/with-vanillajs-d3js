const webpack = require('webpack');
const config = require('./webpack.config');

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(err);
    console.log(stats.hasErrors());
    console.log(stats.toString({ colors: true }));
    return;
  }

  console.log(stats.toString({ colors: true, exclude: ['~'], maxModules: 5 }));
});