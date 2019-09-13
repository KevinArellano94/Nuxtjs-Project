<template>
  <div class="container">
    <div>
      <h1>To Do App?</h1>
      <h2>
        Hello from
        <span class="name">{{ name }}</span>.
      </h2>
      <p>
        <NLink to="/" class="button--grey">Back home</NLink>
      </p>
      <ToDoList/>
    </div>
  </div>
</template>

<script>
import ToDoList from "../../components/ToDoList";
export default {
  components: {
    ToDoList
  },
  head() {
    return {
      title: "ToDo App",
      meta: [
        {
          hid: "ToDo App",
          name: "ToDo App",
          content: "ToDo App"
        }
      ]
    };
  },
  asyncData() {
    return {
      name: process.server ? "server" : "client"
    };
  }
};
</script>
<style scoped>
h1 {
  font-weight: 400;
}
.name {
  color: #00C48D;
}
p {
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>
