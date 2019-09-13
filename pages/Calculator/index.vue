<template>
  <div class="container">
    <div>
      <h1>Calculator?</h1>
      <h2>
        Hello from
        <span class="name">{{ name }}</span>.
      </h2>
      <p>
        <NLink to="/" class="button--grey">Back home</NLink>
      </p>
      <Calculator/>
    </div>
  </div>
</template>

<script>
import Calculator from "../../components/Calculator";
export default {
  components: {
    Calculator
  },
  head() {
    return {
      title: "Calculator App",
      meta: [
        {
          hid: "Calculator App",
          name: "Calculator App",
          content: "Calculator App"
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
