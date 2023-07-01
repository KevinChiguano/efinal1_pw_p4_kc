<template>
    <div class="contenedor-performance">
      <h1>Puntaje: {{ puntaje }}</h1>
      <h1>Intento: {{ intento }}</h1>
    </div>
  </template>
  
  <script>
  export default {
      props:{
          puntaje:{
              type:Number
          },
          intento:{
              type:Number
          }
      }
  };
  </script>
  
  <style scoped>
  .contenedor-performance{
      display: flex;
      justify-content: center;
  }
  
  h1{
      margin-right: 100px;
      margin-left: 100px;
  }
  
  </style>