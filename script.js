document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.info-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });

    const leadForm = document.getElementById('lead-form');
    
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(leadForm);
            const data = Object.fromEntries(formData.entries());
            
            const submitBtn = leadForm.querySelector('button');
            submitBtn.textContent = 'SENDING...';
            submitBtn.style.opacity = '0.7';
            submitBtn.disabled = true;

            setTimeout(() => {
                renderSuccessMessage(leadForm);
            }, 1500);
        });
    }

    function renderSuccessMessage(formElement) {
        const container = formElement.parentElement;
        
        formElement.style.opacity = '0';
        
        setTimeout(() => {
            container.innerHTML = `
                <div class="success-screen" style="text-align: center; padding: 60px 0; animation: fadeIn 0.5s ease-out;">
                    <div style="font-size: 4rem; margin-bottom: 20px;">⚡️</div>
                    <h2 style="color: var(--accent-lime); font-size: 2.5rem; font-weight: 900; text-transform: uppercase;">Application Sent</h2>
                    <p style="color: var(--text-gray); margin: 20px 0 40px; font-size: 1.1rem;">
                        Alex Prime has received your data. <br> 
                        Check your Instagram or Email within 24 hours.
                    </p>
                    <a href="index.html" class="btn-main" style="display: inline-block; width: auto; padding: 20px 50px;">Return Home</a>
                </div>
            `;
        }, 300);
    }

    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
            input.parentElement.style.transition = '0.3s ease';
        });
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
        });
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(style);