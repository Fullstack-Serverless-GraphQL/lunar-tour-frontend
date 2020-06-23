<template>
  <button
    @click="handleClick"
    class="cursor-pointer bg-blue-lightest text-blue-darkest focus:outline-none font-display rounded-px px-16 py-2 hover:bg-transparent hover:border hover:border-blue-darkest"
  >
    <div v-if="isLoading">
      <img
        aria-label="loading-spinner"
        class="spinner"
        src="../../assets/loop.svg"
      />
    </div>
    <div v-else>{{ text }}</div>
  </button>
</template>
<script>
export default {
  name: "BlueBlockButton",
  props: {
    text: String,
    isLoading: Boolean
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
<style>
.spinner {
  display: inline-block;
  animation: rotate 2s infinite linear;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
