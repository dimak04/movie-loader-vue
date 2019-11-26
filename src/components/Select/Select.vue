<template>
  <select name="genres" id="select-genres" v-on:change="onChange">
    <SelectItem v-for="item of items" v-bind:key="item.id" v-bind:item="item" />
  </select>
</template>

<script>
import SelectItem from "./SelectItem";
export default {
  name: "Select",
  props: {
    items: Array
  },
  components: {
    SelectItem
  },
  methods: {
    onChange(e) {
      this.$emit("on-change", e.target.value);
    }
  }
};
</script>

<style scoped></style>
