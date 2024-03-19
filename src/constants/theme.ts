declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    white: string;
    accentColor: string;
    lightgreyColor: string;
    greenColor: string;
    borderColor: string;
    primaryFontColor: string;
  };
  // fontFamily: {};
  // fontWeight: {};
  // fontSize: {};
  padding: {
    container: number;
  };
  // borderRadius: {};
  containerWidth: {
    desktop: number;
  };
  // shadows: {};
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    white: '#ffffff',
    accentColor: '#0b44cd',
    lightgreyColor: '#d3d3d3',
    greenColor: '#198754',
    borderColor: '#DEE2E6',
    primaryFontColor: '#000000',
  },
  // fontFamily: {},
  // fontWeight: {},
  // fontSize: {},
  padding: {
    container: 16,
  },
  // borderRadius: {},
  containerWidth: {
    desktop: 1440,
  },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
