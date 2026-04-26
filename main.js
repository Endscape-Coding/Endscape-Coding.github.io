document.addEventListener('DOMContentLoaded', () => {
  const editionsContainer = document.getElementById('editions-container');
  if (editionsContainer && config.editions) {
    editionsContainer.innerHTML = config.editions.map((edition, editionIndex) => {
      const variant = edition.variants[0];

      const featuresHtml = variant.featuresRu ? variant.featuresRu.map(feature => `
      <div class="feature-item">
      <i class="fas fa-check-circle feature-icon"></i>
      <span class="feature-text">${feature}</span>
      </div>
      `).join('') : '';

      const screenshotsHtml = variant.screenshots && variant.screenshots.length > 0 ? `
      <div class="screenshot-gallery">
      <h3 class="gallery-title"><i class="fas fa-images"></i> Скриншоты</h3>
      <div class="gallery-grid">
      ${variant.screenshots.map((src, idx) => {
        const captions = ['Рабочий стол', 'Приложения', 'Терминал', 'Настройки'];
        return `
        <div class="gallery-item" data-edition="${editionIndex}" data-img="${idx}">
        <img src="${src}" alt="${captions[idx] || 'Скриншот'}">
        <div class="gallery-caption">${captions[idx] || 'Скриншот ' + (idx + 1)}</div>
        </div>
        `;
      }).join('')}
      </div>
      </div>
      ` : '';

      const linksHtml = variant.links && variant.links.length > 0 ? `
      <div class="download-links">
      ${variant.links.map(link => `
        <a href="${link.url}" class="btn ${link.btnClass || 'btn-primary'}" target="_blank" rel="noopener">
        <i class="${link.icon || 'fas fa-download'}"></i>
        ${link.label}
        </a>
        `).join('')}
        </div>
        ` : '<div class="download-links"><span style="color:var(--text-secondary);"><i class="fas fa-clock"></i> Скоро доступно</span></div>';

        const metaHtml = variant.size || variant.date ? `
        <div class="edition-meta">
        ${variant.size ? `
          <div class="meta-item">
          <i class="fas fa-weight-hanging"></i>
          <span>${variant.size}</span>
          </div>
          ` : ''}
          ${variant.date ? `
            <div class="meta-item">
            <i class="fas fa-calendar"></i>
            <span>${variant.date}</span>
            </div>
            ` : ''}
            </div>
            ` : '';

            return `
            <article class="edition-card animate__animated animate__fadeInUp" style="animation-delay: ${editionIndex * 0.1}s">
            <div class="edition-header">
            <span class="edition-badge ${edition.badgeClass}">${edition.badge}</span>
            <h2 class="edition-title">${edition.title}</h2>
            <p class="edition-subtitle">${variant.nameRu || ''}</p>
            </div>
            <div class="edition-body">
            <p class="edition-description">${variant.descriptionRu || edition.descriptionRu}</p>
            ${featuresHtml ? `<div class="edition-features">${featuresHtml}</div>` : ''}
            ${screenshotsHtml}
            ${linksHtml}
            ${metaHtml}
            </div>
            </article>
            `;
    }).join('');

    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const editionIndex = parseInt(item.dataset.edition);
        const imgIndex = parseInt(item.dataset.img);
        openLightbox(editionIndex, imgIndex);
      });
    });
  }

  const dwContainer = document.getElementById('dw-stats-container');
  if (dwContainer) {
    fetch('dw-stats.json')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      renderDistroWatchStats(data);
      if (typeof updatePageLanguage === 'function') {
        updatePageLanguage();
      }
    })
    .catch(err => {
      console.warn('Не удалось загрузить статистику DistroWatch:', err);
      dwContainer.innerHTML = `
      <div class="dw-stats-error">
      <i class="fas fa-exclamation-triangle"></i>
      <span data-ru="Не удалось загрузить статистику" data-en="Failed to load statistics">Не удалось загрузить статистику</span>
      </div>
      `;
    });
  }

  const reqsContainer = document.getElementById('sys-reqs');
  if (reqsContainer && config.systemRequirements) {
    const reqs = [
      { icon: 'fa-microchip', label: 'Процессор', value: config.systemRequirements.cpu },
      { icon: 'fa-memory', label: 'ОЗУ', value: config.systemRequirements.ram },
      { icon: 'fa-hdd', label: 'Диск', value: config.systemRequirements.storage },
      { icon: 'fa-desktop', label: 'Графика', value: config.systemRequirements.graphics }
    ];

    reqsContainer.innerHTML = reqs.map(req => `
    <div class="req-item animate__animated animate__fadeIn">
    <i class="fas ${req.icon}"></i>
    <strong>${req.label}</strong>
    <span>${req.value}</span>
    </div>
    `).join('');
  }

  const copyrightEl = document.getElementById('copyright-text');
  if (copyrightEl && config.copyright) {
    copyrightEl.textContent = config.copyright;
  }

  window.currentEditionIndex = 0;
  window.currentImgIndex = 0;
  window.currentScreenshots = [];
  window.allScreenshots = config.editions.flatMap(ed => ed.variants[0]?.screenshots || []);

  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');

  window.openLightbox = function(editionIndex, imgIndex) {
    const edition = config.editions[editionIndex];
    const screenshots = edition.variants[0]?.screenshots || [];

    if (!screenshots.length) return;

    window.currentEditionIndex = editionIndex;
    window.currentImgIndex = imgIndex;
    window.currentScreenshots = screenshots;

    document.getElementById('lightbox-img').src = screenshots[imgIndex];
    lightbox?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function() {
    lightbox?.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.changeLightboxImg = function(direction) {
    const screenshots = window.currentScreenshots || [];
    if (screenshots.length === 0) return;

    window.currentImgIndex = (window.currentImgIndex + direction + screenshots.length) % screenshots.length;
    document.getElementById('lightbox-img').src = screenshots[window.currentImgIndex];
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', window.closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => window.changeLightboxImg(-1));
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => window.changeLightboxImg(1));
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) window.closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    const lightboxActive = lightbox?.classList.contains('active');
    if (!lightboxActive) return;

    if (e.key === 'Escape') {
      window.closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      window.changeLightboxImg(-1);
    } else if (e.key === 'ArrowRight') {
      window.changeLightboxImg(1);
    }
  });

  document.querySelectorAll('.method-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const method = this.dataset.method;
      const parent = this.closest('.step-content');

      if (!parent) return;

      parent.querySelectorAll('.method-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      parent.querySelectorAll('.method-content').forEach(content => {
        content.classList.remove('active');
      });

      const targetMethod = parent.querySelector(`#${method}-method`);
      if (targetMethod) {
        targetMethod.classList.add('active');
      }
    });
  });

  const video = document.getElementById('desktopVideo');
  if (!video) return;

  const playPauseBtn = document.getElementById('playPauseBtn');
  const playPauseIcon = document.getElementById('playPauseIcon');
  const muteBtn = document.getElementById('muteBtn');
  const muteIcon = document.getElementById('muteIcon');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const videoContainer = document.querySelector('.video-container');

  function togglePlayPause() {
    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn('Ошибка воспроизведения:', err);
        });
      }
    } else {
      video.pause();
    }
  }

  function updatePlayIcon() {
    if (!playPauseIcon) return;
    if (video.paused) {
      playPauseIcon.className = 'fas fa-play';
    } else {
      playPauseIcon.className = 'fas fa-pause';
    }
  }

  function toggleMute() {
    video.muted = !video.muted;
    if (muteIcon) {
      muteIcon.className = video.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    }
  }

  function toggleFullscreen() {
    const container = videoContainer || video;
    if (!container) return;

    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) {
      container.msRequestFullscreen();
    }
  }

  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', togglePlayPause);
    video.addEventListener('click', togglePlayPause);
  }

  if (muteBtn) {
    muteBtn.addEventListener('click', toggleMute);
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', toggleFullscreen);
  }

  video.addEventListener('play', updatePlayIcon);
  video.addEventListener('pause', updatePlayIcon);
  video.addEventListener('ended', updatePlayIcon);

  updatePlayIcon();
  if (muteIcon) {
    muteIcon.className = video.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
  }

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise
    .then(() => {
      updatePlayIcon();
    })
    .catch(() => {
      console.log('Автовоспроизведение заблокировано браузером. Нажмите на видео для запуска.');
      updatePlayIcon();
    });
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && !video.paused) {
      video.pause();
      updatePlayIcon();
    }
  });

  document.addEventListener('fullscreenchange', () => {
    const container = videoContainer || video;
    if (!container) return;

    if (document.fullscreenElement === container) {
      container.classList.add('fullscreen');
    } else {
      container.classList.remove('fullscreen');
    }
  });

  document.addEventListener('webkitfullscreenchange', () => {
    const container = videoContainer || video;
    if (!container) return;

    if (document.webkitFullscreenElement === container) {
      container.classList.add('fullscreen');
    } else {
      container.classList.remove('fullscreen');
    }
  });

  document.addEventListener('msfullscreenchange', () => {
    const container = videoContainer || video;
    if (!container) return;

    if (document.msFullscreenElement === container) {
      container.classList.add('fullscreen');
    } else {
      container.classList.remove('fullscreen');
    }
  });
});

function renderScreenshotPreview() {
  const previewContainer = document.getElementById('screenshot-preview');
  if (!previewContainer || typeof config === 'undefined' || !config.editions) return;

  const lang = currentLang || 'ru';
  const allScreenshots = [];
  const captions = {
    ru: ['Рабочий стол', 'Приложения', 'Терминал', 'Настройки'],
    en: ['Desktop', 'Applications', 'Terminal', 'Settings']
  };

  config.editions.some((edition, edIdx) => {
    return edition.variants.some((variant, varIdx) => {
      const screenshots = variant.screenshots || [];
      screenshots.forEach((src, imgIdx) => {
        if (allScreenshots.length < 4) {
          allScreenshots.push({
            src,
            alt: (captions[lang] || captions.ru)[imgIdx] || 'Screenshot',
                              editionIndex: edIdx,
                              imgIndex: imgIdx
          });
        }
      });
      return allScreenshots.length >= 4;
    });
  });

  if (allScreenshots.length === 0) {
    previewContainer.innerHTML = `
    <div class="screenshot-card" style="grid-column: 1 / -1;">
    <p data-ru="Скриншоты скоро появятся" data-en="Screenshots coming soon">Скриншоты скоро появятся</p>
    </div>
    `;
    return;
  }

  previewContainer.innerHTML = allScreenshots.map(item => `
  <div class="screenshot-card"
  data-edition="${item.editionIndex}"
  data-img="${item.imgIndex}"
  style="cursor: pointer;">
  <img src="${item.src}" alt="${item.alt}" loading="lazy">
  <div class="screenshot-caption">${item.alt}</div>
  </div>
  `).join('');

  previewContainer.querySelectorAll('.screenshot-card').forEach(card => {
    card.addEventListener('click', () => {
      const editionIndex = parseInt(card.dataset.edition);
      const imgIndex = parseInt(card.dataset.img);
      if (typeof openLightbox === 'function') {
        openLightbox(editionIndex, imgIndex);
      }
    });
  });
}

// Вызов renderScreenshotPreview исправлен
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(renderScreenshotPreview, 150);
});

// Функции для DistroWatch stats
function renderDistroWatchStats(stats) {
  const container = document.getElementById('dw-stats-container');
  if (!container) return;

  const lang = currentLang || 'ru';

  const statsData = [
    {
      icon: 'fa-trophy',
      label: { ru: 'Рейтинг популярности', en: 'Popularity Rank' },
      value: `#${stats.popularity_rank || '---'}`,
      change: null,
      color: '#f59e0b'
    },
    {
      icon: 'fa-eye',
      label: { ru: 'Просмотров в день', en: 'Hits per day' },
      value: stats.hits_per_day || '---',
      change: null,
      color: '#10b981'
    },
    {
      icon: 'fa-star',
      label: { ru: 'Оценка пользователей', en: 'User Rating' },
      value: stats.rating ? `${stats.rating}/10` : '---',
      reviews: stats.reviews_count || 0,
      color: '#8b5cf6'
    },
    {
      icon: 'fa-comments',
      label: { ru: 'Отзывов', en: 'Reviews' },
      value: stats.reviews_count || 0,
      change: null,
      color: '#06b6d4'
    }
  ];

  container.innerHTML = `
  <div class="dw-stats-header">
  <div class="dw-stats-title">
  <i class="fas fa-chart-line"></i>
  <h3 data-ru="Статистика DistroWatch" data-en="DistroWatch Statistics">Статистика DistroWatch</h3>
  </div>
  <a href="https://distrowatch.com/table.php?distribution=enos"
  target="_blank"
  rel="noopener noreferrer"
  class="dw-stats-link">
  <span data-ru="Смотреть на DistroWatch" data-en="View on DistroWatch">Смотреть на DistroWatch</span>
  <i class="fas fa-external-link-alt"></i>
  </a>
  </div>
  <div class="dw-stats-grid">
  ${statsData.map(stat => `
    <div class="dw-stat-item animate__animated animate__fadeInUp">
    <div class="dw-stat-icon" style="background: ${stat.color}20; color: ${stat.color};">
    <i class="fas ${stat.icon}"></i>
    </div>
    <div class="dw-stat-content">
    <span class="dw-stat-label">${stat.label[lang] || stat.label.ru}</span>
    <span class="dw-stat-value">
    ${stat.value}
    ${stat.reviews !== null && stat.reviews !== undefined ?
      `<small>(${stat.reviews} ${lang === 'ru' ? 'голосов' : 'votes'})</small>` :
      ''}
      </span>
      ${stat.change ? `
        <span class="dw-stat-change ${stat.change > 0 ? 'positive' : 'negative'}">
        <i class="fas fa-arrow-${stat.change > 0 ? 'up' : 'down'}"></i>
        ${Math.abs(stat.change)}
        </span>
        ` : ''}
        </div>
        </div>
        `).join('')}
        </div>
        <div class="dw-stats-updated">
        <i class="fas fa-sync-alt"></i>
        <span data-ru="Обновлено: " data-en="Updated: ">Обновлено: </span>
        <time datetime="${stats.updated || ''}">
        ${formatDate(stats.updated, lang)}
        </time>
        </div>
        `;
}

function formatDate(dateString, lang) {
  if (!dateString) return '---';

  const date = new Date(dateString);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };

  const formatted = date.toLocaleDateString(
    lang === 'ru' ? 'ru-RU' : 'en-US',
    options
  );

  return formatted;
}
