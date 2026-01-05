const config = {
    environments: {
        default: "kde",
        available: [
            {
                id: "kde",
                name: "KDE Plasma",
                nameRu: "KDE Plasma",
                nameEn: "KDE Plasma",
                icon: "fab fa-linux",
                description: "Современное окружение рабочего стола с эффектами и настройками",
                descriptionRu: "Современное окружение рабочего стола с эффектами и настройками",
                descriptionEn: "Modern desktop environment with effects and customization",
                screenshots: [
                    { src: "/images/kde-desktop.png", alt: "KDE Desktop" },
                    { src: "/images/kde-apps.png", alt: "KDE Applications" }
                ]
            },
            {
                id: "xfce",
                name: "XFCE",
                nameRu: "XFCE",
                nameEn: "XFCE",
                icon: "fas fa-tachometer-alt",
                description: "Легкое и быстрое окружение для слабых компьютеров",
                descriptionRu: "Легкое и быстрое окружение для слабых компьютеров",
                descriptionEn: "Lightweight and fast environment for low-end computers",
                comingSoon: true,
                screenshots: [
                    { src: "/images/xfce-preview.jpg", alt: "XFCE Preview" }
                ]
            },
            {
                id: "gnome",
                name: "GNOME",
                nameRu: "GNOME",
                nameEn: "GNOME",
                icon: "fas fa-compass",
                description: "Минималистичное и интуитивное окружение",
                descriptionRu: "Минималистичное и интуитивное окружение",
                descriptionEn: "Minimalistic and intuitive environment",
                comingSoon: true,
                screenshots: [
                    { src: "/images/gnome-preview.jpg", alt: "GNOME Preview" }
                ]
            }
        ]
    },
    
    downloadLinks: {
        primary: [
            {
                id: "sourceforge",
                name: "SourceForge",
                nameRu: "SourceForge",
                nameEn: "SourceForge",
                icon: "fas fa-cloud-download-alt",
                url: "https://sourceforge.net/projects/en-os/files/latest/download",
                type: "direct",
                colorClass: "btn-primary",
                environments: ["kde"]
            },
            {
                id: "torrent",
                name: "Torrent",
                nameRu: "Торрент",
                nameEn: "Torrent",
                icon: "fas fa-magnet",
                url: "magnet:?xt=urn:btih:9a80d514f53859986c0eff2ccb74dc1947dcf749&dn=EN-OS-EN-OS%201.0%20Len_region2025.12.31-x86_64.iso&xl=4897609728",
                type: "magnet",
                colorClass: "btn-secondary",
                environments: ["kde"]
            }
        ],
        
        alternative: [
            {
                id: "yandex",
                name: "Yandex Disk",
                nameRu: "Яндекс Диск",
                nameEn: "Yandex Disk",
                icon: "fas fa-hdd",
                url: "https://disk.yandex.ru/d/b_-O61kvX9HOHQ",
                type: "direct",
                colorClass: "btn-alternative",
                environments: ["kde"]
            },
            {
                id: "mega",
                name: "MEGA",
                nameRu: "MEGA",
                nameEn: "MEGA",
                icon: "fas fa-cloud",
                url: "https://mega.nz/file/SR9ATaxJ#DUmz5R3GSOwdyfINufopCV6IHE-NUbTb3gQfNJzETjo",
                type: "direct",
                colorClass: "btn-alternative",
                environments: ["kde"]
            }
        ]
    },
    
    versions: {
        main: {
            title: "EN-OS 1.0 RELEASE",
            versionText: "Версия 1.0 RELEASE",
            stability: "STABLE",
            badgeClass: "badge-stable",
            description: "Первая стабильная версия EN-OS с предустановленным KDE Plasma, набором офисных приложений и медиа-плееров.",
            size: "Размер: 4.6 ГБ",
            releaseDate: "Дата выпуска: 01.01.2026"
        },
        developer: {
            title: "EN-OS Developer Edition",
            versionText: "В разработке",
            stability: "Soon",
            badgeClass: "badge-alpha",
            description: "Версия для разработчиков с предустановленными инструментами для программирования.",
            size: "Размер: XXX ГБ",
            releaseDate: "Дата выпуска: XXX"
        },
        gaming: {
            title: "EN-OS Gaming Edition",
            versionText: "Версия XXX",
            stability: "Soon",
            badgeClass: "badge-alpha",
            description: "Оптимизированная версия для игр с предустановленными игровыми клиентами и драйверами.",
            size: "Размер: XXX ГБ",
            releaseDate: "Дата выпуска: XXX"
        }
    },
    
    systemRequirements: {
        cpu: "64-битный двухъядерный 2.0 ГГц или лучше",
        ram: "4 ГБ минимум, 8 ГБ рекомендуется",
        storage: "10 ГБ свободного места, 30 ГБ рекомендуется",
        graphics: "OpenGL 2.0 или лучше, 1024×768 разрешение"
    },
    
    copyright: "© 2026 EN-OS. Все права защищены."
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
}
