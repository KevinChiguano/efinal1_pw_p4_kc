<template>
    <div>
      <h1 :style="getTituloEstilo()">{{ textoUno }}{{ puntaje }}</h1>
      <h1 :style="getTituloEstilo()">{{ textoDos }}</h1>
      <button @:click="reiniciarJuego">Nuevo Juego</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      puntaje: {
        type: Number,
      },
      textoUno: {
        type: String,
      },
      textoDos: {
        type: String,
      },
    },
  
    methods: {
      getTituloEstilo() {
        if (this.puntaje < 10) {
          return {
            color: "red",
          };
        } else {
          return {
              color: "blue"
          }
        }
      },
  
      reiniciarJuego() {
        this.$parent.reiniciar();
      },
    },
  };
  </script>
  
  <style scoped>
  </style>