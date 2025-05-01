document.addEventListener('DOMContentLoaded', () => {
    // --- DATA --- 
    const userData = {
        name: "ZÜMRAY <span class='highlight'>ŞƏRİFOVA</span>",
        title: "STUDENT",
        contact: [
            { icon: "phone.png", text: "+994 51 627 33 55" },
            { icon: "email.png", text: "zumraysherifova@gmail.com" },
            { icon: "location.png", text: "Bakı şəhəri, Yasamal rayonu" }
        ],
        socialMedia: [
        ],
        education: [
            { period: "2013 - 2024", school: "Qəbələ rayon Həmzəlli kənd tam orta məktəbi" },
            { period: "2024 - 2025", school: "Azərbaycan Texniki Universiteti - İnformasiya Təhlükəsizliyi" }
        ],
        skills: ["Linux əməliyyat sistemi ilə işıəmək. Proqramlaşdırma dilləri (Python, C++ və s.)", "Komanda ilə işləmək və ünsiyyət bacarığı", "Ofis Proqramları (Word, Excel, PowerPoint)"],
        languages: ["Azərbaycan - Çox yaxşı", "English - Elementary", "Türk - Çox yaxşı"],
        profile: "Özünü inkişaf etdirməyə çalışan,məsuliyyətli və səbirli bir insanam.Hal-hazırda informasiya təhlükəsizliyi sahəsində təhsil alıram və bu sahədə peşəkar olmaq üçün daim yeni biliklər öyrənməyə çalışıram.Texnologiyalara marağım böyükdür və praktiki təcrübə qazanmaq üçün fərdi layihələr üzərində işləyirəm. Komandada işləməyi bacarıram, amma müstəqil işləyərkən də məsuliyyətlə yanaşıram. Eyni zamanda sakit və diqqətli xarakterə sahibəm.",
        workExperience: [
            {
                title: "Video Redaktoru – PixelFrame Studios",
                details: ["Sosial media və YouTube üçün redaktə edilmiş qısa və uzun formalı məzmun. Tətbiq olunan rəng korreksiyası, hərəkət qrafikası və vizual hekayəni təkmilləşdirmək üçün səs balansı. Yüksək müştəri məmnuniyyəti ilə sıx son tarixlər altında təqdim olunan layihələr."]
            },
            {
                title: "İT Dəstək Köməkçisi – BrightTech Universiteti",
                details: ["Tələbə və işçi heyətinə aparat və proqram təminatı problemləri ilə bağlı texniki yardım göstərmişdir. Quraşdırılmış əməliyyat sistemləri və konfiqurasiya edilmiş şəbəkə printerləri. Sənədləşdirilmiş dəstək biletləri və vaxtında həll edilməsi təmin edilmişdir."]
            }
        ],
        reference: "Əli Kamal İT dəstəyi komandasında part-time işlədiyim müddətdə menecerim olub. O, mənim problemləri həll etmək, istifadəçilərlə ünsiyyət qurmaq və texniki sənədləri idarə etmək bacarığımı müşahidə etdi.",
        certifications: [
            {
                name: "Python Hamı üçün İxtisas",
                description: "Python proqramlaşdırma, məlumat strukturları, veb kazıma, verilənlər bazaları və məlumatların vizuallaşdırılmasını əhatə edən çox kurslu ixtisas. Təcrübəli layihələr və viktorinalar daxildir."
            },
            {
                name: "AWS Sertifikatlı Bulud Təcrübəçisi",
                description: "Bulud arxitekturası, faktura, təhlükəsizlik və AWS tərəfindən təklif olunan əsas xidmətlər daxil olmaqla bulud hesablama əsasları üçün giriş səviyyəli sertifikatlaşdırma. Bulud karyerasına başlayanlar üçün idealdır."
            }
        ],
        projects: [
            {
                name: "Portfolio veb saytının inkişafı",
                description: "HTML, CSS və JavaScript-dən istifadə edərək tam cavab verən şəxsi portfel yaradın. Əlaqə formasını forma doğrulaması ilə inteqrasiya etdi və filtrləmə funksiyası ilə müxtəlif layihələri nümayiş etdirdi. GitHub Səhifələri vasitəsilə yerləşdirilir."
            },
            {
                name: "Kibertəhlükəsizlik Laboratoriyasının Simulyasiyası",
                description: "VirtualBox və Kali Linux istifadə edərək virtual nüfuz test laboratoriyası hazırlayıb. Kobud güc və SQL inyeksiyası da daxil olmaqla müxtəlif kiberhücumları simulyasiya etdi və aşkarlama və təsirin azaldılması addımlarını sənədləşdirdi."
            }
        ]
    };

    // --- ADD DATA TO PAGE ---
    document.getElementById('userName').innerHTML = userData.name;
    document.getElementById('userTitle').textContent = userData.title;

    const createList = (array, iconPath = "") => {
        return array.map(item => 
            `<p class="editable" contenteditable="false"><img src="photos/${iconPath}${item.icon || ''}" alt="" class="icon"> ${item.text}</p>`
        ).join('');
    };

    const createEducation = (array) => {
        return array.map(item => `<p><strong>${item.period}</strong><br>${item.school}</p>`).join('');
    };

    const createSkills = (array) => {
        return `<ul style="list-style-type: none;">${array.map(skill => `<li>${skill}</li>`).join('')}</ul>`;
    };

    const createWork = (array) => {
        return array.map(job => `
            <p><strong>${job.title}</strong></p>
            <ul style="list-style-type: none;">${job.details.map(d => `<li>${d}</li>`).join('')}</ul>
        `).join('');
    };

    const createCertifications = (array) => {
        return array.map(cert => `
            <p><strong>${cert.name}</strong></p>
            <p>${cert.description}</p>
        `).join('');
    };

    const createProjects = (array) => {
        return array.map(project => `
            <p><strong>${project.name}</strong></p>
            <p>${project.description}</p>
        `).join('');
    };

    document.getElementById('contactInfo').innerHTML = createList(userData.contact);
    document.getElementById('socialMedia').innerHTML = createList(userData.socialMedia);
    document.getElementById('educationInfo').innerHTML = createEducation(userData.education);
    document.getElementById('skillsInfo').innerHTML = createSkills(userData.skills);
    document.getElementById('languagesInfo').innerHTML = createSkills(userData.languages);
    document.getElementById('profileInfo').innerHTML = `<p>${userData.profile}</p>`;
    document.getElementById('workExperience').innerHTML = createWork(userData.workExperience);
    document.getElementById('referenceInfo').innerHTML = `<p>${userData.reference}</p>`;
    document.getElementById('certificationsInfo').innerHTML = createCertifications(userData.certifications);
    document.getElementById('projectsInfo').innerHTML = createProjects(userData.projects);

    // --- OLD FUNCTIONS (Edit, Save, Accordion, Zip) ---
    const editBtn = document.getElementById('editBtn');
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    let isEditing = false;

    // Accordion open/close
    accordionBtns.forEach(button => {
        button.addEventListener('click', () => {
            const panel = button.nextElementSibling;
            if (panel.classList.contains('active')) {
                panel.style.maxHeight = null;
                panel.classList.remove('active');
            } else {
                panel.classList.add('active');
                panel.style.maxHeight = "300px";
            }
        });
    });

    // Toggle edit mode
    editBtn.addEventListener('click', () => {
        isEditing = !isEditing;
        editBtn.textContent = isEditing ? 'Save' : 'Edit';

        // Open Accordion panels
        accordionBtns.forEach(btn => {
            const panel = btn.nextElementSibling;
            panel.classList.add('active');
            panel.style.maxHeight = "300px";
        });

        // Activate all editable fields
        const editableElements = document.querySelectorAll('h1, h3, .accordion-panel p, .accordion-panel li, .accordion-panel .editable');
        editableElements.forEach(el => {
            el.setAttribute('contenteditable', isEditing);
        });

        // Save
        if (!isEditing) {
            downloadFiles();
        }
    });

    // Add a new line on Enter key
    const panels = document.querySelectorAll('.accordion-panel');
    panels.forEach(panel => {
        panel.addEventListener('keydown', e => {
            if (!isEditing) return;
            if (e.key === 'Enter') {
                e.preventDefault();
                document.execCommand('insertHTML', false, '<br><br>');
            }
        });
    });

    // Download the page as ZIP
    async function downloadFiles() {
        const zip = new JSZip();

        // Add HTML file
        const html = document.documentElement.outerHTML;
        zip.file("index.html", html);

        // Add CSS file
        const cssPath = Array.from(document.styleSheets).find(s => s.href && s.href.endsWith("style.css"))?.href;
        if (cssPath) {
            try {
                const response = await fetch(cssPath);
                const cssText = await response.text();
                zip.file("style.css", cssText);
            } catch (err) {
                console.warn("CSS dosyası alınamadı:", err);
            }
        }

        // Add script file
        const scriptPath = Array.from(document.scripts).find(s => s.src && s.src.endsWith("script.js"))?.src;
        if (scriptPath) {
            try {
                const response = await fetch(scriptPath);
                const scriptText = await response.text();
                zip.file("script.js", scriptText);
            } catch (err) {
                console.warn("Script dosyası alınamadı:", err);
            }
        }

        // Add photos
        const images = [...document.querySelectorAll("img")];
        for (let img of images) {
            const src = img.src;
            if (src.startsWith("blob:")) continue;
            try {
                const res = await fetch(src);
                const blob = await res.blob();
                const name = img.src.split("/").pop();
                zip.file(`photos/${name}`, blob);
            } catch (err) {
                console.warn("Resim yüklenemedi:", src);
            }
        }

        // Download ZIP
        zip.generateAsync({ type: "blob" }).then(content => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(content);
            a.download = 'cv.zip';
            a.click();
        });
    }
});
