<script lang="ts">
  import TodoList from "./TodoList.svelte";
  import AddTodo from "./AddTodo.svelte";
  import ClearTodo from "./ClearTodo.svelte";
</script>

<div>
  <h1 class="title">TODOS</h1>
  <AddTodo />
  <TodoList />
  <ClearTodo />
</div>

<style>
  div {
    width: 600px;
    margin: auto;
  }

  .title {
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }
</style>
