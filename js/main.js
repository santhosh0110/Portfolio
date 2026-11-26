/**
 * ============================================================================
 * SANTHOSHGANDHI M | DEVELOPER PORTFOLIO SCRIPTS
 * Features:
 * - Full Dark / Light Theme Manager with LocalStorage Persistence
 * - Authentic Crimson Red (#f9004d) 3D Architecture Canvas
 * - Dynamic Role Typing Engine
 * - Smooth Header Scroll Spy & Progress Indicator
 * - Accessible Modal System for Projects
 * - Skill Categorization Tabs
 * - Live Contact Form Validation & Clipboard Helpers
 * - Reduced Motion & Performance Optimizations
 * ============================================================================
 */

(function () {
    'use strict';

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.addEventListener('DOMContentLoaded', () => {
        initThemeManager();
        initScrollProgress();
        initNavigation();
        initTypingEffect();
        init3DHeroCanvas();
        initSkillTabs();
        initProjectModals();
        initContactForm();
        initScrollReveal();
        initBackToTop();
        initDynamicYear();
    });

    /* ==========================================================================
       0. Dark / Light Theme Manager
       ========================================================================== */
    function initThemeManager() {
        const themeToggleBtn = document.getElementById('theme-toggle');
        const root = document.documentElement;

        // Retrieve saved theme or system preference
        const savedTheme = localStorage.getItem('portfolio-theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
        applyTheme(currentTheme);

        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
                applyTheme(currentTheme);
                localStorage.setItem('portfolio-theme', currentTheme);
            });
        }

        // Listen for system changes if user hasn't explicitly set a preference
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('portfolio-theme')) {
                currentTheme = e.matches ? 'dark' : 'light';
                applyTheme(currentTheme);
            }
        });

        function applyTheme(theme) {
            root.setAttribute('data-theme', theme);
            if (themeToggleBtn) {
                const icon = themeToggleBtn.querySelector('i');
                if (icon) {
                    icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
                }
                const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
                themeToggleBtn.setAttribute('title', label);
                themeToggleBtn.setAttribute('aria-label', label);
            }
            // Notify 3D canvas of theme shift
            window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
        }
    }

    /* ==========================================================================
       1. Scroll Progress & Sticky Navbar Spy
       ========================================================================== */
    function initScrollProgress() {
        const progressBar = document.getElementById('scroll-progress');
        const header = document.querySelector('.navbar-header');
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');

        function onScroll() {
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            
            // Progress Bar
            if (progressBar && docHeight > 0) {
                const scrolled = (scrollY / docHeight) * 100;
                progressBar.style.width = `${scrolled}%`;
            }

            // Header blur on scroll
            if (header) {
                if (scrollY > 40) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }

            // Active section highlighting
            let currentId = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 120;
                const sectionHeight = section.offsetHeight;
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    currentId = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (currentId && link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ==========================================================================
       2. Mobile Navigation
       ========================================================================== */
    function initNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-menu a');

        if (!navToggle || !navMenu) return;

        function toggleMenu() {
            const isOpen = navMenu.classList.toggle('open');
            const icon = navToggle.querySelector('i');
            navToggle.setAttribute('aria-expanded', isOpen);
            if (icon) {
                icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
            }
        }

        function closeMenu() {
            navMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            const icon = navToggle.querySelector('i');
            if (icon) icon.className = 'fa-solid fa-bars';
        }

        navToggle.addEventListener('click', toggleMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('open')) {
                closeMenu();
            }
        });
    }

    /* ==========================================================================
       3. Dynamic Typewriter Effect
       ========================================================================== */
    function initTypingEffect() {
        const target = document.getElementById('typing-text');
        if (!target) return;

        const words = [
            "Software Developer",
            ".NET Core & Blazor Specialist",
            "AI-Assisted Engineer",
            "Enterprise Backend Architect"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typeSpeed = 90;
        const deleteSpeed = 45;
        const holdDelay = 2200;

        function type() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                target.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                target.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let speed = isDeleting ? deleteSpeed : typeSpeed;

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                speed = holdDelay;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                speed = 400;
            }

            setTimeout(type, speed);
        }

        setTimeout(type, 800);
    }

    /* ==========================================================================
       4. Interactive 3D Software Engineering Node Canvas
       Redesigned with the authentic Crimson Red (#f9004d) palette and
       dynamic light/dark contrast adaptation.
       ========================================================================== */
    function init3DHeroCanvas() {
        const canvas = document.getElementById('hero-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;

        // Node definitions (Representing software architecture components)
        const nodeCount = window.innerWidth < 768 ? 32 : 55;
        const nodes = [];
        const techLabels = ["C#", ".NET", "Blazor", "SQL", "RabbitMQ", "AWS", "API", "AI", "Core", "Azure"];

        class Node3D {
            constructor(index) {
                this.x = (Math.random() - 0.5) * width * 0.9;
                this.y = (Math.random() - 0.5) * height * 0.9;
                this.z = (Math.random() - 0.5) * 600;
                this.vx = (Math.random() - 0.5) * 0.6;
                this.vy = (Math.random() - 0.5) * 0.6;
                this.vz = (Math.random() - 0.5) * 0.6;
                this.radius = Math.random() * 2.5 + 2;
                this.label = (index < techLabels.length) ? techLabels[index] : null;
                // Palette: #f9004d (Crimson), #38bdf8 (Sky Blue), #ff336f (Rose)
                this.color = index % 3 === 0 ? '#f9004d' : (index % 3 === 1 ? '#38bdf8' : '#ff336f');
            }

            update(rotX, rotY) {
                if (!prefersReducedMotion) {
                    this.x += this.vx;
                    this.y += this.vy;
                    this.z += this.vz;

                    // Boundaries
                    if (Math.abs(this.x) > width * 0.5) this.vx *= -1;
                    if (Math.abs(this.y) > height * 0.5) this.vy *= -1;
                    if (Math.abs(this.z) > 350) this.vz *= -1;
                }

                // 3D rotation based on mouse orientation
                const cosY = Math.cos(rotY);
                const sinY = Math.sin(rotY);
                const cosX = Math.cos(rotX);
                const sinX = Math.sin(rotX);

                // Rotate around Y
                let rx = this.x * cosY + this.z * sinY;
                let rz = -this.x * sinY + this.z * cosY;

                // Rotate around X
                let ry = this.y * cosX - rz * sinX;
                rz = this.y * sinX + rz * cosX;

                // Perspective projection
                const fov = 400;
                const scale = fov / (fov + rz + 400);

                this.projX = (width / 2) + rx * scale;
                this.projY = (height / 2) + ry * scale;
                this.projScale = scale;
                this.alpha = Math.min(Math.max((rz + 350) / 700, 0.15), 0.95);
            }

            draw(isLight) {
                if (this.projScale <= 0) return;

                ctx.beginPath();
                ctx.arc(this.projX, this.projY, this.radius * this.projScale, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.alpha * (isLight ? 0.95 : 0.85);
                ctx.shadowColor = this.color;
                ctx.shadowBlur = isLight ? 4 : (10 * this.projScale);
                ctx.fill();

                // Draw label for key architecture nodes
                if (this.label && this.projScale > 0.8) {
                    ctx.font = `600 ${Math.floor(10.5 * this.projScale)}px 'JetBrains Mono', monospace`;
                    ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
                    ctx.globalAlpha = this.alpha * (isLight ? 0.85 : 0.75);
                    ctx.fillText(this.label, this.projX + 8, this.projY - 6);
                }
            }
        }

        for (let i = 0; i < nodeCount; i++) {
            nodes.push(new Node3D(i));
        }

        let rotX = 0;
        let rotY = 0;
        let targetRotX = 0;
        let targetRotY = 0;

        window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            if (e.clientY < rect.bottom) {
                targetRotY = ((e.clientX / width) - 0.5) * 0.45;
                targetRotX = -((e.clientY / height) - 0.5) * 0.45;
            }
        }, { passive: true });

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
        });

        // Animation Loop with visibility pausing
        let animationFrameId;
        let isHeroVisible = true;

        const observer = new IntersectionObserver(([entry]) => {
            isHeroVisible = entry.isIntersecting;
            if (isHeroVisible) {
                render();
            } else {
                cancelAnimationFrame(animationFrameId);
            }
        }, { threshold: 0.05 });

        observer.observe(canvas.parentElement);

        function render() {
            ctx.clearRect(0, 0, width, height);

            const isLight = document.documentElement.getAttribute('data-theme') === 'light';

            rotX += (targetRotX - rotX) * 0.05;
            rotY += (targetRotY - rotY) * 0.05;

            // Idle subtle spin
            if (!prefersReducedMotion) {
                rotY += 0.001;
            }

            // Update & project all nodes
            nodes.forEach(node => node.update(rotX, rotY));

            // Connect neighboring nodes with glowing vectors (#f9004d brand color)
            const maxDistance = 140;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].projX - nodes[j].projX;
                    const dy = nodes[i].projY - nodes[j].projY;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance && nodes[i].projScale > 0 && nodes[j].projScale > 0) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].projX, nodes[i].projY);
                        ctx.lineTo(nodes[j].projX, nodes[j].projY);
                        const connectionAlpha = (1 - dist / maxDistance) * 0.28 * Math.min(nodes[i].alpha, nodes[j].alpha);
                        ctx.strokeStyle = '#f9004d';
                        ctx.globalAlpha = isLight ? (connectionAlpha * 0.75) : connectionAlpha;
                        ctx.lineWidth = 1 * nodes[i].projScale;
                        ctx.shadowBlur = 0;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            nodes.forEach(node => node.draw(isLight));

            ctx.globalAlpha = 1;
            if (isHeroVisible) {
                animationFrameId = requestAnimationFrame(render);
            }
        }

        render();
    }

    /* ==========================================================================
       5. Skill Category Filtering Tabs
       ========================================================================== */
    function initSkillTabs() {
        const tabBtns = document.querySelectorAll('.skill-tab-btn');
        const cards = document.querySelectorAll('.skill-category-card');

        if (!tabBtns.length || !cards.length) return;

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                cards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(10px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 250);
                    }
                });
            });
        });
    }

    /* ==========================================================================
       6. Project Modals & Architecture Inspector
       ========================================================================== */
    function initProjectModals() {
        const modalBackdrop = document.getElementById('project-modal');
        const modalContent = document.getElementById('modal-dynamic-content');
        const modalClose = document.getElementById('modal-close');
        const detailButtons = document.querySelectorAll('.project-details-btn');

        if (!modalBackdrop || !modalContent) return;

        // Structured project data strictly from Santhosh's resume
        const projectData = {
            wms: {
                title: "WMS – Shipment & Warehouse Management",
                tech: "ASP.NET MVC • C# • SQL Server • SDLC",
                scope: "Enterprise Logistics System",
                overview: "Developed and maintained shipment and invoice modules to handle real-time enterprise logistics data processing and validation. The platform processes high volumes of cargo dispatches with automated rule-based verifications.",
                contributions: [
                    "Engineered robust shipment dispatch and invoicing workflows in ASP.NET MVC with C#.",
                    "Implemented document upload and mandatory compliance validation to prevent dispatch errors.",
                    "Optimized SQL Server stored procedures and transaction models for high-concurrency inventory locking.",
                    "Actively supported User Acceptance Testing (UAT) and handled rapid resolution of production issues."
                ]
            },
            bauth: {
                title: "B-Auth – Centralized Authentication Platform",
                tech: "Blazor • ASP.NET Core • MudBlazor • RBAC",
                scope: "Security & Identity Management",
                overview: "Engineered an enterprise authentication and authorization management platform designed to deliver role-based security across multiple internal applications and client portals.",
                contributions: [
                    "Constructed a centralized web administration portal using Blazor and MudBlazor UI components.",
                    "Implemented comprehensive Role-Based Access Control (RBAC), claim-based authorization, and custom permissions.",
                    "Built dynamic application configuration modules to manage tenant settings and user access rights.",
                    "Accelerated code optimization, unit test generation, and refactoring using AI-assisted development tools."
                ]
            },
            blink: {
                title: "Blink – Banking Gateway Integration",
                tech: "Blazor • MudBlazor • Banking APIs • Dynamic JSON",
                scope: "Financial & Credit Gateway",
                overview: "Integrated the Blink application with tier-1 banking credit gateway systems, allowing organizations to conduct high-security financial transactions, reconciliation, and automated credit assessments.",
                contributions: [
                    "Designed high-usability, responsive financial transaction interfaces using MudBlazor.",
                    "Engineered flexible form builders capable of processing and validating complex nested JSON configurations.",
                    "Built secure data import/export pipelines for batch credit ledger operations and compliance auditing.",
                    "Ensured rigorous security, encryption, and validation for sensitive banking API payloads."
                ]
            },
            cast: {
                title: "CAST – Cash Accounting Studio",
                tech: "AWS Lambda • RabbitMQ • ASP.NET Core • Serverless",
                scope: "FinTech & Cloud Reconciliation",
                overview: "Cash Accounting Studio is a core financial reconciliation system utilized by reconciliation teams to process high-volume bank statements, trade matching, and accounting workflows.",
                contributions: [
                    "Migrated mission-critical legacy backend accounting services to serverless AWS Lambda architecture.",
                    "Dramatically improved system throughput, auto-scaling elasticity, and reduced cloud operational expenditure.",
                    "Integrated RabbitMQ as an asynchronous message broker to decouple ledger imports from reporting pipelines.",
                    "Leveraged AI coding assistants to quickly troubleshoot complex financial matching algorithms."
                ]
            },
            cscan: {
                title: "C-Scan – AI-Powered Receipt Scanning & OCR",
                tech: "Python • Tesseract OCR • OpenCV • Image Pipelines",
                scope: "Computer Vision & Automation",
                overview: "An AI-powered receipt scanning and automated optical character recognition solution built to eliminate manual invoice entry for expense management systems.",
                contributions: [
                    "Constructed an automated image preprocessing pipeline utilizing OpenCV (deskewing, noise removal, binarization).",
                    "Integrated Tesseract OCR with custom regex parsers to accurately extract merchant, date, tax, and line-item totals.",
                    "Significantly reduced manual data entry overhead while achieving high extraction precision across varied camera shots.",
                    "Applied AI-assisted workflow automation to speed up computer vision algorithm iteration."
                ]
            }
        };

        function openModal(projectId) {
            const data = projectData[projectId];
            if (!data) return;

            modalContent.innerHTML = `
                <div class="modal-header">
                    <span class="project-scope-tag" style="margin-bottom: 8px; display: inline-block;">${data.scope}</span>
                    <h3 class="modal-title">${data.title}</h3>
                    <div class="project-tech" style="margin-top: 10px;">
                        <span>${data.tech}</span>
                    </div>
                </div>
                <div class="modal-body">
                    <p>${data.overview}</p>
                    <div class="modal-highlights">
                        <h4>Key Engineering Contributions</h4>
                        <ul>
                            ${data.contributions.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div style="display: flex; gap: 12px; align-items: center; justify-content: flex-end;">
                        <a href="#contact" class="btn btn-primary btn-sm modal-contact-btn">Discuss This Architecture</a>
                    </div>
                </div>
            `;

            // Contact link inside modal closes modal
            const contactBtn = modalContent.querySelector('.modal-contact-btn');
            if (contactBtn) {
                contactBtn.addEventListener('click', closeModal);
            }

            modalBackdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modalBackdrop.classList.remove('active');
            document.body.style.overflow = '';
        }

        detailButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const projectId = btn.getAttribute('data-project');
                openModal(projectId);
            });
        });

        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }

        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
                closeModal();
            }
        });
    }

    /* ==========================================================================
       7. Accessible Contact Form & Clipboard Helper
       ========================================================================== */
    function initContactForm() {
        const form = document.getElementById('contact-form');
        const feedback = document.getElementById('form-feedback');
        const copyBtn = document.getElementById('copy-email-btn');

        // Copy Email to Clipboard
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                const email = 'santhoshgandhim@gmail.com';
                navigator.clipboard.writeText(email).then(() => {
                    const originalTitle = copyBtn.getAttribute('title') || 'Copy';
                    copyBtn.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i>';
                    setTimeout(() => {
                        copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
                        copyBtn.setAttribute('title', originalTitle);
                    }, 2000);
                });
            });
        }

        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = form.querySelector('[name="name"]').value.trim();
            const email = form.querySelector('[name="email"]').value.trim();
            const subject = form.querySelector('[name="subject"]').value.trim();
            const message = form.querySelector('[name="message"]').value.trim();
            const submitBtn = form.querySelector('button[type="submit"]');

            // Validation check
            if (!name || !email || !subject || !message) {
                showFeedback("Please complete all required fields.", "error");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFeedback("Please enter a valid email address.", "error");
                return;
            }

            // Visual loading state
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

            try {
                // Submit via Web3Forms endpoint or direct mail fallback
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify({
                        access_key: "f768b55d-357f-4428-ba90-54e7d825c345", // Web3Forms public contact key
                        name: name,
                        email: email,
                        subject: `Portfolio Inquiry: ${subject}`,
                        message: message,
                        from_name: "Santhoshgandhi Portfolio"
                    })
                });

                const result = await response.json();

                if (response.status === 200 && result.success) {
                    showFeedback("Thank you! Your message has been sent successfully. I will get back to you soon.", "success");
                    form.reset();
                } else {
                    // Fallback to mailto
                    showFeedback("Message received! Opening your email client to verify dispatch...", "success");
                    setTimeout(() => {
                        window.location.href = `mailto:santhoshgandhim@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
                    }, 1200);
                }
            } catch (err) {
                // Offline or blocked network fallback
                showFeedback("Opening default email client to send your message...", "success");
                window.location.href = `mailto:santhoshgandhim@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        });

        function showFeedback(msg, type) {
            if (!feedback) return;
            feedback.textContent = msg;
            feedback.className = `form-feedback ${type}`;
            setTimeout(() => {
                feedback.className = 'form-feedback';
            }, 6000);
        }
    }

    /* ==========================================================================
       8. IntersectionObserver Scroll Reveal
       ========================================================================== */
    function initScrollReveal() {
        if (prefersReducedMotion) {
            document.querySelectorAll('.reveal-bottom, .reveal-left, .reveal-right, .fade-in-up').forEach(el => {
                el.classList.add('active');
            });
            return;
        }

        const elements = document.querySelectorAll('.reveal-bottom, .reveal-left, .reveal-right, .fade-in-up');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        elements.forEach(el => observer.observe(el));
    }

    /* ==========================================================================
       9. Back to Top Floating Action
       ========================================================================== */
    function initBackToTop() {
        const topBtn = document.getElementById('back-to-top');
        if (!topBtn) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 450) {
                topBtn.classList.add('visible');
            } else {
                topBtn.classList.remove('visible');
            }
        }, { passive: true });

        topBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ==========================================================================
       10. Dynamic Copyright Year
       ========================================================================== */
    function initDynamicYear() {
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

})();
