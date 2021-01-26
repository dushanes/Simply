const CracoLessPlugin = require("craco-antd");

module.exports = {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { 
                  //'radio-button-checked-bg': '#FCF7ED',
                  'radio-dot-color': '#BB9457',
                  'radio-border-width': '0px',
                  'radio-button-hover-color': '#BB9457-5',
                  'radio-button-active-color': '#BB9457-7',
                  'input-icon-color': '#BB9457',
                  'input-border-color': '#4B060E',
                  'btn-primary-bg': '#BB9457',
                  'layout-body-background': ' #f8f8ff',
                  'layout-footer-background': ' #4B060E',
                  'input-hover-border-color': '#BB9457',
                  'divider-color': '#BB9457',
                  'border-color-base': '#4B060E',
                  'card-radius': '3%'
                },
              javascriptEnabled: true,
            },
          },
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'eslint-loader',
              options: {
                // eslint options (if necessary)
              },
            },
          ],
        },
      },
    ],
  };