/* ========================================
   thetreeestate.com - Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Navbar Elements
    const hamburger = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector('.navbar-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.navbar-menu a');

    // Modal Elements
    const openModalBtn = document.querySelector('.hero-cta-btn');
    const projectButtons = document.querySelectorAll('.project-inquiry-btn');
    const modal = document.querySelector('.modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    const modalProjectName = document.querySelector('.modal-project-name');
    const modalProjectInput = document.querySelector('#project-name');

    let lastScrollTop = 0;

    // Hamburger Menu Toggle
    if (hamburger && navbarMenu && menuOverlay) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navbarMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
        });
    }

    // Close Menu on Link Click
    if (navLinks.length && hamburger && navbarMenu && menuOverlay) {
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navbarMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
            });
        });
    }

    // Close Menu on Overlay Click
    if (menuOverlay && hamburger && navbarMenu) {
        menuOverlay.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navbarMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
        });
    }

    // Hide/Show Header on Scroll
    if (header) {
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scrolling Down - Hide Header
                header.classList.add('hide');
            } else {
                // Scrolling Up - Show Header
                header.classList.remove('hide');
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }

    // Close Menu on Outside Click (when clicking on body)
    document.addEventListener('click', function(event) {
        const navbar = document.querySelector('.navbar');
        
        if (navbar && hamburger && navbarMenu && menuOverlay) {
            if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
                if (navbarMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navbarMenu.classList.remove('active');
                    menuOverlay.classList.remove('active');
                }
            }
        }
    });

    // Modal Functions
    const openModal = (projectName = '') => {
        if (modal && modalOverlay) {
            modal.classList.add('active');
            modalOverlay.classList.add('active');
            document.body.classList.add('modal-open');
        }

        if (modalProjectName) {
            modalProjectName.textContent = projectName ? `المشروع: ${projectName}` : '';
        }

        if (modalProjectInput) {
            modalProjectInput.value = projectName;
        }
    };

    const closeModal = () => {
        if (modal && modalOverlay) {
            modal.classList.remove('active');
            modalOverlay.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    };

    if (openModalBtn) {
        openModalBtn.addEventListener('click', () => openModal(''));
    }

    if (projectButtons.length) {
        projectButtons.forEach(button => {
            button.addEventListener('click', () => {
                const projectName = button.getAttribute('data-project') || '';
                openModal(projectName);
            });
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // ========================================
    // LIGHTBOX FUNCTIONALITY
    // ========================================

    const galleryImages = [
        'assets/gallery-1.jpg',
        'assets/gallery-2.jpg',
        'assets/gallery-3.jpg',
        'assets/gallery-4.jpg',
        'assets/gallery-5.jpg',
        'assets/gallery-6.jpg',
        'assets/gallery-7.jpg',
        'assets/gallery-8.jpg',
        'assets/gallery-9.jpg'
    ];

    let currentImageIndex = 0;

    window.openLightbox = function(index) {
        currentImageIndex = index;
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        
        if (lightbox && lightboxImage) {
            lightboxImage.src = galleryImages[currentImageIndex];
            lightbox.classList.add('active');
            document.body.classList.add('modal-open');
        }
    };

    window.closeLightbox = function() {
        const lightbox = document.getElementById('lightbox');
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    };

    window.changeImage = function(direction) {
        currentImageIndex += direction;
        
        if (currentImageIndex >= galleryImages.length) {
            currentImageIndex = 0;
        } else if (currentImageIndex < 0) {
            currentImageIndex = galleryImages.length - 1;
        }
        
        const lightboxImage = document.getElementById('lightbox-image');
        if (lightboxImage) {
            lightboxImage.src = galleryImages[currentImageIndex];
        }
    };

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(event) {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.classList.contains('active')) {
            if (event.key === 'Escape') {
                window.closeLightbox();
            } else if (event.key === 'ArrowRight') {
                window.changeImage(1);
            } else if (event.key === 'ArrowLeft') {
                window.changeImage(-1);
            }
        }
    });
});

/* ========================================
   Sitewide EN/AR Language Controller
   ======================================== */

(function() {
    const STORAGE_KEY = 'siteLang';
    const DEFAULT_LANG = 'en';
    const SUPPORTED_LANGS = new Set(['en', 'ar']);
    const EXCLUDED_PAGES = new Set();
    const currentPath = (window.location.pathname || '').split('/').pop() || 'index.html';

    if (EXCLUDED_PAGES.has(currentPath)) {
        return;
    }

    const TRANSLATIONS = {
        common: {
            navCommercial: { en: 'Commercial Real Estate', ar: 'عقارات تجارية' },
            navMivida: { en: 'Mivida', ar: 'مفيدا' },
            navCfc: { en: 'Cairo Festival City', ar: 'كايرو فيستال سيتي' },
            navPrivacy: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
            navDisclaimer: { en: 'Disclaimer', ar: 'إخلاء المسؤولية' },
            navContact: { en: 'Contact Us', ar: 'اتصل بنا' },

            footerQuickLinks: { en: 'Quick Links', ar: 'روابط سريعة' },
            footerContact: { en: 'Contact Details', ar: 'بيانات التواصل' },
            footerRights: { en: '\u00A9 2026 Global Marketing Real Estate. All rights reserved.', ar: '\u00A9 2026 Global Marketing Real Estate. جميع الحقوق محفوظة.' },

            cookieText: {
                en: 'We use cookies and performance measurement technologies to improve your browsing experience and measure website visits. By continuing to use this website, you agree to this use.',
                ar: 'نستخدم ملفات تعريف الارتباط (Cookies) وتقنيات قياس الأداء لتحسين تجربة التصفح وقياس زيارات الموقع. استمرارك في استخدام الموقع يُعد موافقة على ذلك.'
            },
            cookiePrivacy: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
            cookieDisclaimer: { en: 'Disclaimer', ar: 'إخلاء المسؤولية' },

            footerAbout: {
                en: 'An independent real estate media and marketing platform that showcases residential and investment opportunities from multiple developers for informational and marketing purposes only.',
                ar: 'هي منصة إعلامية وتسويقية مملوكة وتُدار بواسطة وسيط عقاري مستقل، وتهدف إلى عرض وتسويق الفرص السكنية والاستثمارية المتاحة من مطورين عقاريين مختلفين، وذلك لأغراض تعريفية وتسويقية فقط.'
            }
        },
        'index.html': {
            heroTitle: { en: 'Your Premier Real Estate Destination in Egypt', ar: 'وجهتك العقارية الأولى في مصر' },
            heroDescription: { en: 'Buy \u00B7 Rent \u00B7 Invest - Apartments, Villas & Commercial Properties in Egypt\'s Finest Compounds', ar: 'بيع \u00B7 إيجار \u00B7 استثمار - شقق وفيلات وعقارات تجارية في أفضل كمبوندات مصر' },
            heroCta: { en: 'Explore units', ar: 'استعرض الوحدات' },
            categoriesTitle: { en: 'What are you looking for?', ar: 'ما الذي تبحث عنه؟' },
            categoriesSubtitle: { en: 'A diverse portfolio of residential and commercial properties for every need and budget.', ar: 'تشكيلة متنوعة من العقارات السكنية والتجارية تناسب جميع الاحتياجات والميزانيات' },
            catMividaTitle: { en: 'Mivida Rentals', ar: 'وحدات مفيدا للإيجار' },
            catMividaDesc: { en: 'Apartments, villas, and townhouses for rent in Mivida - New Cairo.', ar: 'شقق وفيلات وتاون هاوس للإيجار في كمبوند مفيدا - القاهرة الجديدة' },
            catCfcTitle: { en: 'Cairo Festival City Rentals', ar: 'كايرو فيستال سيتي للإيجار' },
            catCfcDesc: { en: 'Apartments and standalone villas for rent in Cairo Festival City - Fifth Settlement.', ar: 'شقق وفيلات مستقلة للإيجار في كمبوند كايرو فيستال سيتي - التجمع الخامس' },
            catCommercialTitle: { en: 'Commercial Real Estate', ar: 'العقارات التجارية' },
            catCommercialDesc: { en: 'Offices, retail units, clinics, and prime commercial opportunities.', ar: 'مكاتب ومحلات وعيادات ووحدات تجارية في أبرز المشاريع التجارية' },
            categoryCtaUnits: { en: 'Browse units', ar: 'استعرض الوحدات' },
            categoryCtaOpportunities: { en: 'Browse opportunities', ar: 'استعرض الفرص' },
            statUnits: { en: 'Available units', ar: 'وحدة متاحة' },
            statCompounds: { en: 'Prime compounds', ar: 'كمبوندات مميزة' },
            statService: { en: 'Integrated services', ar: 'خدمات متكاملة' },
            statSupport: { en: 'Support & communication', ar: 'دعم وتواصل' },
            whyEyebrow: { en: 'Who we are', ar: 'من نحن' },
            whyTitle: { en: 'Why Global Marketing Real Estate?', ar: 'لماذا Global Marketing Real Estate؟' },
            whySubtitle: { en: 'We bring top real estate opportunities into one place with expertise, transparency, and end-to-end service.', ar: 'نجمع لك أفضل الفرص العقارية في مكان واحد، بخبرة وشفافية وخدمة متكاملة' }
        },
        'mivida.html': {
            pageTitle: { en: 'Mivida Rental Units', ar: 'وحدات مفيدا للإيجار' },
            pageSubtitle: { en: 'Apartments, villas, and townhouses in Mivida - New Cairo', ar: 'شقق وفيلات وتاون هاوس في كمبوند مفيدا - القاهرة الجديدة' },
            emptyState: { en: 'No units are currently available in this category. Contact us for inquiries.', ar: 'لا توجد وحدات متاحة في هذه الفئة حالياً. تواصل معنا للاستفسار.' }
        },
        'cairo-festival-city.html': {
            pageTitle: { en: 'Cairo Festival City Rental Units', ar: 'وحدات كايرو فيستال سيتي للإيجار' },
            pageSubtitle: { en: 'Apartments and townhouses in Cairo Festival City - Fifth Settlement', ar: 'شقق وتاون هاوس في كمبوند كايرو فيستال سيتي - التجمع الخامس' },
            emptyState: { en: 'No units are currently available in this category. Contact us for inquiries.', ar: 'لا توجد وحدات متاحة في هذه الفئة حالياً. تواصل معنا للاستفسار.' }
        },
        'commercial-real-estate.html': {
            pageTitle: { en: 'Commercial Properties for Rent', ar: 'عقارات تجارية للإيجار' },
            pageSubtitle: { en: 'Diverse commercial units - offices, shops, clinics, and more', ar: 'وحدات تجارية متنوعة - مكاتب، محلات، عيادات وأكثر' },
            emptyState: { en: 'No units are currently available in this category. Contact us for inquiries.', ar: 'لا توجد وحدات متاحة في هذه الفئة حالياً. تواصل معنا للاستفسار.' }
        },
        'privacy.html': {
            policyTitle: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' }
        },
        'disclaimer.html': {
            policyTitle: { en: 'Disclaimer', ar: 'إخلاء المسؤولية' }
        },
        'contact.html': {
            contactTitle: { en: 'Contact Us', ar: 'اتصل بنا' }
        },
        'thank-you.html': {
            thankTitle: { en: 'Thank You!', ar: 'شكراً لك!' },
            thankSubtitle: { en: 'Your inquiry has been received successfully.', ar: 'تم استقبال بيانات الاستفسار الخاصة بك بنجاح' },
            thankHelpTitle: { en: 'Need help?', ar: 'هل تحتاج إلى مساعدة؟' },
            thankHelpText: { en: 'If your request is urgent, you can contact us directly:', ar: 'في حالة الاستعجالية أو إذا كان لديك أي استفسار، يمكنك التواصل معنا مباشرة:' },
            thankCallNow: { en: 'Call us now', ar: 'اتصل بنا الآن' },
            thankWhatsApp: { en: 'WhatsApp', ar: 'واتساب' },
            thankBackHome: { en: 'Back to Home', ar: 'العودة للصفحة الرئيسية' }
        }
    };

    function getSavedLang() {
        try {
            const value = localStorage.getItem(STORAGE_KEY);
            return SUPPORTED_LANGS.has(value) ? value : DEFAULT_LANG;
        } catch (error) {
            return DEFAULT_LANG;
        }
    }

    function setSavedLang(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (error) {
            // Keep UI functional even if storage is unavailable.
        }
    }

    function getText(key, lang) {
        const pageMap = TRANSLATIONS[currentPath] || {};
        const entry = pageMap[key] || TRANSLATIONS.common[key];
        if (!entry) return null;
        return entry[lang] || entry.en || null;
    }

    function updateToggleButtons(lang) {
        const nextLabel = lang === 'en' ? 'AR' : 'EN';
        document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
            btn.textContent = nextLabel;
            btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Arabic' : 'Switch to English');
        });
    }

    function applyDataI18n(lang) {
        document.querySelectorAll('[data-i18n]').forEach(node => {
            const key = node.getAttribute('data-i18n');
            const text = getText(key, lang);
            if (text !== null) {
                node.textContent = text;
            }
        });

        document.querySelectorAll('[data-i18n-attr]').forEach(node => {
            const attrsSpec = node.getAttribute('data-i18n-attr') || '';
            attrsSpec.split(',').map(s => s.trim()).filter(Boolean).forEach(binding => {
                const parts = binding.split(':');
                if (parts.length !== 2) return;
                const attrName = parts[0].trim();
                const key = parts[1].trim();
                const text = getText(key, lang);
                if (text !== null) {
                    node.setAttribute(attrName, text);
                }
            });
        });
    }

    function applyLegacyLanguageBlocks(lang) {
        const arBlock = document.getElementById('arabic-content');
        const enBlock = document.getElementById('english-content');
        if (!arBlock || !enBlock) return;

        if (lang === 'ar') {
            arBlock.style.display = 'block';
            enBlock.style.display = 'none';
        } else {
            arBlock.style.display = 'none';
            enBlock.style.display = 'block';
        }
    }

    function applyLanguage(lang) {
        const resolvedLang = SUPPORTED_LANGS.has(lang) ? lang : DEFAULT_LANG;
        document.documentElement.lang = resolvedLang;
        document.documentElement.dir = resolvedLang === 'ar' ? 'rtl' : 'ltr';

        updateToggleButtons(resolvedLang);
        applyDataI18n(resolvedLang);
        applyLegacyLanguageBlocks(resolvedLang);

        document.dispatchEvent(new CustomEvent('siteLanguageChanged', {
            detail: { lang: resolvedLang, page: currentPath }
        }));
    }

    function toggleLanguage() {
        const currentLang = getSavedLang();
        const nextLang = currentLang === 'ar' ? 'en' : 'ar';
        setSavedLang(nextLang);
        applyLanguage(nextLang);
    }

    window.toggleLanguage = toggleLanguage;

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
            btn.addEventListener('click', toggleLanguage);
        });

        applyLanguage(getSavedLang());
    });
})();

/* ========================================
   Cookie Notice Banner
   ======================================== */

// Show cookie banner on every session load
// Auto-hides after 10s, or on scroll with a small delay
window.addEventListener('load', function() {
    const cookieBanner = document.getElementById('cookieBanner');
    if (!cookieBanner) return;

    const COOKIE_BANNER_SEEN_KEY = 'cookieBannerSeenInSession';
    let hasSeenBannerInSession = false;

    try {
        hasSeenBannerInSession = sessionStorage.getItem(COOKIE_BANNER_SEEN_KEY) === '1';
    } catch (error) {
        // Some browsers/privacy modes may block sessionStorage access.
        hasSeenBannerInSession = false;
    }

    if (hasSeenBannerInSession) return;

    const SHOW_DELAY      = 800;   // ms before banner appears
    const VISIBLE_DURATION = 10000; // ms before auto-hide (10s)
    const SCROLL_HIDE_DELAY = 500;  // ms delay after scroll before hiding

    let isHidden       = false;
    let scrollTimer    = null;
    let autoHideTimer  = null;

    const hideCookieBanner = () => {
        if (isHidden) return;
        isHidden = true;
        clearTimeout(autoHideTimer);
        cookieBanner.classList.add('hide');
        setTimeout(() => {
            cookieBanner.classList.remove('show');
            cookieBanner.classList.remove('hide');
        }, 400);
    };

    // Show after short delay
    setTimeout(() => {
        try {
            sessionStorage.setItem(COOKIE_BANNER_SEEN_KEY, '1');
        } catch (error) {
            // Keep banner behavior working even if storage is unavailable.
        }

        cookieBanner.classList.add('show');

        // Auto-hide after VISIBLE_DURATION
        autoHideTimer = setTimeout(hideCookieBanner, VISIBLE_DURATION);

        // Hide on scroll with SCROLL_HIDE_DELAY
        window.addEventListener('scroll', function onScroll() {
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                hideCookieBanner();
                window.removeEventListener('scroll', onScroll);
            }, SCROLL_HIDE_DELAY);
        }, { passive: true });

    }, SHOW_DELAY);
});
