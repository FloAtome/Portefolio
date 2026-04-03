// --- 1. DÉFILEMENT FLUIDE DU MENU ---
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// --- 2. BASE DE DONNÉES (STAGES & CERTIFICATIONS) ---

const stagesData = {
    1: {
        title: "ENC Bessières",
        logo: "Logo_ENC.png",
        date: "À compléter",
        service: "Maintenance informatique, support",
        description: `📍 70 Boulevard Bessières, 75017 Paris <br>
                    L'ENC Bessiere est un lycée post-bac`,
        missions: [
            "Installation de serveur sous proxmox",
            "Installation dans la baie de brassage",
            "Branchement aux switch",
            "Configuration et installation de proxmox",
            "Configuration d’un KVM pour centraliser l’utilisation des serveurs",
            "Support informatique : <ul><li>Changement de périphérique</li><li>Changement d’ordinateur</li><li>Création d’utilisateur via l’AD et de leur dossier partagé et personnel</li><li>Installation de nouvelle image Windows</li></ul>",
            "Câble management"
        ]
    },
    2: {
        title: "AssurLoisirs (Groupe EAT)",
        logo: "groupe_eat_logo.jpg",
        date: "À compléter",
        service: "Support informatique",
        description: "AsureLoisir fait partie du groupe EAT. Mon rôle dans l'entreprise était de...",
        missions: [
            "Branchement de câble et câble management",
            "Support informatique"
        ]
    }
};

const certsData = {
    'anssi': {
        title: "SecNum (MOOC de l'ANSSI)",
        logo: "MOOC ANSII.png",
        time: "À compléter (ex: 40 heures)",
        chapters: "À compléter (ex: 4 modules)",
        desc: "J'ai appris les bases de la sécurité informatique, les bonnes pratiques, etc..."
    },
    'ccna1': {
        title: "CCNA 1",
        logo: "cisco-ccna.jpg",
        time: "À compléter",
        chapters: "À compléter",
        desc: "Bases des réseaux, adressage IP, configuration initiale des switchs et routeurs..."
    },
    'ccna2': {
        title: "CCNA 2",
        logo: "cisco-ccna.jpg",
        time: "À compléter",
        chapters: "À compléter",
        desc: "Routage, VLANs, concepts de sécurité fondamentaux..."
    },
    'aws': {
        title: "Formation AWS",
        logo: "", // Laisser vide tant que tu n'as pas l'image
        time: "À compléter",
        chapters: "À compléter",
        desc: "Introduction au Cloud computing et aux services d'Amazon Web Services..."
    }
};

// --- 3. GESTION DES MODALES ---

const stageModal = document.getElementById("stageModal");
const certModal = document.getElementById("certModal");

// OUVIR/FERMER STAGES
function openStageModal(stageId) {
    const data = stagesData[stageId];
    
    document.getElementById("modal-logo").src = data.logo;
    document.getElementById("modal-title").innerText = data.title;
    document.getElementById("modal-date").innerText = data.date;
    document.getElementById("modal-service").innerText = data.service;
    document.getElementById("modal-desc").innerHTML = data.description;
    
    const missionsList = document.getElementById("modal-missions");
    missionsList.innerHTML = ""; 
    data.missions.forEach(mission => {
        let li = document.createElement("li");
        li.innerHTML = mission; 
        missionsList.appendChild(li);
    });

    stageModal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

function closeStageModal() {
    stageModal.style.display = "none";
    document.body.style.overflow = "auto";
}

// OUVRIR/FERMER CERTIFICATIONS
function openCertModal(certId) {
    const data = certsData[certId];
    
    const logoImg = document.getElementById("cert-modal-logo");
    if (data.logo !== "") {
        logoImg.src = data.logo;
        logoImg.style.display = "block";
    } else {
        logoImg.style.display = "none";
    }
    
    document.getElementById("cert-modal-title").innerText = data.title;
    document.getElementById("cert-modal-time").innerText = data.time;
    document.getElementById("cert-modal-chapters").innerText = data.chapters;
    document.getElementById("cert-modal-desc").innerText = data.desc;
    
    certModal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeCertModal() {
    certModal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Fermer les modales si on clique dans le fond gris
window.onclick = function(event) {
    if (event.target == stageModal) {
        closeStageModal();
    }
    if (event.target == certModal) {
        closeCertModal();
    }
}