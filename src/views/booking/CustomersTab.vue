<template>
  <div class="flex flex-col p-20 ">
    <HeadingOne>
      Booking for Listing Name
    </HeadingOne>
    <div class="mt-5">
      <BodyOne>
        Booking date
      </BodyOne>
      <DateInput placeholder="date" type="date" v-model="date" />
    </div>
    <div class="mt-5">
      <BodyOne>
        Number of people
      </BodyOne>
      <Input placeholder="3" type="number" v-model="number" />
    </div>
    <div class="mt-5">
      <BodyOne> Email address </BodyOne>
      <Input placeholder="doku@corrisant.io" type="email" v-model="email" />
    </div>
    <div class="flex lg:flex-row mt-5 s:flex-col">
      <RedBlockButton
        @click="next(2)"
        text="Proceed"
        class="mr-5 s:mb-5 lg:mb-0"
      />
      <RedOutlineButton @click="$router.push('/')" text="Cancel" />
    </div>
  </div>
</template>
<script>
import HeadingOne from "../../../components/typography/HeadingOne";

import RedBlockButton from "../../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../../components/buttons/RedOutlineButton";
export default {
  name: "CustomersTab",
  components: {
    HeadingOne,
    RedBlockButton,
    RedOutlineButton,
  },
};
</script>
