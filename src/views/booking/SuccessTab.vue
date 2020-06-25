<template>
  <div class="flex flex-col p-20 ">
    <HeadingOne>
      Thanks for booking with us
    </HeadingOne>
    <img src="../../assets/Vector.svg" class="mt-5" />
    <BodyOne class="mt-5"
      >Your link to your ticket is in the mail. Keep it safe and we will see you
      soon</BodyOne
    >
    <BodyOne class="mt-5">{{ bookingData.bookingId }}</BodyOne>
    <div class="flex flex-row ml-32 mt-20">
      <RedBlockButton
        @click="$router.push('/')"
        text="Book more"
        class="mr-5"
      />
    </div>
  </div>
</template>
<script>
import HeadingOne from "../../components/typography/HeadingOne";
import BodyOne from "../../components/typography/BodyOne";
import RedBlockButton from "../../components/buttons/RedBlockButton";
export default {
  name: "SuccessTab",
  components: {
    HeadingOne,
    RedBlockButton,
    BodyOne,
  },
  props: {
    bookingData: Object,
  },
};
</script>
