document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active navigation link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    function updateActiveNavLink() {
        const scrollPosition = window.pageYOffset + 150; // Account for navbar height
        let current = '';
        
        // Find the section that the user is currently viewing
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            // Check if we're in the middle part of this section
            if (scrollPosition >= sectionTop && scrollPosition <= (sectionTop + sectionHeight - 100)) {
                current = sectionId;
            }
        });
        
        // Special case for the very top of the page
        if (window.pageYOffset < 100) {
            current = 'hero';
        }
        
        // Special case for the bottom of the page
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 100) {
            const lastSection = sections[sections.length - 1];
            if (lastSection) {
                current = lastSection.getAttribute('id');
            }
        }

        // Update navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && current && href === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    
    // Run once on page load
    updateActiveNavLink();

    // Initial active link set (for when page loads at the top)
    if (window.pageYOffset === 0) {
        document.querySelector('.navbar ul li a[href="#hero"]').classList.add('active');
    }

    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');
    const darkThemeLordicon = document.querySelector('.dark-theme-lordicon');
    const lightThemeLordicon = document.querySelector('.light-theme-lordicon');
    const darkThemeSkillIcon = document.querySelector('.dark-theme-skill-icon');
    const lightThemeSkillIcon = document.querySelector('.light-theme-skill-icon');
    const darkThemeAutomationIcon = document.querySelector('.dark-theme-automation-icon');
    const lightThemeAutomationIcon = document.querySelector('.light-theme-automation-icon');
    const darkThemeSoftSkillsIcon = document.querySelector('.dark-theme-soft-skills-icon');
    const lightThemeSoftSkillsIcon = document.querySelector('.light-theme-soft-skills-icon');
    const darkThemeConceptsIcon = document.querySelector('.dark-theme-concepts-icon');
    const lightThemeConceptsIcon = document.querySelector('.light-theme-concepts-icon');
    const darkThemeGithubIcon = document.querySelector('.dark-theme-github-icon');
    const lightThemeGithubIcon = document.querySelector('.light-theme-github-icon');
    const darkThemeGmailIcon = document.querySelector('.dark-theme-gmail-icon');
    const lightThemeGmailIcon = document.querySelector('.light-theme-gmail-icon');
    const darkThemeLinkedinIcon = document.querySelector('.dark-theme-linkedin-icon');
    const lightThemeLinkedinIcon = document.querySelector('.light-theme-linkedin-icon');
    const darkThemeContactIcon = document.querySelector('.dark-theme-contact-icon');
    const lightThemeContactIcon = document.querySelector('.light-theme-contact-icon');

    // Function to apply theme to Lordicons
    function applyLordiconTheme(isLightMode) {
        if (darkThemeLordicon && lightThemeLordicon) {
            darkThemeLordicon.style.display = isLightMode ? 'none' : 'inline-block';
            lightThemeLordicon.style.display = isLightMode ? 'inline-block' : 'none';
        }
        if (darkThemeSkillIcon && lightThemeSkillIcon) {
            darkThemeSkillIcon.style.display = isLightMode ? 'none' : 'inline-block';
            lightThemeSkillIcon.style.display = isLightMode ? 'inline-block' : 'none';
        }
        if (darkThemeAutomationIcon && lightThemeAutomationIcon) {
            darkThemeAutomationIcon.style.display = isLightMode ? 'none' : 'inline-block';
            lightThemeAutomationIcon.style.display = isLightMode ? 'inline-block' : 'none';
        }
        if (darkThemeSoftSkillsIcon && lightThemeSoftSkillsIcon) {
            darkThemeSoftSkillsIcon.style.display = isLightMode ? 'none' : 'inline-block';
            lightThemeSoftSkillsIcon.style.display = isLightMode ? 'inline-block' : 'none';
        }
        if (darkThemeConceptsIcon && lightThemeConceptsIcon) {
            darkThemeConceptsIcon.style.display = isLightMode ? 'none' : 'inline-block';
            lightThemeConceptsIcon.style.display = isLightMode ? 'inline-block' : 'none';
        }
        if (darkThemeGithubIcon && lightThemeGithubIcon) {
            darkThemeGithubIcon.style.display = isLightMode ? 'none' : 'inline-block';
            lightThemeGithubIcon.style.display = isLightMode ? 'inline-block' : 'none';
        }
        if (darkThemeGmailIcon && lightThemeGmailIcon) {
            darkThemeGmailIcon.style.display = isLightMode ? 'none' : 'inline-block';
            lightThemeGmailIcon.style.display = isLightMode ? 'inline-block' : 'none';
        }
        if (darkThemeLinkedinIcon && lightThemeLinkedinIcon) {
            darkThemeLinkedinIcon.style.display = isLightMode ? 'none' : 'inline-block';
            lightThemeLinkedinIcon.style.display = isLightMode ? 'inline-block' : 'none';
        }
        if (darkThemeContactIcon && lightThemeContactIcon) {
            darkThemeContactIcon.style.display = isLightMode ? 'none' : 'inline-block';
            lightThemeContactIcon.style.display = isLightMode ? 'inline-block' : 'none';
        }
    }

    // Initial theme application
    const themeToggleIcon = themeToggle.querySelector('i');
    if (currentTheme) {
        body.classList.add(currentTheme);
        applyLordiconTheme(currentTheme === 'light-mode');
        if (currentTheme === 'light-mode' && themeToggleIcon) {
            themeToggleIcon.classList.replace('fa-moon', 'fa-sun');
        }
    } else {
        // Default to dark mode if no preference is set
        body.classList.add('dark-mode');
        applyLordiconTheme(false); // Apply dark mode colors
    }

    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            if (themeToggleIcon) {
                themeToggleIcon.classList.replace('fa-moon', 'fa-sun');
            }
            localStorage.setItem('theme', 'light-mode');
            initStars(); // Re-initialize stars on theme change
            applyLordiconTheme(true);
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            if (themeToggleIcon) {
                themeToggleIcon.classList.replace('fa-sun', 'fa-moon');
            }
            localStorage.setItem('theme', 'dark-mode');
            initStars(); // Re-initialize stars on theme change
            applyLordiconTheme(false);
        }
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.innerHTML = 'Thanks for your message!';
                    formStatus.classList.remove('error');
                    formStatus.classList.add('success');
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    if (Object.hasOwnProperty.call(data, 'errors')) {
                        formStatus.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        formStatus.innerHTML = 'Oops! There was a problem submitting your form';
                    }
                    formStatus.classList.remove('success');
                    formStatus.classList.add('error');
                }
            } catch (error) {
                formStatus.innerHTML = 'Oops! There was a problem submitting your form';
                formStatus.classList.remove('success');
                formStatus.classList.add('error');
            }
        });
    }

    // Project Modal Logic
    const projectModal = document.getElementById('project-modal');
    const closeModalButton = projectModal.querySelector('.close-button');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTags = document.getElementById('modal-tags');
    const modalLinks = document.getElementById('modal-links');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent opening modal if a link inside the card was clicked
            if (e.target.tagName === 'A' || e.target.parentNode.tagName === 'A') {
                return;
            }

            const image = card.dataset.image;
            const title = card.dataset.title;
            const description = card.dataset.description;
            const tags = card.dataset.tags ? card.dataset.tags.split(', ') : [];
            const liveDemo = card.dataset.liveDemo;
            const githubRepo = card.dataset.githubRepo;

            modalImage.src = image;
            modalImage.alt = title;
            modalTitle.textContent = title;
            modalDescription.textContent = description;

            modalTags.innerHTML = '';
            tags.forEach(tag => {
                const span = document.createElement('span');
                span.textContent = tag;
                modalTags.appendChild(span);
            });

            modalLinks.innerHTML = '';
            if (liveDemo && liveDemo !== '#') {
                const liveDemoLink = document.createElement('a');
                liveDemoLink.href = liveDemo;
                liveDemoLink.target = '_blank';
                liveDemoLink.classList.add('btn', 'small-btn');
                liveDemoLink.textContent = 'Live Demo';
                modalLinks.appendChild(liveDemoLink);
            }
            if (githubRepo && githubRepo !== '#') {
                const githubRepoLink = document.createElement('a');
                githubRepoLink.href = githubRepo;
                githubRepoLink.target = '_blank';
                githubRepoLink.classList.add('btn', 'small-btn');
                githubRepoLink.textContent = 'GitHub Repo';
                modalLinks.appendChild(githubRepoLink);
            }

            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            projectModal.style.display = 'flex'; // Display the modal
        });
    });

    closeModalButton.addEventListener('click', () => {
        projectModal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    });

    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Starfield Animation for Hero Section
    const canvas = document.getElementById('starfield-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            console.error('Could not get 2D context for canvas.');
            return;
        }
        let stars = [];

        class Star {
            constructor(x, y, radius, twinkleSpeed) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.twinkleSpeed = twinkleSpeed;
                this.opacity = Math.random();
                this.direction = Math.random() > 0.5 ? 1 : -1; // 1 for increasing, -1 for decreasing
            }

            draw(offsetY = 0) {
                ctx.beginPath();
                ctx.arc(this.x, this.y + offsetY, this.radius, 0, Math.PI * 2);
                const starColor = document.body.classList.contains('light-mode') ? 'rgba(0, 0, 0,' : 'rgba(255, 255, 255,';
                ctx.fillStyle = `${starColor} ${this.opacity})`;
                ctx.fill();
            }

            update() {
                this.opacity += this.direction * this.twinkleSpeed;

                if (this.opacity > 1 || this.opacity < 0) {
                    this.direction *= -1;
                }
            }
        }

        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            console.log(`Canvas resized to: ${canvas.width}x${canvas.height}`);
            initStars();
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas(); // Initial resize

        function initStars() {
            stars = [];
            const numberOfStars = (canvas.width * canvas.height) / 10000; // Adjust density
            console.log(`Initializing ${numberOfStars} stars.`);
            for (let i = 0; i < numberOfStars; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const radius = Math.random() * 1.5 + 0.5; // Size between 0.5 and 2
                const twinkleSpeed = Math.random() * 0.01 + 0.005; // Speed between 0.005 and 0.015
                stars.push(new Star(x, y, radius, twinkleSpeed));
            }
        }

        function animateStars() {
            // console.log('Animating stars...'); // Too chatty, only for specific debugging
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < stars.length; i++) {
                stars[i].update();
                stars[i].draw();
            }
            requestAnimationFrame(animateStars);
        }

        initStars();
        animateStars();
    }

    // Memoji Image Transition
    const memojiImage = document.getElementById('memoji-transition');
    if (memojiImage) {
        const memojiImages = [
            'assets/variation 2.svg',
            'assets/variation 4.svg'
        ];
        let currentMemojiIndex = 0;

        function changeMemoji() {
            memojiImage.classList.add('fade-out');
            setTimeout(() => {
                currentMemojiIndex = (currentMemojiIndex + 1) % memojiImages.length;
                memojiImage.src = memojiImages[currentMemojiIndex];
                memojiImage.classList.remove('fade-out');
                memojiImage.classList.add('fade-in');
            }, 500); // Half of the transition duration

            setTimeout(() => {
                memojiImage.classList.remove('fade-in');
            }, 1000); // Total transition duration
        }

        // Change memoji every 3 seconds (adjust as needed)
        setInterval(changeMemoji, 3000);
    }

    // Scroll Animation (Intersection Observer)
    const sectionsToAnimate = document.querySelectorAll('.about-section, .skills-section, .portfolio-section, .github-section, .experience-section, .contact-section, .thanksgiving-section');

    // Add transition property to all sections for smooth animation
    sectionsToAnimate.forEach(section => {
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Only apply 'show-on-scroll' if it's not already visible
                // and then stop observing
                if (entry.target.classList.contains('hidden-on-scroll')) {
                    entry.target.classList.add('show-on-scroll');
                    entry.target.classList.remove('hidden-on-scroll');
                    observer.unobserve(entry.target); // Stop observing after first animation
                }
            }
            // No else block needed, as we want it to remain visible once animated
        });
    }, observerOptions);

    sectionsToAnimate.forEach(section => {
        section.classList.add('hidden-on-scroll'); // Set initial hidden state
        observer.observe(section);
    });
});