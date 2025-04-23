export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    PYROSCOPE_SERVER_ADDRESS: process.env.PYROSCOPE_SERVER_ADDRESS
  }
})
