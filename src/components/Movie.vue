<template>
  <div>
    <div class="container">
      <Poster />
    </div>
    <div class="container">
      <Video />
    </div>
  </div>
</template>

<script>
import Video from "./Video";
import Poster from "./Poster";
export default {
  name: "Movie",
  components: {
    Poster,
    Video
  }
};
</script>
