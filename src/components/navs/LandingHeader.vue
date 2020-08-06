<template>
  <div class="image text-center bg-transparent " :style="urlProps">
    <HeadingOne class="text-white pt-44 s:text-4xl">
      <div v-if="text">
        {{ text }}
      </div>
      <div v-else></div>
    </HeadingOne>
  </div>
</template>
<script>
import Typography from "../typography/";
const { HeadingOne } = Typography;
export default {
  name: "Landing Header",
  components: { HeadingOne },
  props: {
    imgURL: String,
    text: String,
    margin: String,
  },
  computed: {
    urlProps() {
      return "--img-url:" + `url(${this.imgURL})`;
    },
  },
};
</script>
<style>
.image {
  background: var(--img-url) no-repeat center center;
  background-size: cover;
  height: 570px;
  margin-top: -90px;
}
</style>
