<template>
  <section>
    <div>
      <b-alert show>Default Alert</b-alert>
    </div>

    <div class="container">
      <Logo :width="350"/>
    </div>
    <div class="container">
      <h1 class="title">
        NUXT
        <span class="green">JS</span>
      </h1>
    </div>
    <div class="container">
      <h2 class="subtitle">Starter for CodeSandBox Application</h2>
    </div>

    <div>
      <ul style="list-style-type:none">
        <li>
          <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation
            <IconLink/>
          </a>
        </li>
        <li>
          <NLink to="/about" class="button--grey">About</NLink>
        </li>
        <li>
          <NLink to="/jokes" class="button--grey">Jokes</NLink>
        </li>
        <li>
          <NLink to="/profile" class="button--grey">Profile</NLink>
        </li>
        <li>
          <NLink to="/calculator" class="button--grey">Calculator</NLink>
        </li>
        <li>
          <NLink to="/vue" class="button--grey">Vue</NLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import IconLink from "~/components/IconLink.vue";
import "~/pages/About";

export default {
  components: {
    Logo,
    IconLink
  },
  head() {
    return {
      title: "Home",
      meta: [
        {
          hid: "Home",
          name: "Home",
          content: "Home"
        }
      ]
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
