declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: { white: string };
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
  colors: { white: '#ffffff' },
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
