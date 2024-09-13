<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { computed } from 'vue'

import IncrementCountButton from '@/components/Buttons/Count/IncrementCountButton.vue'

const store = useCounterStore()

let msg: string = 'Hola'

const showLog = () => {
  store.increment()
}

const resetValue = () => {
  store.reset()
}

const unincrement = () => {
  store.unincrement()
}
</script>

<template>
  <div class="container mt-5">
    <form action="">
      <div class="row mb-3">
        <label for="login" class="col-sm-2 col-form-label">Login</label>
        <div class="col-sm-8">
          <input class="form-control" type="text" name="login" id="login" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="password" class="col-sm-2 form-label">Password</label>
        <div class="col-sm-8">
          <input class="form-control" type="password" />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-2"></div>
        <div class="col-sm-10">
          <input class="btn btn-primary" type="submit" />
        </div>
      </div>
    </form>
    <div class="mb-3">
      {{ store.count }}
      :
      {{ store.doubleCount }}
    </div>
    <div class="row mb-3">
      <div class="col mb-1">
        <IncrementCountButton />
      </div>

      <div class="col mb-1">
        <button class="btn btn-primary" @click="resetValue" v-if="store.count">Resetear</button>
      </div>
      <div class="col mb-1">
        <button class="btn btn-primary" @click="unincrement" v-if="store.count">Decrementar</button>
      </div>
    </div>
  </div>
</template>
