<script>
  import TabsTransition from '@roxi/routify/runtime/decorators/TabsTransition.svelte'
  import BottomNav from './_components/BottomNav.svelte'
  import { url, isActive } from '@roxi/routify'

  const _urls = [
    ['./home', 'Home', '#7fc5bb'],
    ['./feed', 'Feed', '#0bf5cc'],
    ['./updates', 'Updates', '#88f0d0'],
    ['./settings', 'Settings', '#a1fac3']
  ]
  $: urls = _urls.map(([path, name, color]) => ({
    name,
    href: $url(path),
    color,
    active: !!$isActive(path)
  }))
</script>

<div style="height: 100%">
  <main class="inset">
    <slot decorator={TabsTransition} />
  </main>
  <BottomNav {urls} height="64px" />
</div>

<a href={$url('../../')}>Back to examples</a>

<!-- routify:options bundle=true -->

<style>
  :global(body) {
    padding: 0;
  }
  * :global(.inset) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  main.inset {
    bottom: 64px;
    overflow: hidden;
  }

  * :global(*) {
    text-align: center;
  }
  a {
    position: fixed;
    top: 0;
    left: 0;
    padding: 8px 16px;
    background: #555;
    color: white;
  }
</style>
