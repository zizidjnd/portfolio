const translations = {
    en: {
        name: "TEIBI ABDELHADI",
        role: "Computer Science Student & Prompt Engineer",
        hero_bio: "Computer Science student and innovator in the world of Prompt Engineering. I don't just write code; I practice Vibe Coding to transform complex ideas into smooth and luxurious digital experiences. My passion lies in bridging the gap between human language and machines to build a smarter programming future.",
        skills_title: "Tech Stack",
        skills_cs: "Computer Science Student",
        skills_prompt: "Prompt Engineering: Crafting sophisticated AI logic.",
        skills_vibe: "Vibe Coding: Building integrated projects at lightning speed.",
        skills_lang: "Programming Languages: Proficient hobbyist in Python and C.",
        projects_title: "Projects",
        project_hub_desc: "An integrated platform for showcasing creative services and UI design with modern visual effects.",
        project_hotel_desc: "An official hotel website featuring a fast booking system, comfortable UI, and full multi-language support.",
        project_law_desc: "A formal and dignified design for a law firm, focusing on building trust through clear information structure and premium design.",
        project_app_desc: "An experimental project demonstrating the ability to handle smart and fast applications.",
        contact_title: "Get in Touch",
        contact_email: "Email",
        contact_linkedin: "LinkedIn",
        footer_text: "© 2024 TEIBI ABDELHADI. All rights reserved.",
        img_placeholder: "Image will be placed here",
        lang_btn: "العربية"
    },
    ar: {
        name: "طيبي عبد الهادي",
        role: "طالب إعلام آلي ومهندس أوامر",
        hero_bio: "طالب إعلام آلي، ومبتكر في عالم هندسة الأوامر (Prompt Engineering). لا أكتفي بكتابة الكود، بل أمارس الـ Vibe Coding لتحويل الأفكار المعقدة إلى تجارب رقمية سلسة وفخمة. شغفي يكمن في سد الفجوة بين لغة الإنسان والآلة لبناء مستقبل برمجى أكثر ذكاءً.",
        skills_title: "المهارات التقنية",
        skills_cs: "تخصص: طالب إعلام آلي",
        skills_prompt: "هندسة الأوامر (Prompt Engineering): صياغة منطق متطور للذكاء الاصطناعي.",
        skills_vibe: "الـ Vibe Coding: القدرة على بناء مشاريع متكاملة بسرعة البرق باستخدام الأدوات الحديثة.",
        skills_lang: "لغات البرمجة: هاوٍ متمكن في Python و C.",
        projects_title: "المشاريع",
        project_hub_desc: "منصة متكاملة لعرض الخدمات الإبداعية وتصميم واجهات المستخدم بتأثيرات بصرية حديثة.",
        project_hotel_desc: "موقع فندقي رسمي يتميز بنظام حجز سريع، واجهة مستخدم مريحة، ودعم كامل للغات المتعددة.",
        project_law_desc: "تصميم رسمي وقور لمؤسسة قانونية، يركز على بناء الثقة من خلال هيكلية معلوماتية واضحة وتصميم 'بريميوم'.",
        project_app_desc: "مشروع تجريبي يظهر القدرة على التعامل مع التطبيقات الذكية والسريعة.",
        contact_title: "تواصل معي",
        contact_email: "الإيميل",
        contact_linkedin: "لينكد إن",
        footer_text: "© 2024 طيبي عبد الهادي. جميع الحقوق محفوظة.",
        img_placeholder: "الصورة ستوضع هنا",
        lang_btn: "English"
    }
};

let currentLang = 'ar';

function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.documentElement.dir = dir;
    document.documentElement.lang = lang;

    // Update Text Content
    document.getElementById('nav-name').textContent = t.name;
    document.getElementById('lang-text').textContent = t.lang_btn;
    document.getElementById('hero-role').textContent = t.role;
    document.getElementById('hero-name').textContent = t.name;
    
    // Typewriter effect for Hero Bio
    const heroBio = document.getElementById('hero-bio');
    heroBio.innerHTML = '';
    heroBio.style.display = 'flex';
    heroBio.style.flexWrap = 'wrap';
    heroBio.style.gap = '0.5rem';
    
    const words = t.hero_bio.split(' ');
    words.forEach((word, i) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.opacity = '0';
        span.style.filter = 'blur(10px)';
        span.style.display = 'inline-block';
        span.style.transition = `all 0.2s ease-out ${i * 0.05}s`;
        heroBio.appendChild(span);
        
        // Trigger animation
        setTimeout(() => {
            span.style.opacity = '1';
            span.style.filter = 'blur(0px)';
        }, 10);
    });

    document.getElementById('text-projects').textContent = t.projects_title;
    document.getElementById('text-contact').textContent = t.contact_email;
    document.getElementById('img-placeholder').textContent = t.img_placeholder;
    document.getElementById('skills-title').textContent = t.skills_title;
    document.getElementById('skills-subtitle').textContent = t.skills_cs;
    document.getElementById('skill-prompt-desc').textContent = t.skills_prompt;
    document.getElementById('skill-vibe-desc').textContent = t.skills_vibe;
    document.getElementById('skill-lang-desc').textContent = t.skills_lang;
    document.getElementById('projects-section-title').textContent = t.projects_title;
    document.getElementById('contact-title').textContent = t.contact_title;
    document.getElementById('footer-text').textContent = t.footer_text;

    // Update Project Descriptions
    document.querySelectorAll('.project-desc').forEach(el => {
        const key = el.getAttribute('data-key');
        if (t[key]) el.textContent = t[key];
    });

    // Refresh Lucide icons if needed
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Event Listeners
document.getElementById('lang-toggle').addEventListener('click', () => {
    updateLanguage(currentLang === 'ar' ? 'en' : 'ar');
});

// Initial Language Load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage('ar');
});

// Scroll Reveal Logic (Simple implementation of Framer Motion behavior)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});
