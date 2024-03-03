import {
  createBaseThemeOptions,
  createUnifiedTheme,
  palettes,
  genPageTheme,
  shapes,
} from '@backstage/theme';

export const platformersTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#00DEA2',
      },
      error: {
        main: '#8c4351',
      },
      warning: {
        main: '#8f5e15',
      },
      info: {
        main: '#34548a',
      },
      success: {
        main: '#485e30',
      },
      background: {
        default: '#ffffff',
        paper: '#ffffff',
      },
      banner: {
        info: '#34548a',
        error: '#8c4351',
        text: '#000000',
        link: '#00DEA2',
      },
      errorBackground: '#8c4351',
      warningBackground: '#8f5e15',
      infoBackground: '#000000',
      navigation: {
        background: '#000000',
        indicator: '#00DEA2',
        color: '#ffffff',
        selectedColor: '#00DEA2',
      },
    },
  }),
  defaultPageTheme: 'home',
  fontFamily: 'Comic Sans MS',
  /* below drives the header colors */
  pageTheme: {
    home: genPageTheme({ colors: ['#00DEA2', '#000000'], shape: shapes.wave }),
    documentation: genPageTheme({
      colors: ['#00DEA2', '#000000'],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({ colors: ['#00DEA2', '#000000'], shape: shapes.round }),
    service: genPageTheme({
      colors: ['#00DEA2', '#000000'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#00DEA2', '#000000'],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#00DEA2', '#000000'],
      shape: shapes.wave,
    }),
    other: genPageTheme({ colors: ['#00DEA2', '#000000'], shape: shapes.wave }),
    app: genPageTheme({ colors: ['#00DEA2', '#000000'], shape: shapes.wave }),
    apis: genPageTheme({ colors: ['#00DEA2', '#000000'], shape: shapes.wave }),
  },
});
