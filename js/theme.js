/**
 * Theme Management System
 * Soporta light/dark mode con persistencia y respeto a preferencias del sistema
 */

class ThemeManager {
    constructor() {
        this.html = document.documentElement;
        this.STORAGE_KEY = 'cataliza-theme';
        this.LIGHT = 'light';
        this.DARK = 'dark';
        this.systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
        
        console.log('ThemeManager initialized');
        this.init();
    }
    
    init() {
        const initialTheme = this.getInitialTheme();
        console.log('Initial theme:', initialTheme);
        this.applyTheme(initialTheme);
        this.watchThemeChanges();
    }
    
    getInitialTheme() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
            console.log('Theme from localStorage:', saved);
            return saved;
        }
        const systemTheme = this.systemDarkMode.matches ? this.DARK : this.LIGHT;
        console.log('System theme preference:', systemTheme);
        return systemTheme;
    }
    
    applyTheme(theme) {
        const validTheme = theme === this.DARK ? this.DARK : this.LIGHT;
        console.log('Applying theme:', validTheme);
        
        this.html.setAttribute('data-theme', validTheme);
        document.body.style.colorScheme = validTheme;
        localStorage.setItem(this.STORAGE_KEY, validTheme);
        
        window.dispatchEvent(new CustomEvent('theme-changed', { 
            detail: { theme: validTheme } 
        }));
    }
    
    watchThemeChanges() {
        // Escuchar cambios del settings manager
        window.addEventListener('settings-theme-changed', (e) => {
            this.applyTheme(e.detail.theme);
        });
        
        // Escuchar cambios del sistema operativo
        this.systemDarkMode.addEventListener('change', (e) => {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            if (!saved) {
                const newTheme = e.matches ? this.DARK : this.LIGHT;
                this.applyTheme(newTheme);
            }
        });
    }
}
