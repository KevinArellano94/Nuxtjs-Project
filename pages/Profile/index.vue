<template>
  <div class="container">
    <div>
      <h1>Profile?</h1>
      <h2>
        Hello from
        <span class="name">{{ name }}</span>.
      </h2>
      <p>
        <NLink to="/" class="button--grey">Back home</NLink>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Profile",
      meta: [
        {
          hid: "Profile",
          name: "Profile",
          content: "Profile"
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
