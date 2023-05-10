// The ordering of these imports is critical to your app working properly
import '@skeletonlabs/skeleton/themes/theme-skeleton.css'
// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
import '@skeletonlabs/skeleton/themes/theme-skeleton.css'
// Most of your app wide CSS should be put in this file
import '@skeletonlabs/skeleton/styles/skeleton.css'
import './app.postcss'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
