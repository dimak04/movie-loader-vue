<template>
  <div class="video-content">
    <div class="player">
      <iframe
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        v-bind:src="srcVideo"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <div class="play-list">
      <ul>
        <li
          class="list-item"
          v-for="video of videos"
          v-bind:key="video.id"
          v-on:click="openVideo = video"
        >
          {{ video.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Video",
  data() {
    return {
      openVideo: {},
      videos: []
    };
  },
  mounted() {
    this.getVideos();
  },
  methods: {
    getVideos() {
      axios
        .get(this.getUrl, {
          params: {
            api_key: "9f31edd4ed7693d5d95fe2cc2593851a",
            language: "ru-RU"
          }
        })
        .then(res => {
          const video = res.data.results;
          this.videos = video;
          this.openVideo = video[0];
        })
        .catch(function(error) {
          alert("Ошибка получения данных" + error);
        });
    }
  },
  computed: {
    getUrl() {
      return (
        "https://api.themoviedb.org/3/movie/" +
        this.$route.params.id +
        "/videos?"
      );
    },
    srcVideo() {
      const { key, iso_639_1 } = this.openVideo;
      return "https://www.youtube.com/embed/" + key + "?hl=" + iso_639_1;
    }
  }
};
</script>

<style scoped>
.video-content {
  display: flex;
  flex-direction: row;
  min-width: 870px;
  height: 405px;
  background-color: dimgrey;
  margin-top: 30px;
}
.player {
}
.play-list {
  display: flex;
  flex-direction: column;
}
.list-item {
  color: white;
  cursor: pointer;
  text-align: start;
  width: 100%;
}
</style>
