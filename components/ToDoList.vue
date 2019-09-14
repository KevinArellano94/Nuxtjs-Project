<template>
  <div>
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done"
      v-model="newToDo"
      @keyup.enter="addToDo"
    >

    <transition-group
      name="fade"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
    >
      <div v-for="(todo, index) in todosFiltered" :key="todo.id" class="todo-item">
        <div class="todo-item-left">
          <input type="checkbox" v-model="todo.completed">

          <div
            v-if="!todo.editing"
            @click="editToDo(todo)"
            class="todo-item-label"
            :class="{ completed: todo.completed }"
          >{{ todo.title }}</div>

          <input
            v-else
            class="todo-item-edit"
            type="text"
            v-model="todo.title"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.esc="cancelEdit(todo)"
            v-focus
          >

          <div class="remove-item" @click="removeToDo(index)">&times;</div>
        </div>
      </div>
    </transition-group>

    <div class="extra-container">
      <div>
        <label>
          <input type="checkbox" :checked="!anyRemaining" @change="checkAllToDos">
          Check All
        </label>
      </div>

      <div>{{ remaining }} items left</div>
    </div>

    <div class="extra-container">
      <div>
        <button :class="{ active: filter === 'all'}" @click="filter = 'all'">All</button>
        
        <button :class="{ active: filter === 'active'}" @click="filter = 'active'">Active</button>
        
        <button :class="{ active: filter === 'completed'}" @click="filter = 'completed'">Completed</button>
      </div>

      <transition name="fade">
        <div>
          <button v-if="showClearCompletedButton" @click="clearCompleted">Clear completed</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  names: "todo-list",
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
      idForToDo: 3,
      beforeEditCache: "",
      filter: "all",
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
  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length;
    },
    anyRemaining() {
      return this.remaining !== 0;
    },
    todosFiltered() {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "active") {
        return this.todos.filter(todo => !todo.completed);
      } else if (this.filter === "completed") {
        return this.todos.filter(todo => todo.completed);
      }

      return this.todos;
    },
    showClearCompletedButton() {
      return this.todos.filter(todo => todo.completed).length > 0;
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
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
      this.beforeEditCache = todo.title;
      todo.editing = true;
    },
    doneEdit(todo) {
      if (todo.title.trim().length === 0) {
        return;
      }
      todo.editing = false;
    },
    cancelEdit(todo) {
      todo.title = this.beforeEditCache;
      todo.editing = false;
    },
    removeToDo(index) {
      this.todos.splice(index, 1);
    },
    checkAllToDos() {
      this.todos.forEach(todo => (todo.completed = event.target.checked));
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
};
</script>
<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

* {
  box-sizing: border-box;
}
.container {
  max-height: 600px;
  margin: 0 auto;
}
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
  animation-duration: 0.3s;
}
.todo-item-left {
  display: flex;
  align-items: center;
}
.todo-item-label {
  padding: 10px;
  border: 1px solide white;
  margin-left: 12px;
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
.completed {
  text-decoration: line-through;
  color: grey;
}
.active {
  background: lightgreen;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
