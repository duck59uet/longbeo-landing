import { createTheme } from "@mui/material";

export const muiTheme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: 'div',
          body2: 'div',
          inherit: 'div',
        },
      },
      styleOverrides: {
        h1: { fontSize: 48, fontWeight: 700 },
        h2: { fontSize: 36, fontWeight: 700 },
        h3: { fontSize: 24, fontWeight: 700 },
        h4: { fontSize: 20, fontWeight: 700 },
        h5: { fontSize: 16, fontWeight: 700 },
        h6: { fontSize: 14, fontWeight: 700 },
        subtitle1: { fontSize: 16, fontWeight: 500 },
        subtitle2: { fontSize: 14, fontWeight: 500 },
        body1: { fontSize: 16 },
        body2: { fontSize: 14 },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: 'calc(1280px + 48px) !important',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
        size: 'medium',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          color: '#fff'
        },
        containedPrimary: {
          background: '#EECE7C',
          color: '#3C3C3E',
          '&.Mui-disabled': {
            background: '#EBECF0',
          },
        },
        contained: {
          '&.MuiButton-containedError': {
            background: '#FF5630',
            color: '#FFF',
            border: '2px solid silver',
            '&:hover': {
              background: '#FF3630',
            },
            '&:before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: `url(/assets/designs/dots-white.png) no-repeat center right -20px`,
            },
          },
        },
        sizeLarge: { minHeight: 48, minWidth: 48 },
        sizeMedium: { minHeight: 40, minWidth: 40 },
        sizeSmall: { minHeight: 32, minWidth: 32 },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        focused: true,
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            color: '#FFF',
            '&.Mui-focused fieldset': {
              borderColor: '#5E6484',
            },
            '& .MuiSvgIcon-root': {
              color: '#BDC2CC',
            },
          },
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        backdrop: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          fontSize: 13,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        target: '_blank',
        underline: 'none',
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
        root: {
          '& .MuiBackdrop-root': {
            background: 'rgba(24, 24, 24, 0.9)',
          },
        },
      },
    },
    MuiPopover: {
      defaultProps: {
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        transformOrigin: { vertical: 'top', horizontal: 'right' },
        PaperProps: {
          style: {
            color: '#fff',
            marginTop: 4,
            borderRadius: 8,
            width: 122,
            boxShadow: 'none',
            background: 'transparent',
          },
        },
      },
    },
    MuiPagination: {
      defaultProps: {
        variant: 'outlined',
        shape: 'rounded',
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: '#23252A',
          "&:hover": {
            backgroundColor: "#3d4045"
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: '#4E4462',
          color: '#FFF',
        },
        body: {
          backgroundColor: '#2E273D',
          color: '#FFF',
        },
        root: {
          border: '1px solid #7D7D7D',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          border: 'none',
          color: '#FFF',
          background: '#23252A',
          width: '100%',
          '&.Mui-disabled': {
            color: '#87878D',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.MuiDialog-paper': {
            background: '#23252A',
          }
        }
      }
    }
  },
  typography: {
    fontFamily: 'Segoe UI Variable',
  },
  palette: {
    primary: {
      main: '#FFD751',
    },
    secondary: {
      main: '#6C707A',
    }
  },
  shape: {
    borderRadius: 8,
  },
});