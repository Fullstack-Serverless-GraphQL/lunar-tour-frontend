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
              <HeadingOne
                class="font-display  font-semibold text-3xl text-black"
              >
                {{ data.getAListing.listingName }}
              </HeadingOne>
              <HeadingThree class="text-black mt-4 mb-8">
                {{ data.getAListing.listingLocation }}
              </HeadingThree>
              <HeadingThree
                class=" font-bold  text-center s:text-left mb-5 text-black "
              >
                $ {{ data.getAListing.price }}
              </HeadingThree>
              <BodyOne class="text-left text-black ">
                {{ data.getAListing.listingDescription }}
              </BodyOne>

              <HeadingTwo class=" font-bold text-black mt-10">
                Trip ammenities
              </HeadingTwo>

              <div
                class="flex flex-row p-3"
                v-for="types in data.getAListing.listingType"
                :key="types"
              >
                <img src="../assets/trip_type.svg" />
                <p class="font-display ml-2">{{ types.name }}</p>
              </div>

              <HeadingTwo class=" font-bold text-black  mt-10">
                Activites
              </HeadingTwo>
              <div
                class="flex flex-row p-3"
                v-for="activies in data.getAListing.listingActivities"
                :key="activies"
              >
                <img src="../assets/trip_activity.svg" />
                <BodyOne class="font-display ml-2">{{ activies.name }}</BodyOne>
              </div>
            </div>
            <div class="flex flex-col ">
              <div>
                <RedBlockButton
                  class=" text-center s:pr-20 mb-10 mt-10"
                  @click.native="forward"
                  >Book</RedBlockButton
                >
              </div>
              <div>
                <HeadingThree
                  class="font-display text-xl   text-black mt-10 mb-10"
                >
                  Your guide
                </HeadingThree>
                <img
                  :src="data.getAListing.guide.Avatar"
                  alt="guide"
                  class="rounded-lg h-48"
                />
              </div>
              <div>
                <HeadingThree class="text-black mt-10">
                  {{ data.getAListing.guide.Name }}
                </HeadingThree>
                <BodyOne class=" text-black mt-5 ">
                  {{ data.getAListing.guide.Bio }}
                </BodyOne>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import LandingHeader from "../components/navs/LandingHeader";
import RedBlockButton from "../components/buttons/RedBlockButton";
import Typography from "../components/typography";
const { HeadingOne, HeadingTwo, HeadingThree, BodyOne } = Typography;
export default {
  name: "Listing",
  components: {
    LandingHeader,
    RedBlockButton,
    HeadingOne,
    HeadingThree,
    BodyOne,
    HeadingTwo,
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
