<template>
  <div>
    <LandingHeader
      margin="-85"
      text="Book Vacations to Different Lunar Destinations"
      imgURL="https://moon.nasa.gov/system/resources/detail_files/187_detail_as11-44-6551_orig.jpg"
    />
    <ApolloQuery :query="require('../graphql/getAllListings.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading" class="text-red">
          <a-skeleton active />
        </div>
        <div v-if="error" class="text-red">error...</div>

        <div v-else-if="data" class="grid grid-cols-3 col-gap-32 p-10">
          <div v-for="listing of data.getAllListings" :key="listing.listingId">
            <router-link
              :to="{
                path: `listing/${listing.listingId}`,
                params: { id: listing.listingId },
              }"
              class="no-underline"
            >
              <TourCard
                :listingTitle="listing.listingName"
                :listingLocation="listing.listingLocation"
                :price="listing.price"
                :rating="listing.rating"
                :coverPhoto="listing.coverPhoto"
                class="mt-32"
              />
            </router-link>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import LandingHeader from "../components/navs/LandingHeader.vue";
import TourCard from "../components/cards/ListingCard";
export default {
  name: "Home",
  components: {
    LandingHeader,
    TourCard,
  },
};
</script>
<style>
/* .grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
} */
</style>
