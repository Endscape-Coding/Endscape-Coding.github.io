document.addEventListener('DOMContentLoaded', () => {
  if (typeof config === 'undefined' || !config.editions) {
    console.warn('config.editions не найден, галерея не будет отображена');
    return;
  }

  const filtersContainer = document.getElementById('gallery-filters');
  const galleryContainer = document.getElementById('screenshots-container');
  const noScreenshotsMsg = document.getElementById('no-screenshots-msg');

  const screenshotCaptions = {
    ru: ['Рабочий стол', 'Приложения', 'Терминал', 'Настройки', 'Установщик', 'Меню'],
    en: ['Desktop', 'Applications', 'Terminal', 'Settings', 'Installer', 'Menu']
  };

  const screenshotIcons = {
    'desktop': 'fa-desktop',
    'apps': 'fa-th-large',
    'terminal': 'fa-terminal',
    'settings': 'fa-cog',
    'installer': 'fa-download',
    'menu': 'fa-bars'
  };

  function renderFilters() {
    if (!filtersContainer) return;

    const lang = currentLang || 'ru';
    const allScreenshots = collectAllScreenshots();
    
    const editionCounts = {};
    allScreenshots.forEach(item => {
      const key = item.editionId;
      editionCounts[key] = (editionCounts[key] || 0) + 1;
    });

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
        const filter = btn.dataset.filter;
        renderGallery(filter);
      });
    });
  }

  function collectAllScreenshots() {
    const result = [];
    const lang = currentLang || 'ru';

    config.editions.forEach((edition, editionIndex) => {
      edition.variants.forEach((variant, variantIndex) => {
        const screenshots = variant.screenshots || [];
        const variantName = variant[`name${lang.toUpperCase()}`] || variant.name || '';
        
        screenshots.forEach((src, imgIndex) => {
          const captions = screenshotCaptions[lang] || screenshotCaptions.ru;
          const iconKey = Object.keys(screenshotIcons)[imgIndex] || 'desktop';
          
          result.push({
            src,
            alt: captions[imgIndex] || `Screenshot ${imgIndex + 1}`,
            icon: screenshotIcons[iconKey] || 'fa-image',
            editionId: edition.id,
            editionTitle: edition.title,
            editionBadge: edition.badge,
            editionBadgeClass: edition.badgeClass,
            variantName,
            caption: captions[imgIndex] || `Screenshot ${imgIndex + 1}`,
            editionIndex,
            imgIndex
          });
        });
      });
    });

    return result;
  }

  function renderGallery(filter = 'all') {
    if (!galleryContainer) return;
    
    const allScreenshots = collectAllScreenshots();
    const filtered = filter === 'all' 
      ? allScreenshots 
      : allScreenshots.filter(item => item.editionId === filter);

    if (filtered.length === 0) {
      galleryContainer.style.display = 'none';
      noScreenshotsMsg.style.display = 'block';
      return;
    }

    galleryContainer.style.display = 'grid';
    noScreenshotsMsg.style.display = 'none';

    galleryContainer.innerHTML = filtered.map(item => `
      <article class="screenshot-card-full animate__animated animate__fadeIn" 
               data-edition="${item.editionIndex}" 
               data-img="${item.imgIndex}">
        <img src="${item.src}" alt="${item.alt}" loading="lazy">
        <div class="screenshot-card-info">
          <span class="screenshot-card-edition">
            <span class="edition-badge ${item.editionBadgeClass}" style="padding: 2px 8px; font-size: 0.65rem;">
              ${item.editionBadge}
            </span>
            ${item.editionTitle}
          </span>
          <h3 class="screenshot-card-title">
            <i class="fas ${item.icon}"></i> ${item.caption}
          </h3>
          ${item.variantName ? `
            <div class="screenshot-card-variant">
              <i class="fas fa-layer-group"></i>
              <span>${item.variantName}</span>
            </div>
          ` : ''}
        </div>
      </article>
    `).join('');

    galleryContainer.querySelectorAll('.screenshot-card-full').forEach(card => {
      card.addEventListener('click', () => {
        const editionIndex = parseInt(card.dataset.edition);
        const imgIndex = parseInt(card.dataset.img);
        if (typeof openLightbox === 'function') {
          openLightbox(editionIndex, imgIndex);
        }
      });
    });
  }

  function initGallery() {
    renderFilters();
    renderGallery('all');
  }

  if (typeof updatePageLanguage === 'function') {
    // Если язык уже загружен — рендерим сразу
    initGallery();
    
    window.addEventListener('languageChanged', () => {
      initGallery();
    });
  } else {
    setTimeout(initGallery, 100);
  }
});