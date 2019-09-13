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
    <div align="left" class="title">{{ Subtitle_2 }}</div>
  </div>
</template>

<style>
.title {
  color: black;
  font-size: 18px;
  font-weight: bold;
}
.paragraph {
  color: grey;
  font-weight: normal;
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
      Subtitle_2: "Vue Component Spec2"
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
