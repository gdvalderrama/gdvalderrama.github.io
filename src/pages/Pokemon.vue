<template>
  <Layout>
    <v-container class="text-center">
      <div class="d-flex-row">
        <h1>Pokemon</h1>
        <v-btn @click="getPokemon" color="primary">Get a random Pokemon</v-btn>

        <v-row align="center" justify="center">
          <v-col md="4" align="center" justify="center">
            <v-card v-if="show" class="ma-sm-5 xs-sm-6" width="50%">
              <v-card-text>
                You got
                <span class="text-capitalize font-weight-bold">{{ pokemon.name }}</span>!
              </v-card-text>
              <img :src="pokemon.sprites.front_default">
              <img :src="pokemon.sprites.back_default">
            </v-card>
          </v-col>
        </v-row>

        <v-alert type="error" v-if="error">
            <p>{{ error }}</p>
        </v-alert>
      </div>
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
