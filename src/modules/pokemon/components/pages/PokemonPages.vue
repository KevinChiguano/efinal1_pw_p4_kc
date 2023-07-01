<template>
  <div class="contenedor-juego">
    <PokemonPerformance
      v-show="puntajeTotal < 10 && intentoTotal != 5"
      :intento="intento"
      :puntaje="puntaje"
    />
    <div class="contenedor-imagenes">
      <PokemonImg
        v-show="puntajeTotal < 10 && intentoTotal != 5"
        :imagenes="ArrayImagenes"
        :nombres="Arraynombres"
      />
      <PokemonImg
        v-show="puntajeTotal < 10 && intentoTotal != 5"
        :imagenes="ArrayImagenes"
        :nombres="Arraynombres"
      />
      <PokemonImg
        v-show="puntajeTotal < 10 && intentoTotal != 5"
        :imagenes="ArrayImagenes"
        :nombres="Arraynombres"
      />
    </div>

    <PokemonJugar v-show="puntajeTotal < 10 && intentoTotal != 5" />

    <div
      v-show="intentoTotal == 5 || puntajeTotal >= 10"
      class="contenedor-fin-juego"
    >
      <PokemonFinJuego
        v-show="puntajeTotal < 10 && intentoTotal == 5"
        :puntaje="0"
        textoUno="Haz utilizado tus 5 intentos"
        textoDos="El juego ha terminado, intentalo nuevamente"
      />
      <PokemonFinJuego
        v-show="puntajeTotal >= 10"
        :puntaje="puntaje"
        textoUno="Puntaje: "
        textoDos="Felicitaciones has ganado un premio"
      />
    </div>
  </div>
</template>



<script>
import PokemonPerformance from "../components/PokemonPerformance.vue";
import PokemonImg from "../components/PokemonImg.vue";
import PokemonJugar from "../components/PokemonJugar.vue";
import PokemonFinJuego from "../components/PokemonFinJuego.vue";

import obtenerFachadaPokemons from "../helpers/PokemonClienteAPI";
import obtenerFachadaPokemonsImg from "../helpers/PokemonClienteImgAPi";

export default {
  components: {
    PokemonImg,
    PokemonPerformance,
    PokemonFinJuego,
    PokemonJugar,
  },

  data() {
    return {
      ArrayImagenes: [],
      Arraynombres: [],
      puntaje: 0,
      intento: 0,
    };
  },

  methods: {
    async cargaJuegoInicial() {
      this.ArrayImagenes = [];
      this.Arraynombres = [];
      const arregloPokemons = await obtenerFachadaPokemons();
      const arregloImg = obtenerFachadaPokemonsImg();
      this.ArrayImagenes = arregloImg; // Guardar los primeros 3 elementos del arreglo
      this.Arraynombres = arregloPokemons; // Guardar los primeros 3 elementos del arreglo
    },

    conteoPuntos() {
        console.log("conteo PUntos")
      let conteo = 0;
      for (let i = 0; i < this.ArrayImagenes.length; i++) {
        console.log("Si esta contando")
        if (this.ArrayImagenes[i].id === this.ArrayImagenes[i].id) {

          conteo++;
        }
      }

      if (conteo == 0) {
        this.puntaje = this.puntaje;
      } else if (conteo == 2) {
        this.puntaje = this.puntaje + 2;
      } else if (conteo == 1) {
        this.puntaje = this.puntaje + 5;
      }

      this.intento++;
    },

    reiniciar() {
      this.ArrayImagenes = [];
      this.Arraynombres = [];
      this.puntaje = 0;
      this.intento = 0;
    },
  },

  computed: {
    puntajeTotal() {
      return this.puntaje;
    },
    intentoTotal() {
      return this.intento;
    },
  },
};
</script>

<style scoped>
.contenedor-imagenes {
  display: flex;
  justify-content: center;
}

.contenedor-juego {
  display: inline-block;
  justify-content: center;
  border: 2px black;
}
</style>