import sveltePreprocess from 'svelte-preprocess'

export default {
  onwarn: (warning, handler) => {
    if (warning.code.includes('a11y')) {
      return
    }
    handler(warning)
  },
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess()
}
