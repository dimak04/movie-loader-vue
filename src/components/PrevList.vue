<template>
  <div class="container">
    <div class="media">
      <section>
        <Loader v-if="loading" />
        <PanelFilter
          v-else-if="genres.length"
          v-bind:genres="genres"
          v-bind:set-filter="setFilter"
        />
        <main class="d-flex flex-wrap justify-content-between">
          <Loader v-if="loading" />
          <PrevMovie
            v-else-if="movies.length"
            v-for="movie of movies"
            v-bind:key="movie.id"
            v-bind:movie="movie"
          />
        </main>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PanelFilter from "./PanelFilter";
import PrevMovie from "./PrevMovie";
import Loader from "./Loader";

export default {
  name: "PrevList",
  data() {
    return {
      genres: [],
      movies: [],
      loading: true,
      filterByGenre: null
    };
  },
  components: {
    PanelFilter,
    PrevMovie,
    Loader
  },
  created() {
    this.getGenres();
    this.getMovies();
  },
  methods: {
    getGenres() {
      axios
        .get("https://api.themoviedb.org/3/genre/movie/list", {
          params: {
            api_key: "9f31edd4ed7693d5d95fe2cc2593851a",
            language: "ru-RU"
          }
        })
        .then(res => {
          this.genres = res.data.genres;
          this.loading = false;
          return res.data.genres;
        })
        .catch(function(error) {
          alert("Ошибка получения данных " + error);
        });
    },
    getMovies() {
      axios
        .get("https://api.themoviedb.org/3/discover/movie?", {
          params: {
            api_key: "9f31edd4ed7693d5d95fe2cc2593851a",
            language: "ru-RU",
            with_genres: this.filterByGenre
          }
        })
        .then(res => {
          this.movies = res.data.results;
        })
        .catch(function(error) {
          alert("Ошибка получения данных " + error);
        });
    },
    setFilter(value) {
      this.filterByGenre = value;
      this.getMovies();
    }
  }
};
</script>

<style scoped></style>
