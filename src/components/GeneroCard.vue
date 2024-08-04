<script setup>
defineProps(['genero'])
</script>

<template>
    <section>
        <h2>{{ genero.nome }}</h2>
        <p>{{ genero.descricao }}</p>
        <RouterLink :to='`/jogos/` + genero.id' class="link">Jogos desse gênero</RouterLink>
    </section>
</template>

<style scoped>
section {
    margin: 2px;
    margin-bottom: 20px;
    padding: 10px;  
    background-color: #90f87093;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #e9ecef;
}

section > h2{
    text-align: center;
    margin-bottom: 5px;
}
section > p{
    text-align: right;
    font-weight: 300;
}
section > a{
    text-align: center;
}
</style>