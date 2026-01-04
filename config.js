const config = {
    downloadLinks: {
        sourceForge: "https://sourceforge.net/projects/en-os/files/latest/download",
        torrent: "magnet:?xt=urn:btih:9a80d514f53859986c0eff2ccb74dc1947dcf749&dn=EN-OS-EN-OS%201.0%20Len_region2025.12.31-x86_64.iso&xl=4897609728"
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
    
    copyright: "© 2025 EN-OS. Все права защищены."
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
}
