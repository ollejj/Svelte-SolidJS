<script lang="ts">
  import TodoItem from "./TodoItem.svelte";
  import { todolist } from "../store";
</script>

<div class="list">
  {#each $todolist as todo}
    <TodoItem {todo} />
  {/each}
</div>

<style>
  .list {
    width: 100%;
    height: 500px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }
</style>
