import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Sistem Tempahan Online",
  description: "Sistem tempahan online bagi Majlis Perbandaran Selayang",
  lastUpdated: true,
  themeConfig: {
    siteTitle: "Sistem Tempahan Online",
    logo: "https://mymps.mps.gov.my/Asset%202.png",
    nav: [
      { text: "Utama", link: "/" },
      {
        text: "Pengguna",
        items: [
          { text: "Pengenalan", link: "/panduan/pengguna/" },
          { text: "Pendaftaran", link: "/panduan/pengguna/pendaftaran" },
          { text: "Log Masuk", link: "/panduan/pengguna/log-masuk" },
          {
            text: "Tempahan",
            items: [
              {
                text: "Dewan",
                link: "/panduan/pengguna/tempahan#dewan",
              },
              {
                text: "Gelanggang",
                link: "/panduan/pengguna/tempahan#gelanggang",
              },
              {
                text: "Rumah Rehat",
                link: "/panduan/pengguna/tempahan#rumah-rehat",
              },
              {
                text: "Kolam Renang",
                link: "/panduan/pengguna/tempahan#kolam-renang",
              },
            ],
          },
          {
            text: "Pembayaran",
            items: [
              {
                text: "Pembayaran",
                link: "/panduan/pengguna/pembayaran",
              },
              {
                text: "Resit",
                link: "/panduan/pengguna/resit",
              },
            ],
          },
          {
            text: "Tetapan Pengguna",
            items: [
              { text: "Profil Admin", link: "/panduan/pengguna/profil" },
              {
                text: "Maklumat Bank",
                link: "/panduan/pengguna/maklumat-bank",
              },
              {
                text: "Senarai Tempahan",
                link: "/panduan/pengguna/senarai-tempahan",
              },
              {
                text: "Tukar Kata Laluan",
                link: "/panduan/pengguna/kata-laluan",
              },
              { text: "Pusat Bantuan", link: "/panduan/pengguna/bantuan" },
              {
                text: "Terma & Syarat",
                link: "/panduan/pengguna/terma-syarat",
              },
            ],
          },
        ],
      },
      {
        text: "Admin",
        items: [
          { text: "Dashboard", link: "/panduan/admin/dashboard" },
          {
            text: "Pengurusan",
            items: [
              {
                text: "Kemudahan",
                link: "/panduan/admin/pengurusan-kemudahan",
              },
              {
                text: "Pengguna",
                link: "/panduan/admin/pengurusan-pengguna",
              },
              {
                text: "Cuti",
                link: "/panduan/admin/pengurusan-cuti",
              },
              {
                text: "Kolam",
                link: "/panduan/admin/pengurusan-kolam",
              },
            ],
          },
          {
            text: "Tempahan",
            link: "/panduan/admin/tempahan",
          },
          {
            text: "Kalendar",
            link: "/panduan/admin/kalendar",
          },
          {
            text: "Laporan",
            items: [
              {
                text: "Laporan 1",
                link: "/panduan/admin/laporan-1",
              },
              {
                text: "Laporan 2",
                link: "/panduan/admin/laporan-2",
              },
            ],
          },
        ],
      },
    ],
    sidebar: {
      "/panduan/pengguna/": [
        {
          text: "Manual Pengguna",
          items: [
            { text: "Pengenalan", link: "/panduan/pengguna/" },
            { text: "Pendaftaran", link: "/panduan/pengguna/pendaftaran" },
            { text: "Log Masuk", link: "/panduan/pengguna/log-masuk" },
            {
              text: "Tempahan",
              items: [
                {
                  text: "Dewan",
                  link: "/panduan/pengguna/tempahan#dewan",
                },
                {
                  text: "Gelanggang",
                  link: "/panduan/pengguna/tempahan#gelanggang",
                },
                {
                  text: "Rumah Rehat",
                  link: "/panduan/pengguna/tempahan#rumah-rehat",
                },
                {
                  text: "Kolam Renang",
                  link: "/panduan/pengguna/tempahan#kolam-renang",
                },
              ],
            },
            { text: "Kalendar", link: "/panduan/pengguna/kalendar" },
            {
              text: "Pembayaran",
              items: [
                {
                  text: "Pembayaran",
                  link: "/panduan/pengguna/pembayaran",
                },
                {
                  text: "Resit",
                  link: "/panduan/pengguna/resit",
                },
              ],
            },
          ],
        },
        {
          text: "Manual Tetapan Pengguna",
          items: [
            { text: "Profil", link: "/panduan/pengguna/profil" },
            { text: "Maklumat Bank", link: "/panduan/pengguna/maklumat-bank" },
            {
              text: "Senarai Tempahan",
              link: "/panduan/pengguna/senarai-tempahan",
            },
            {
              text: "Tukar Kata Laluan",
              link: "/panduan/pengguna/kata-laluan",
            },
            { text: "Pusat Bantuan", link: "/panduan/pengguna/bantuan" },
            { text: "Terma & Syarat", link: "/panduan/pengguna/terma-syarat" },
          ],
        },
      ],
      "/panduan/admin/": [
        {
          text: "Manual Admin",
          items: [
            { text: "Dashboard", link: "/panduan/admin/dashboard" },
            {
              text: "Pengurusan",
              items: [
                {
                  text: "Kemudahan",
                  link: "/panduan/admin/pengurusan-kemudahan",
                },
                {
                  text: "Pengguna",
                  link: "/panduan/admin/pengurusan-pengguna",
                },
                {
                  text: "Cuti",
                  link: "/panduan/admin/pengurusan-cuti",
                },
                {
                  text: "Kolam",
                  link: "/panduan/admin/pengurusan-kolam",
                },
              ],
            },
            {
              text: "Tempahan",
              link: "/panduan/admin/tempahan",
            },
            {
              text: "Kalendar",
              link: "/panduan/admin/kalendar",
            },
            {
              text: "Laporan",
              items: [
                {
                  text: "Laporan 1",
                  link: "/panduan/admin/laporan-1",
                },
                {
                  text: "Laporan 2",
                  link: "/panduan/admin/laporan-2",
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "facebook", link: "https://www.facebook.com/mpselayang" },
    ],

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Cari...",
            buttonAriaLabel: "Cari dokumentasi",
          },
          modal: {
            noResultsText: "Tiada keputusan untuk",
            resetButtonTitle: "Kosongkan carian",
            footer: {
              selectText: "untuk pilih",
              navigateText: "untuk navigasi",
            },
          },
        },
      },
    },

    footer: {
      message: "Sistem Tempahan Online MPS",
      copyright: "© 2024 Majlis Perbandaran Selayang. Hak Cipta Terpelihara.",
    },

    lightModeSwitchTitle: "Mod Terang",
    darkModeSwitchTitle: "Mod Gelap",
    langMenuLabel: "Pilih Bahasa",
    returnToTopLabel: "Kembali ke Atas",
    lastUpdated: {
      text: "Dikemas kini pada 12 November 2024",
    },
    notFound: {
      title: "Halaman Tidak Ditemukan",
      quote: "",
      linkLabel: "Kembali ke halaman utama",
      linkText: "Utama",
      code: "404",
    },
  },

  head: [
    ["link", { rel: "icon", href: "../images/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
  ],
});
