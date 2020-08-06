<template>
  <div class="flex flex-col p-20 ">
    <HeadingOne>
      Thanks for booking with us
    </HeadingOne>
    <img src="../../assets/Vector.svg" class="mt-5" />
    <BodyOne class="mt-5"
      >Your link to your ticket is in the mail. Keep it safe and we will see you
      soon on {{ bookingData.bookingDate }}</BodyOne
    >
    <div>
      <img src="../../assets/confirmation_number.svg" />
      <a class="text-yellow font-display" :href="bookingData.chargeReciept"
        >Tickets</a
      >
    </div>
    <div class="flex flex-row ml-32 mt-20">
      <RedBlockButton @click="$router.push('/')" class="mr-5"
        >Book more</RedBlockButton
      >
    </div>
  </div>
</template>
<script>
import Typography from "../../components/typography";
import RedBlockButton from "../../components/buttons/RedBlockButton";
const { HeadingOne, BodyOne } = Typography;

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
