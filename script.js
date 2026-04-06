// --- DÉFILEMENT FLUIDE ---
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// --- BASE DE DONNÉES STAGES ---
const stagesData = {
    1: {
        title: "ENC Bessières",
        logo: "Logo_ENC.png",
        date: "9 Juin 2025 - 4 Juillet 2025",
        service: "Maintenance informatique, support",
        description: "L'ENC Bessières est un établissement d'enseignement prestigieux situé à Paris. J'ai eu l'opportunité d'y intervenir sur l'infrastructure réseau et le parc informatique.",
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
        title: "AsureLoisir (Groupe EAT)",
        logo: "groupe_eat_logo.jpg",
        date: "12 Janvier 2026 - 20 Février 2026",
        service: "Support informatique",
        description: "AsureLoisir, membre du Groupe EAT, est spécialisé dans les solutions d'assurance professionnelles. Mon rôle était d'assurer la maintenance opérationnelle des équipements.",
        missions: [
            "Branchement de câble et câble management",
            "Support informatique"
        ]
    }
};

// --- BASE DE DONNÉES CERTIFICATIONS ---
const certsData = {
    'anssi': {
        title: "SecNum (MOOC de l'ANSSI)",
        logo: "MOOC ANSII.png",
        time: "8-10h",
        chapters: "4 modules",
        desc: `<ul>
            <li><strong>Module 1</strong> : Panorama de la SSI – Découverte des enjeux, des menaces actuelles et des acteurs de la cybersécurité.</li>
            <li><strong>Module 2</strong> : Sécurité de l'authentification – Maîtrise des mots de passe robustes et des méthodes de double authentification.</li>
            <li><strong>Module 3</strong> : Sécurité sur Internet – Vigilance face au phishing, aux réseaux sociaux et aux pièges du web.</li>
            <li><strong>Module 4</strong> : Sécurité du poste de travail et nomadisme – Protection des appareils, mises à jour et sécurité en déplacement.</li>
        </ul>`
    },
    'ccna1': {
        title: "CCNA 1",
        logo: "cisco-ccna.jpg",
        time: "70h environ",
        chapters: "17 modules",
        desc: `<ul>
            <li><strong>Vivre dans un monde réseau</strong> : Présentation des infrastructures réseaux et de leur impact quotidien.</li>
            <li><strong>Configuration de base des périphériques</strong> : Apprentissage des commandes initiales pour sécuriser un commutateur.</li>
            <li><strong>Protocoles et modèles</strong> : Fonctionnement des règles de communication et des modèles OSI et TCP/IP.</li>
            <li><strong>Couche Physique</strong> : Étude des supports de transmission (cuivre, fibre optique et Wi-Fi).</li>
            <li><strong>Systèmes de numération</strong> : Maîtrise des calculs binaires et hexadécimaux pour l'adressage.</li>
            <li><strong>Couche Liaison de données</strong> : Compréhension du rôle des trames et du contrôle d'accès au support.</li>
            <li><strong>Commutation Ethernet</strong> : Fonctionnement interne des commutateurs et utilisation des tables MAC.</li>
            <li><strong>Couche Réseau</strong> : Rôle des routeurs et fonctionnement du protocole IP.</li>
            <li><strong>Résolution d'adresse</strong> : Mécanisme du protocole ARP pour lier IP et MAC.</li>
            <li><strong>Configuration de base du routeur</strong> : Mise en service et sécurisation d'un routeur Cisco.</li>
            <li><strong>Adressage IPv4</strong> : Structure des adresses et création de sous-réseaux (Subnetting).</li>
            <li><strong>Adressage IPv6</strong> : Découverte du nouveau format d'adresses et de leur configuration.</li>
            <li><strong>Protocole ICMP</strong> : Utilisation des messages de test et de diagnostic réseau (Ping, Traceroute).</li>
            <li><strong>Couche Transport</strong> : Différence entre les protocoles de transmission fiable (TCP) et rapide (UDP).</li>
            <li><strong>Couche Application</strong> : Fonctionnement des services courants comme HTTP, DNS et DHCP.</li>
            <li><strong>Fondamentaux de la sécurité réseau</strong> : Principes pour protéger les accès et les équipements.</li>
            <li><strong>Concevoir un réseau de petite taille</strong> : Méthodologie pour construire et tester un réseau complet.</li>
        </ul>`
    },
    'ccna2': {
        title: "CCNA 2",
        logo: "cisco-ccna.jpg",
        time: "70h environ",
        chapters: "16 modules",
        desc: `<ul>
            <li><strong>Configuration de base des périphériques</strong> : Paramètres de sécurité et de gestion sur Switch et Routeur.</li>
            <li><strong>Concepts de commutation</strong> : Fonctionnement détaillé du transfert de données dans un commutateur.</li>
            <li><strong>VLANs</strong> : Segmentation d'un réseau physique en plusieurs réseaux logiques indépendants.</li>
            <li><strong>Routage entre VLANs</strong> : Configuration pour permettre la communication entre différents VLANs.</li>
            <li><strong>Concepts STP</strong> : Prévention des boucles réseau dans les infrastructures redondantes.</li>
            <li><strong>EtherChannel</strong> : Agrégation de liens physiques pour augmenter la bande passante.</li>
            <li><strong>DHCPv4</strong> : Automatisation de la distribution des adresses IPv4.</li>
            <li><strong>SLAAC et DHCPv6</strong> : Méthodes d'attribution automatique des adresses en IPv6.</li>
            <li><strong>Concepts FHRP</strong> : Protocoles de redondance de la passerelle.</li>
            <li><strong>Concepts de sécurité LAN</strong> : Compréhension des attaques sur les commutateurs (MAC flooding, DHCP snooping).</li>
            <li><strong>Configuration de la sécurité des commutateurs</strong> : Mise en œuvre des protections couche 2.</li>
            <li><strong>Concepts WLAN</strong> : Principes de fonctionnement des réseaux sans fil (Wi-Fi).</li>
            <li><strong>Configuration WLAN</strong> : Paramétrage des routeurs sans fil et contrôleurs.</li>
            <li><strong>Concepts de routage</strong> : Étude interne et tables de routage.</li>
            <li><strong>Routage statique IP</strong> : Configuration manuelle des routes.</li>
            <li><strong>Dépannage du routage statique</strong> : Méthodologie pour corriger les erreurs de config.</li>
        </ul>`
    },
};

// --- GESTION DES MODALES ---
const stageModal = document.getElementById("stageModal");
const certModal = document.getElementById("certModal");

function openStageModal(id) {
    const data = stagesData[id];
    document.getElementById("modal-logo").src = data.logo;
    document.getElementById("modal-title").innerText = data.title;
    document.getElementById("modal-date").innerText = data.date;
    document.getElementById("modal-service").innerText = data.service;
    document.getElementById("modal-desc").innerText = data.description; // Description dynamique

    const missionsList = document.getElementById("modal-missions");
    missionsList.innerHTML = "";
    data.missions.forEach(m => {
        let li = document.createElement("li");
        li.innerHTML = m;
        missionsList.appendChild(li);
    });
    stageModal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function openCertModal(id) {
    const data = certsData[id];
    const logoImg = document.getElementById("cert-modal-logo");
    logoImg.src = data.logo;
    logoImg.style.display = data.logo ? "block" : "none";

    document.getElementById("cert-modal-title").innerText = data.title;
    document.getElementById("cert-modal-time").innerText = data.time;
    document.getElementById("cert-modal-chapters").innerText = data.chapters;
    document.getElementById("cert-modal-desc").innerHTML = data.desc; // Support HTML pour les listes
    
    certModal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeStageModal() { stageModal.style.display = "none"; document.body.style.overflow = "auto"; }
function closeCertModal() { certModal.style.display = "none"; document.body.style.overflow = "auto"; }

window.onclick = function(e) {
    if (e.target == stageModal) closeStageModal();
    if (e.target == certModal) closeCertModal();
}