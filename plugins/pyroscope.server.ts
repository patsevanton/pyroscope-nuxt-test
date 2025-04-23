import pyroscope from '@pyroscope/nodejs'

export default defineNuxtPlugin(() => {
  const serverAddress = process.env.PYROSCOPE_SERVER_ADDRESS

  if (!serverAddress) {
    console.warn('PYROSCOPE_SERVER_ADDRESS is not defined')
    return
  }

  pyroscope.init({
    serverAddress,
    appName: 'nuxt-app',

    profilingIntervals: {
      cpu: 10,
      heap: 10
    }
  })

  console.log(`✅ Pyroscope started at ${serverAddress}`)
  pyroscope.start();
});
