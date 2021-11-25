<template>
  <Layout>
    <v-container>
      <h1>Pokemon</h1>
      <v-btn @click="getPokemon">Get a random Pokemon!</v-btn>
      <div v-if="show">
        <v-card-text>Yout got {{ pokemon.name }}!</v-card-text>
        <img :src="pokemon.sprites.front_default">
        <img :src="pokemon.sprites.back_default">
      </div>
      <v-alert type="error" v-if="error">
        <p>{{ error }}</p>
      </v-alert>
    </v-container>
  </Layout>
</template>

<script>
import axios from 'axios'

export default {
  metaInfo: {
    title: 'Get Pokemon'
  },

  data () {
    return {
        pokemon: null,
        show: false,
        error: false,
    }
  },

  methods: {
    async getPokemon() {
      try {
        const results = await axios.get('https://pokeapi.co/api/v2/pokemon/' + Math.ceil(Math.random()*898))
        this.pokemon = results.data
        this.show = true
        this.error = false
      } catch (err) {
        this.show = false
        this.error = err.response?.data || err
      }
    }
  }
}
</script>
