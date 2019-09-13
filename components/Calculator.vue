<template>
  <div class="calculator">
    <p>Calculator Component</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Calculator",
      meta: [
        {
          hid: "Calculator",
          name: "Calculator",
          content: "Calculator"
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