<script setup lang="ts">
import IncrementCountButton from '@/components/Buttons/Count/IncrementCountButton.vue'
import ResetCountButton from '@/components/Buttons/Count/ResetCountButton.vue'
import { useCounterStore } from '@/stores/counter'
import PokemonServices from '@/services/PokemonService'
import { computed, onMounted, onUpdated, ref, watch } from 'vue'

const store = useCounterStore()

const countValue = computed(() => store.count)

const pokemonData = ref<any>(null)
const spriceList = ref<any>(null)

const pokemonService = new PokemonServices()

const getPokemon = async () => {
  try {
    pokemonData.value = await pokemonService.getPokemonById(store.count)
  } catch (error) {
    console.error('Errror', error)
  }
}

const getSprice = async () => {
  try {
    spriceList.value = await pokemonService.getSpriceById(store.count)
  } catch (error) {
    console.error('Errror', error)
  }
}

onMounted(() => {
  getPokemon()
  // getSprice()
})

onUpdated(() => {
  getPokemon()
  // getSprice()
})
</script>

<template>
  <div class="container">
    <h1>This is an about page</h1>
    <p v-if="store.count">#{{ countValue }}</p>
    <p v-if="store.count">Pokemon ..{{ pokemonData?.forms[0]?.name }}::..</p>
    <p v-if="spriceList">
      {{ spriceList?.sprites }}
    </p>
    <IncrementCountButton />

    <ResetCountButton />
  </div>
</template>
