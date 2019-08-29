<template>
  <div class="container">
    <div>
      <h1>Jokes?</h1>
      <h2>
        Hello from
        <span class="name">{{ name }}</span>.
        <SearchJokes v-on:search-text="searchText"/>
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
import SearchJokes from "../../components/SearchJokes";

export default {
  components: {
    Joke,
    SearchJokes
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
  methods: {
    async searchText(text) {
      const config = {
        headers: {
          Accept: "application/json"
        }
      };
      try {
        const res = await axios.get(
          `https://icanhazdadjoke.com/search?term=${text}`,
          config
        );

        this.jokes = res.data.results;
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
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
