/**
 * @author Robert Bellorin <bellorinrobert@gmail.com>
 * @date 2024-09-12
 *
 * Pokemon Store
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [],
    pokemonData: null
  }),
  getters: {
    getPokemonListLogged(state) {
      return state.pokemonList
    }
  },
  actions: {
    async getPokemon(id) {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`

        const response = await fetch(url)

        const data = await response.json()

        this.pokemonData = data

        console.log(`Get pokemon ${this.pokemonData}`)
      } catch (error) {
        console.error(error)

        return error
      } finally {
        console.log('Success')
      }
    },
    logout() {
      this.accessToken = null
    }
  }
})
