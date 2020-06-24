<template>
  <div>
    <ApolloQuery
      :query="require('../graphql/getAListing.gql')"
      :variables="{ listingId: this.$route.params.id.toString() }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo text-red">
          <a-skeleton active />
        </div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo text-red">
          An error occurred {{ error.message }}
        </div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <LandingHeader :imgURL="data.getAListing.coverPhoto" />

          <div class="grid p-5 mt-10">
            <div class="mr-16">
              <h1 class="font-display  font-semibold text-3xl text-black">
                {{ data.getAListing.listingName }}
              </h1>
              <h1 class="font-display text-xl text-black mt-4 mb-8">
                {{ data.getAListing.listingLocation }}
              </h1>
              <h1
                class="font-display font-bold text-xl text-center s:text-left mb-5 text-black "
              >
                $ {{ data.getAListing.price }}
              </h1>
              <p class="font-display text-left text-black ">
                {{ data.getAListing.listingDescription }}
              </p>

              <h3 class="font-display text-2xl font-bold text-black mt-10">
                Trip ammenities
              </h3>

              <div
                class="flex flex-row p-3"
                v-for="types in data.getAListing.listingType"
                :key="types"
              >
                <img src="../assets/trip_type.svg" />
                <p class="font-display ml-2">{{ types.name }}</p>
              </div>

              <h3 class="font-display text-2xl font-bold text-black  mt-10">
                Activites
              </h3>
              <div
                class="flex flex-row p-3"
                v-for="activies in data.getAListing.listingActivities"
                :key="activies"
              >
                <img src="../assets/trip_activity.svg" />
                <p class="font-display ml-2">{{ activies.name }}</p>
              </div>
            </div>
            <div class="flex flex-col ">
              <div>
                <RedBlockButton
                  text="Book"
                  class=" text-center s:pr-20 mb-10 mt-10"
                  @click.native="forward"
                />
              </div>
              <div>
                <h3 class="font-display text-xl   text-black mt-10 mb-10">
                  Your guide
                </h3>
                <img
                  :src="data.getAListing.guide.Avatar"
                  alt="guide"
                  class="rounded-lg h-48"
                />
              </div>
              <div>
                <h3 class="font-display text-xl   text-black mt-10">
                  {{ data.getAListing.guide.Name }}
                </h3>
                <p class="font-display   text-black mt-5 ">
                  {{ data.getAListing.guide.Bio }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import LandingHeader from "../components/headers/LandingHeader";
import RedBlockButton from "../components/buttons/RedBlockButton";
export default {
  name: "Listing",
  components: {
    LandingHeader,
    RedBlockButton,
  },
  methods: {
    forward() {
      this.$router.push(`/booking/${this.$route.params.id}`);
    },
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
</style>
