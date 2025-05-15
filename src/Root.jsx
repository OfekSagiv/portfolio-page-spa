import { ThemeProvider, CssBaseline } from '@mui/material';
import { useThemeMode } from './hooks/useThemeMode';
import App from './App';

export default function Root() {
    const { mode, theme, toggleTheme } = useThemeMode();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App mode={mode} toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
}
