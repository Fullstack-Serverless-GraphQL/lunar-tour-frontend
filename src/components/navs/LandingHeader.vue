<template>
  <div class="image text-center bg-transparent " :style="urlProps">
    <h1 class="text-white font-display text-5xl pt-44 s:text-4xl">
      <div v-if="text">
        {{ text }}
      </div>
      <div v-else></div>
    </h1>
  </div>
</template>
<script>
export default {
  name: "Landing Header",
  props: {
    imgURL: String,
    text: String,
    margin: String
  },
  computed: {
    urlProps() {
      return "--img-url:" + `url(${this.imgURL})`;
    }
  }
};
</script>
<style>
.image {
  background: var(--img-url) no-repeat center center;
  background-size: cover;
  height: 570px;
  margin-top: -85px;
}
</style>
