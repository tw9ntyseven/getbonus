// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'theme-color', content: '#E02049' }
      ],
      script: [
        {
          src: 'https://smtpjs.com/v3/smtp.js',
        }
      ]
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },
  css: ['@/assets/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@primevue/nuxt-module',
    '@nuxtjs/i18n',
    'nuxt-nodemailer'
  ],
  nodemailer: {
    from: 'igetbonus@outlook.com',
    host: 'smtp.elasticemail.com',
    port: 2525,
    auth: {
      user: 'igetbonus@outlook.com',
      pass: process.env.PASS_SMTP,
    },
  },
  i18n: {
    vueI18n: './i18n/index.ts'
  },
  googleFonts: {
    families: {
      Onest: [400, 500, 600, 700],
    },
  },
  runtimeConfig: {
    smtpPass: process.env.PASS_SMTP,
  },
})