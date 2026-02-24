const translations = {
    ar: {
        title: "سَنا | نحو مستقبل مستدام",
        footerBrand: "سَنا — Sana",
        footerTagline: "نبتكر حلولاً ذكية لمستقبل مستدام، نساعدك على مراقبة استهلاكك بكل سهولة.",
        footerTagline: "نظام ذكي لمراقبة استهلاك الكهرباء والمياه",
        footerLocation: "مكة، المملكة العربية السعودية",
        footerCopy: "© ٢٠٢٦ سَنا. جميع الحقوق محفوظة.",
        footerEmail: "info@sana.sa",
        footerPhone: "+٩٦٦ ٥٤٦ ٨٩٥ ٤٥٦",
        logo: "سَنا",
        login: "تسجيل الدخول",
        navCta: "ابدأ مجاناً",
        heroSubtitle: "نحو مستقبل مستدام",
        heroTitle: 'وفّر <span class="gradient-text">أكثر</span>،<br>استهلك أقل',
        heroDesc: "سَنا نظام ذكي لمراقبة استهلاك الكهرباء والمياه. تحكّم في فواتيرك، تلقَّ تنبيهات فورية، واكسب مكافآت على توفيرك.",
        ctaMain: "ابدأ مجاناً الآن",
        badge1: "بدون رسوم خفية",
        badge2: "آمن ومشفر",
        badge3: "متوافق مع الجميع",
        float1: "نقاط الاستدامة ٧٨٪",
        float2: "+٨ ساعات تطوعية",
        dashTitle: "لوحة تحكم سَنا",
        dashDate: "فبراير ٢٠٢٦",
        statElec: "الكهرباء",
        statElecVal: "٧٥٠",
        statElecSub: "-١٢٪ هذا الشهر",
        statWater: "المياه",
        statWaterVal: "٢,٨٥٠",
        statWaterSub: "-٨٪ هذا الشهر",
        usageTitle: "الاستهلاك الشهري",
        alert: "ارتفاع في الاستهلاك خلال يوليو — تحقق الآن",
        icon: "arrow-left"

    },
    en: {
        title: "Sana | Towards a Sustainable Future",
        logo: "SANA",
        footerBrand: "SANA — Smart System",
        footerTagline: "Innovating smart solutions for a sustainable future, helping you monitor consumption with ease.",
        footerTagline: "Smart monitoring for electricity and water consumption",
        footerLocation: "Makkah, Saudi Arabia",
        footerEmail: "info@sana.sa",
        footerPhone: "+966 546 895 456",
        footerCopy: "© 2026 Sana. All rights reserved.",
        login: "Login",
        navCta: "Start Free",
        heroSubtitle: "Towards a sustainable future",
        heroTitle: 'Save <span class="gradient-text">More</span>,<br>Consume Less',
        heroDesc: "Sana is a smart system for monitoring electricity and water consumption. Control your bills, get instant alerts, and earn rewards for saving.",
        ctaMain: "Start Free Now",
        badge1: "No hidden fees",
        badge2: "Secure & Encrypted",
        badge3: "Universal Compatibility",
        float1: "Sustainability Score 78%",
        float2: "+8 Volunteer Hours",
        dashTitle: "Sana Dashboard",
        dashDate: "February 2026",
        statElec: "Electricity",
        statElecVal: "750",
        statElecSub: "-12% this month",
        statWater: "Water",
        statWaterVal: "2,850",
        statWaterSub: "-8% this month",
        usageTitle: "Monthly Usage",
        alert: "Usage spike detected in July — check now",
        icon: "arrow-right"
    }
};

function toggleLang() {
    const html = document.documentElement;
    const currentLang = html.getAttribute('lang');
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    const t = translations[newLang];

    html.setAttribute('lang', newLang);
    html.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    
    document.getElementById('lang-btn').innerText = newLang === 'ar' ? 'EN' : 'AR';
    document.getElementById('page-title').innerText = t.title;
    document.getElementById('logo-text').innerText = t.logo;
    document.getElementById('login-link').innerText = t.login;
    document.getElementById('nav-cta').innerText = t.navCta;
    document.getElementById('hero-subtitle').innerText = t.heroSubtitle;
    document.getElementById('hero-title').innerHTML = t.heroTitle;
    document.getElementById('hero-desc').innerText = t.heroDesc;
    document.getElementById('cta-main').innerText = t.ctaMain;
    document.getElementById('cta-secondary').innerText = t.login;
    document.getElementById('badge1').innerText = t.badge1;
    document.getElementById('badge2').innerText = t.badge2;
    document.getElementById('badge3').innerText = t.badge3;
    document.querySelector('#float-1 span').innerText = t.float1;
    document.querySelector('#float-2 span').innerText = t.float2;
    document.getElementById('dash-title').innerText = t.dashTitle;
    document.getElementById('dash-date').innerText = t.dashDate;
    document.getElementById('stat-elec').innerText = t.statElec;
    document.getElementById('val-elec').innerHTML = `${t.statElecVal} <small>kWh</small>`;
    document.getElementById('stat-elec-sub').innerText = t.statElecSub;
    document.getElementById('stat-water').innerText = t.statWater;
    document.getElementById('val-water').innerHTML = `${t.statWaterVal} <small>L</small>`;
    document.getElementById('stat-water-sub').innerText = t.statWaterSub;
    document.getElementById('usage-title').innerText = t.usageTitle;
    document.getElementById('alert-text').innerText = t.alert;
    document.getElementById('footer-brand').innerText = t.footerBrand;
    document.getElementById('footer-tagline').innerText = t.footerTagline;
    document.getElementById('footer-location').innerText = t.footerLocation;
    document.getElementById('footer-copy').innerText = t.footerCopy;
    
    // Update Icon
    const icon = document.getElementById('cta-icon');
    icon.setAttribute('data-lucide', t.icon);
    lucide.createIcons();
}

function toggleTheme() {
    const body = document.body;
    const current = body.getAttribute('data-theme');
    body.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
    lucide.createIcons();
}



function switchTab(role) {
    const userTab = document.getElementById('userTab');
    const empTab = document.getElementById('empTab');
    const userFields = document.getElementById('userFields');

    if (role === 'user') {
        userTab.classList.add('active');
        empTab.classList.remove('active');
        userFields.style.opacity = '1';
    } else {
        empTab.classList.add('active');
        userTab.classList.remove('active');
        // يمكن إضافة حقول الموظف هنا
    }
}

function togglePass(id) {
    const input = document.getElementById(id);
    input.type = input.type === 'password' ? 'text' : 'password';
}

function handleLogin() {
    // هنا نضع كود التحقق
    alert("جاري التحقق من البيانات...");
}

// تهيئة الأيقونات
lucide.createIcons();
function switchTab(role) {
    const userFields = document.getElementById('userFields');
    const empFields = document.getElementById('empFields');
    const userTab = document.getElementById('userTab');
    const empTab = document.getElementById('empTab');

    if (role === 'user') {
        userFields.style.display = 'block';
        empFields.style.display = 'none';
        userTab.classList.add('active');
        empTab.classList.remove('active');
    } else {
        userFields.style.display = 'none';
        empFields.style.display = 'block';
        empTab.classList.add('active');
        userTab.classList.remove('active');
    }
}

function togglePass(id) {
    const input = document.getElementById(id);
    input.type = input.type === 'password' ? 'text' : 'password';
}

// تفاعل لوحة التحكم (تأثير 3D)
const card = document.getElementById('interactive-card');
const wrapper = document.querySelector('.dashboard-wrapper');

wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    card.style.transform = `rotateX(${(y - centerY) / 20}deg) rotateY(${(centerX - x) / 20}deg)`;
});

wrapper.addEventListener('mouseleave', () => card.style.transform = 'rotateX(0deg) rotateY(0deg)');

// خلفية النقاط المتحركة (Canvas)
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let dots = [];

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    dots = [];
    for(let i=0; i<60; i++) {
        dots.push({
            x: Math.random()*canvas.width, 
            y: Math.random()*canvas.height, 
            vx: (Math.random()-0.5)*0.4, 
            vy: (Math.random()-0.5)*0.4
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    ctx.strokeStyle = isDark ? 'rgba(74, 144, 226, 0.15)' : 'rgba(74, 144, 226, 0.08)';
    ctx.fillStyle = isDark ? 'rgba(74, 144, 226, 0.25)' : 'rgba(74, 144, 226, 0.12)';
    
    dots.forEach(dot => {
        dot.x += dot.vx; dot.y += dot.vy;
        if(dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if(dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
        ctx.beginPath(); ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI*2); ctx.fill();
        dots.forEach(other => {
            const dist = Math.hypot(dot.x - other.x, dot.y - other.y);
            if(dist < 150) { 
                ctx.beginPath(); ctx.moveTo(dot.x, dot.y); ctx.lineTo(other.x, other.y); ctx.stroke(); 
            }
        });
    });
    requestAnimationFrame(draw);
}

window.addEventListener('resize', initCanvas);
initCanvas(); 
draw();