export const COLORS_CONFIG = {
    PRIMARY: '#D72EC6',
    PRIMARY_LIGHTER: '#FF78F2',
    WHITE: '#FFFFFF',
};

export function resolveColorMode(colorMode){
    switch (colorMode){
        case 'primary':
            return COLORS_CONFIG.PRIMARY;
            break;
        default: 
            return colorMode;
    }
}

export function resolveBiColorMode(colorMode){
    switch (colorMode){
        case 'primary':
            return { dark: COLORS_CONFIG.PRIMARY, light: COLORS_CONFIG.PRIMARY_LIGHTER};
            break;
        default: 
            return { dark: colorMode, light: colorMode};
    }
}