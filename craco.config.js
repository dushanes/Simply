const CracoLessPlugin = require("craco-antd");

module.exports = {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { 
                  '@primary-color': '#1DA57A',
                  '@heading-color': '#1DA57A'

                },
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
  };