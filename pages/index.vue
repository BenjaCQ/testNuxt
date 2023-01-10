<template>
  <section class="container">
    <div>
      <h1>
        Client -> {{ clientName }}
      </h1>
      <div class="links" v-for="process in processClient" :key="process + '_'">
        <p>
          {{ process }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    AppLogo
  },
  computed: {
    ...mapGetters('client', { clientName: 'getSentenceChuck'} ),
    ...mapGetters('client', { processClient: 'getProcesses'} )
  },
  data() {
    return {
      // clientName: this.getSentenceChuck,
      // processArray: processMiddleware
    }
  },
  middleware: ['clientApi', 'processApi'],
  // async middleware() {
  //   const response = await fetch("https://api.chucknorris.io/jokes/random");
  //   // clientNameMiddleware = await response.json();
  //   const asd = await response.json();
  //   store.mapActions(['setPhraseChuck'], asd.value);
  //   // for (let i = 0; i <= 2; i++) {
  //   //   const response = await fetch("https://api.chucknorris.io/jokes/random");
  //   //   const data = await response.json();
  //   //   processMiddleware.push(data);
  //   // }
  // },
  head() {
    return {
      title: this.clientName,
      meta: [
        { name: 'description', content: this.clientName }
      ]
    }
  },
  methods: {
    // async getSentenceChuck() {
    //   const response = await fetch("https://api.chucknorris.io/jokes/random");
    //   const data = await response.json();
    //   return data;
    // }
  },
  async mounted() {
    // this.clientName = await this.getSentenceChuck();
    // for (let i = 0; i <= 2; i++) {
    //   const response = await fetch("https://api.chucknorris.io/jokes/random");
    //   const data = await response.json();
    //   this.processArray.push(data);
    // }
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

  .links {
    padding-top: 15px;
  }
</style>

