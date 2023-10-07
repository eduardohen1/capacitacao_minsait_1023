<template>
    <div>
        <h1>Nova pessoa</h1>
        <form @submit.prevent="onSubmit">
            <input v-model="pessoa.nome" placeholder="Nome" /><br>
            <input v-model="pessoa.endereco" placeholder="Endereço" /><br>
            <input v-model="pessoa.email" placeholder="E-mail" /><br>
            <input v-model="pessoa.contato" placeholder="Contato" /><br>
            <button type="submit">Gravar</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';  

export default {
    data(){
        return {
            pessoa: {
                nome: '',
                endereco: '',
                email: '',
                contato: ''
            }
        };
    },
    methods:{
        onSubmit() {
            axios.post(`http://localhost:8080/pessoas`, this.pessoa)
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