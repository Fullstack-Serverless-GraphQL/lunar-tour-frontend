<template>
  <p class="text-4xl text-black text-bold font-display">
    <slot> </slot>
  </p>
</template>
<script>
export default {
  name: "HeadingOne",
  props: {
    text: String
  }
};
</script>
