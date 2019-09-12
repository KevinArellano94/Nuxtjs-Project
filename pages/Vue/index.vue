<template>
  <div>
    <h1>Vue?</h1>
    <h2>
      Hello from
      <span class="name">{{ name }}</span>.
    </h2>
    <p>
      <NLink to="/" class="button--grey">Back home</NLink>
    </p>

    <div align="left" class="title">{{ Subtitle }}</div>
    <div align="left" class="paragraph">{{ SubtitleParagraph }}</div>
    <div align="left" class="title">{{ Subtitle2 }}</div>
  </div>
</template>

<style>
.title {
  color: black;
  font-weight: bold;
}
.paragraph {
  color: grey;
  font-weight: normal;
}
div {
  border: 1px solid black;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}
</style>

<script>
export default {
  head() {
    return {
      title: "Vue",
      meta: [
        {
          hid: "Vue",
          name: "Vue",
          content: "Vue"
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
      Subtitle: "Vue Component Spec",
      SubtitleParagraph:
        "A *.vue file is a custom file format that uses HTML-like syntax to describe a Vue component. Each *.vue file consists of three types of top-level language blocks: <template>, <script>, and <style>, and optionally additional custom blocks:",
      Subtitle2: "Vue Component Spec2"
    };
  }
};
</script>

<style scoped>
body {
  padding: 1rem;

  left: auto;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  font-weight: 400;
}
.name {
  color: #00C48D;
}
p {
  margin-top: 20px;
}
</style>
