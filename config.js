const config = {
  systemRequirements: {
    cpu: "64-битный двухъядерный 2.0 ГГц",
    ram: "2 ГБ минимум",
    storage: "10 ГБ свободного места",
    graphics: "Совместимая с OpenGL 2.0"
  },
  copyright: "© 2026 EN-OS. Все права защищены.",

  editions: [
    {
      id: "stable",
      title: "EN-OS 1.0",
      badge: "STABLE",
      badgeClass: "badge-stable",
      icon: "fas fa-desktop",
      descriptionRu: "Стабильная версия подойдет как для гейминга, так и для работы в офисе",
      descriptionEn: "The stable version is suitable for both gaming and office work",

      variants: [
        {
          id: "kde",
          name: "KDE Plasma",
          nameRu: "KDE Plasma",
          descriptionRu: "Флагманская версия с красивым и настраиваемым интерфейсом KDE Plasma. Идеально подходит как для новичков, так и опытных пользователей.",
          descriptionEn: "Flagship version with beautiful and customizable KDE Plasma interface. Perfect for beginners and advanced users.",

          featuresRu: [
            "Современный дизайн",
            "Широкие возможности настройки",
            "Интуитивно понятный интерфейс",
            "Предустановленные приложения"
          ],
          featuresEn: [
            "Modern design",
            "High customizability",
            "User-friendly interface",
            "Pre-installed applications"
          ],

          size: "4.6 GB",
          date: "01.01.2026",
          isoName: "EN-OS-1.0-KDE-x86_64.iso",

          screenshots: [
            "images/environments/kde/desktop.png",
            "images/environments/kde/apps.png",
	    "images/environments/kde/terminal.png",
            "images/environments/kde/settings.png"
          ],

          links: [
            {
              type: "magnet",
              label: "Torrent",
              url: "magnet:?xt=urn:btih:9a80d514f53859986c0eff2ccb74dc1947dcf749&dn=EN-OS-EN-OS%201.0%20Len_region2025.12.31-x86_64.iso&xl=4897609728",
              icon: "fas fa-magnet",
              btnClass: "btn-primary"
            },
            {
              type: "direct",
              label: "SourceForge",
              url: "https://sourceforge.net/projects/en-os/files/latest/download",
              icon: "fas fa-cloud-download-alt",
              btnClass: "btn-secondary"
            },
            {
              type: "direct",
              label: "Yandex Disk",
              icon: "fas fa-hdd",
              url: "https://disk.yandex.ru/d/b_-O61kvX9HOHQ",
              btnClass: "btn-secondary"
            },
            {
              type: "direct",
              label: "MEGA",
              icon: "fas fa-cloud",
              url: "https://mega.nz/file/SR9ATaxJ#DUmz5R3GSOwdyfINufopCV6IHE-NUbTb3gQfNJzETjo",
              btnClass: "btn-secondary"
            }
          ]
        }
      ]
    },
  ]
};