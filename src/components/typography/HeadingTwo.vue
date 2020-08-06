<template>
  <p class="text-2xl text-black text-bold font-display">
    <slot> </slot>
  </p>
</template>
<script>
export default {
  name: "HeadingTwo",
  props: {
    text: String,
  },
};
</script>
