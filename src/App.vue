<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>
<script>
import Nav from "./components/navs/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>
