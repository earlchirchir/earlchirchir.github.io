// GitHub Portfolio Application for @earlchirchir

const GITHUB_USERNAME = 'earlchirchir';

// Hydrated Fallback Repositories Data (Updated with Title-Case Names)
const FALLBACK_REPOS = [
  {
    id: 1310065999,
    name: 'ESP32-Spectrum-Radar',
    html_url: 'https://github.com/earlchirchir/ESP32-Spectrum-Radar',
    description: 'High-speed audio spectrum & radar visualizer firmware built for ESP32 microcontrollers.',
    language: 'C++',
    stargazers_count: 0,
    forks_count: 0,
    size: 420,
    updated_at: '2026-07-23T15:08:59Z',
    clone_url: 'https://github.com/earlchirchir/ESP32-Spectrum-Radar.git',
    topics: ['esp32', 'firmware', 'radar', 'cplusplus', 'embedded']
  },
  {
    id: 1309916364,
    name: 'ABB-CRB-15000-Kinematics',
    html_url: 'https://github.com/earlchirchir/ABB-CRB-15000-Kinematics',
    description: 'Forward & Inverse Kinematics solver and 3D trajectory simulation for the ABB GoFa CRB 15000 collaborative robot.',
    language: 'MATLAB',
    stargazers_count: 0,
    forks_count: 0,
    size: 26027,
    updated_at: '2026-07-23T13:22:55Z',
    clone_url: 'https://github.com/earlchirchir/ABB-CRB-15000-Kinematics.git',
    topics: ['robotics', 'kinematics', 'matlab', 'cobot', 'trajectory-planning']
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
    id: 1300568574,
    name: 'ABB-CRB-15000-Kinematics-Trajectory-Planning',
    html_url: 'https://github.com/earlchirchir/ABB-CRB-15000-Kinematics-Trajectory-Planning',
    description: 'Comprehensive MATLAB toolbox for ABB CRB 15000 robotic arm inverse dynamics and cubic spline path planning.',
    language: 'MATLAB',
    stargazers_count: 0,
    forks_count: 0,
    size: 52,
    updated_at: '2026-07-14T14:56:22Z',
    clone_url: 'https://github.com/earlchirchir/ABB-CRB-15000-Kinematics-Trajectory-Planning.git',
    topics: ['robot-arm', 'matlab', 'trajectory-planning', 'kinematics']
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
    html_url: 'https://sites.google.com/view/earl-chirchir/automatedshoppingcart',
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
    html_url: 'https://sites.google.com/view/earl-chirchir/odi2-for-deablind-project-page',
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
    html_url: 'https://sites.google.com/view/earl-chirchir/eggcellent',
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

// App State
let repositories = [...FALLBACK_REPOS];
let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'updated';

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

// Modal Elements
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
    statStatus.textContent = 'Syncing...';
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    
    const liveData = await res.json();
    if (Array.isArray(liveData) && liveData.length > 0) {
      // Merge live GitHub API data with custom Google Sites project showcases
      const liveNames = new Set(liveData.map(r => r.name.toLowerCase()));
      const customShowcases = FALLBACK_REPOS.filter(r => !liveNames.has(r.name.toLowerCase()));
      repositories = [...liveData, ...customShowcases];
      statStatus.textContent = 'Live (Sync)';
    }
  } catch (err) {
    console.warn('GitHub API fetch failed or rate-limited. Using hydrated fallback data.', err);
    statStatus.textContent = 'Hydrated Cache';
  } finally {
    updateStats();
    renderRepos();
  }
}

// Render Repositories Grid
function renderRepos() {
  let filtered = repositories.filter(repo => {
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
    if (currentSort === 'updated') {
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

  reposContainer.innerHTML = filtered.map(repo => `
    <article class="repo-card">
      <div class="repo-card-header">
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-title-link">
          ${repo.name}
        </a>
        <span class="lang-pill ${getLanguageClass(repo.language)}">${repo.language || 'Code'}</span>
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
  `).join('');

  // Attach event listeners to Details buttons
  document.querySelectorAll('.details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const repoId = parseInt(e.currentTarget.getAttribute('data-id'));
      const repo = repositories.find(r => r.id === repoId);
      if (repo) openModal(repo);
    });
  });
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
  modalDescription.textContent = repo.description || 'No detailed description available.';
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
  refreshBtn.addEventListener('click', () => {
    fetchUserRepos();
  });

  // Modal events
  modalClose.addEventListener('click', closeModal);
  repoModal.addEventListener('click', (e) => {
    if (e.target === repoModal) closeModal();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && repoModal.classList.contains('active')) {
      closeModal();
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
});
