// // const path = require('path');

// module.exports = {
// //   chainWebpack: (config) => {
// //     config.resolve.alias.set('@element', path.resolve(__dirname, 'src/components/element'));
// //   },
//   configureWebpack: {
//     resolve: {
//       alisa: {
//         '@/element': '@/components/element',
//       },
//     },
//   },
// };
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@element', resolve('src/components/element'));
  },
};
