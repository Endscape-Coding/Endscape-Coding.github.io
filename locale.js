const translations = {
  ru: {
    'nav.home': 'Главная',
    'nav.features': 'Особенности',
    'nav.screenshots': 'Скриншоты',
    'nav.download': 'Скачать',
    'nav.all-downloads': 'Все загрузки',
    
    'hero.title': 'EN-OS - Современный дистрибутив на базе Arch Linux',
    'hero.subtitle': 'Предустановленный KDE Plasma, оптимизация производительности и удобство прямо из коробки. Полностью готов к работе без дополнительных настроек.',
    'hero.btn-download': 'Скачать EN-OS',
    'hero.btn-guide': 'Инструкция',
    
    'features.title': 'Наши особенности',
    'feature.user.title': 'Удобство для пользователя',
    'feature.user.desc': 'Никаких лишних настроек: драйверы, кодеки и приложения готовы к работе сразу после установки. Всё работает из коробки.',
    'feature.interface.title': 'Красивый интерфейс',
    'feature.interface.desc': 'Кастомная тема KDE Plasma с тёмными тонами и плавными анимациями для эстетического удовольствия. Полная настройка под ваш вкус.',
    'feature.security.title': 'Безопасность',
    'feature.security.desc': 'Последнее ядро Linux с актуальными исправлениями уязвимостей и графический сервер Wayland обеспечивают надёжную защиту и стабильность.',
    'feature.performance.title': 'Высокая производительность',
    'feature.performance.desc': 'Новейшее ядро, файловая система BTRFS и Z-RAM обеспечивают максимальную отзывчивость и комфорт как на мощном, так и на слабом железе.',
    'feature.easy.title': 'Простота установки',
    'feature.easy.desc': 'Интуитивный установщик Calamares делает процесс установки доступным даже для новичков. Просто следуйте инструкциям на экране.',
    'feature.software.title': 'Богатый набор ПО',
    'feature.software.desc': 'Предустановлены все необходимые приложения для работы, мультимедиа и разработки. Включая браузер, офисный пакет и инструменты разработчика.',
    
    'screenshots.title': 'Скриншоты',
    'screenshot.desktop': 'Рабочий стол',
    'screenshot.apps': 'Приложения',
    'screenshot.terminal': 'Терминал',
    'screenshot.settings': 'Настройки',
    
    'install.title': 'Создание Live USB',
    'install.step1.title': 'Скачайте образ',
    'install.step1.desc': 'Загрузите последнюю стабильную версию с нашей страницы загрузок.',
    'install.step2.title': 'Запишите на USB',
    'install.step2.desc': 'Используйте Rufus (Windows), dd (Linux/macOS) или Ventoy для безопасной записи.',
    'install.step3.title': 'Загрузитесь с USB',
    'install.step3.desc': 'Перезагрузите ПК, войдите в BIOS/UEFI и выберите ваш накопитель в меню загрузки.',
    
    'rufus.step1': '1. Запустите Rufus и выберите вашу USB-флешку',
    'rufus.step2': '2. Нажмите "ВЫБРАТЬ" и укажите скачанный ISO-образ',
    'rufus.step3': '3. Оставьте остальные настройки по умолчанию',
    'rufus.step4': '4. Нажмите "СТАРТ" и дождитесь завершения',
    
    'dd.step1': 'Определите путь к вашему USB-устройству (например, /dev/sdX)',
    'dd.step2': 'Размонтируйте устройство, если оно смонтировано',
    'dd.step3': 'Выполните команду записи:',
    'dd.warning': '⚠️ ВАЖНО: Замените /dev/sdX на фактический путь к вашему устройству!',
    
    'ventoy.step1': '1. Скачайте и установите Ventoy на вашу USB-флешку',
    'ventoy.step2': '2. Скопируйте ISO-образ EN-OS на флешку',
    'ventoy.step3': '3. Загрузитесь с USB и выберите образ EN-OS в меню Ventoy',
    
    'downloads.title': 'Загрузки EN-OS',
    'downloads.subtitle': 'Выберите подходящую редакцию для ваших задач',
    'sysreqs.title': 'Системные требования',
    'sysreqs.cpu': 'Процессор',
    'sysreqs.ram': 'ОЗУ',
    'sysreqs.storage': 'Диск',
    'sysreqs.graphics': 'Графика',
    
    'edition.stable': 'STABLE',
    'edition.stable.title': 'EN-OS 1.0',
    'edition.stable.desc': 'Стабильная версия подойдет как для гейминга, так и для работы в офисе',
    
    'edition.dev': 'BETA',
    'edition.dev.title': 'EN-OS Developer',
    'edition.dev.desc': 'Среда для разработки (Python, C++, Web)',
    
    'edition.gaming': 'ALPHA',
    'edition.gaming.title': 'EN-OS Gaming',
    'edition.gaming.desc': 'Игровая станция с драйверами и Wine',
    
    'variant.kde.name': 'KDE Plasma',
    'variant.kde.desc': 'Флагманская версия с красивым и настраиваемым интерфейсом KDE Plasma. Идеально подходит как для новичков, так и опытных пользователей.',
    'variant.kde.feature1': 'Современный дизайн',
    'variant.kde.feature2': 'Широкие возможности настройки',
    'variant.kde.feature3': 'Интуитивно понятный интерфейс',
    'variant.kde.feature4': 'Предустановленные приложения',
    
    'variant.gnome.name': 'GNOME (Dev)',
    'variant.gnome.desc': 'Оптимизированное окружение GNOME с тайловым менеджером окон и предустановленным VS Code, Docker и Git.',
    'variant.gnome.feature1': 'Предустановленный VS Code',
    'variant.gnome.feature2': 'Docker и Docker Compose из коробки',
    'variant.gnome.feature3': 'Поддержка тайлинга окон',
    'variant.gnome.feature4': 'Инструменты разработки',
    
    'variant.gaming.name': 'KDE (Gaming)',
    'variant.gaming.desc': 'Специальная сборка ядра Zen, драйверы Nvidia/AMD, предустановленный Steam, Lutris и Heroic Launcher.',
    'variant.gaming.feature1': 'Ядро Linux-Zen',
    'variant.gaming.feature2': 'Steam, Lutris, Heroic',
    'variant.gaming.feature3': 'GameMode включен',
    'variant.gaming.feature4': 'Драйверы Nvidia/AMD',
    
    'btn.torrent': 'Torrent',
    'btn.sourceforge': 'SourceForge',
    'btn.yandex': 'Yandex Disk',
    'btn.mega': 'MEGA',
    'btn.coming-soon': 'Скоро доступно',
    
    'footer.about': 'Современный дистрибутив Linux на базе Arch с KDE Plasma',
    'footer.links': 'Ссылки',
    'footer.forum': 'Форум',
    'footer.copyright': '© 2026 EN-OS. Все права защищены.',

    'dw.title': 'Статистика DistroWatch',
    'dw.view-on-dw': 'Смотреть на DistroWatch',
    'dw.updated': 'Обновлено: ',
    'dw.popularity': 'Рейтинг популярности',
    'dw.hits': 'Просмотров в день',
    'dw.rating': 'Оценка пользователей',
    'dw.reviews': 'Отзывов',
    'dw.votes': 'голосов',
    'dw.loading': 'Загрузка статистики...'
  },
  
  en: {
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.screenshots': 'Screenshots',
    'nav.download': 'Download',
    'nav.all-downloads': 'All Downloads',
    
    'hero.title': 'EN-OS - Modern Arch Linux Distribution',
    'hero.subtitle': 'Pre-installed KDE Plasma, performance optimization and convenience out of the box. Completely ready to use without additional configuration.',
    'hero.btn-download': 'Download EN-OS',
    'hero.btn-guide': 'Guide',
    
    'features.title': 'Key Features',
    'feature.user.title': 'User-Friendly',
    'feature.user.desc': 'No extra configuration: drivers, codecs and applications are ready to use right after installation. Everything works out of the box.',
    'feature.interface.title': 'Beautiful Interface',
    'feature.interface.desc': 'Custom KDE Plasma theme with dark tones and smooth animations for aesthetic pleasure. Full customization to your taste.',
    'feature.security.title': 'Security',
    'feature.security.desc': 'Latest Linux kernel with up-to-date security patches and Wayland graphics server provide reliable protection and stability.',
    'feature.performance.title': 'High Performance',
    'feature.performance.desc': 'Latest kernel, BTRFS file system and Z-RAM ensure maximum responsiveness and comfort on both powerful and weak hardware.',
    'feature.easy.title': 'Easy Installation',
    'feature.easy.desc': 'Intuitive Calamares installer makes the installation process accessible even for beginners. Just follow the on-screen instructions.',
    'feature.software.title': 'Rich Software',
    'feature.software.desc': 'Pre-installed all necessary applications for work, multimedia and development. Including browser, office suite and developer tools.',
    
    'screenshots.title': 'Screenshots',
    'screenshot.desktop': 'Desktop',
    'screenshot.apps': 'Applications',
    'screenshot.terminal': 'Terminal',
    'screenshot.settings': 'Settings',
    
    'install.title': 'Creating Live USB',
    'install.step1.title': 'Download the ISO',
    'install.step1.desc': 'Download the latest stable version from our downloads page.',
    'install.step2.title': 'Write to USB',
    'install.step2.desc': 'Use Rufus (Windows), dd (Linux/macOS) or Ventoy for safe recording.',
    'install.step3.title': 'Boot from USB',
    'install.step3.desc': 'Reboot your PC, enter BIOS/UEFI and select your drive in the boot menu.',
    
    'rufus.step1': '1. Run Rufus and select your USB drive',
    'rufus.step2': '2. Click "SELECT" and choose the downloaded ISO image',
    'rufus.step3': '3. Leave other settings as default',
    'rufus.step4': '4. Click "START" and wait for completion',
    
    'dd.step1': 'Identify your USB device path (e.g. /dev/sdX)',
    'dd.step2': 'Unmount the device if mounted',
    'dd.step3': 'Run the write command:',
    'dd.warning': '⚠️ IMPORTANT: Replace /dev/sdX with your actual device path!',
    
    'ventoy.step1': '1. Download and install Ventoy to your USB drive',
    'ventoy.step2': '2. Copy the EN-OS ISO image to the USB drive',
    'ventoy.step3': '3. Boot from USB and select the EN-OS image in the Ventoy menu',
    
    'downloads.title': 'EN-OS Downloads',
    'downloads.subtitle': 'Choose the right edition for your needs',
    'sysreqs.title': 'System Requirements',
    'sysreqs.cpu': 'CPU',
    'sysreqs.ram': 'RAM',
    'sysreqs.storage': 'Storage',
    'sysreqs.graphics': 'Graphics',
    
    'edition.stable': 'STABLE',
    'edition.stable.title': 'EN-OS 1.0',
    'edition.stable.desc': 'The stable version is suitable for both gaming and office work',
    
    'edition.dev': 'BETA',
    'edition.dev.title': 'EN-OS Developer',
    'edition.dev.desc': 'Development environment (Python, C++, Web)',
    
    'edition.gaming': 'ALPHA',
    'edition.gaming.title': 'EN-OS Gaming',
    'edition.gaming.desc': 'Gaming station with drivers and Wine',
    
    'variant.kde.name': 'KDE Plasma',
    'variant.kde.desc': 'Flagship version with beautiful and customizable KDE Plasma interface. Perfect for beginners and advanced users.',
    'variant.kde.feature1': 'Modern design',
    'variant.kde.feature2': 'High customizability',
    'variant.kde.feature3': 'User-friendly interface',
    'variant.kde.feature4': 'Pre-installed applications',
    
    'variant.gnome.name': 'GNOME (Dev)',
    'variant.gnome.desc': 'Optimized GNOME environment with window tiling, pre-installed VS Code, Docker and Git.',
    'variant.gnome.feature1': 'Pre-installed VS Code',
    'variant.gnome.feature2': 'Docker & Docker Compose ready',
    'variant.gnome.feature3': 'Window tiling support',
    'variant.gnome.feature4': 'Development tools',
    
    'variant.gaming.name': 'KDE (Gaming)',
    'variant.gaming.desc': 'Special Zen kernel build, Nvidia/AMD drivers, pre-installed Steam, Lutris and Heroic Launcher.',
    'variant.gaming.feature1': 'Linux-Zen Kernel',
    'variant.gaming.feature2': 'Steam, Lutris, Heroic',
    'variant.gaming.feature3': 'GameMode enabled',
    'variant.gaming.feature4': 'Nvidia/AMD drivers',
    
    'btn.torrent': 'Torrent',
    'btn.sourceforge': 'SourceForge',
    'btn.yandex': 'Yandex Disk',
    'btn.mega': 'MEGA',
    'btn.coming-soon': 'Coming soon',
    
    'footer.about': 'Modern Linux distribution based on Arch with KDE Plasma',
    'footer.links': 'Links',
    'footer.forum': 'Forum',
    'footer.copyright': '© 2026 EN-OS. All rights reserved.',

    'dw.title': 'DistroWatch Statistics',
    'dw.view-on-dw': 'View on DistroWatch',
    'dw.updated': 'Updated: ',
    'dw.popularity': 'Popularity Rank',
    'dw.hits': 'Hits per day',
    'dw.rating': 'User Rating',
    'dw.reviews': 'Reviews',
    'dw.votes': 'votes',
    'dw.loading': 'Loading statistics...'
  }
};

let currentLang = localStorage.getItem('en-os-language') || 'ru';

function updatePageLanguage() {
  document.querySelectorAll('[data-ru], [data-en]').forEach(el => {
    if (currentLang === 'ru' && el.dataset.ru) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = el.dataset.ru;
      } else {
        el.textContent = el.dataset.ru;
      }
    } else if (currentLang === 'en' && el.dataset.en) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = el.dataset.en;
      } else {
        el.textContent = el.dataset.en;
      }
    }
  });
  
  document.documentElement.lang = currentLang;
  
  localStorage.setItem('en-os-language', currentLang);
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function setLanguage(lang) {
  currentLang = lang;
  updatePageLanguage();
  
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
}

function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang) setLanguage(lang);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  updatePageLanguage();
});
