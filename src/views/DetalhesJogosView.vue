<script setup>
import {ref} from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()

const jogoId = route.params.id
const jogo = ref([])
const mensagem = ref(null)


fetch('/src/assets/data.json')
    .then(resp => resp.json())
    .then(dados => {
        const jogoSelecionado = dados.jogos.find(j => j.id == jogoId)
        jogo.value = jogoSelecionado
    })
    .catch(error => mensagem.value = error)
    

</script>

<template>
    <main>
        <header>
            <h1>{{ jogo.titulo }}</h1>
            <img :src="jogo.logo">
        </header>
            
        <p>{{ jogo.descricao }}</p>

        <div class="detalhes">
            <p>Desenvolvedor: {{jogo.desenvolvedora }}</p>
            <p>Lançado em: {{jogo.dataLancamento }}</p>
        </div>
        <br>
        <h3>Meatacritic: {{ jogo.avaliacao }}%</h3>

    </main>
</template>

<style scoped>

header{
    text-align: center;
}
header h1{
    margin-bottom: 20px;
    font-weight: bold;
}
img{
    width: 5%;
    height: 5%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    width: 50%;
}
.detalhes{
    margin: 20px;
  display: flex;
  gap: 1rem;
  justify-content: center;
}
h3{
    text-align: center;
}
</style>
