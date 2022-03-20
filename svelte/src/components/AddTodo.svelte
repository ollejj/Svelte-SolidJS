<script lang="ts">
  import { todolist } from "../store";

  let value = "";

  const addTodo = () => {
    todolist.update((todos) => [...todos, { text: value, isComplete: false }]);
  };
</script>

<div class="new-todo">
  <input bind:value class="todo-text" placeholder="New Todo" />
  <input on:click={addTodo} class="add-todo" type="button" value="Add Todo" />
</div>

<style>
  .new-todo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
  }
  
  .todo-text {
    width: 300px;
    height: 30px;
  }

  .add-todo {
    width: 100px;
    height: 30px;
  }
</style>
