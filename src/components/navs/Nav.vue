<template>
  <nav
    class="nav border-top flex items-center justify-between flex-wrap bg-transparent"
  >
    <div class="flex items-center flex-no-shrink text">
      <HeadingOne class="font-display text-red ">
        <a class="no-underline text-red" href="/">Lunar</a>
      </HeadingOne>
    </div>
  </nav>
</template>
<script>
import Typography from "../typography/";
const { HeadingOne } = Typography;
export default {
  name: "Nav",
  components: {
    HeadingOne,
  },
};
</script>
<style scoped>
.nav {
  transition: background-color 1s ease 0s;
}
</style>
