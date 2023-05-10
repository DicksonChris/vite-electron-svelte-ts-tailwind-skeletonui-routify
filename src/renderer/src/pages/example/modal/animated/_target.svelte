<script>
  export let send, receive, hide
</script>

{#if !hide}
  <div class="canvas" in:receive|local={{ key: 'modal' }} out:send|local={{ key: 'modal' }} />
{/if}

<style>
  .canvas {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
