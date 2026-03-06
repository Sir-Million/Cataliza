/**
 * Utility function to get scrollbar width
 */
function getScrollbarWidth() {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);
    
    const inner = document.createElement('div');
    outer.appendChild(inner);
    
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode.removeChild(outer);
    
    return scrollbarWidth;
}

/**
 * Grid Modal Management System v2
 * Maneja contenido dinámico y modular
 */

class GridModal {
    constructor() {
        this.modal = document.getElementById('modal-grid');
        this.overlay = document.getElementById('modal-overlay');
        this.closeBtn = document.querySelector('.modal-close');
        this.gridItems = document.querySelectorAll('.grid-item');
        this.scrollPosition = 0;
        
        if (!this.modal || !this.overlay) {
            console.error('Modal elements not found');
            return;
        }
        
        this.init();
    }
    
    init() {
        this.attachGridItemListeners();
        this.attachModalListeners();
    }
    
    attachGridItemListeners() {
        this.gridItems.forEach(item => {
            item.addEventListener('click', () => {
                const itemId = item.getAttribute('data-id');
                const itemType = item.getAttribute('data-type');
                this.openGridItemModal(itemType, itemId);
            });
        });
    }
    
    attachModalListeners() {
        // Close button
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.closeModal());
        }
        
        // Overlay click
        this.overlay.addEventListener('click', () => this.closeModal());
        
        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }
    
    openGridItemModal(type, id) {
        switch(type) {
            case 'services':
                this.renderServicesModal();
                break;
            case 'reviews':
                this.renderReviewsModal();
                break;
            case 'about':
                this.renderAboutModal();
                break;
            case 'contact':
                this.renderContactModal();
                break;
            case 'portfolio':
                this.renderPortfolioModal();
                break;
            default:
                console.error('Unknown modal type:', type);
        }
        
        this.showModal();
    }
    
    renderServicesModal() {
        const headerTitle = this.modal.querySelector('.modal-header h2');
        const contentArea = this.modal.querySelector('.modal-content');
        
        if (headerTitle) {
            headerTitle.textContent = '🎯 Nuestros Servicios';
        }
        
        if (contentArea) {
            let servicesHTML = '<div class="services-grid">';
            
            Object.values(MODAL_DATA.services).forEach(service => {
                const techList = service.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
                
                servicesHTML += `
                    <article class="service-card">
                        <div class="service-header">
                            <div class="service-icon">${service.icon}</div>
                            <div class="service-title-group">
                                <h3>${service.title}</h3>
                                <p class="service-category">${service.category}</p>
                            </div>
                        </div>
                        
                        <p class="service-description">${service.description}</p>
                        
                        <div class="service-full-desc">${service.fullDescription}</div>
                        
                        <div class="service-features">
                            <strong>Lo que incluye</strong>
                            <ul>
                                ${service.features.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="service-tech">
                            ${techList}
                        </div>
                        
                        <p class="service-deliverable">
                            <strong>Entregable:</strong> ${service.deliverables}
                        </p>
                    </article>
                `;
            });
            
            servicesHTML += '</div>';
            contentArea.innerHTML = servicesHTML;
        }
    }
    
    renderReviewsModal() {
        const headerTitle = this.modal.querySelector('.modal-header h2');
        const contentArea = this.modal.querySelector('.modal-content');
        
        if (headerTitle) {
            headerTitle.textContent = '⭐ Reseñas de Clientes';
        }
        
        if (contentArea) {
            let reviewsHTML = '<div class="reviews-grid">';
            
            Object.values(MODAL_DATA.reviews).forEach(review => {
                const stars = '⭐'.repeat(Math.floor(review.rating));
                
                reviewsHTML += `
                    <article class="review-card">
                        <div class="review-header">
                            <img src="${review.image}" alt="${review.clientName}" class="review-avatar">
                            <div class="review-info">
                                <h4>${review.clientName}</h4>
                                <p class="review-company">${review.company}</p>
                                <p class="review-position">${review.position}</p>
                            </div>
                        </div>
                        
                        <div class="review-rating">${stars}</div>
                        
                        <blockquote class="review-text">
                            "${review.testimonial}"
                        </blockquote>
                        
                        <footer class="review-footer">
                            <span class="review-project">${review.project}</span>
                            <span class="review-date">${new Date(review.completionDate).toLocaleDateString('es-ES')}</span>
                        </footer>
                    </article>
                `;
            });
            
            reviewsHTML += '</div>';
            contentArea.innerHTML = reviewsHTML;
        }
    }
    
    renderAboutModal() {
        const headerTitle = this.modal.querySelector('.modal-header h2');
        const contentArea = this.modal.querySelector('.modal-content');
        const about = MODAL_DATA.about;
        
        if (headerTitle) {
            headerTitle.textContent = `👥 ${about.title}`;
        }
        
        if (contentArea) {
            let aboutHTML = `
                <div class="about-container">
                    <section class="about-hero">
                        <h3>${about.hero.heading}</h3>
                        <p>${about.hero.subheading}</p>
                        <img src="${about.hero.image}" alt="Hero" class="about-hero-image">
                    </section>
            `;
            
            // Add sections
            about.sections.forEach(section => {
                aboutHTML += `
                    <section class="about-section">
                        <h3>${section.heading}</h3>
                        <p>${section.content}</p>
                    </section>
                `;
            });
            
            // Stats
            aboutHTML += `
                <section class="about-stats">
                    <div class="stat">
                        <strong>${about.stats.projects}</strong>
                        <p>Proyectos</p>
                    </div>
                    <div class="stat">
                        <strong>${about.stats.satisfied_clients}</strong>
                        <p>Clientes Satisfechos</p>
                    </div>
                    <div class="stat">
                        <strong>${about.stats.years_experience}</strong>
                        <p>Años Experiencia</p>
                    </div>
                    <div class="stat">
                        <strong>${about.stats.team_members}</strong>
                        <p>Miembros del Equipo</p>
                    </div>
                </section>
            `;
            
            // Team
            aboutHTML += '<section class="team-section"><h3>Nuestro Equipo</h3><div class="team-grid">';
            about.team.forEach(member => {
                aboutHTML += `
                    <div class="team-member">
                        <img src="${member.image}" alt="${member.name}" class="team-avatar">
                        <h4>${member.name}</h4>
                        <p class="team-role">${member.role}</p>
                        <p class="team-specialty">${member.specialty}</p>
                    </div>
                `;
            });
            aboutHTML += '</div></section>';
            
            // Technologies
            aboutHTML += `
                <section class="about-tech">
                    <h3>Tecnologías</h3>
                    <div class="tech-list">
                        ${about.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </section>
                </div>
            `;
            
            contentArea.innerHTML = aboutHTML;
        }
    }
    
    renderContactModal() {
        const headerTitle = this.modal.querySelector('.modal-header h2');
        const contentArea = this.modal.querySelector('.modal-content');
        const contact = MODAL_DATA.contact;
        
        if (headerTitle) {
            headerTitle.textContent = '💬 Contacto';
        }
        
        if (contentArea) {
            let contactHTML = `
                <div class="contact-container">
                    <section class="contact-header">
                        <h3>${contact.heading}</h3>
                        <p>${contact.subheading}</p>
                    </section>
                    
                    <section class="contact-methods">
            `;
            
            contact.methods.forEach(method => {
                contactHTML += `
                    <a href="${method.link}" class="contact-method">
                        <span class="contact-icon">${method.icon}</span>
                        <div class="contact-detail">
                            <strong>${method.type}</strong>
                            <p>${method.value}</p>
                        </div>
                    </a>
                `;
            });
            
            contactHTML += `
                    </section>
                    
                    <section class="contact-form-section">
                        <h3>${contact.form.title}</h3>
                        <form id="contact-form" class="contact-form">
            `;
            
            contact.form.fields.forEach(field => {
                if (field.type === 'textarea') {
                    contactHTML += `
                        <div class="form-group">
                            <label for="${field.name}">${field.label}</label>
                            <textarea 
                                id="${field.name}" 
                                name="${field.name}" 
                                placeholder="${field.placeholder}"
                                rows="${field.rows}"
                                ${field.required ? 'required' : ''}>
                            </textarea>
                        </div>
                    `;
                } else if (field.type === 'select') {
                    contactHTML += `
                        <div class="form-group">
                            <label for="${field.name}">${field.label}</label>
                            <select id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''}>
                                <option value="">Selecciona una opción</option>
                                ${field.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                            </select>
                        </div>
                    `;
                } else {
                    contactHTML += `
                        <div class="form-group">
                            <label for="${field.name}">${field.label}</label>
                            <input 
                                type="${field.type}" 
                                id="${field.name}" 
                                name="${field.name}" 
                                placeholder="${field.placeholder}"
                                ${field.required ? 'required' : ''}>
                        </div>
                    `;
                }
            });
            
            contactHTML += `
                            <button type="submit" class="contact-submit">${contact.form.submitButton}</button>
                        </form>
                    </section>
                    
                    <section class="contact-availability">
                        <strong>Estado:</strong> ${contact.availability.status}
                        <p>⏱️ Respuesta en: ${contact.availability.responseTime}</p>
                        <p>📅 ${contact.availability.businessDays}</p>
                    </section>
                </div>
            `;
            
            contentArea.innerHTML = contactHTML;
            
            // Attach form listener
            const form = contentArea.querySelector('#contact-form');
            if (form) {
                form.addEventListener('submit', (e) => this.handleContactFormSubmit(e));
            }
        }
    }
    
    renderPortfolioModal() {
        const headerTitle = this.modal.querySelector('.modal-header h2');
        const contentArea = this.modal.querySelector('.modal-content');
        
        if (headerTitle) {
            headerTitle.textContent = '📁 Nuestro Portafolios';
        }
        
        if (contentArea) {
            let portfolioHTML = '<div class="portfolio-grid">';
            
            MODAL_DATA.portfolio.forEach(project => {
                portfolioHTML += `
                    <article class="portfolio-item">
                        <div class="portfolio-image">
                            <img src="${project.image}" alt="${project.title}">
                            <div class="portfolio-overlay">
                                <div class="portfolio-overlay-content">
                                    <h4>${project.title}</h4>
                                    <p>${project.category}</p>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-content">
                            <h4>${project.title}</h4>
                            <p class="portfolio-category">${project.category}</p>
                            <p class="portfolio-description">${project.description}</p>
                            <div class="portfolio-tech">
                                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                            <p class="portfolio-year">${project.year}</p>
                            <div class="portfolio-links">
                                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="portfolio-link">Ver Proyecto</a>
                            </div>
                        </div>
                    </article>
                `;
            });
            
            portfolioHTML += '</div>';
            contentArea.innerHTML = portfolioHTML;
        }
    }
    
    handleContactFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // In a real scenario, you would send this to a backend API
        console.log('Form submitted:', data);
        
        // Show success message
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        form.reset();
        this.closeModal();
    }
    
    lockBodyScroll() {
        this.scrollPosition = window.scrollY || document.documentElement.scrollTop;
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = getScrollbarWidth() + 'px';
    }
    
    unlockBodyScroll() {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        window.scrollTo(0, this.scrollPosition);
    }
    
    showModal() {
        this.lockBodyScroll();
        this.modal.classList.add('active');
        this.overlay.classList.add('active');
        this.modal.setAttribute('aria-hidden', 'false');
        this.overlay.setAttribute('aria-hidden', 'false');
        this.modal.focus();
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        this.overlay.classList.remove('active');
        this.modal.setAttribute('aria-hidden', 'true');
        this.overlay.setAttribute('aria-hidden', 'true');
        this.unlockBodyScroll();
    }
}
