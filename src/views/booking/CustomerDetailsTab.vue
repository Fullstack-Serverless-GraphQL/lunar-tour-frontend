<template>
  <div class="flex flex-col p-20 ">
    <HeadingOne>
      Booking for Listing Name
    </HeadingOne>
    <div class="mt-5">
      <BodyOne>
        Booking date
      </BodyOne>
      <Input placeholder="date" type="date" v-model="personal.date" />
    </div>

    <div class="mt-5">
      <BodyOne> Email address </BodyOne>
      <Input
        placeholder="doku@corrisant.io"
        type="email"
        v-model="personal.email"
      />
    </div>
    <div class="flex lg:flex-row mt-5 s:flex-col">
      <RedBlockButton
        @click="$emit('goNext', 2)"
        text="Proceed"
        class="mr-5 s:mb-5 lg:mb-0"
      />

      <RedOutlineButton @click="$router.push('/')" text="Cancel" />
    </div>
  </div>
</template>
<script>
import HeadingOne from "../../components/typography/HeadingOne";
import BodyOne from "../../components/typography/BodyOne";
import Input from "../../components/inputs/Input";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
export default {
  name: "CustomerDetailsTab",
  components: {
    HeadingOne,
    RedBlockButton,
    RedOutlineButton,
    BodyOne,
    Input,
  },
  props: {
    personal: Object,
  },

  watch: {
    personal() {
      this.$emit("event", this.personal);
    },
  },
};
</script>
