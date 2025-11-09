// main.js

// --- RECIPIENT EMAIL for mailto links ---
const RECIPIENT_EMAIL = 'contact@stylehub.example';

// --- Shared Form Validation Functions ---
function setError(input, message) {
    input.classList.add('field-error');
    // Using simple element ID for error display
    const errEl = document.getElementById(input.id + '-err');
    if (errEl) errEl.textContent = message;
}

function clearError(input) {
    input.classList.remove('field-error');
    const errEl = document.getElementById(input.id + '-err');
    if (errEl) errEl.textContent = '';
}

// --- 1. Contact Form Validation (contact.html) ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    // Add a feedback element if it doesn't exist in the HTML
    let feedbackEl = document.getElementById('form-feedback');
    if (!feedbackEl) {
        feedbackEl = document.createElement('div');
        feedbackEl.id = 'form-feedback';
        contactForm.parentNode.insertBefore(feedbackEl, contactForm.nextSibling);
    }
    feedbackEl.className = 'feedback';


    function validateContactForm() {
        let valid = true;
        feedbackEl.textContent = '';
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const type = document.getElementById('type');
        const message = document.getElementById('message');

        // Clear existing errors
        [name, email, type, message].forEach(clearError);

        // Name validation
        if (!name.value.trim() || name.value.trim().length < 2) {
            setError(name, 'Please enter your full name (2+ characters).');
            valid = false;
        }

        // Email validation
        if (!email.value.trim()) {
            setError(email, 'Email is required.');
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            setError(email, 'Enter a valid email address.');
            valid = false;
        }

        // Type validation
        if (!type.value) {
            setError(type, 'Please select a message type.');
            valid = false;
        }

        // Message validation
        if (!message.value.trim() || message.value.trim().length < 10) {
            setError(message, 'Message must be at least 10 characters.');
            valid = false;
        }
        return valid;
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        feedbackEl.className = 'feedback';
        if (!validateContactForm()) {
            feedbackEl.textContent = 'Please correct the highlighted fields and try again.';
            feedbackEl.classList.add('error');
            return;
        }

        const payload = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            type: document.getElementById('type').value,
            message: document.getElementById('message').value.trim(),
            submittedAt: new Date().toISOString()
        };

        feedbackEl.textContent = 'Preparing email...';
        feedbackEl.classList.add('success');

        // Construct mailto link
        const subject = encodeURIComponent(`[${payload.type}] Contact form from ${payload.name}`);
        const body = encodeURIComponent(
`Name: ${payload.name}
Email: ${payload.email}
Type: ${payload.type}
Submitted: ${new Date().toLocaleString()}

Message:
${payload.message}`
        );
        const mailto = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
        
        // Open user's email client
        window.open(mailto, '_blank');

        feedbackEl.textContent = 'Your message is ready in your email client. If nothing opened, please contact us directly.';
        feedbackEl.classList.add('success');

        // Reset form after a short delay
        setTimeout(() => {
            contactForm.reset();
            feedbackEl.textContent = '';
            feedbackEl.className = 'feedback';
        }, 6000);
    });

    contactForm.querySelectorAll('input, textarea, select').forEach(el => {
        el.addEventListener('input', () => clearError(el));
    });
}

// --- 2. Enquiry Form Validation (enquiry.html) ---
const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) {
    // Add a feedback element if it doesn't exist in the HTML
    let feedbackEl = document.getElementById('form-feedback');
    if (!feedbackEl) {
        feedbackEl = document.createElement('div');
        feedbackEl.id = 'form-feedback';
        enquiryForm.parentNode.insertBefore(feedbackEl, enquiryForm.nextSibling);
    }
    feedbackEl.className = 'feedback';

    function validateEnquiryForm() {
        let valid = true;
        feedbackEl.textContent = '';
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const type = document.getElementById('enquiry-type');
        const message = document.getElementById('message');

        // Clear existing errors
        [name, email, type, message].forEach(clearError);

        if (!name.value.trim()) {
            setError(name, 'Name is required.');
            valid = false;
        }
        if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            setError(email, 'A valid email is required.');
            valid = false;
        }
        if (!type.value) {
            setError(type, 'Please select an enquiry type.');
            valid = false;
        }
        if (!message.value.trim()) {
            setError(message, 'A message is required.');
            valid = false;
        }
        return valid;
    }

    enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        feedbackEl.className = 'feedback';
        if (!validateEnquiryForm()) {
            feedbackEl.textContent = 'Please correct the highlighted fields.';
            feedbackEl.classList.add('error');
            return;
        }

        const type = document.getElementById('enquiry-type').value;
        let responseMessage = '';

        // Simulate response logic based on enquiry type
        switch (type) {
            case 'product-question':
                responseMessage = 'Thank you! A product specialist will review your question and respond with item details within 24 hours.';
                break;
            case 'sizing-help':
                responseMessage = 'Thank you for your sizing query. We will send our detailed sizing chart and fitting guide to your email shortly.';
                break;
            case 'styling-service':
                responseMessage = 'Thank you for your interest! Our styling service packages start at R1500. A stylist will contact you to arrange a free consultation.';
                break;
            case 'stock-request':
                responseMessage = 'Thank you! We will check our current and incoming stock availability for the item you mentioned and get back to you.';
                break;
            default:
                responseMessage = 'Thank you for your enquiry! We will respond to your message within 2 business days.';
        }

        feedbackEl.textContent = responseMessage;
        feedbackEl.classList.add('success');

        // Reset form after a short delay
        setTimeout(() => {
            enquiryForm.reset();
            feedbackEl.textContent = '';
            feedbackEl.className = 'feedback';
        }, 8000);
    });

    enquiryForm.querySelectorAll('input, textarea, select').forEach(el => {
        el.addEventListener('input', () => clearError(el));
    });
}

// --- 3. Product Page: Tracking & Alerts (Used by products.html) ---
window.trackOrder = function() {
    const trackingInput = document.getElementById('tracking-id');
    const result = document.getElementById('tracking-result');
    if (!trackingInput || !result) return;

    if (trackingInput.value.trim() === "") {
        result.textContent = "⚠️ Please enter a valid Tracking ID.";
        result.style.color = "red";
    } else {
        result.textContent = `✅ Your order with ID "${trackingInput.value.trim()}" is being processed.`;
        result.style.color = "green";
    }
};

// --- WISHILST/CART CODE (This is the fix for your buttons) ---
document.querySelectorAll('.add-wishlist').forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to Wishlist! ❤️');
    });
});

document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to Cart! 🛒');
    });
});
// --- END OF WISHILST/CART CODE ---


// --- 4. Product Page: Search Filter (products.html) ---
const searchBar = document.getElementById('product-search-bar');
const productGrid = document.getElementById('product-grid');

if (searchBar && productGrid) {
    searchBar.addEventListener('keyup', () => {
        const searchTerm = searchBar.value.toLowerCase();
        const products = productGrid.querySelectorAll('.product-card');

        products.forEach(product => {
            const title = product.querySelector('h3').textContent.toLowerCase();
            const price = product.querySelector('.product-price').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || price.includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
}

// --- 5. Product Page: Lightbox Gallery (products.html) ---
const lightbox = document.getElementById('lightbox');
if (lightbox) {
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');

    document.querySelectorAll('.product-card img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
            lightboxCaption.textContent = img.alt;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}