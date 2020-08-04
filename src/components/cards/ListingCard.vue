<template>
  <div class="rounded-px w-card h-auto shadow-lg-card cursor-pointer">
    <img :src="coverPhoto" class="w-full h-48 rounded-t-px" />
    <div class="flex flex-col p-2">
      <div class="flex flex-row mt-2 ">
        <BodyOne class="text-lg text-black font-display">{{
          listingTitle
        }}</BodyOne>
        <BodyOne class=" text-sm text-grey">{{ listingLocation }}</BodyOne>
      </div>

      <BodyOne class="text-green-dark text-lg mt-8">${{ price }}</BodyOne>
      <a-rate :default-value="rating" disabled />
    </div>
  </div>
</template>
<script>
import BodyOne from "../typography/BodyOne";
export default {
  name: "ListingCard",
  components: {
    BodyOne,
  },
  props: {
    listingTitle: String,
    listingLocation: String,
    price: String,
    rating: Number,
    coverPhoto: String,
  },
};
</script>
