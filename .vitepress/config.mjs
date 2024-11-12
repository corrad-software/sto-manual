import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Sistem Tempahan Online",
  description: "Sistem tempahan online bagi Majlis Perbandaran Selayang",
  lastUpdated: true,
  themeConfig: {
    siteTitle: "Sistem Tempahan Online",
    logo: "./images/logo.png",
    nav: [
      { text: "Utama", link: "/" },
      {
        text: "Pengguna",
        items: [
          { text: "Pengenalan", link: "/panduan/pengguna/" },
          { text: "Pendaftaran", link: "/panduan/pengguna/pendaftaran" },
          { text: "Log Masuk", link: "/panduan/pengguna/log-masuk" },
          { text: "Tempahan", link: "/panduan/pengguna/tempahan" },
          {
            text: "Borang Tempahan",
            link: "/panduan/pengguna/borang-tempahan",
          },
          { text: "Troli", link: "/panduan/pengguna/troli" },
          { text: "Pembayaran", link: "/panduan/pengguna/pembayaran" },
        ],
      },
      {
        text: "Admin",
        items: [
          { text: "Pengenalan", link: "/panduan/admin/" },
          { text: "Profil Admin", link: "/panduan/admin/profil" },
          { text: "Maklumat Bank", link: "/panduan/admin/maklumat-bank" },
          { text: "Senarai Tempahan", link: "/panduan/admin/senarai-tempahan" },
          { text: "Tukar Kata Laluan", link: "/panduan/admin/kata-laluan" },
          { text: "Pusat Bantuan", link: "/panduan/admin/bantuan" },
          { text: "Terma & Syarat", link: "/panduan/admin/terma-syarat" },
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
            { text: "Tempahan", link: "/panduan/pengguna/tempahan" },
            { text: "Kalendar", link: "/panduan/pengguna/kalendar" },
            {
              text: "Borang Tempahan",
              link: "/panduan/pengguna/borang-tempahan",
            },
            { text: "Troli", link: "/panduan/pengguna/troli" },
            { text: "Pembayaran", link: "/panduan/pengguna/pembayaran" },
            { text: "Resit", link: "/panduan/pengguna/resit" },
          ],
        },
      ],
      "/panduan/admin/": [
        {
          text: "Manual Admin",
          items: [
            { text: "Pengenalan", link: "/panduan/admin/" },
            { text: "Profil", link: "/panduan/admin/profil" },
            { text: "Maklumat Bank", link: "/panduan/admin/maklumat-bank" },
            {
              text: "Senarai Tempahan",
              link: "/panduan/admin/senarai-tempahan",
            },
            { text: "Tukar Kata Laluan", link: "/panduan/admin/kata-laluan" },
            { text: "Pusat Bantuan", link: "/panduan/admin/bantuan" },
            { text: "Terma & Syarat", link: "/panduan/admin/terma-syarat" },
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
    ["link", { rel: "icon", href: "./images/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
  ],
});
