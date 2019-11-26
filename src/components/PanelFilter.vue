<template>
  <div>
    <label>Фильтр по жанру </label>
    <span class="">
      <Select v-bind:items="genres" v-on:on-change="setFilter" />
    </span>
  </div>
</template>

<script>
import Select from "./Select/Select";
export default {
  name: "PanelFilter",
  props: {
    genres: Array,
    setFilter: Function
  },
  components: {
    Select
  }
};
</script>

<style scoped>
.filter-wrapper {
  display: flex;
}
</style>
