<template>
  <div class="rounded-px w-card h-card shadow-lg-card cursor-pointer">
    <img :src="coverPhoto" class="w-full h-48 rounded-t-px" />
    <div class="flex flex-col p-2">
      <div class="flex flex-row mt-2 ">
        <p class="font-display text-base">{{ listingTitle }}</p>
        <p class="font-display text-sm text-grey">{{ listingLocation }}</p>
      </div>

      <p class="font-display text-lg mt-8">${{ price }}</p>
      <div v-if="rating === 5">
        <div class="flex flex-row">
          <img src="../../assets/star.svg" />
          <img src="../../assets/star.svg" />
          <img src="../../assets/star.svg" />
          <img src="../../assets/star.svg" />
          <img src="../../assets/star.svg" />
        </div>
      </div>
      <div v-if="rating === 4">
        <div class="flex flex-row">
          <img src="../../assets/star.svg" />
          <img src="../../assets/star.svg" />
          <img src="../../assets/star.svg" />
          <img src="../../assets/star.svg" />
        </div>
      </div>
      <div v-if="rating === 3">
        <div class="flex flex-row">
          <img src="../../assets/star.svg" />
          <img src="../../assets/star.svg" />
          <img src="../../assets/star.svg" />
        </div>
      </div>
      <div v-if="rating === 2">
        <div class="flex flex-row">
          <img src="../../assets/star.svg" />
          <img src="../../assets/star.svg" />
        </div>
      </div>
      <div v-if="rating === 1">
        <div class="flex flex-row">
          <img src="../../assets/star.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListingCard",
  props: {
    listingTitle: String,
    listingLocation: String,
    price: String,
    rating: Number,
    coverPhoto: String,
  },
};
</script>
