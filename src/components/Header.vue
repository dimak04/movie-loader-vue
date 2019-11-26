<template>
  <div>
    <header class="navbar bg-secondary">
      <router-link to="/" class="navbar-brand text-white"
        >Movies loader</router-link
      >
      <router-link to="/movies" class="nav-link text-white">Movies</router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
