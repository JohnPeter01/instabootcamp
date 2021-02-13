
const colors = {
    modes: {
      light:{
        background: {
            light: {
              color: '#FFFFFF',
            },
            main: {
              color: '#F2F2F2',
            },
          },
          borders: {
            main: {
              color: '#F1F1F1',
            },
          },
          primary: {
            main: {
              color: '#D7385E',
              contrastText: '#fff',
            },
          },
          secondary: {
            main: {
              color: '#FB7B6B',
              contrastText: '#fff',
            },
          },
          tertiary: {
            main: {
              color: '#070C0E',
              contrastText: '#fff',
            },
            light: {
              color: '#88989E',
              contrastText: '#fff',
            },
          },
      },
      dark: {
          main: '#030506'
      },
    },
  };

export default {
    colors,
    borderRadius: '12px',
    fontFamily: '\'Rubik\',san-serif',
    transition: '200ms ease-in-out',
  }