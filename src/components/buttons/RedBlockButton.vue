<template>
  <button
    @click="handleClick"
    class="cursor-pointer bg-red-lightest text-red-darkest focus:outline-none font-display rounded-px px-16 py-2 hover:bg-transparent hover:border hover:border-red-darkest"
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
  name: "RedBlockButton",
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
