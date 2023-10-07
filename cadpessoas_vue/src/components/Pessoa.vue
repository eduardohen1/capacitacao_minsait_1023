<template>
    <div>
        <h1>Pessoas</h1>
    </div>
    <div>
        <router-link to="/pessoa/novo">Nova pessoa</router-link>
        <ul>
            <li v-for="pessoa in pessoas" :key="pessoa.id">
                {{ pessoa.nome }} - {{ pessoa.email }} &nbsp;
                <router-link :to="`/pessoa/editar/${pessoa.id}`">Editar</router-link>
                <button @click="excluirPessoa(pessoa.id)">Excluir</button>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';

export default {    
    data(){
        return {
            pessoas: []
        };
    },
    mounted(){
        axios.get('http://localhost:8080/pessoas')
            .then(response => {
                this.pessoas = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods: {
        excluirPessoa(id){
            if(!confirm('Deseja excluir esta pessoa?')){
                return;
            }
            axios.delete(`http://localhost:8080/pessoas/${id}`)
                .then(response => {
                    this.pessoas = this.pessoas.filter(pessoa => pessoa.id !== id);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>
<style scoped>
    /* estilos aqui*/
</style>