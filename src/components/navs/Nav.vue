<template>
  <nav
    class="nav border-top flex items-center justify-between flex-wrap bg-transparent p-6 z-100"
  >
    <div class="flex items-center flex-no-shrink text">
      <h1 class="font-display text-red text-2xl">
        <a class="no-underline text-red" href="/">Lunar</a>
      </h1>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav"
};
</script>
<style scoped>
.nav {
  transition: background-color 1s ease 0s;
}
</style>
