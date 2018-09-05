/*eslint-disable no-console*/

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';


process.env.NODE_ENV  = 'production';
console.log(chalk.blue('generating minified bundle for production'));
webpack(webpackConfig).run((err,stats)=>  {
  if(err)
  {
    console.log(chalk.res(err));
    return 1;
  }

  const jsonStats=stats.toJson();

if(jsonStats.hasErrors) {
    return jsonSatas.errors.map(error =>  console.log(chalk.red(error)));
}

if(jsonStats.hasWarnings) {
  console.log(chalk.yellow('webpack generate the following warnings:'));
  jsonStats.warnings.map(warning  =>  console.log(chalk.yellow(warning)));
}

console.log(`WEB PACK:  ${stats}`);

console.log(chalk.green('YOUR APP HAS BEEN BUILT FOR PRODUCTION AND WRITTEN TO /DIST'));

  return 0;
});

