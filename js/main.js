/**
 * Main Application Initialization
 * Punto de entrada para la aplicación
 */

/**
 * Initialize application when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

/**
 * Application initialization function
 */
async function initializeApp() {
    console.log('Initializing application...');
    
    // Initialize settings manager first (controls theme)
    settingsManager = new SettingsManager();
    
    // Initialize theme manager
    const themeManager = new ThemeManager();
    
    // Load data (projects and policies)
    await loadModalData();
    
    // Initialize grid modal system
    const gridModal = new GridModal();
    
    // Initialize date/time display
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // Check skip animation setting
    const skipAnimation = settingsManager.getSkipAnimation();
    if (skipAnimation) {
        console.log('Animation skipped');
    }
    
    console.log('Application initialized successfully');
}
