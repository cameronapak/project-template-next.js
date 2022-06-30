import {extendTheme} from "@mui/joy";

// type ColorScale = '10' | '20' | '30' | '40' | '50';
// type ExtendedColorScale = '5' | '10' | '15' | '20' | '25' | '30' | '35' | '40' | '45' | '50';

// declare module '@mui/joy/styles' {
//     interface Palette {
//     }
// }

const colors = {
    white: '#FFFFFF',
    black: '#000000',
    brand: {
        light: '#FF3D4D',
        dark: '#F04C59',
        warmNeutral: '#F6EFEE'
    },
    disabled: {
        light: 'rgba(208, 210, 210, 0.4)',
        dark: 'rgba(79, 83, 84, 0.4)'
    },
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
        '40': '#346148',
        '50': '#1A3026',
    }
}

export const yvuiTheme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    solidBg: colors.gray["40"],
                    solidBorder: colors.gray["40"],
                    solidHoverBg: colors.gray["35"],
                    solidHoverBorder: colors.gray["35"],
                    solidActiveBg: colors.gray["50"],
                    solidActiveBorder: colors.gray["50"],
                    solidDisabledBg: colors.gray["25"],
                    solidDisabledBorder: colors.disabled["light"],
                    solidColor: colors.white,
                    solidHoverColor: colors.white,
                    solidDisabledColor: colors.gray["25"],
                    solidActiveColor: colors.white,
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
                    solidDisabledBg: colors.disabled["dark"],
                    solidDisabledBorder: colors.disabled["dark"],
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
    }
})