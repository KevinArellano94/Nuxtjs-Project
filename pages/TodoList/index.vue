<template>
  <div class="container">
    <div>
      <h1>To Do List?</h1>
      <h2>
        Hello from
        <span class="name">{{ name }}</span>.
      </h2>
      <p>
        <NLink to="/" class="button--grey">Back home</NLink>
      </p>

      <input
        type="text"
        class="todo-input"
        placeholder="What needs to be done"
        v-model="newToDo"
        @keyup.enter="addToDo"
      >
      <div v-for="todo in todos" :key="todo.id" class="todo-item">{{ todo.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  names: "todo-list",
  idForToDo: 3,
  newToDo: "",
  head() {
    return {
      title: "To Do List",
      meta: [
        {
          hid: "To Do List",
          name: "To Do List",
          content: "To Do List"
        }
      ]
    };
  },
  asyncData() {
    return {
      name: process.server ? "server" : "client"
    };
  },
  data() {
    return {
      message: "Welcome to Your Vue.JS App",
      newToDo: "",
      todos: [
        {
          id: 1,
          title: "Finish Vue Screenshot",
          completed: false
        },
        {
          id: 2,
          title: "Take over the world",
          completed: false
        }
      ]
    };
  },
  methods: {
    addToDo() {
      if (this.newToDo.trim().length === 0) {
        return;
      }
      this.todos.push({
        id: this.idForToDo,
        title: this.newToDo,
        completed: false
      });
      this.newToDo = "";
      this.idForToDo++;
    }
  }
};
</script>
<style lang="scss">
.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;

  &:focus {
    outline: 0;
  }
}
</style>
