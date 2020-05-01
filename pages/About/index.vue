<template>
  <div class="container">
    <div>
      <h1>About?</h1>
      <h2>
        Hello from
        <span class="name">{{ name }}</span>.
      </h2>

      <p>
        <NLink to="/" class="button--grey">Back home</NLink>
      </p>
      
      <div style="float: left;">
        <pre>
          Help
        </pre>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "About",
      meta: [
        {
          hid: "About",
          name: "About",
          content: "About"
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
      template: "template",
      div: "div",

      class_: "class = "
    }
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
.HTML_tag {
  color: gray;
}
.HTML_document {
  color: palevioletred;
}
.class_ {
  color: orange;
}
p {
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>
