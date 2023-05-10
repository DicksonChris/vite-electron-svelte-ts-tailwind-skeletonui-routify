<script lang="ts">
  const versions = window.electron.process.versions
</script>

<ul class="fixed flex top-0 z-50 gap-4 text-sm">
  <li class="electron-version">Electron v{versions.electron}</li>
  <li class="chrome-version">Chromium v{versions.chrome}</li>
  <li class="node-version">Node v{versions.node}</li>
  <li class="v8-version">V8 v{versions.v8}</li>
</ul>
