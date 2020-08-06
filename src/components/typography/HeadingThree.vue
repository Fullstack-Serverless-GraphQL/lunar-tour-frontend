<template>
  <p class="text-xl text-black text-bold font-display">
    <slot> </slot>
  </p>
</template>
<script>
export default {
  name: "HeadingThree",
  props: {
    text: String,
  },
};
</script>
