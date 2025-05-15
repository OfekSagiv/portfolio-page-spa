import { useState, useMemo } from 'react';
import { getTheme } from '../theme/theme';
import { THEME } from '../constants/themeConst';

export const useThemeMode = () => {
    const [mode, setMode] = useState(() => {
        return localStorage.getItem(THEME.KEY) || THEME.LIGHT;
    });

    const toggleTheme = () => {
        const newMode = mode === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
        setMode(newMode);
        localStorage.setItem(THEME.KEY, newMode);
    };

    const theme = useMemo(() => getTheme(mode), [mode]);

    return { mode, theme, toggleTheme };
};
