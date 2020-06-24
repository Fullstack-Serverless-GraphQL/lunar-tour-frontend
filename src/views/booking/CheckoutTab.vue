<template>
  <div class="flex flex-col p-20 ">
    <HeadingOne>
      Your trip total
    </HeadingOne>
    <BodyOne>
      Test using this credit card: 4242 4242 4242 4242, and enter any 5 digits
      for the zip code</BodyOne
    >
    <Card
      class="stripe-card mt-20 w-full"
      id="card"
      :class="{ complete }"
      stripe="pk_test_5ThYi0UvX3xwoNdgxxxTxxrG"
      :options="stripeOptions"
    />
    <BodyOne v-if="error"> {{ error }}</BodyOne>
    <BodyOne v-if="loading"> Busy booking your trip</BodyOne>
    <div class="flex flex-row mt-20">
      <RedBlockButton
        @click="
          pay();
          mutate();
        "
        text="Pay"
        class="mr-5"
      />
      <RedOutlineButton @click="$emit('goNext', 2)" text="Back" />
    </div>
  </div>
</template>

<script>
import HeadingOne from "../../components/typography/HeadingOne";
import BodyOne from "../../components/typography/BodyOne";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
import { Card } from "vue-stripe-elements-plus";

export default {
  name: "CheckoutTab",
  components: {
    HeadingOne,
    RedBlockButton,
    RedOutlineButton,
    BodyOne,
    Card,
  },
};
</script>
<style>
.stripe-card {
  margin-top: 10px;
  border: 1px solid #ccc;
  padding: 5px 10px;
  box-shadow: 0px 1px 3px rgba(230, 235, 241, 0.25);
  border-radius: 4px;
}
.stripe-card.complete {
  border-color: green;
}
</style>
