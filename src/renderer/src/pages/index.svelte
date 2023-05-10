<script>
  import { metatags } from '@roxi/routify'
  import Versions from '$lib/components/Versions.svelte'
  import RootLayout from '$lib/components/RootLayout.svelte'
  import SkeletonUIdefault from '$lib/components/SkeletonUIdefault.svelte'

  metatags.title = 'My Routify app'
  metatags.description = 'Description coming soon...'
</script>

<Versions />
<SkeletonUIdefault />
<h1>Routify Starter Template</h1>

<p>
  To see an example app that shows off a lot of Routify's features, go to <a href="/example"
    >/example</a
  >
</p>

<p>
  This template is ready to be used in production! just delete the example app at: src/pages/example
</p>
