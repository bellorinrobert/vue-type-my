/**
 * @author Rober Bellorin <bellorinrobert@gmail.com>
 * @date 2024-09-12
 *
 *
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0)

  const doubleCount = computed(() => count.value * 2)

  const increment = () => {
    count.value++
  }

  const unincrement = () => {
    if (count.value >= 1) {
      count.value--
    }
  }

  const reset = () => {
    count.value = 0
  }

  return {
    count,
    doubleCount,
    increment,
    reset,
    unincrement
  }
})
