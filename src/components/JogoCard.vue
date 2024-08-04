<script setup>
defineProps(['jogo'])
</script>


<template>
    <section>
        <h2>{{ jogo.titulo }}</h2>
        <img img :src="jogo.logo">
        <p>{{ jogo.resumo }}</p>
        <RouterLink :to='`/jogos/detalhes/` + jogo.id'>Mais informações</RouterLink>
    </section>
</template>

<style scoped>
section {
    margin: 2px;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #51d1a0a6;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #e9ecef;

}
h2{
    text-align: center;
}
section > p{
    text-align: left;
    font-weight: 300;
}
.avaliacao{
    margin: 10px;
    text-align: center;
}
img{
    max-width: 30%;
    max-height: 30%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    width: 50%;
}
</style>