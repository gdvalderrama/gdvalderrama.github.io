<template>
  <Layout>
    <h1>Pokemon</h1>
    <button @click="getPokemon">Get a random Pokemon!</button>
    <div v-if="show">
      <p>Yout got {{ pokemon.name }}!</p>
      <img :src="pokemon.sprites.front_default">
      <img :src="pokemon.sprites.back_default">
    </div>
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
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
