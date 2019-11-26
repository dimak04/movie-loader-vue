<template>
  <option v-bind:value="item.id">{{ item.name }}</option>
</template>

<script>
export default {
  name: "SelectItem",
  props: {
    item: Object
  }
};
</script>

<style scoped></style>
