import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GenerosView from '@/views/GenerosView.vue'
import ListaJogosView from '@/views/listaJogosView.vue'
import DetalhesJogosView from '@/views/DetalhesJogosView.vue'

const homeRota = {
  path: '/', name: 'home', component: HomeView
}
const generosRota = {
  path: '/generos', name: 'generos', component: GenerosView
}
const listaJogosRota = {
  path: '/jogos/:id', name: 'listaJogos', component: ListaJogosView
}
const detalhesJogosView = {
  path: '/jogos/detalhes/:id', name: 'detalhesJogos', component: DetalhesJogosView
}
const routes = [
  homeRota,
  generosRota,
  listaJogosRota,
  detalhesJogosView
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
