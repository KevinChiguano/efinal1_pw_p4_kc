<template>
    <div class="contenedor-img">
      <img
        :src="pokemonImageUrl"
        alt="."
      />
      <img
        v-show="imagenes.length == 0"
        src="@/assets/imagen2.png"
        alt="No se pudo mostrar la imagen"
      />
      <li v-for="name in nombres" :key="name.id">{{ name.name }}</li>
      <li v-show="nombres.length == 0">XXXXXXXXXXXXXXX</li>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imagenes: {
        type: Object,
        required: true,
      },
      nombres: {
        type: Object,
        required: true,
      },
    },
    computed: {
      pokemonImageUrl() {
        if (this.nombres.length > 0) {
          const pokemonId = this.nombres[0].id; // Suponemos que solo se toma el primer nombre del arreglo
          return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
        } else {
          return '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .contenedor-img {
    justify-content: center;
  }
  
  img {
    height: 200px;
    width: 200px;
    margin: 20px;
  }
  
  li {
    list-style-type: none;
  }
  </style>