<script setup>
import JogoCard from '@/components/JogoCard.vue';
import {ref} from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()

const generoId = route.params.id
const jogos = ref([])
const mensagem = ref(null)


fetch('/src/assets/data.json')
    .then(resp => resp.json())
    .then(dados => {
        const generoSelecionaro = dados.jogos
        for (let jogo of generoSelecionaro){
            if(jogo.genero == generoId){
                jogos.value.push(jogo)
            }
        }
    })
    .catch(error => mensagem.value = error)
    

</script>

<template>
    <main>
        <JogoCard v-for="(jogo, index) in jogos"
        :jogo="jogo"/>
    </main>
</template>

