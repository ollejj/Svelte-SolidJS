<script lang="ts">
  import { todolist } from "../store";

  const onClear = () =>
    todolist.update((todos) => todos.filter((e) => !e.isComplete));
</script>

<div>
  <input on:click={onClear} type="button" value="Clear Complete" />
</div>

<style></style>
