<script>
  import { url } from '@roxi/routify'
  export let data
</script>

<div class="items">
  {#each data as item}
    <a href={$url('../:id', { id: item.id })} class="item">
      {#each Object.entries(item).slice(0, 3) as [name, value]}
        <div>
          <b>{name}:</b>
          {value}
        </div>
      {/each}
    </a>
  {/each}
</div>

<style>
  .item {
    display: inline-block;
    width: 50%;
    height: 128px;
  }
</style>
