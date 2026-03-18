---
title: Get Pokemon
---

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const pokemon = ref(null)
const show = ref(false)
const error = ref(null)

const getPokemon = async () => {
  try {
    const results = await axios.get('https://pokeapi.co/api/v2/pokemon/' + Math.ceil(Math.random() * 898))
    pokemon.value = results.data
    show.value = true
    error.value = null
  } catch (err) {
    show.value = false
    error.value = err.response?.data || err.message
  }
}
</script>

# Pokemon

<button @click="getPokemon" style="background-color: var(--vp-c-brand); color: white; padding: 0.6em 1.2em; border-radius: 8px; border: none; cursor: pointer; font-weight: 600;">
  Get a random Pokemon
</button>

<div v-if="show" style="margin-top: 2rem; border: 1px solid var(--vp-c-divider); padding: 1rem; border-radius: 8px; max-width: 300px; text-align: center;">
  <p>You got <strong style="text-transform: capitalize;">{{ pokemon.name }}</strong>!</p>
  <div style="display: flex; justify-content: center;">
    <img :src="pokemon.sprites.front_default" alt="front">
    <img :src="pokemon.sprites.back_default" alt="back">
  </div>
</div>

<div v-if="error" style="margin-top: 2rem; color: var(--vp-c-danger);">
  <p>{{ error }}</p>
</div>
