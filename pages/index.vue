<template>
  <section class="container">
    <div>
      <h1 class="title">
        prueba_nuxtjs
      </h1>
      <div class="links">
        <p>{{ norris.value }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';

// import { store } from 'vuex';
let test = '';

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      norris: test
    }
  },
  async middleware() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    test = data;
  },
  head() {
    return {
      title: this.norris.value,
      meta: [
        { name: 'description', content: this.norris.value }
      ]
    }
  },
  methods: {
    async getSentenceChuck() {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      return data;
    }
  },
  async mounted() {
    this.norris = await this.getSentenceChuck();
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

