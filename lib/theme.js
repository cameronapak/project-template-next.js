import {extendTheme} from "@mui/joy";

// type ColorScale = '10' | '20' | '30' | '40' | '50';
// type ExtendedColorScale = '5' | '10' | '15' | '20' | '25' | '30' | '30DM' | '35' | '40' | '45' | '50';

// declare module '@mui/joy/styles' {
//     interface Palette {
//     }
// }

const colors = {
    white: '#FFFFFF',
    black: '#000000',
    gray: {
        '5': '#F8F9F9',
        '10': '#EDEFEF',
        '15': '#D0D2D2',
        '20': '#9EA1A2',
        '25': '#777A7B',
        '30': '#4F5354',
        '35': '#3D4243',
        '40': '#2B3031',
        '45': '#1F2122',
        '50': '#121212',
    },
    teal: {
        '10': '#E6F2F3',
        '20': '#80BDC4',
        '30': '#007B89',
        '40': '#004A52',
        '50': '#002529',
    },
    blue: {
        '10': '#E7F2FD',
        '20': '#9EBCE1',
        '30': '#3D79C2',
        '30DM': '#2A85F4', // Dark mode version.
        '40': '#29537A',
        '50': '#1C2A3B',
    },
    purple: {
        '10': '#F2EEF3',
        '20': '#BCA8C5',
        '30': '#79518A',
        '40': '#483550',
        '50': '#241829',
    },
    magenta: {
        '10': '#F5EAEE',
        '20': '#CC96AA',
        '30': '#992C55',
        '40': '#5C1A33',
        '50': '#2E0D19',
    },
    orange: {
        '10': '#FAECEB',
        '20': '#E59F9A',
        '30': '#CA3E35',
        '30DM': '#F23B22', // Dark mode version.
        '40': '#7A2629',
        '50': '#3D1310',
    },
    yellow: {
        '10': '#FEF5EB',
        '20': '#F8CB94',
        '30': '#F19C33',
        '40': '#975C11',
        '50': '#4C2D08',
    },
    green: {
        '10': '#EEF6F0',
        '20': '#ABD0B6',
        '30': '#57A16C',
        '30DM': '#4AAE67', // Dark mode version.
        '40': '#346148',
        '50': '#1A3026',
    },
    brand: {
        light: '#FF3D4D',
        dark: '#F04C59',
        warmNeutral: '#F6EFEE'
    },
}

const colorTokens = {
    ...colors,
    thinLine: {
        light: colors.gray[15],
        dark: colors.gray[30],
    },
    canvas: {
      light: {
        default: colors.white,
        secondary: colors.gray[5]  
      },  
      dark: {
        default: colors.gray[50],
        secondary: colors.gray[45]
      }
    },
    utility: {
        success: {
            light: colors.green[30],
            dark: colors.green['30DM']
        },
        info: {
            light: colors.blue[30],
            dark: colors.blue['30DM']
        },
        alert: {
            light: colors.orange[30],
            dark: colors.orange['30DM']
        }
    },
}

const typographyTokens = {
    primary: {
        light: colors.gray[50],
        dark: colors.white,
    },
    muted: {
        light: colors.gray[25],
        dark: colors.gray[20]
    },
    red: {
        light: colors.brand.light,
        dark: colors.brand.dark
    },
    blue: {
        light: colors.blue[30],
        dark: colors.blue['30DM']
    }
}

// Commented out two sizes in the design system because we do not yet use
// them in the web styleguide.
const BUTTON_SIZES = {
    lg: 'lg',
    // md: 'md',
    sm: 'sm',
    // xs: 'xs'
}

const buttonTokens = {
    button: {
        // Default button.
        filled: {
            background: {
                light: colors.gray[10],
                dark: colors.gray[40],
            },
            text: {
                light: typographyTokens.primary.light,
                dark: typographyTokens.primary.dark,
            },
        },
        // Use over secondary canvas.
        filledSecondary: {
            background: {
                light: colors.gray[15],
                dark: colors.gray[35],
            },
            text: {
                light: typographyTokens.primary.light,
                dark: typographyTokens.primary.dark,
            },
        },
        // Use for prominent CTAs. No more than 1 per screen.
        filledContrast: {
            background: {
                light: colors.gray[40],
                dark: colors.gray[10],
            },
            text: {
                // The dark and light switched is intentional to make the colors work properly.
                light: typographyTokens.primary.dark,
                dark: typographyTokens.primary.light,
            },
        },
        // Use if conditions must be met before button becomes enabled.
        filledDisabled: {
            background: {
                light: colors.gray[10],
                dark: colors.gray[40],
            },
            text: {
                light: typographyTokens.muted.light,
                dark: typographyTokens.muted.dark,
            },
        },
        filledContrastRisk: {
            background: {
                light: colorTokens.utility.alert.light,
                dark: colorTokens.utility.alert.dark,
            },
            text: {
                light: typographyTokens.primary.dark,
                dark: typographyTokens.primary.dark,
            },
        },
        strokedRisk: {
            // These colors are one-offs.
            border: {
                // Hex opacity for 30% is '4D'.
                light: colors.orange[30] + '4D',
                // Hex opacity for 40% is '66'.
                dark: colors.orange['30DM'] + '66',
            },
            text: {
                light: typographyTokens.primary.dark,
                dark: typographyTokens.primary.dark,
            },
        },
        stroked: {
            border: {
                light: colorTokens.thinLine.light,
                dark: colorTokens.thinLine.dark,
            },
            text: {
                light: typographyTokens.primary.light,
                dark: typographyTokens.primary.dark,
            },
        }, 
        // Used on secondary and expressive color backgrounds.
        strokedContrast: {
            border: {
                light: typographyTokens.primary.light,
                dark: typographyTokens.primary.dark,
            },
            text: {
                light: typographyTokens.primary.light,
                dark: typographyTokens.primary.dark,
            },
        },
        strokedDisabled: {
            border: {
                light: typographyTokens.muted.light,
                dark: typographyTokens.muted.dark,
            },
            text: {
                light: typographyTokens.muted.light,
                dark: typographyTokens.muted.dark,
            },
        }, 
        // TODO - borderless buttons have no margins...
        borderless: {
            text: {
                light: typographyTokens.primary.light,
                dark: typographyTokens.primary.dark,
            },
        }
    }
}

// TODO: Write comments on ideas on how to best extend the theme.
// - Q: What can we invalidate or make undefined from the initial theme to make it work right for our purposes and design system?
// - Get the correct font inside of this working. Aktiv Grotesk.
export const yvuiTheme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    // Soft variant = YV filled buttons.
                    softBg: buttonTokens.button.filled.background.light,
                    softBorder: buttonTokens.button.filled.background.light,
                    softColor: buttonTokens.button.filled.text.light,
                    softHoverColor: buttonTokens.button.filled.text.light,
                    softHoverBorder: colors.gray[15],
                    softHoverBg: colors.gray[5],
                    softActiveBg: colors.gray[15],
                    softActiveColor: buttonTokens.button.filled.text.light,
                    softActiveBorder: colors.gray[15],
                    softDisabledColor: buttonTokens.button.filledDisabled.text.light,
                    softDisabledBorder: buttonTokens.button.filledDisabled.background.light,
                    // Solid variant = YV contrast filled buttons.
                    solidBg: buttonTokens.button.filledContrast.background.light,
                    solidBorder: buttonTokens.button.filledContrast.background.light,
                    solidHoverBg: colors.gray["35"],
                    solidHoverBorder: colors.gray["35"],
                    solidActiveBg: colors.gray["50"],
                    solidActiveBorder: colors.gray["50"],
                    solidDisabledBg: colors.gray["25"],
                    solidDisabledBorder: buttonTokens.button.filledDisabled.background.light,
                    solidColor: buttonTokens.button.filledContrast.text.light,
                    solidHoverColor: buttonTokens.button.filledContrast.text.light,
                    solidDisabledColor: buttonTokens.button.filledDisabled.background.light,
                    solidActiveColor: buttonTokens.button.filledContrast.text.light,
                    // TODO - Outlined variant = YV stroked buttons.
                    // TODO - Plain variant = YV borderless buttons.
                },
                neutral:{
                    solidBg: '',
                    solidBorder: '',
                    solidHoverBg: '',
                    solidHoverBorder: '',
                    solidActiveBg: '',
                    solidActiveBorder: '',
                    solidDisabledBg: '',
                    solidDisabledBorder: '',
                    solidColor: '',
                    solidHoverColor: '',
                    solidDisabledColor: '',
                    solidActiveColor: '',
                },
                success: {
                    solidBg: '',
                    solidBorder: '',
                    solidHoverBg: '',
                    solidHoverBorder: '',
                    solidActiveBg: '',
                    solidActiveBorder: '',
                    solidDisabledBg: '',
                    solidDisabledBorder: '',
                    solidColor: '',
                    solidHoverColor: '',
                    solidDisabledColor: '',
                    solidActiveColor: '',
                },
                danger: {
                    solidBg: colors.orange["30"],
                    solidBorder: colors.orange["30"],
                    solidHoverBg: '#CE4A41',
                    solidHoverBorder: '#CE4A41',
                    solidActiveBg: '#BE3A32',
                    solidActiveBorder: '#BE3A32',
                    solidDisabledBg: '',
                    solidDisabledBorder: '',
                    solidColor: '',
                    solidHoverColor: '',
                    solidDisabledColor: '',
                    solidActiveColor: '',
                },
                warning: {
                    solidBg: '',
                    solidBorder: '',
                    solidHoverBg: '',
                    solidHoverBorder: '',
                    solidActiveBg: '',
                    solidActiveBorder: '',
                    solidDisabledBg: '',
                    solidDisabledBorder: '',
                    solidColor: '',
                    solidHoverColor: '',
                    solidDisabledColor: '',
                    solidActiveColor: '',
                },
                info: {
                    solidBg: '',
                    solidBorder: '',
                    solidHoverBg: '',
                    solidHoverBorder: '',
                    solidActiveBg: '',
                    solidActiveBorder: '',
                    solidDisabledBg: '',
                    solidDisabledBorder: '',
                    solidColor: '',
                    solidHoverColor: '',
                    solidDisabledColor: '',
                    solidActiveColor: '',
                }
            }
        },
        dark: {
            palette: {
                primary: {
                    solidBg: colors.white,
                    solidBorder: colors.white,
                    solidHoverBg: colors.white,
                    solidHoverBorder: colors.gray["35"],
                    solidActiveBg: colors.gray["10"],
                    solidActiveBorder: colors.gray["10"],
                    // solidDisabledBg: colors.disabled["dark"],
                    // solidDisabledBorder: colors.disabled["dark"],
                    solidColor: colors.gray["50"],
                    solidHoverColor: colors.gray["50"],
                    solidDisabledColor: colors.gray["25"],
                    solidActiveColor: colors.gray["50"],
                },
                neutral:{
                    solidBg: '',
                    solidBorder: '',
                    solidHoverBg: '',
                    solidHoverBorder: '',
                    solidActiveBg: '',
                    solidActiveBorder: '',
                    solidDisabledBg: '',
                    solidDisabledBorder: '',
                    solidColor: '',
                    solidHoverColor: '',
                    solidDisabledColor: '',
                    solidActiveColor: '',
                },
                success: {
                    solidBg: '',
                    solidBorder: '',
                    solidHoverBg: '',
                    solidHoverBorder: '',
                    solidActiveBg: '',
                    solidActiveBorder: '',
                    solidDisabledBg: '',
                    solidDisabledBorder: '',
                    solidColor: '',
                    solidHoverColor: '',
                    solidDisabledColor: '',
                    solidActiveColor: '',
                },
                danger: {
                    solidBg: '',
                    solidBorder: '',
                    solidHoverBg: '',
                    solidHoverBorder: '',
                    solidActiveBg: '',
                    solidActiveBorder: '',
                    solidDisabledBg: '',
                    solidDisabledBorder: '',
                    solidColor: '',
                    solidHoverColor: '',
                    solidDisabledColor: '',
                    solidActiveColor: '',
                },
                warning: {
                    solidBg: '',
                    solidBorder: '',
                    solidHoverBg: '',
                    solidHoverBorder: '',
                    solidActiveBg: '',
                    solidActiveBorder: '',
                    solidDisabledBg: '',
                    solidDisabledBorder: '',
                    solidColor: '',
                    solidHoverColor: '',
                    solidDisabledColor: '',
                    solidActiveColor: '',
                },
                info: {
                    solidBg: '',
                    solidBorder: '',
                    solidHoverBg: '',
                    solidHoverBorder: '',
                    solidActiveBg: '',
                    solidActiveBorder: '',
                    solidDisabledBg: '',
                    solidDisabledBorder: '',
                    solidColor: '',
                    solidHoverColor: '',
                    solidDisabledColor: '',
                    solidActiveColor: '',
                }
            }
        }
    },
    fontSize: {},
    fontFamily: {},
    spacing: [],
    fontWeight: {},
    lineHeight: {},
    letterSpacing: {},
    radius: {},
    components: {
        JoyButton: {
            styleOverrides: {
                root: ({ ownerState, theme}) => ({
                    borderRadius: '9999px',
                    fontWeight: 'bold'
                }),
            },
        }
    },
})
