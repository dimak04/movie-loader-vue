<template>
  <div class="d-flex flex-row">
    <div class="poster">
      <img
        class="image-content"
        v-bind:src="backdropPath"
        v-bind:alt="movie.title"
      />
    </div>
    <div class="info">
      <h5>{{ movie.title }}</h5>
      <label class="label">Обзор</label>
      <p>{{ movie.overview }}</p>
      <label class="label">Жанры</label>
      <div class="d-flex flex-row">
        <p
          class="genre-item"
          v-for="genre of movie.genres"
          v-bind:key="genre.id"
        >
          {{ genre.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Poster",
  data() {
    return {
      movie: {}
    };
  },
  mounted() {
    axios
      .get(this.url, {
        params: {
          api_key: "9f31edd4ed7693d5d95fe2cc2593851a",
          language: "ru-RU"
        }
      })
      .then(res => {
        this.movie = res.data;
        console.log(res.data);
      })
      .catch(function(error) {
        alert("Ошибка получения данных" + error);
      });
  },
  computed: {
    url() {
      return "https://api.themoviedb.org/3/movie/" + this.$route.params.id;
    },
    backdropPath() {
      return (
        "https://image.tmdb.org/t/p/w300_and_h450_bestv2" +
        this.movie.poster_path
      );
    }
  }
};
</script>

<style scoped>
.poster {
  display: flex;
  width: 300px;
  height: 450px;
  border-width: 0;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}
.image-content {
  display: block;
  box-sizing: border-box;
  width: 300px;
  height: 450px;
  position: relative;
  z-index: 2;
  border-width: 0;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}
.info {
  display: flex;
  flex-direction: column;
  min-height: 450px;
  margin-left: 16px;
  text-align: start;
}
.label {
  color: darkslateblue;
  font-weight: bold;
}
.genre-item {
  line-height: 16px;
  margin: 2px 6px;
}
</style>
