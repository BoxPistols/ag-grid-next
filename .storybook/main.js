module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    // Setting Webpack5 base
    '@storybook/builder-webpack5',
    '@storybook/manager-webpack5',
    // Add Post CSS
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  // Setting Webpack5 base
  core: {
    builder: 'webpack5',
  },
  // for MUI with emotion
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/styled': '@emotion/styled/base',
    };
    return config;
  },
  framework: '@storybook/react',
};


