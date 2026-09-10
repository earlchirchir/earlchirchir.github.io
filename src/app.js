// GitHub Portfolio Application for @earlchirchir

const GITHUB_USERNAME = 'earlchirchir';

// Hydrated Fallback Repositories Data (Updated with Title-Case Names)
const FALLBACK_REPOS = [
  {
    id: 1309916364,
    name: 'ABB-CRB-15000-Robotic-Arm-Kinematics-Trajectory-Planning',
    html_url: 'https://github.com/earlchirchir/ABB-CRB-15000-Robotic-Arm-Kinematics-Trajectory-Planning',
    description: 'Optimized cycle execution time by ~25% for the ABB GoFa collaborative arm. Formulated mathematical kinematic solvers, inverse dynamics, and bang-coast-bang time-optimal velocity profiles. Validated trajectory constraints through MATLAB and RoboDK 3D.',
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
    description: 'Managed FreeRTOS task scheduling and LVGL v9 rendering constraints on the ESP32 Cheap Yellow Display (CYD) for high-speed RF visualization.',
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
    description: 'Industrial IoT weight sensing telemetry platform using load cells, HX711 amplifier, and cloud MQTT integration.',
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
    description: 'Autonomous retail automation system using ESP32, RFID item scanning, HX711 24-bit load-cell tare verification, and MQTT telemetry protocol for synchronized automated billing.',
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
    description: 'Tactile assistive hardware interface featuring ERM/LRA haptic feedback drivers via I2C, capacitive sensor matrix, and low-latency audio synthesis protocols for deafblind communication.',
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

// Project Significance & Codebase Complexity Ranking Order
const PROJECT_SIGNIFICANCE_ORDER = [
  'abb-crb-15000',
  'esp32-spectrum-radar',
  'automated-shopping-cart',
  'odi2-deafblind-assistive-device',
  'iot-weighing-solution-for-bulk-bins',
  'spatial-rpr-robot',
  'eggcellent-automated-chicken-coop',
  'load-sensor-modules-pcb',
  'onboard-monitoring-system',
  'esp32-2432s022c-capabilities-showcase-firmware',
  'home-renovation-impact-analysis'
];

// Hackster.io Blog Articles Data
const HACKSTER_ARTICLES = [
  {
    id: 'esp32-spectrum-radar-article',
    title: 'ESP32 2.4GHz Wi-Fi Spectrum Analyzer & Network Inspector',
    elevatorPitch: 'Formulated real-time 2.4GHz Wi-Fi RF congestion visualizer and touch network inspector using the ESP32 Cheap Yellow Display (CYD), LVGL v9, and FreeRTOS dual-core task scheduling.',
    publishedDate: 'July 2026',
    readTime: '4 min read',
    hacksterUrl: 'https://www.hackster.io/earl-chirchir',
    tags: ['ESP32', 'Wi-Fi', 'Spectrum Analyzer', 'LVGL v9', 'FreeRTOS'],
    markdownContent: `
# ESP32 2.4GHz Wi-Fi Spectrum Analyzer & Network Inspector

**Technical Summary:** Formulated real-time 2.4GHz Wi-Fi RF congestion visualizer and touch network inspector using the ESP32 Cheap Yellow Display (CYD), LVGL v9, and FreeRTOS dual-core scheduling.

---

## Hardware & Architecture

### Components
1. **ESP32 Cheap Yellow Display (ESP32-2432S022C / CYD)** (2.8" 240x320 TFT Touchscreen)
2. **USB-C / Micro-USB Interface** for power & flashing

### Firmware & Libraries
1. **PlatformIO / Arduino C++ Toolchain**
2. **LVGL v9** (Light and Versatile Graphics Library)
3. **FreeRTOS** (Dual-core task management)
4. **ESP32 Wi-Fi SDK (Promiscuous Mode / RSSI scanning)**

---

## Engineering Overview

Finding an uncongested Wi-Fi channel in crowded environments (offices, industrial plants, workshops) can significantly improve wireless telemetry reliability. Commercial RF spectrum analyzers can be prohibitive in cost, but using an ESP32 microcontroller with a touch panel, a portable handheld spectrum analyzer can be implemented for under £15.

### Key Capabilities
- **Real-Time 13-Channel Spectrum Density Graph:** Scans and displays Access Point saturation across 2.4GHz channels 1–13.
- **Non-Overlapping Channel Telemetry:** Highlights standard primary channels (1, 6, and 11).
- **Congestion Classification:**
  - **Optimal (1–2 APs):** Recommended channel for lowest co-channel interference.
  - **Moderate (3–5 APs)**
  - **Congested (6+ APs)**
- **Touch Network Inspector:** Tapping any detected Wi-Fi network inspects:
  - **BSSID (MAC Address)**
  - **Center Frequency & Channel** (e.g. \`Ch 6 - 2.437 GHz\`)
  - **Security Encryption** (\`WPA2-PSK\`, \`WPA3-PSK\`, \`Open\`, \`Enterprise\`)
  - **Signal Strength Bar Meter** (\`-30 dBm\` to \`-100 dBm\`)
- **Dual-Core FreeRTOS Architecture:** Core 0 runs continuous Wi-Fi scanning routines while Core 1 executes LVGL v9 rendering at a stable 60 FPS without buffer starvation.

---

## Hardware Setup & Pin Mapping

The **ESP32-2432S022C (CYD)** integrates display, touch controller, and microcontroller on a single PCB:

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

## Firmware Deployment

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/earlchirchir/ESP32-Spectrum-Radar.git
   \`\`\`
2. Open the project in **PlatformIO**.
3. Select board \`esp32-2432S022C\` in \`platformio.ini\`.
4. Compile and upload firmware via USB.

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

      // Explicitly clean descriptions for key projects
      repositories.forEach(r => {
        if (r.name.toLowerCase().includes('abb-crb-15000')) {
          r.description = 'Optimized cycle execution time by ~25% for the ABB GoFa collaborative arm. Formulated mathematical kinematic solvers, inverse dynamics, and bang-coast-bang time-optimal velocity profiles. Validated trajectory constraints through MATLAB and RoboDK 3D.';
        }
        if (r.name.toLowerCase().includes('esp32-spectrum-radar')) {
          r.description = 'Managed FreeRTOS task scheduling and LVGL v9 rendering constraints on the ESP32 Cheap Yellow Display (CYD) for high-speed RF visualization.';
        }
        if (r.name.toLowerCase().includes('automated-shopping-cart')) {
          r.description = 'Autonomous retail automation system using ESP32, RFID item scanning, HX711 24-bit load-cell tare verification, and MQTT telemetry protocol for synchronized automated billing.';
        }
        if (r.name.toLowerCase().includes('odi2-deafblind-assistive-device')) {
          r.description = 'Tactile assistive hardware interface featuring ERM/LRA haptic feedback drivers via I2C, capacitive sensor matrix, and low-latency audio synthesis protocols for deafblind communication.';
        }
        if (r.name.toLowerCase().includes('iot-weighing-solution-for-bulk-bins')) {
          r.description = 'Industrial IoT weight sensing telemetry platform using load cells, HX711 amplifier, and cloud MQTT integration.';
        }
        if (r.name.toLowerCase().includes('load-sensor-modules-pcb')) {
          r.description = 'Custom PCB layout accommodating 6 load sensor modules for modular plug-and-play hardware sensing.';
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
    // Hide website portfolio and unfinished repos from the project grid
    if (repo.name.toLowerCase().includes('earlchirchir.github.io')) return false;
    if (repo.name.toLowerCase().includes('nexora_care_flow_forecast')) return false;

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

      <div class="card-tags-row">
        ${isPinned ? `<span class="tag-badge badge-pinned"><i class="fa-solid fa-thumbtack"></i> Pinned</span>` : ''}
        ${isDissertation ? `
          <span class="tag-badge badge-dissertation"><i class="fa-solid fa-robot"></i> Kinematics & Dynamics</span>
          <span class="tag-badge badge-grade"><i class="fa-solid fa-gauge-high"></i> ~25% Cycle Gain</span>
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
          <li><strong>Institution:</strong> Kingston University London (2024 &ndash; 2025)</li>
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
  } else if (repo.name.toLowerCase().includes('iot-weighing-solution-for-bulk-bins')) {
    modalDescription.innerHTML = `
      <p style="margin-bottom: 12px;">Industrial IoT data logging and telemetry platform for industrial machinery and bulk weighing bins, improving remote data accuracy by ~40% and feeding real-time production metrics to SQL databases and Power BI dashboards.</p>
      <div style="background: rgba(14, 165, 233, 0.1); border: 1px solid rgba(14, 165, 233, 0.3); border-radius: 8px; padding: 12px; margin-bottom: 16px;">
        <h4 style="color: #38bdf8; margin-bottom: 8px; font-size: 0.95rem;"><i class="fa-solid fa-industry"></i> Industrial Deployment Highlights</h4>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 1.6; color: var(--text-dim);">
          <li><strong>Hardware Stack:</strong> ESP32 / Arduino Nano, HX711 24-bit ADC amplifier, Strain Gauge Load Cells</li>
          <li><strong>Telemetry Protocols:</strong> JSON-based data payload over Wi-Fi / MQTT / HTTP to remote web servers</li>
          <li><strong>HMI Integration:</strong> Nextion touchscreen HMI for real-time operator machine communication</li>
          <li><strong>Industrial Impact:</strong> Increased machine uptime, eliminated manual weighing errors, and automated batch logging</li>
        </ul>
      </div>
    `;
  } else if (repo.name.toLowerCase().includes('load-sensor-modules-pcb')) {
    modalDescription.innerHTML = `
      <p style="margin-bottom: 12px;">Custom-designed printed circuit board accommodating modular multi-channel load sensor interfaces for industrial weighing and telemetry platforms.</p>
      <div style="background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 12px; margin-bottom: 16px;">
        <h4 style="color: #4ade80; margin-bottom: 8px; font-size: 0.95rem;"><i class="fa-solid fa-microchip"></i> Hardware Design Specifications</h4>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 1.6; color: var(--text-dim);">
          <li><strong>CAD / EDA Tools:</strong> KiCAD & Autodesk Eagle for schematic capture and multi-layer PCB layout</li>
          <li><strong>Sensor Interface:</strong> 6 modular load-cell terminal headers with onboard analog filtering and conditioning</li>
          <li><strong>Manufacturing & Assembly:</strong> 2-layer FR-4 fabrication, surface-mount and through-hole precision soldering</li>
        </ul>
      </div>
    `;
  } else if (repo.name.toLowerCase().includes('eggcellent-automated-chicken-coop')) {
    modalDescription.innerHTML = `
      <p style="margin-bottom: 12px;">1st Place Award-Winning smart agricultural IoT coop environment controller with automated climate regulation, motorized door actuators, and feed level telemetry.</p>
      <div style="background: rgba(234, 179, 8, 0.1); border: 1px solid rgba(234, 179, 8, 0.3); border-radius: 8px; padding: 12px; margin-bottom: 16px;">
        <h4 style="color: #facc15; margin-bottom: 8px; font-size: 0.95rem;"><i class="fa-solid fa-trophy"></i> 1st Place Intervarsity Award Winner</h4>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 1.6; color: var(--text-dim);">
          <li><strong>Recognition:</strong> 1st Place Engineering Innovator — Riara University Intervarsity Competition</li>
          <li><strong>Hardware:</strong> ESP32 / Arduino Nano, L298N motor driver, DS3231 RTC, DHT22 sensors, ultrasonic level sensing</li>
          <li><strong>Firmware:</strong> C++ finite state machine controlling automated scheduled & light-dependent actuation</li>
        </ul>
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

    const stickyNavContactBtn = document.getElementById('sticky-nav-contact-btn');
    if (stickyNavContactBtn) {
      stickyNavContactBtn.addEventListener('click', () => {
        contactModal.style.display = 'flex';
        setTimeout(() => contactModal.classList.add('active'), 10);
      });
    }
  }

  // Sticky Navigation Smooth Scrolling & Scrollspy
  setupStickyNav();

  // Interactive Bang-Coast-Bang Trajectory Simulator Engine
  initTrajectorySimulator();

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

// ==========================================================================
// Feature 1: Sticky Navigation Bar & Scrollspy
// ==========================================================================
function setupStickyNav() {
  const navLinks = document.querySelectorAll('#nav-links a[href^="#"]');
  const sections = [
    document.getElementById('overview-highlights'),
    document.getElementById('credentials-ribbon'),
    document.getElementById('trajectory-simulator'),
    document.getElementById('skills-matrix'),
    document.getElementById('repos-section'),
    document.getElementById('blog-section')
  ].filter(Boolean);

  // Smooth scroll with offset for sticky nav (60px)
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        const navOffset = 64;
        const targetTop = targetElem.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active link scrollspy
  const onScroll = () => {
    const scrollPos = window.pageYOffset + 110;
    let currentId = '';

    for (const section of sections) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.id;
        break;
      }
    }

    if (!currentId && sections.length > 0 && scrollPos < sections[0].offsetTop) {
      currentId = sections[0].id;
    }

    if (currentId) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

// ==========================================================================
// Feature 2: Interactive Bang-Coast-Bang Trajectory Engine for ABB GoFa
// ==========================================================================
function initTrajectorySimulator() {
  const container = document.getElementById('trajectory-simulator');
  if (!container) return;

  const displacementSlider = document.getElementById('traj-displacement');
  const velocitySlider = document.getElementById('traj-velocity');
  const accelSlider = document.getElementById('traj-accel');

  const valDisplacement = document.getElementById('val-displacement');
  const valVelocity = document.getElementById('val-velocity');
  const valAccel = document.getElementById('val-accel');

  const btnProfileOptimal = document.getElementById('btn-profile-optimal');
  const btnProfileUnopt = document.getElementById('btn-profile-unopt');
  const presetBtns = container.querySelectorAll('.preset-btn');

  const btnPlaySim = document.getElementById('btn-play-sim');
  const btnResetSim = document.getElementById('btn-reset-sim');

  const teleTotalTime = document.getElementById('tele-total-time');
  const teleAccelTime = document.getElementById('tele-accel-time');
  const teleCoastTime = document.getElementById('tele-coast-time');
  const teleEfficiency = document.getElementById('tele-efficiency');

  const canvas = document.getElementById('trajectory-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const scrubberLine = document.getElementById('sim-scrubber-line');
  const liveTimeIndicator = document.getElementById('live-time-indicator');

  const readoutPos = document.getElementById('readout-pos');
  const readoutVel = document.getElementById('readout-vel');
  const readoutStatus = document.getElementById('readout-status');

  // Robotic Arm SVG elements
  const link1 = document.getElementById('arm-link-1');
  const joint2 = document.getElementById('arm-joint-2');
  const link2 = document.getElementById('arm-link-2');
  const joint3 = document.getElementById('arm-joint-3');
  const endEffector = document.getElementById('arm-end-effector');
  const toolTip = document.getElementById('arm-tool-tip');

  // State
  let targetDeg = parseFloat(displacementSlider.value);
  let vMax = parseFloat(velocitySlider.value);
  let aMax = parseFloat(accelSlider.value);
  let mode = 'optimal'; // 'optimal' or 'unoptimized'
  let animId = null;
  let isPlaying = false;
  let simTime = 0;

  // Preset Configurations
  const presets = {
    'fast-transfer': { deg: 90, vel: 2.2, acc: 5.5, mode: 'optimal' },
    'precision': { deg: 45, vel: 0.9, acc: 2.0, mode: 'optimal' },
    'heavy-payload': { deg: 180, vel: 2.6, acc: 6.0, mode: 'optimal' }
  };

  function computeKinematics() {
    const D_rad = (targetDeg * Math.PI) / 180;
    let t_a = vMax / aMax;
    const d_acc = aMax * Math.pow(t_a, 2); // = vMax^2 / aMax

    let v_peak = vMax;
    let t_c = 0;
    let T = 0;

    if (D_rad < d_acc) {
      // Triangular profile (trajectory doesn't reach vMax)
      v_peak = Math.sqrt(D_rad * aMax);
      t_a = v_peak / aMax;
      t_c = 0;
      T = 2 * t_a;
    } else {
      // Full trapezoidal profile (Bang-Coast-Bang)
      v_peak = vMax;
      const d_coast = D_rad - d_acc;
      t_c = d_coast / vMax;
      T = 2 * t_a + t_c;
    }

    // High-jerk / unoptimized profile benchmark (for comparison)
    const T_unopt = T * 1.28;
    const efficiencyGain = ((T_unopt - T) / T_unopt) * 100;

    return {
      D_rad,
      t_a,
      t_c,
      T: mode === 'optimal' ? T : T_unopt,
      T_optimal: T,
      T_unopt,
      v_peak,
      efficiencyGain
    };
  }

  // Calculate kinematics at instant time t
  function evaluateAtTime(t, k) {
    const { D_rad, t_a, t_c, T, v_peak } = k;
    let s = 0;
    let v = 0;
    let a = 0;
    let statusText = 'Ready (Standby)';

    if (mode === 'optimal') {
      if (t <= 0) {
        s = 0; v = 0; a = 0;
        statusText = 'Ready (Standby)';
      } else if (t <= t_a) {
        a = aMax;
        v = aMax * t;
        s = 0.5 * aMax * t * t;
        statusText = 'Accelerating (+A)';
      } else if (t <= t_a + t_c) {
        a = 0;
        v = v_peak;
        s = 0.5 * aMax * t_a * t_a + v_peak * (t - t_a);
        statusText = 'Coasting (Coast Phase)';
      } else if (t < T) {
        const tau = t - (t_a + t_c);
        a = -aMax;
        v = v_peak - aMax * tau;
        s = 0.5 * aMax * t_a * t_a + v_peak * t_c + v_peak * tau - 0.5 * aMax * tau * tau;
        statusText = 'Decelerating (-A)';
      } else {
        s = D_rad;
        v = 0;
        a = 0;
        statusText = 'Target Waypoint Reached';
      }
    } else {
      // Unoptimized constant speed with jerk impulse
      if (t <= 0) {
        s = 0; v = 0; a = 0;
      } else if (t >= T) {
        s = D_rad; v = 0; a = 0;
        statusText = 'Cycle Completed (High Jerk Spikes)';
      } else {
        // Linear velocity with abrupt acceleration pulses
        v = (D_rad / T);
        s = v * t;
        a = (t < 0.1 || t > T - 0.1) ? aMax * 1.5 : 0;
        statusText = 'Constant Speed Movement';
      }
    }

    return { s, v, a, statusText };
  }

  function updateTelemetry(k) {
    teleTotalTime.textContent = k.T.toFixed(2) + ' s';
    teleAccelTime.textContent = k.t_a.toFixed(2) + ' s';
    teleCoastTime.textContent = k.t_c.toFixed(2) + ' s';
    teleEfficiency.textContent = '+' + k.efficiencyGain.toFixed(1) + '%';
  }

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset scale
    ctx.scale(dpr, dpr);
  }

  function drawCurves(k, currentT = 0) {
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    const padLeft = 45;
    const padRight = 20;
    const padTop = 28;
    const padBottom = 25;
    const plotW = w - padLeft - padRight;
    const plotH = h - padTop - padBottom;

    if (plotW <= 0 || plotH <= 0) return;

    // Background phase regions
    const xAccel = padLeft + (k.t_a / k.T) * plotW;
    const xCoast = padLeft + ((k.t_a + k.t_c) / k.T) * plotW;

    // Accel background tint
    ctx.fillStyle = 'rgba(52, 211, 153, 0.04)';
    ctx.fillRect(padLeft, padTop, (k.t_a / k.T) * plotW, plotH);

    // Coast background tint
    ctx.fillStyle = 'rgba(56, 189, 248, 0.03)';
    ctx.fillRect(xAccel, padTop, (k.t_c / k.T) * plotW, plotH);

    // Decel background tint
    ctx.fillStyle = 'rgba(251, 191, 36, 0.04)';
    ctx.fillRect(xCoast, padTop, plotW - (xCoast - padLeft), plotH);

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padTop + (plotH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(padLeft + plotW, y);
      ctx.stroke();
    }

    // Phase partition lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(xAccel, padTop);
    ctx.lineTo(xAccel, padTop + plotH);
    ctx.moveTo(xCoast, padTop);
    ctx.lineTo(xCoast, padTop + plotH);
    ctx.stroke();
    ctx.setLineDash([]);

    // Phase text labels
    ctx.font = '10px Inter, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.textAlign = 'center';
    if (k.t_a > 0.05) ctx.fillText('Accel (ta)', (padLeft + xAccel) / 2, padTop - 10);
    if (k.t_c > 0.1) ctx.fillText('Coast (tc)', (xAccel + xCoast) / 2, padTop - 10);
    ctx.fillText('Decel (td)', (xCoast + padLeft + plotW) / 2, padTop - 10);

    // Time Axis Marks
    ctx.textAlign = 'center';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('0s', padLeft, padTop + plotH + 16);
    ctx.fillText((k.T / 2).toFixed(1) + 's', padLeft + plotW / 2, padTop + plotH + 16);
    ctx.fillText(k.T.toFixed(1) + 's', padLeft + plotW, padTop + plotH + 16);

    const steps = 120;
    const dt = k.T / steps;

    // 1. Draw Displacement Curve s(t) [Cyan]
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
      const t = i * dt;
      const { s } = evaluateAtTime(t, k);
      const x = padLeft + (t / k.T) * plotW;
      const y = padTop + plotH - (s / k.D_rad) * plotH * 0.9;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // 2. Draw Velocity Profile v(t) [Emerald]
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
      const t = i * dt;
      const { v } = evaluateAtTime(t, k);
      const x = padLeft + (t / k.T) * plotW;
      const y = padTop + plotH - (v / (k.v_peak * 1.35)) * plotH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // 3. Draw Acceleration Profile a(t) [Amber]
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1.75;
    ctx.beginPath();
    const zeroAccY = padTop + plotH * 0.55;
    for (let i = 0; i <= steps; i++) {
      const t = i * dt;
      const { a } = evaluateAtTime(t, k);
      const x = padLeft + (t / k.T) * plotW;
      const y = zeroAccY - (a / (aMax * 1.25)) * (plotH * 0.35);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Scrubber line positioning
    if (scrubberLine) {
      const curX = padLeft + Math.min(1, Math.max(0, currentT / k.T)) * plotW;
      scrubberLine.style.left = `${curX}px`;
    }
  }

  function updateRobotArm(radFraction) {
    if (!link1 || !joint2 || !link2 || !joint3 || !endEffector || !toolTip) return;

    // Forward Kinematics 2D visualization of ABB GoFa 2-link representation
    const baseOriginX = 41;
    const baseOriginY = 95;
    const len1 = 52;
    const len2 = 56;
    const lenTool = 24;

    // Angle of shoulder joint rotates with trajectory displacement
    const baseAngle = -Math.PI / 3; // resting shoulder angle ~ -60 deg
    const maxDelta = (targetDeg * Math.PI) / 180;
    const curTheta1 = baseAngle + radFraction * maxDelta * 0.75;
    const curTheta2 = curTheta1 + 0.5 + radFraction * 0.3;

    // Elbow position
    const elbowX = baseOriginX + len1 * Math.cos(curTheta1);
    const elbowY = baseOriginY + len1 * Math.sin(curTheta1);

    // Wrist position
    const wristX = elbowX + len2 * Math.cos(curTheta2);
    const wristY = elbowY + len2 * Math.sin(curTheta2);

    // Tool tip position
    const tipX = wristX + lenTool * Math.cos(curTheta2 + 0.15);
    const tipY = wristY + lenTool * Math.sin(curTheta2 + 0.15);

    link1.setAttribute('x2', elbowX.toFixed(1));
    link1.setAttribute('y2', elbowY.toFixed(1));

    joint2.setAttribute('cx', elbowX.toFixed(1));
    joint2.setAttribute('cy', elbowY.toFixed(1));

    link2.setAttribute('x1', elbowX.toFixed(1));
    link2.setAttribute('y1', elbowY.toFixed(1));
    link2.setAttribute('x2', wristX.toFixed(1));
    link2.setAttribute('y2', wristY.toFixed(1));

    joint3.setAttribute('cx', wristX.toFixed(1));
    joint3.setAttribute('cy', wristY.toFixed(1));

    endEffector.setAttribute('x1', wristX.toFixed(1));
    endEffector.setAttribute('y1', wristY.toFixed(1));
    endEffector.setAttribute('x2', tipX.toFixed(1));
    endEffector.setAttribute('y2', tipY.toFixed(1));

    toolTip.setAttribute('cx', tipX.toFixed(1));
    toolTip.setAttribute('cy', tipY.toFixed(1));
  }

  function renderState(t = 0) {
    const k = computeKinematics();
    updateTelemetry(k);
    drawCurves(k, t);

    const { s, v, statusText } = evaluateAtTime(t, k);
    const posDeg = (s * 180) / Math.PI;

    if (readoutPos) readoutPos.textContent = `${posDeg.toFixed(1)}° / ${targetDeg.toFixed(1)}°`;
    if (readoutVel) readoutVel.textContent = `${v.toFixed(2)} rad/s`;
    if (readoutStatus) {
      readoutStatus.textContent = statusText;
      readoutStatus.style.color = t >= k.T ? '#34d399' : '#38bdf8';
    }
    if (liveTimeIndicator) {
      liveTimeIndicator.textContent = `t = ${t.toFixed(2)}s / ${k.T.toFixed(2)}s`;
    }

    updateRobotArm(k.D_rad > 0 ? s / k.D_rad : 0);
  }

  function startSimulation() {
    if (isPlaying) {
      cancelAnimationFrame(animId);
      isPlaying = false;
      btnPlaySim.innerHTML = '<i class="fa-solid fa-play"></i> Resume Simulation';
      return;
    }

    const k = computeKinematics();
    if (simTime >= k.T) simTime = 0;

    isPlaying = true;
    if (scrubberLine) scrubberLine.classList.add('active');
    btnPlaySim.innerHTML = '<i class="fa-solid fa-pause"></i> Pause Simulation';

    let lastTs = performance.now();

    function step(ts) {
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;
      simTime += dt;

      if (simTime >= k.T) {
        simTime = k.T;
        renderState(simTime);
        isPlaying = false;
        btnPlaySim.innerHTML = '<i class="fa-solid fa-rotate-left"></i> Replay Simulation';
        return;
      }

      renderState(simTime);
      animId = requestAnimationFrame(step);
    }

    animId = requestAnimationFrame(step);
  }

  function resetSimulation() {
    if (isPlaying) {
      cancelAnimationFrame(animId);
      isPlaying = false;
    }
    simTime = 0;
    btnPlaySim.innerHTML = '<i class="fa-solid fa-play"></i> Run Trajectory Simulation';
    renderState(0);
  }

  // Slider change listeners
  displacementSlider.addEventListener('input', (e) => {
    targetDeg = parseFloat(e.target.value);
    valDisplacement.textContent = `${targetDeg}°`;
    presetBtns.forEach(b => b.classList.remove('active'));
    resetSimulation();
  });

  velocitySlider.addEventListener('input', (e) => {
    vMax = parseFloat(e.target.value);
    valVelocity.textContent = `${vMax.toFixed(1)} rad/s`;
    presetBtns.forEach(b => b.classList.remove('active'));
    resetSimulation();
  });

  accelSlider.addEventListener('input', (e) => {
    aMax = parseFloat(e.target.value);
    valAccel.textContent = `${aMax.toFixed(1)} rad/s²`;
    presetBtns.forEach(b => b.classList.remove('active'));
    resetSimulation();
  });

  // Profile comparison toggle
  btnProfileOptimal.addEventListener('click', () => {
    mode = 'optimal';
    btnProfileOptimal.classList.add('active');
    btnProfileUnopt.classList.remove('active');
    resetSimulation();
  });

  btnProfileUnopt.addEventListener('click', () => {
    mode = 'unoptimized';
    btnProfileUnopt.classList.add('active');
    btnProfileOptimal.classList.remove('active');
    resetSimulation();
  });

  // Presets
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const presetKey = btn.dataset.preset;
      const p = presets[presetKey];
      if (!p) return;

      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      targetDeg = p.deg;
      vMax = p.vel;
      aMax = p.acc;
      mode = p.mode;

      displacementSlider.value = targetDeg;
      velocitySlider.value = vMax;
      accelSlider.value = aMax;

      valDisplacement.textContent = `${targetDeg}°`;
      valVelocity.textContent = `${vMax.toFixed(1)} rad/s`;
      valAccel.textContent = `${aMax.toFixed(1)} rad/s²`;

      btnProfileOptimal.classList.toggle('active', mode === 'optimal');
      btnProfileUnopt.classList.toggle('active', mode === 'unoptimized');

      resetSimulation();
    });
  });

  btnPlaySim.addEventListener('click', startSimulation);
  btnResetSim.addEventListener('click', resetSimulation);

  window.addEventListener('resize', () => {
    resizeCanvas();
    renderState(simTime);
  });

  // Initial render
  setTimeout(() => {
    resizeCanvas();
    renderState(0);
  }, 50);
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  updateStats();
  fetchUserRepos();
  renderBlogArticles();
});
