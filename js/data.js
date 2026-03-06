/**
 * Data Management System
 * Carga datos desde archivos JSON externos
 */

let MODAL_DATA = {
    services: {},
    reviews: {},
    about: {},
    portfolio: [],
    contact: {}
};

/**
 * Load JSON data files
 */
async function loadModalData() {
    try {
        const [servicesRes, reviewsRes, aboutRes, portfolioRes, contactRes] = await Promise.all([
            fetch('data/services.json'),
            fetch('data/reviews.json'),
            fetch('data/about.json'),
            fetch('data/portfolio.json'),
            fetch('data/contact.json')
        ]);
        
        const servicesData = await servicesRes.json();
        const reviewsData = await reviewsRes.json();
        const aboutData = await aboutRes.json();
        const portfolioData = await portfolioRes.json();
        const contactData = await contactRes.json();
        
        MODAL_DATA.services = servicesData.services;
        MODAL_DATA.reviews = reviewsData.reviews;
        MODAL_DATA.about = aboutData.about;
        MODAL_DATA.portfolio = portfolioData.portfolio;
        MODAL_DATA.contact = contactData.contact;
        
        console.log('Modal data loaded successfully:', MODAL_DATA);
    } catch (error) {
        console.error('Error loading modal data:', error);
    }
}
