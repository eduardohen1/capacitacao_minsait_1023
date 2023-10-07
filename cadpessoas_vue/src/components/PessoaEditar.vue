<template>
    <div>
        <h1>Editar pessoa</h1>
        <form @submit.prevent="onSubmit">
            <input v-model="pessoa.nome" placeholder="Nome" /><br>
            <input v-model="pessoa.endereco" placeholder="Endereço" /><br>
            <input v-model="pessoa.email" placeholder="E-mail" /><br>
            <input v-model="pessoa.contato" placeholder="Contato" /><br>
            <button type="submit">Atualizar</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';  

export default {
    data(){
        return {
            pessoa: {
                id: 0,
                nome: '',
                endereco: '',
                email: '',
                contato: ''
            }
        };
    },
    mounted(){
       const id = this.$route.params.id;
       axios.get(`http://localhost:8080/pessoas/${id}`)
            .then(response => {
                this.pessoa = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods:{
        onSubmit() {
            axios.put(`http://localhost:8080/pessoas`, this.pessoa)
                .then(response => {
                    this.$router.push('/pessoa');
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>