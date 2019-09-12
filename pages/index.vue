<template>
  <section>
    <div>
      <b-alert show>Default Alert</b-alert>
    </div>

    <Logo :width="350"/>

    <h1 class="title">
      NUXT
      <span class="green">JS</span>
    </h1>

    <h2 class="subtitle">Starter for CodeSandBox Application</h2>

    <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation
      <IconLink/>
    </a>

    <NLink to="/about" class="button--grey">About</NLink>
    <NLink to="/jokes" class="button--grey">Jokes</NLink>
    <NLink to="/profile" class="button--grey">Profile</NLink>
    <NLink to="/vue" class="button--grey">Vue</NLink>
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