import { defineNuxtPlugin } from '#app'
import Test from './Torus/Torus.vue'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('Test', Test)
})