<script setup lang="ts">
/**
 * @author Robert Bellorin <bellorinrobert@gmail.com>
 * @date 2024-09-12
 *
 */
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

const increment = () => {
  store.increment()
}
</script>

<template>
  <button class="btn btn-primary" @click="increment">Incrementar</button>
</template>
