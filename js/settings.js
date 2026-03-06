/**
 * Settings Management System
 * Maneja configuración de tema y animaciones con persistencia en localStorage
 */

class SettingsManager {
    constructor() {
        this.settingsBtn = document.getElementById('settings-btn');
        this.settingsModal = document.getElementById('settings-modal');
        this.settingsOverlay = document.getElementById('settings-overlay');
        this.settingsClose = document.getElementById('settings-close');
        
        this.themeToggle = document.getElementById('settings-theme');
        this.skipAnimationToggle = document.getElementById('settings-skip-animation');
        
        this.THEME_KEY = 'cataliza-theme';
        this.SKIP_ANIMATION_KEY = 'cataliza-skip-animation';
        this.LIGHT = 'light';
        this.DARK = 'dark';
        
        if (!this.settingsBtn || !this.settingsModal) {
            console.error('ERROR: Elementos de settings no encontrados');
            return;
        }
        
        console.log('SettingsManager initialized');
        this.init();
    }
    
    init() {
        this.loadSettings();
        this.attachEventListeners();
    }
    
    attachEventListeners() {
        // Abrir settings
        this.settingsBtn.addEventListener('click', () => this.openSettings());
        
        // Cerrar settings
        this.settingsClose.addEventListener('click', () => this.closeSettings());
        this.settingsOverlay.addEventListener('click', () => this.closeSettings());
        
        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.settingsModal.classList.contains('active')) {
                this.closeSettings();
            }
        });
        
        // Theme toggle
        this.themeToggle.addEventListener('change', () => {
            const newTheme = this.themeToggle.checked ? this.DARK : this.LIGHT;
            this.setTheme(newTheme);
            window.dispatchEvent(new CustomEvent('settings-theme-changed', {
                detail: { theme: newTheme }
            }));
        });
        
        // Skip animation toggle
        this.skipAnimationToggle.addEventListener('change', () => {
            this.setSkipAnimation(this.skipAnimationToggle.checked);
            window.dispatchEvent(new CustomEvent('settings-animation-changed', {
                detail: { skipAnimation: this.skipAnimationToggle.checked }
            }));
        });
    }
    
    loadSettings() {
        // Cargar y aplicar tema
        const savedTheme = localStorage.getItem(this.THEME_KEY);
        const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
        const currentTheme = savedTheme || (systemDarkMode.matches ? this.DARK : this.LIGHT);
        
        this.themeToggle.checked = currentTheme === this.DARK;
        
        // Cargar skip animation setting
        const skipAnimation = localStorage.getItem(this.SKIP_ANIMATION_KEY) === 'true';
        this.skipAnimationToggle.checked = skipAnimation;
    }
    
    setTheme(theme) {
        localStorage.setItem(this.THEME_KEY, theme);
        document.documentElement.setAttribute('data-theme', theme);
        document.body.style.colorScheme = theme;
    }
    
    setSkipAnimation(skip) {
        localStorage.setItem(this.SKIP_ANIMATION_KEY, skip);
    }
    
    getTheme() {
        return localStorage.getItem(this.THEME_KEY) || 'light';
    }
    
    getSkipAnimation() {
        return localStorage.getItem(this.SKIP_ANIMATION_KEY) === 'true';
    }
    
    openSettings() {
        this.settingsModal.classList.add('active');
        this.settingsOverlay.classList.add('active');
        this.settingsModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    
    closeSettings() {
        this.settingsModal.classList.remove('active');
        this.settingsOverlay.classList.remove('active');
        this.settingsModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

// Crear instancia global accessible
let settingsManager;
