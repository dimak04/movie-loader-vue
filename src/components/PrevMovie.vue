<template>
  <div class="item-card">
    <div class="item-poster">
      <router-link v-bind:to="toMovie">
        <img v-bind:src="posterPath" v-bind:alt="movie.title" />
      </router-link>
    </div>
    <div class="item-info">
      <div class="d-flex flex-wrap align-items-center">
        <router-link
          v-bind:to="toMovie"
          v-bind:title="movie.title"
          class="title"
          >{{ movie.title }}</router-link
        >
        <span class="w-100">{{ dateRelease }}</span>
      </div>
      <p class="overview">{{ movie.overview | truncate(250, "...") }}</p>
      <p class="view-more">
        <router-link v-bind:to="toMovie">
          Подробнее...
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "PrevMovie",
  props: { movie: Object },
  computed: {
    dateRelease() {
      moment.locale("ru_RU");
      return moment(this.movie.release_date).format("DD MMMM YYYY");
    },
    toMovie() {
      return "/movies/" + this.movie.id;
    },
    posterPath() {
      return (
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2" +
        this.movie.poster_path
      );
    }
  },
  filters: {
    truncate: function(text, length, suffix) {
      return text.substring(0, length) + suffix;
    }
  }
};
</script>

<style scoped>
.item-card {
  display: flex;
  align-items: center;
  margin-top: 16px;
  width: 483px;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.item-poster {
  width: 175px;
  height: 278px;
  line-height: 0;
}
.item-info {
  width: 298px;
  height: 278px;
  position: relative;
  box-sizing: border-box;
  padding: 10px 16px 16px 16px;
}
.view-more {
  border-top: 1px solid #e3e3e3;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 16px;
  margin-bottom: 0;
}
.title {
  width: 100%;
  display: block;
  color: #000000;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1em;
  line-height: 1.1em;
}
.overview {
  word-wrap: break-word;
  white-space: normal;
  color: #4d4d4d;
  font-size: 0.9em;
  line-height: 1.2em;
  margin-top: 30px;
  padding: 0;
  width: 100%;
}
</style>
