// Sistema de Navegação entre Páginas (SPA)
function switchPage(pageId) {
    // Remove classe ativa de todas as seções e links
    document.querySelectorAll('.page-content').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Adiciona classe ativa na página e no link clicado
    const activeSection = document.getElementById(`page-${pageId}`);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Adiciona classe no menu correspondente
    const activeLink = document.querySelector(`[onclick="switchPage('${pageId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Rola automaticamente para o topo da página ao mudar de aba
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Recurso 1: Simulação do Infográfico de Plantio Direto
function simulateSoil(state) {
    const surface = document.getElementById('soil-layer-surface');
    const textInfo = document.getElementById('infographic-text');

    if (state === 'queima') {
        surface.className = 'soil-burned';
        surface.innerText = 'Solo Degradado & Cinzas';
        textInfo.style.borderLeftColor = '#c62828';
        textInfo.innerHTML = `
            <strong>🚨 Alerta de Degradação:</strong> A queima destrói a matéria orgânica e os microrganismos vivos, deixando a terra completamente indefesa contra ventos e chuvas fortes (causando erosão acelerada).
        `;
    } else if (state === 'palhada') {
        surface.className = 'soil-protected';
        surface.innerText = 'Camada de Palhada Ativa 🌾';
        textInfo.style.borderLeftColor = '#2e7d32';
        textInfo.innerHTML = `
            <strong>🌱 Sucesso Ecológico:</strong> A palha funciona como um escudo protetor! Ela mantém a umidade da terra por muito mais tempo, barra o impacto da chuva forte e se decompõe virando adubo natural.
        `;
    }
}

// Recurso 2: Radar da Rotação de Culturas
const cropData = {
    braquiaria: {
        title: "Braquiária no Pós-Colheita",
        icon: "fa-solid fa-seedling",
        desc: "Suas raízes profundas rompem as camadas compactadas do solo (descompactação mecânica natural) e criam uma excelente biomassa de cobertura para o próximo plantio."
    },
    feijao: {
        title: "Feijão-de-Porco (Leguminosa)",
        icon: "fa-solid fa-shrimp", // Representação lúdica do nome
        desc: "É um super fixador de Nitrogênio! Ela captura o nutriente direto do ar e injeta no solo, gerando uma adubação verde pesada que economiza fertilizantes químicos."
    },
    crotalaria: {
        title: "Crotalária vs Pragas",
        icon: "fa-solid fa-bugs",
        desc: "Além de enriquecer a terra, a crotalária serve como uma barreira biológica contra nematoides (vermes microscópicos que atacam raízes), limpando o solo de forma limpa."
    }
};

function showRadar(cropKey) {
    // Atualiza o estado visual do botão selecionado
    document.querySelectorAll('.btn-radar').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Encontra e ativa o botão correto baseando-se no texto do parâmetro
    const eventBtn = window.event.target;
    if(eventBtn) eventBtn.classList.add('active');

    // Altera os dados no display do radar
    const data = cropData[cropKey];
    const display = document.getElementById('radar-display');
    
    display.innerHTML = `
        <i class="${data.icon} radar-icon"></i>
        <h3>${data.title}</h3>
        <p>${data.desc}</p>
    `;
}
