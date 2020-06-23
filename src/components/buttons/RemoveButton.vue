<template>
  <button
    @click="handleClick"
    class="bg-white cursor-pointer text-red-darkest focus:outline-none font-display  px-16 py-2 cursor:pointer"
  >
    <div class="flex flex-row">
      <img src="../../assets/remove.svg" />
      <p class="text-sm font-display text-bold ml-3 ">Remove</p>
    </div>
  </button>
</template>
<script>
export default {
  name: "RemoveButton",
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
