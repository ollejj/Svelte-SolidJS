<script lang="ts">
  import { todolist } from "../store";
  export let todo;

  const toggleComplete = () =>
    todolist.update((todos) => {
      todos.find((e) => {
        if (e === todo) e.isComplete = !e.isComplete;
      });
      return [...todos];
    });

  const deleteSelf = () => {
    todolist.update((todos) =>
      todos.filter((e) => {
        if (e !== todo) return e;
      })
    );
  };
</script>

<div class="item" on:click={toggleComplete}>
  <p class="item_text" class:complete={todo.isComplete}>{todo.text}</p>
  <input type="button" value="Delete" on:click={deleteSelf} />
</div>

<style>
  .item {
    background-color: #ffffff;
    margin: 8px;
    border-radius: 1em;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    box-shadow: 2px 2px 2px 1px rgb(102, 102, 102);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .complete {
    text-decoration: line-through;
    text-decoration-thickness: 2px;
    text-decoration-color: #000000;
  }

  .item_text {
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.4em;
    word-wrap: break-word;
  }
</style>
