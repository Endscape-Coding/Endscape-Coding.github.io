let screenshotsData = [];
let currentFilter = 'all';
let screenshotsIndexMap = {};

document.addEventListener('DOMContentLoaded', () => {
  if (typeof config === 'undefined' || !config.editions) {
    console.warn('config.editions не найден');
    return;
  }

  if (typeof screenshotsConfig !== 'undefined') {
    screenshotsData = screenshotsConfig.screenshots || [];
    screenshotsData.sort((a, b) => (a.order || 0) - (b.order || 0));
    console.log(`Загружено ${screenshotsData.length} скриншотов`);
  } else {
    console.error('screenshotsConfig не найден');
    screenshotsData = [];
  }

  function buildScreenshotsIndexMap() {
    screenshotsIndexMap = {};
    let globalIndex = 0;
    
    config.editions.forEach((edition, edIdx) => {
      screenshotsIndexMap[edIdx] = {};
      const editionScreenshots = screenshotsData.filter(s => s.editionId === edition.id);
      editionScreenshots.forEach((s, localIdx) => {
        screenshotsIndexMap[edIdx][localIdx] = globalIndex++;
      });
    });
  }

  buildScreenshotsIndexMap();

  const filtersContainer = document.getElementById('gallery-filters');
  const galleryContainer = document.getElementById('screenshots-container');
  const noScreenshotsMsg = document.getElementById('no-screenshots-msg');

  function getLocalizedText(item, field, defaultValue = '') {
    if (!item[field]) return defaultValue;
    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'ru';
    return item[field][lang] || item[field]['ru'] || defaultValue;
  }

  function collectAllScreenshots() {
    if (!screenshotsData.length) return [];
    return screenshotsData.map(s => ({
      ...s,
      alt: getLocalizedText(s, 'alt', 'Screenshot'),
      caption: getLocalizedText(s, 'caption', 'Screenshot'),
      variantName: getLocalizedText(s, 'variantName', ''),
      originalEditionId: s.editionId
    }));
  }

  function getEditionsWithCounts() {
    const counts = {};
    screenshotsData.forEach(s => {
      const editionId = s.editionId;
      counts[editionId] = (counts[editionId] || 0) + 1;
    });
    return counts;
  }

  function renderFilters() {
    if (!filtersContainer) return;

    const allScreenshots = collectAllScreenshots();
    const editionCounts = getEditionsWithCounts();
    
    let filtersHTML = `
      <button class="filter-btn active" data-filter="all">
        <i class="fas fa-grid-2"></i>
        <span data-ru="Все" data-en="All">Все</span>
        <span class="badge-count">${allScreenshots.length}</span>
      </button>
    `;

    config.editions.forEach(edition => {
      const count = editionCounts[edition.id] || 0;
      if (count === 0) return;
      
      const badgeClass = edition.badgeClass || '';
      const editionName = edition.title;
      
      filtersHTML += `
        <button class="filter-btn" data-filter="${edition.id}">
          <span class="edition-badge ${badgeClass}" style="padding: 2px 10px; font-size: 0.65rem;">
            ${edition.badge}
          </span>
          ${editionName}
          <span class="badge-count">${count}</span>
        </button>
      `;
    });

    filtersContainer.innerHTML = filtersHTML;

    filtersContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filtersContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderGallery(currentFilter);
      });
    });
  }

  function renderGallery(filter = 'all') {
    if (!galleryContainer) return;
    
    const allScreenshots = collectAllScreenshots();
    const filtered = filter === 'all' 
      ? allScreenshots 
      : allScreenshots.filter(item => item.editionId === filter);

    if (filtered.length === 0) {
      galleryContainer.style.display = 'none';
      if (noScreenshotsMsg) noScreenshotsMsg.style.display = 'block';
      return;
    }

    galleryContainer.style.display = 'grid';
    if (noScreenshotsMsg) noScreenshotsMsg.style.display = 'none';

    galleryContainer.innerHTML = filtered.map((item, idx) => {
      let editionIndex = -1;
      let imgIndex = -1;
      
      for (let i = 0; i < config.editions.length; i++) {
        if (config.editions[i].id === item.editionId) {
          editionIndex = i;
          break;
        }
      }
      
      const editionScreenshots = allScreenshots.filter(s => s.editionId === item.editionId);
      imgIndex = editionScreenshots.findIndex(s => s.id === item.id);
      
      return `
        <article class="screenshot-card-full animate__animated animate__fadeIn" 
                 data-edition="${editionIndex}" 
                 data-img="${imgIndex >= 0 ? imgIndex : idx}"
                 data-screenshot-id="${item.id}">
          <img src="${item.src}" alt="${item.alt}" loading="lazy">
          <div class="screenshot-card-info">
            <span class="screenshot-card-edition">
              <span class="edition-badge ${item.editionBadgeClass}" style="padding: 2px 8px; font-size: 0.65rem;">
                ${item.editionBadge}
              </span>
              ${item.editionTitle}
            </span>
            <h3 class="screenshot-card-title">
              <i class="fas ${item.icon || 'fa-image'}"></i> ${item.caption}
            </h3>
            ${item.variantName ? `
              <div class="screenshot-card-variant">
                <i class="fas fa-layer-group"></i>
                <span>${item.variantName}</span>
              </div>
            ` : ''}
          </div>
        </article>
      `;
    }).join('');

    galleryContainer.querySelectorAll('.screenshot-card-full').forEach(card => {
      card.addEventListener('click', () => {
        const editionIndex = parseInt(card.dataset.edition);
        const imgIndex = parseInt(card.dataset.img);
        if (typeof window.openLightbox === 'function') {
          window.openLightbox(editionIndex, imgIndex);
        }
      });
    });
  }

  window.getScreenshotsForEdition = function(editionIndex) {
    if (!config.editions[editionIndex]) return [];
    const targetEditionId = config.editions[editionIndex].id;
    const allScreenshots = collectAllScreenshots();
    return allScreenshots.filter(s => s.editionId === targetEditionId).map(s => s.src);
  };

  renderFilters();
  renderGallery(currentFilter);

  window.addEventListener('languageChanged', () => {
    renderFilters();
    renderGallery(currentFilter);
  });
});