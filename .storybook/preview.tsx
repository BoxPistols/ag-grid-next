import React from 'react'
import { Preview } from '@storybook/react'
import { ThemeProvider } from '@mui/system'
import { CssBaseline } from '@mui/material'
import theme from '../src/lib/theme'
import './sb.css'

// AgGrid共有スタイル
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

// ViewSize
const customViewports = {
  iphone: {
    name: 'iPhone',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  ipad: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  surface: {
    name: 'Surface',
    styles: {
      width: '800px',
      height: '1280px',
    },
  },
  macbookPro: {
    name: 'MacBook Pro',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
  imac: {
    name: 'iMac',
    styles: {
      width: '2560px',
      height: '1440px',
    },
  },
  desktop24inch: {
    name: 'Desktop 24inch',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  desktop27inch: {
    name: 'Desktop 27inch',
    styles: {
      width: '2560px',
      height: '1440px',
    },
  },
  desktop32inch: {
    name: 'Desktop 32inch',
    styles: {
      width: '3840px',
      height: '2160px',
    },
  },
}

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Stories', 'Mui'],
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
