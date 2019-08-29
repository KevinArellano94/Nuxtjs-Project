<template>
  <div class="container">
    <div>
      <h1>Jokes</h1>
      <h2>
        Hello from
        <span class="name">{{ name }}</span>.
        <Joke v-for="joke in jokes" :key="joke.id" :id="joke.id" :joke="joke.joke"/>
      </h2>
      <p>
        <NLink to="/" class="button--grey">Back home</NLink>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Joke from "../../components/Joke";
export default {
  components: {
    Joke
  },
  data() {
    return {
      jokes: []
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };
    try {
      const res = await axios.get("https://icanhazdadjoke.com/search", config);

      this.jokes = res.data.results;
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  },
  head() {
    return {
      title: "Jokes",
      meta: [
        {
          hid: "Jokes",
          name: "Jokes",
          content: "Jokes"
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
.joke {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
</style>
