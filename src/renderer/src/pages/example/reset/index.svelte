<script>
  import { url } from '@roxi/routify'
  import base64Kevin from '../_components/assets/kevin.js'
</script>

<img src="data:image/png;base64, {base64Kevin}" alt="KEVIN!" class="center" />

<a href={$url('../../')}>Go back</a>

<style>
  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>
