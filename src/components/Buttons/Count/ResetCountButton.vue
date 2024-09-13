<script setup lang="ts">
/**
 * @author Robert Bellorin <bellorinrobert@gmail.com>
 * @date 2024-09-12
 *
 */
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

const reset = () => {
  store.reset()
}
</script>

<template>
  <button class="btn btn-primary" @click="reset">Reset</button>
</template>
