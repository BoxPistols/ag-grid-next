import { CacheProvider, cache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/lib/theme';

export const decorators = [
  (Story) => (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </CacheProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
