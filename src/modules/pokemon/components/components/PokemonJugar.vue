<template>
    <button @click="juegoInicial">Jugar</button>
  </template>
  
  <script>
  export default {
  
      methods:{
          async juegoInicial(){
              await this.$parent.cargaJuegoInicial();
              this.$parent.conteoPuntos();
          }
      }
  
  }
  </script>
  
  <style>
  
  </style>