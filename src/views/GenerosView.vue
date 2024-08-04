<script setup>
import {ref} from 'vue'
import GeneroCard from '@/components/GeneroCard.vue';

const generos = ref([])
const mensagem = ref(null)

fetch('/src/assets/data.json')
    .then(resp => resp.json())
    .then(dados => generos.value = dados.generos)
    .catch(error => {mensagem.value = error})
    

</script>

<template>
    <main>
        <GeneroCard v-for="(genero, index) in generos"
        :genero="genero"/>
    </main>
</template>

