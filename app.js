// Feature: Translations Dictionary
const translations = {
    en: {
        appTitle: "My Farm Manager",
        statusTitle: "Server Status",
        inventoryTitle: "Inventory",
        itemLabel: "Item",
        qtyLabel: "Quantity",
        statusLabel: "Status",
        online: "✅ Online",
        uptime: "Uptime",
        offline: "❌ Offline"
    },
    es: {
        appTitle: "Mi Gestor de Granja",
        statusTitle: "Estado del Servidor",
        inventoryTitle: "Inventario",
        itemLabel: "Artículo",
        qtyLabel: "Cantidad",
        statusLabel: "Estado",
        online: "✅ En línea",
        uptime: "Tiempo activo",
        offline: "❌ Desconectado"
    },
    fr: {
        appTitle: "Mon Gestionnaire de Ferme",
        statusTitle: "État du Serveur",
        inventoryTitle: "Inventaire",
        itemLabel: "Article",
        qtyLabel: "Quantité",
        statusLabel: "Statut",
        online: "✅ En ligne",
        uptime: "Temps de service",
        offline: "❌ Hors ligne"
    }
};

let currentLang = 'en';

// Feature: Change Language Function
function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    // Refresh lists to apply translation to dynamic labels if needed
    // For now, we just re-render to ensure consistency
    renderInventory(window.cachedInventory || []);
    renderHealth();
}

// Fetch and Display Inventory
async function loadInventory() {
    try {
        const response = await fetch('/api/inventory');
        const data = await response.json();
        window.cachedInventory = data;
        renderInventory(data);
    } catch (error) {
        console.error('Error loading inventory:', error);
    }
}

function renderInventory(items) {
    const grid = document.getElementById('inventory-grid');
    const t = translations[currentLang];
    grid.innerHTML = '';

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'inventory-item';

        // Dynamic content with translated labels
        div.innerHTML = `
            <h3>${item.item}</h3>
            <p><strong>${t.qtyLabel}:</strong> ${item.quantity || 'N/A'} ${item.unit || ''}</p>
            <p><strong>${t.statusLabel}:</strong> <span class="status-active">${item.status || 'In Stock'}</span></p>
        `;
        grid.appendChild(div);
    });
}

// Fetch Server Health
async function checkHealth() {
    try {
        const response = await fetch('/api/health');
        const data = await response.json();
        window.cachedHealth = { status: 'up', ...data };
    } catch (e) {
        window.cachedHealth = { status: 'down' };
    }
    renderHealth();
}

function renderHealth() {
    const display = document.getElementById('health-display');
    const t = translations[currentLang];

    if (!window.cachedHealth) return;

    if (window.cachedHealth.status === 'up') {
        display.textContent = `${t.online} | ${t.uptime}: ${Math.floor(window.cachedHealth.uptime)}s`;
    } else {
        display.textContent = t.offline;
    }
}

// Initialize
loadInventory();
checkHealth();