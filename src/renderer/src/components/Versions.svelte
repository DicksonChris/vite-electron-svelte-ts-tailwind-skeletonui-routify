<script lang="ts">
  const versions = window.electron.process.versions
</script>

<ul class="fixed top-0 z-50 stroke-black stroke-2">
  <li class="electron-version stroke-inherit text-white stroke-2">Electron v{ versions.electron }</li>
  <li class="chrome-version">Chromium v{ versions.chrome }</li>
  <li class="node-version">Node v{ versions.node }</li>
  <li class="v8-version">V8 v{ versions.v8 }</li>
</ul>
