<template>
    <title>Postagem de Projetos</title>
    <div class="l-form">
        <form @submit.prevent="PostProjects" class="form">
            <h1 class="form__title">Projetos</h1>

            <div class="form__div">
                <input type="text" class="form__input" placeholder=" " name="Id" v-model="postData.projectId">

                <label for="id" class="form__label">Id</label>
            </div>

            <div class="form__div">
                <input type="text" class="form__input" placeholder=" " name="title" v-model="postData.title">

                <label for="id" class="form__label">Título</label>
            </div>

            <div class="form__div">
                <input type="text" class="form__input" placeholder=" " name="about" v-model="postData.about">

                <label for="id" class="form__label">Descrição</label>
            </div>

            <div class="form__div">
                <input type="text" class="form__input" placeholder=" " name="image" v-model="postData.image">

                <label for="id" class="form__label">Imagem</label>
            </div>

            <div class="form__div">
                <input type="text" class="form__input" placeholder=" " name="link1" v-model="postData.link1">
                <label for="id" class="form__label">Link</label>
            </div>

            <div class="form__div">
                <input type="text" class="form__input" placeholder=" " name="link2" v-model="postData.link2">

                <label for="id" class="form__label">Link</label>
            </div>

            <input type="submit" class="form__button" value="Enviar">
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'

const postData = reactive({
    projectId: '',
    title: '',
    about: '',
    image: '',
    link1: '',
    link2: ''
})

function PostProjects() {
    axios.post('https://c9rpyytclc.execute-api.sa-east-1.amazonaws.com/production/postprojects', postData)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log('Erro ao enviar os Dados!' + err);
        })
}
</script>

<style>
/* estilos do componente */
h1 {
    margin: 0;
}

.l-form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 5rem;
    background-color: var(--body-color);
}

.form {
    width: 460px;
    padding: 4rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 10px 25px rgba(92, 99, 105, .2);
}

.form__title {
    font-weight: 400;
    margin-bottom: 3rem;
}

.form__div {
    position: relative;
    height: 40px;

    margin-bottom: 2rem;
}

.form__input {
    position: relative;
    top: 0;
    left: 0;
    width: 400px;
    height: 40px;
    font-size: var(--normal-font-size);
    border: 1px solid var(--text-color-light);
    border-radius: .5rem;
    outline: none;
    padding: 1rem;
    background: none;
    z-index: 1;
}

.form__label {
    position: absolute;
    left: 1rem;
    top: .5rem;
    padding: 0 .25rem;
    background-color: var(--body-color);
    color: var(--first-color);
    font-size: var(--normal-font-size);
    transition: .3s;
}

.form__button {
    display: block;
    margin-left: auto;
    padding: .75rem 2rem;
    outline: none;
    border: none;
    background-color: var(--first-color);
    color: #FFF;
    font-size: var(--normal-font-size);
    border-radius: .5rem;
    cursor: pointer;
    transition: .3s;

}

.form__button:hover {
    box-shadow: 0 10px 36px rgba(0, 0, 0, .15);
}

.form__input:focus+.form__label {
    top: -.5rem;
    left: .8rem;
    color: var(--first-color);
    font-size: var(--small-font-size);
    font-weight: 500;
    z-index: 10;

}

.form__input:not(:placeholder-shown).form__input:not(:focus)+.form_label {
    top: -.5rem;
    left: .8rem;
    font-size: var(--small-font-size);
    font-weight: 500;
    z-index: 10;
}

.form__input:focus {
    border: 1.5px solid var(--first-color);
}
</style>
