// GitHub Portfolio Application for @earlchirchir

const GITHUB_USERNAME = 'earlchirchir';

// Hydrated Fallback Repositories Data (Updated with Title-Case Names)
const FALLBACK_REPOS = [
  {
    id: 1309916364,
    name: 'ABB-CRB-15000-Robotic-Arm-Kinematics-Trajectory-Planning',
    html_url: 'https://github.com/earlchirchir/ABB-CRB-15000-Robotic-Arm-Kinematics-Trajectory-Planning',
    description: 'Forward & Inverse Kinematics solver and 3D trajectory simulation for the ABB GoFa CRB 15000 collaborative robot.',
    language: 'MATLAB',
    stargazers_count: 0,
    forks_count: 0,
    size: 26027,
    updated_at: '2026-07-23T13:22:55Z',
    clone_url: 'https://github.com/earlchirchir/ABB-CRB-15000-Robotic-Arm-Kinematics-Trajectory-Planning.git',
    topics: ['robotics', 'kinematics', 'matlab', 'cobot', 'trajectory-planning'],
    is_pinned: true
  },
  {
    id: 1310065999,
    name: 'ESP32-Spectrum-Radar',
    html_url: 'https://github.com/earlchirchir/ESP32-Spectrum-Radar',
    description: 'High-speed 2.4GHz Wi-Fi RF spectrum analyzer & network visualizer firmware built for ESP32 Cheap Yellow Display (CYD), LVGL v9, and FreeRTOS.',
    language: 'C++',
    stargazers_count: 0,
    forks_count: 0,
    size: 420,
    updated_at: '2026-07-23T15:08:59Z',
    clone_url: 'https://github.com/earlchirchir/ESP32-Spectrum-Radar.git',
    topics: ['esp32', 'firmware', 'radar', 'cplusplus', 'embedded'],
    is_pinned: true
  },
  {
    id: 577751420,
    name: 'Onboard-Monitoring-System',
    html_url: 'https://github.com/earlchirchir/Onboard-Monitoring-System',
    description: 'Real-time telemetry and on-board sensor monitoring dashboard web interface for embedded hardware.',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    size: 569,
    updated_at: '2026-07-19T02:11:24Z',
    clone_url: 'https://github.com/earlchirchir/Onboard-Monitoring-System.git',
    topics: ['telemetry', 'javascript', 'monitoring', 'embedded-ui']
  },
  {
    id: 1300808846,
    name: 'Spatial-RPR-Robot',
    html_url: 'https://github.com/earlchirchir/Spatial-RPR-Robot',
    description: 'Spatial RPR (Revolute-Prismatic-Revolute) manipulator workspace analysis and kinematic model.',
    language: 'MATLAB',
    stargazers_count: 0,
    forks_count: 0,
    size: 615,
    updated_at: '2026-07-14T18:27:26Z',
    clone_url: 'https://github.com/earlchirchir/Spatial-RPR-Robot.git',
    topics: ['matlab', 'robotics', 'manipulator', 'spatial-kinematics']
  },
  {
    id: 738944382,
    name: 'Home-Renovation-Impact-Analysis',
    html_url: 'https://github.com/earlchirchir/Home-Renovation-Impact-Analysis',
    description: 'Machine learning model and data analysis pipeline for house price prediction and valuation impact.',
    language: 'Jupyter Notebook',
    stargazers_count: 0,
    forks_count: 0,
    size: 12425,
    updated_at: '2026-07-14T14:52:38Z',
    clone_url: 'https://github.com/earlchirchir/Home-Renovation-Impact-Analysis.git',
    topics: ['python', 'machine-learning', 'jupyter-notebook', 'data-analysis']
  },
  {
    id: 1300505120,
    name: 'ESP32-2432S022C-Capabilities-Showcase-Firmware',
    html_url: 'https://github.com/earlchirchir/ESP32-2432S022C-Capabilities-Showcase-Firmware',
    description: 'Feature-rich firmware demonstrating capacitive touch display, BLE, and WiFi features on ESP32-2432S022C.',
    language: 'C++',
    stargazers_count: 0,
    forks_count: 0,
    size: 651,
    updated_at: '2026-07-14T13:31:30Z',
    clone_url: 'https://github.com/earlchirchir/ESP32-2432S022C-Capabilities-Showcase-Firmware.git',
    topics: ['esp32', 'touch-display', 'cplusplus', 'ble', 'embedded-systems']
  },
  {
    id: 716050464,
    name: 'IoT-Weighing-Solution-for-Bulk-Bins',
    html_url: 'https://github.com/earlchirchir/IoT-Weighing-Solution-for-Bulk-Bins',
    description: 'IoT weight sensing telemetry platform using load cells, HX711 amplifier, and cloud MQTT integration.',
    language: 'C++',
    stargazers_count: 0,
    forks_count: 0,
    size: 1120,
    updated_at: '2026-07-10T11:20:00Z',
    clone_url: 'https://github.com/earlchirchir/IoT-Weighing-Solution-for-Bulk-Bins.git',
    topics: ['iot', 'sensors', 'mqtt', 'esp32', 'cplusplus']
  },
  {
    id: 716050465,
    name: 'Load-Sensor-Modules-PCB',
    html_url: 'https://github.com/earlchirchir/Load-Sensor-Modules-PCB',
    description: 'Custom PCB layout accommodating 6 load sensor modules for modular plug-and-play hardware sensing.',
    language: 'Hardware',
    stargazers_count: 0,
    forks_count: 0,
    size: 229,
    updated_at: '2026-07-09T18:23:56Z',
    clone_url: 'https://github.com/earlchirchir/Load-Sensor-Modules-PCB.git',
    topics: ['pcb-design', 'hardware', 'electronics', 'load-cell', 'sensors']
  },
  {
    id: 990000001,
    name: 'Automated-Shopping-Cart',
    html_url: 'https://github.com/earlchirchir/Automated-Shopping-Cart',
    description: 'Autonomous smart shopping cart system featuring RFID item scanning, load-cell weight verification, and telemetry billing integration.',
    language: 'C++',
    stargazers_count: 0,
    forks_count: 0,
    size: 850,
    updated_at: '2024-05-15T12:00:00Z',
    clone_url: 'https://github.com/earlchirchir/Automated-Shopping-Cart.git',
    topics: ['rfid', 'load-cell', 'embedded-systems', 'cplusplus', 'automation']
  },
  {
    id: 990000002,
    name: 'Odi2-Deafblind-Assistive-Device',
    html_url: 'https://github.com/earlchirchir/Odi2-Deafblind-Assistive-Device',
    description: 'Tactile-to-audio & haptic assistive communication hardware interface designed to enable seamless interaction for deafblind individuals.',
    language: 'C++',
    stargazers_count: 0,
    forks_count: 0,
    size: 620,
    updated_at: '2024-03-20T12:00:00Z',
    clone_url: 'https://github.com/earlchirchir/Odi2-Deafblind-Assistive-Device.git',
    topics: ['assistive-tech', 'haptics', 'embedded', 'accessibility', 'sensors']
  },
  {
    id: 990000003,
    name: 'Eggcellent-Automated-Chicken-Coop',
    html_url: 'https://github.com/earlchirchir/Eggcellent-Automated-Chicken-Coop',
    description: 'Smart agricultural IoT coop environment controller with climate regulation, scheduled door actuators, and feeder monitoring.',
    language: 'C++',
    stargazers_count: 0,
    forks_count: 0,
    size: 490,
    updated_at: '2023-11-10T12:00:00Z',
    clone_url: 'https://github.com/earlchirchir/Eggcellent-Automated-Chicken-Coop.git',
    topics: ['smart-agriculture', 'iot', 'sensors', 'actuators', 'cplusplus']
  }
];

// Project Significance Ranking Order (Most Significant to Least)
const PROJECT_SIGNIFICANCE_ORDER = [
  'abb-crb-15000',
  'esp32-spectrum-radar',
  'automated-shopping-cart',
  'odi2-deafblind-assistive-device',
  'eggcellent-automated-chicken-coop',
  'onboard-monitoring-system',
  'spatial-rpr-robot',
  'iot-weighing-solution-for-bulk-bins',
  'load-sensor-modules-pcb',
  'home-renovation-impact-analysis',
  'esp32-2432s022c-capabilities-showcase-firmware'
];

// Hackster.io Blog Articles Data
const HACKSTER_ARTICLES = [
  {
    id: 'esp32-spectrum-radar-article',
    title: '📶 ESP32 2.4GHz Wi-Fi Spectrum Analyzer & Network Inspector',
    elevatorPitch: 'Build a high-performance, real-time 2.4GHz Wi-Fi RF congestion visualizer and touch network inspector using the ESP32 Cheap Yellow Display (CYD), LVGL v9, and FreeRTOS.',
    publishedDate: 'July 2026',
    readTime: '4 min read',
    hacksterUrl: 'https://www.hackster.io/earl-chirchir',
    tags: ['ESP32', 'Wi-Fi', 'Spectrum Analyzer', 'LVGL v9', 'FreeRTOS'],
    markdownContent: `
# 📶 ESP32 2.4GHz Wi-Fi Spectrum Analyzer & Network Inspector

**Elevator Pitch:** Build a high-performance, real-time 2.4GHz Wi-Fi RF congestion visualizer and touch network inspector using the ESP32 Cheap Yellow Display (CYD), LVGL v9, and FreeRTOS.

---

## 🛠️ Things Used in This Project

### Hardware Components
1. **ESP32 Cheap Yellow Display (ESP32-2432S022C / CYD)** (2.8" 240x320 TFT Touchscreen)
2. **USB-C / Micro-USB Cable** for power & flashing

### Software & Apps
1. **PlatformIO / Arduino IDE**
2. **LVGL v9** (Light and Versatile Graphics Library)
3. **FreeRTOS** (Dual-core task management)
4. **ESP32 Wi-Fi SDK**

---

## 📖 Project Story

Finding an uncongested Wi-Fi channel in crowded environments (offices, apartments, workshops) can significantly improve wireless performance. Commercial RF spectrum analyzers can be expensive, but using an ESP32 microcontroller and a touchscreen display, you can build a portable handheld Wi-Fi spectrum analyzer for under $15.

### Key Features
- 📊 **Real-Time 13-Channel Spectrum Density Graph:** Scans and displays Access Point saturation across 2.4GHz channels 1–13.
- 🟡 **Primary Channel Highlights:** Automatic gold indicators for non-overlapping channels (**1**, **6**, and **11**).
- 🚦 **Congestion Color Code:**
  - 🟢 **Clean (1–2 APs):** Recommended channel for router configuration.
  - 🟡 **Moderate (3–5 APs)**
  - 🔴 **Congested (6+ APs)**
- 📶 **Touch-Activated Network Inspector Modal:** Tapping any detected Wi-Fi network pops up a glassmorphic inspector card displaying:
  - **BSSID (MAC Address)**
  - **Center Frequency & Channel** (e.g. \`Ch 6 - 2.437 GHz\`)
  - **Security Encryption** (\`WPA2-PSK\`, \`WPA3-PSK\`, \`Open\`, \`Enterprise\`)
  - **Signal Strength Bar Meter** (\`-30 dBm\` to \`-100 dBm\`)
- ⚡ **Dual-Core Architecture:** FreeRTOS handles Wi-Fi scanning on Core 0 while LVGL v9 renders 60FPS graphics on Core 1.

---

## 🔌 Hardware Setup & Wiring

If using the **ESP32-2432S022C (CYD)**, all connections between the ILI9341 display, XPT2046 touch controller, and ESP32 are already routed on-board!

| Peripheral | ESP32 Pin |
| :--- | :--- |
| **Display SPI SCK** | GPIO 14 |
| **Display SPI MOSI** | GPIO 13 |
| **Display SPI MISO** | GPIO 12 |
| **Display CS** | GPIO 15 |
| **Display DC / RS** | GPIO 2 |
| **Display Backlight** | GPIO 21 |
| **Touch CS** | GPIO 33 |

---

## 🚀 Code & Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/earlchirchir/ESP32-Spectrum-Radar.git
   \`\`\`
2. Open the project in **PlatformIO**.
3. Select board \`esp32-2432S022C\` in \`platformio.ini\`.
4. Build and flash the firmware to your board.

GitHub Repository: [https://github.com/earlchirchir/ESP32-Spectrum-Radar](https://github.com/earlchirchir/ESP32-Spectrum-Radar)
`
  }
];

function getSignificanceRank(name) {
  const lower = (name || '').toLowerCase();
  const index = PROJECT_SIGNIFICANCE_ORDER.findIndex(p => lower.includes(p));
  return index !== -1 ? index : 99;
}

// App State
let repositories = [...FALLBACK_REPOS];
let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'featured';

// DOM Elements
const reposContainer = document.getElementById('repos-container');
const repoCountBadge = document.getElementById('repo-count-badge');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const filterChips = document.getElementById('filter-chips');
const sortSelect = document.getElementById('sort-select');
const refreshBtn = document.getElementById('refresh-btn');

const statRepos = document.getElementById('stat-repos');
const statLanguages = document.getElementById('stat-languages');
const statStars = document.getElementById('stat-stars');
const statStatus = document.getElementById('stat-status');

// Repo Modal Elements
const repoModal = document.getElementById('repo-modal');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalLanguageBadge = document.getElementById('modal-language-badge');
const modalStars = document.getElementById('modal-stars');
const modalForks = document.getElementById('modal-forks');
const modalSize = document.getElementById('modal-size');
const modalUpdated = document.getElementById('modal-updated');
const cloneUrlInput = document.getElementById('clone-url-input');
const copyCloneBtn = document.getElementById('copy-clone-btn');
const copyToast = document.getElementById('copy-toast');
const modalGithubLink = document.getElementById('modal-github-link');

// Blog Modal Elements
const blogContainer = document.getElementById('blog-container');
const articleModal = document.getElementById('article-modal');
const articleModalClose = document.getElementById('article-modal-close');
const articleCloseBtnBottom = document.getElementById('article-close-btn-bottom');
const articleModalTitle = document.getElementById('article-modal-title');
const articleModalPitch = document.getElementById('article-modal-pitch');
const articleModalDate = document.getElementById('article-modal-date');
const articleModalReadtime = document.getElementById('article-modal-readtime');
const articleModalContent = document.getElementById('article-modal-content');
const articleHacksterLink = document.getElementById('article-hackster-link');

// Helper: Format Date
function formatDate(isoString) {
  if (!isoString) return 'N/A';
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Helper: Get Language Class
function getLanguageClass(lang) {
  if (!lang) return 'lang-default';
  const lower = lang.toLowerCase();
  if (lower.includes('c++')) return 'lang-cpp';
  if (lower.includes('matlab')) return 'lang-matlab';
  if (lower.includes('javascript') || lower.includes('js')) return 'lang-javascript';
  if (lower.includes('jupyter') || lower.includes('python')) return 'lang-jupyter';
  return 'lang-default';
}

// Update Stats Cards
function updateStats() {
  statRepos.textContent = repositories.length;
  
  const langs = new Set(repositories.map(r => r.language).filter(Boolean));
  statLanguages.textContent = `${langs.size} Tech Stack`;
  
  const totalStars = repositories.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
  statStars.textContent = totalStars;
}

// Fetch GitHub Repositories Live
async function fetchUserRepos() {
  try {
    if (statStatus) statStatus.textContent = 'Syncing...';
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    
    const liveData = await res.json();
    if (Array.isArray(liveData) && liveData.length > 0) {
      // Merge live GitHub API data with custom Google Sites project showcases
      const liveNames = new Set(liveData.map(r => r.name.toLowerCase()));
      const customShowcases = FALLBACK_REPOS.filter(r => !liveNames.has(r.name.toLowerCase()));
      repositories = [...liveData, ...customShowcases];

      // Explicitly clean description for ESP32-Spectrum-Radar
      repositories.forEach(r => {
        if (r.name.toLowerCase().includes('esp32-spectrum-radar')) {
          r.description = 'High-speed 2.4GHz Wi-Fi RF spectrum analyzer & network visualizer firmware built for ESP32 Cheap Yellow Display (CYD), LVGL v9, and FreeRTOS.';
        }
      });

      if (statStatus) statStatus.textContent = 'Live (Sync)';
    }
  } catch (err) {
    console.warn('GitHub API fetch failed or rate-limited. Using hydrated fallback data.', err);
    if (statStatus) statStatus.textContent = 'Hydrated Cache';
  } finally {
    updateStats();
    renderRepos();
  }
}

// Render Repositories Grid
function renderRepos() {
  let filtered = repositories.filter(repo => {
    // Hide website portfolio repo card from the project grid
    if (repo.name.toLowerCase().includes('earlchirchir.github.io')) return false;

    // Filter by language chip
    if (currentFilter !== 'all') {
      if (currentFilter === 'C++' && repo.language !== 'C++') return false;
      if (currentFilter === 'MATLAB' && repo.language !== 'MATLAB') return false;
      if (currentFilter === 'JavaScript' && repo.language !== 'JavaScript') return false;
      if (currentFilter === 'Jupyter Notebook' && repo.language !== 'Jupyter Notebook') return false;
    }
    
    // Filter by search query
    if (currentSearch.trim() !== '') {
      const q = currentSearch.toLowerCase();
      const nameMatch = repo.name.toLowerCase().includes(q);
      const descMatch = repo.description && repo.description.toLowerCase().includes(q);
      const langMatch = repo.language && repo.language.toLowerCase().includes(q);
      const topicMatch = repo.topics && repo.topics.some(t => t.toLowerCase().includes(q));
      if (!nameMatch && !descMatch && !langMatch && !topicMatch) return false;
    }
    
    return true;
  });

  // Sort
  filtered.sort((a, b) => {
    // Always place earlchirchir.github.io at the very bottom
    const isPortfolioA = a.name.toLowerCase().includes('earlchirchir.github.io');
    const isPortfolioB = b.name.toLowerCase().includes('earlchirchir.github.io');
    if (isPortfolioA && !isPortfolioB) return 1;
    if (!isPortfolioA && isPortfolioB) return -1;

    if (currentSort === 'featured') {
      return getSignificanceRank(a.name) - getSignificanceRank(b.name);
    } else if (currentSort === 'updated') {
      return new Date(b.updated_at) - new Date(a.updated_at);
    } else if (currentSort === 'stars') {
      return (b.stargazers_count || 0) - (a.stargazers_count || 0);
    } else if (currentSort === 'name') {
      return a.name.localeCompare(b.name);
    } else if (currentSort === 'size') {
      return (b.size || 0) - (a.size || 0);
    }
    return 0;
  });

  repoCountBadge.textContent = `${filtered.length} Repositories`;

  if (filtered.length === 0) {
    reposContainer.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; color: var(--text-dim);"></i>
        <p>No repositories match your current filter or search criteria.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  reposContainer.innerHTML = filtered.map(repo => {
    const isDissertation = repo.name.toLowerCase().includes('abb-crb-15000');
    const isPinned = repo.is_pinned || ['esp32-spectrum-radar', 'abb-crb-15000'].some(p => repo.name.toLowerCase().includes(p));

    return `
    <article class="repo-card ${isDissertation ? 'dissertation-card' : ''}" data-id="${repo.id}">
      <div class="repo-card-header">
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-title-link">
          ${repo.name}
        </a>
        <span class="lang-pill ${getLanguageClass(repo.language)}">${repo.language || 'Code'}</span>
      </div>

      <div class="card-tags-row" style="margin: 8px 0; display: flex; flex-wrap: wrap; gap: 6px;">
        ${isPinned ? `<span class="tag-badge badge-pinned" style="background: rgba(234, 179, 8, 0.15); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.3); padding: 3px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;"><i class="fa-solid fa-thumbtack"></i> Pinned</span>` : ''}
        ${isDissertation ? `
          <span class="tag-badge badge-dissertation" style="background: rgba(147, 51, 234, 0.15); color: #c084fc; border: 1px solid rgba(147, 51, 234, 0.3); padding: 3px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;"><i class="fa-solid fa-graduation-cap"></i> MSc Dissertation</span>
          <span class="tag-badge badge-grade" style="background: rgba(52, 211, 153, 0.15); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.3); padding: 3px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;"><i class="fa-solid fa-trophy"></i> Grade A (81%)</span>
          <span class="tag-badge badge-school" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); padding: 3px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;"><i class="fa-solid fa-building-columns"></i> Kingston Univ London</span>
        ` : ''}
      </div>

      <p class="repo-desc">${repo.description || 'No description provided.'}</p>

      <div class="repo-footer">
        <div class="repo-stats">
          <span class="repo-stat-item" title="Stars"><i class="fa-solid fa-star"></i> ${repo.stargazers_count || 0}</span>
          <span class="repo-stat-item" title="Forks"><i class="fa-solid fa-code-fork"></i> ${repo.forks_count || 0}</span>
        </div>
        <button class="details-btn" data-id="${repo.id}">
          Details <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </article>
    `;
  }).join('');

  // Attach event listeners to entire repo card tabs
  document.querySelectorAll('.repo-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const repoId = card.getAttribute('data-id');
      const repo = repositories.find(r => String(r.id) === String(repoId));
      
      // If clicking directly on external title link, expandable details summary, or PDF link
      if (e.target.closest('.repo-title-link') || e.target.closest('.dissertation-expandable-details') || e.target.closest('a')) {
        return;
      }

      if (repo) openModal(repo);
    });
  });
}

// Render Hackster Blog Section
function renderBlogArticles() {
  if (!blogContainer) return;

  blogContainer.innerHTML = HACKSTER_ARTICLES.map(article => `
    <article class="repo-card blog-card" data-article-id="${article.id}" style="cursor: pointer; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div class="repo-card-header" style="margin-bottom: 8px;">
          <span class="lang-pill lang-cpp" style="font-size: 0.78rem;"><i class="fa-solid fa-microchip"></i> Hackster.io</span>
          <span style="font-size: 0.78rem; color: var(--text-dim);">${article.publishedDate}</span>
        </div>

        <h3 style="font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 8px; line-height: 1.3;">
          ${article.title}
        </h3>

        <p class="repo-desc" style="font-size: 0.88rem; color: var(--text-dim); margin-bottom: 12px; line-height: 1.5;">
          ${article.elevatorPitch}
        </p>

        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px;">
          ${article.tags.map(t => `<span style="background: rgba(255,255,255,0.05); color: #94a3b8; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem;">#${t}</span>`).join('')}
        </div>
      </div>

      <div class="repo-footer" style="padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: auto;">
        <span style="font-size: 0.8rem; color: var(--text-dim);"><i class="fa-solid fa-clock"></i> ${article.readTime}</span>
        <button class="details-btn" style="color: #00a8e8;">
          Read Article Overlay <i class="fa-solid fa-book-open"></i>
        </button>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => {
      const artId = card.getAttribute('data-article-id');
      const article = HACKSTER_ARTICLES.find(a => a.id === artId);
      if (article) openArticleModal(article);
    });
  });
}

// Markdown Parser Helper
function parseMarkdown(mdText) {
  if (!mdText) return '';

  let html = mdText
    .replace(/^# (.*$)/gim, '<h1 style="color: #fff; font-size: 1.4rem; font-weight: 700; margin: 20px 0 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 6px;">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 style="color: #c084fc; font-size: 1.2rem; font-weight: 600; margin: 18px 0 8px 0;">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 style="color: #38bdf8; font-size: 1.05rem; font-weight: 600; margin: 14px 0 6px 0;">$1</h3>')
    .replace(/---/g, '<hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0;" />')
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #fff; font-weight: 600;">$1</strong>')
    .replace(/`([^`]+)`/g, '<code style="background: rgba(255,255,255,0.1); color: #38bdf8; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 0.88em;">$1</code>')
    .replace(/```(.*?)\n([\s\S]*?)```/g, '<pre style="background: #0f172a; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 12px; overflow-x: auto; font-family: monospace; color: #34d399; font-size: 0.85rem; margin: 12px 0;"><code>$2</code></pre>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: #38bdf8; text-decoration: underline;">$1</a>')
    .replace(/^\- (.*$)/gim, '<li style="margin-bottom: 4px; list-style-type: disc; margin-left: 20px;">$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li style="margin-bottom: 4px; list-style-type: decimal; margin-left: 20px;">$1</li>');

  // Convert markdown tables
  html = html.replace(/\|(.+)\|/g, (match) => {
    const cells = match.split('|').filter(c => c.trim() !== '');
    if (cells.some(c => c.includes('---'))) return '';
    const isHeader = match.includes('Peripheral');
    const cellTag = isHeader ? 'th' : 'td';
    const rowContent = cells.map(c => `<${cellTag} style="padding: 8px 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">${c.trim()}</${cellTag}>`).join('');
    return `<tr style="${isHeader ? 'background: rgba(255,255,255,0.05); font-weight: 600; color: #fff;' : ''}">${rowContent}</tr>`;
  });

  html = html.replace(/(<tr.*?>.*?<\/tr>)+/gs, '<table style="width: 100%; border-collapse: collapse; margin: 16px 0; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; overflow: hidden;">$&</table>');

  return html;
}

// Open Article Modal
function openArticleModal(article) {
  if (!articleModal) return;

  articleModalTitle.textContent = article.title;
  articleModalPitch.textContent = article.elevatorPitch;
  articleModalDate.innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${article.publishedDate}`;
  articleModalReadtime.innerHTML = `<i class="fa-solid fa-clock"></i> ${article.readTime}`;
  articleHacksterLink.href = article.hacksterUrl;

  articleModalContent.innerHTML = parseMarkdown(article.markdownContent);

  articleModal.style.display = 'flex';
  setTimeout(() => articleModal.classList.add('active'), 10);
}

// Close Article Modal
function closeArticleModal() {
  if (!articleModal) return;
  articleModal.classList.remove('active');
  setTimeout(() => {
    articleModal.style.display = 'none';
  }, 250);
}

// Global Reset Filters helper
window.resetFilters = function() {
  currentFilter = 'all';
  currentSearch = '';
  searchInput.value = '';
  clearSearchBtn.style.display = 'none';
  
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.chip[data-filter="all"]').classList.add('active');
  
  renderRepos();
};

// Open Modal Dialog
function openModal(repo) {
  modalTitle.textContent = repo.name;
  
  const isDissertation = repo.name.toLowerCase().includes('abb-crb-15000');
  if (isDissertation) {
    modalDescription.innerHTML = `
      <p style="margin-bottom: 12px;">Formulated mathematical kinematic solvers, inverse dynamics, and time-optimal velocity profiles for the ABB GoFa collaborative arm. Reduced robot joint jerk and cycle execution time through MATLAB trajectory formulation and RoboDK 3D simulation validation.</p>
      
      <div style="background: rgba(147, 51, 234, 0.1); border: 1px solid rgba(147, 51, 234, 0.3); border-radius: 8px; padding: 12px; margin-bottom: 16px;">
        <h4 style="color: #c084fc; margin-bottom: 8px; font-size: 0.95rem;"><i class="fa-solid fa-graduation-cap"></i> MSc Dissertation Overview</h4>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 1.6; color: var(--text-dim);">
          <li><strong>Score / Grade:</strong> <span style="color: #34d399; font-weight: 600;">81% (Grade A / Passed with Distinction)</span></li>
          <li><strong>Institution:</strong> Kingston University London (2024 – 2025)</li>
          <li><strong>Tech Stack & Theory:</strong> MATLAB, RoboDK 3D, Bang-Coast-Bang Time Law, Inverse Kinematics</li>
          <li><strong>Key Performance Metrics:</strong> ~25% Cycle Time Reduction & Joint Jerk Minimization on ABB GoFa cobot</li>
        </ul>
        <div style="margin-top: 10px;">
          <a href="Kingston_University_MSc_HEAR_Transcript.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="font-size: 0.8rem;">
            <i class="fa-solid fa-file-pdf"></i> View Official Kingston HEAR Transcript (PDF)
          </a>
        </div>
      </div>
    `;
  } else {
    modalDescription.textContent = repo.description || 'No detailed description available.';
  }
  modalLanguageBadge.textContent = repo.language || 'Code';
  modalLanguageBadge.className = `lang-pill ${getLanguageClass(repo.language)}`;
  
  modalStars.textContent = repo.stargazers_count || 0;
  modalForks.textContent = repo.forks_count || 0;
  modalSize.textContent = `${repo.size || 0} KB`;
  modalUpdated.textContent = formatDate(repo.updated_at);
  
  const cloneUrl = repo.clone_url || `https://github.com/earlchirchir/${repo.name}.git`;
  cloneUrlInput.value = cloneUrl;
  modalGithubLink.href = repo.html_url;
  
  copyToast.style.display = 'none';
  repoModal.style.display = 'flex';
  setTimeout(() => repoModal.classList.add('active'), 10);
}

// Close Modal
function closeModal() {
  repoModal.classList.remove('active');
  setTimeout(() => {
    repoModal.style.display = 'none';
  }, 250);
}

// Setup Event Listeners
function setupEventListeners() {
  // Search input
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    clearSearchBtn.style.display = currentSearch ? 'block' : 'none';
    renderRepos();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentSearch = '';
    clearSearchBtn.style.display = 'none';
    renderRepos();
  });

  // Filter chips
  filterChips.addEventListener('click', (e) => {
    if (e.target.classList.contains('chip')) {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.getAttribute('data-filter');
      renderRepos();
    }
  });

  // Sort dropdown
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderRepos();
  });

  // Refresh sync button
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      fetchUserRepos();
    });
  }

  // Contact Modal Events
  const contactBtn = document.getElementById('contact-btn');
  const contactModal = document.getElementById('contact-modal');
  const contactModalClose = document.getElementById('contact-modal-close');

  if (contactBtn && contactModal) {
    contactBtn.addEventListener('click', () => {
      contactModal.style.display = 'flex';
      setTimeout(() => contactModal.classList.add('active'), 10);
    });

    const closeContactModal = () => {
      contactModal.classList.remove('active');
      setTimeout(() => contactModal.style.display = 'none', 300);
    };

    if (contactModalClose) contactModalClose.addEventListener('click', closeContactModal);
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) closeContactModal();
    });
  }

  // Article Modal events
  if (articleModalClose) articleModalClose.addEventListener('click', closeArticleModal);
  if (articleCloseBtnBottom) articleCloseBtnBottom.addEventListener('click', closeArticleModal);
  if (articleModal) {
    articleModal.addEventListener('click', (e) => {
      if (e.target === articleModal) closeArticleModal();
    });
  }

  // Modal events
  modalClose.addEventListener('click', closeModal);
  repoModal.addEventListener('click', (e) => {
    if (e.target === repoModal) closeModal();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (repoModal.classList.contains('active')) closeModal();
      if (articleModal && articleModal.classList.contains('active')) closeArticleModal();
      if (contactModal && contactModal.classList.contains('active')) {
        contactModal.classList.remove('active');
        setTimeout(() => contactModal.style.display = 'none', 300);
      }
    }
  });

  // Copy Clone URL
  copyCloneBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(cloneUrlInput.value);
      copyToast.style.display = 'inline-block';
      setTimeout(() => {
        copyToast.style.display = 'none';
      }, 2500);
    } catch (err) {
      // Fallback select copy
      cloneUrlInput.select();
      document.execCommand('copy');
      copyToast.style.display = 'inline-block';
      setTimeout(() => {
        copyToast.style.display = 'none';
      }, 2500);
    }
  });
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  updateStats();
  fetchUserRepos();
  renderBlogArticles();
});
