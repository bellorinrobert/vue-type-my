/**
 * @author Robert Bellorin <bellorinrobert@gmail.com>
 * @date 2024-09-12
 *
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: ref<object | null>(null),
    accessToken: ref<string | null>(null),
    error: ref<boolean>(false)
  }),
  getters: {
    userLogged(state) {
      return state.user
    }
  },
  actions: {
    async login() {
      await fetch('')
        .then((r) => r.json())
        .then((d) => {
          this.user = d
          this.accessToken = d
          this.error = false
        })
        .catch((e) => {
          this.error = true
          console.log('Error', e)
        })
    },
    logout() {
      this.accessToken = null
    }
  }
})
