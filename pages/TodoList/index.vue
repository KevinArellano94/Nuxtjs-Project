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
      <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
        <div class="todo-item-left">
          <div
            v-if="!todo.editing"
            @dblclick="editToDo(todo)"
            class="todo-item-label"
          >{{ todo.title }}</div>
          <input v-else class="todo-item-edit" type="text" v-model="todo.title">
          <div class="remove-item" @click="removeToDo(index)">&times;</div>
        </div>
      </div>
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
          completed: false,
          editing: false
        },
        {
          id: 2,
          title: "Take over the world",
          completed: false,
          editing: false
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
    },
    editToDo(todo) {
      todo.editing = true;
    },
    removeToDo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>
<style lang="scss">
.todo-input {
  font-size: 24px;
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;

  &:focus {
    outline: 0;
  }
}
.todo-item {
  font-size: 24px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.todo-item-edit {
  font-size: 24px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  &:focus {
    outline: none;
  }
}
.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: black;
  }
}
</style>
