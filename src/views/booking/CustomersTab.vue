<template>
  <div class="flex flex-col p-20 ">
    <HeadingOne>
      Who are you travelling with?
    </HeadingOne>
    <div
      class="flex lg:flex-row s:flex-col mt-10"
      v-for="(customer, i) in customers"
      :key="i"
    >
      <hr />
      <div class="flex flex-col mr-5">
        <BodyOne> customer name </BodyOne>
        <Input
          placeholder="doku@corrisant.io"
          type="email"
          v-model="customer.name"
        />
        <BodyOne> customer country </BodyOne>
        <Input
          placeholder="doku@corrisant.io"
          type="email"
          v-model="customer.country"
        />
        <BodyOne> Physio score </BodyOne>
        <Input
          placeholder="doku@corrisant.io"
          type="email"
          v-model="customer.physioScore"
        />
      </div>
      <div class="flex flex-col">
        <BodyOne> Customer surname </BodyOne>
        <Input
          placeholder="doku@corrisant.io"
          type="email"
          v-model="customer.Surname"
        />
        <label> </label>
        <input />
        <BodyOne> Passport number </BodyOne>
        <Input
          placeholder="doku@corrisant.io"
          type="email"
          v-model="customer.passportNumber"
        />
        <RemoveButton @click="removeCustomer(i)" />
      </div>
    </div>
    <div class="mt-5 ">
      <BlueBlockButton text="Add a customer" @click="addCustomer" />
    </div>
    <div class="flex lg:flex-row mt-5 s:flex-col">
      <RedBlockButton
        @click="$emit('goNext', 3)"
        text="Proceed"
        class="mr-5 s:mb-5  lg:mb-0"
      />
      <RedOutlineButton @click="$emit('goNext', 1)" text="Back" />
    </div>
  </div>
</template>
<script>
import HeadingOne from "../../components/typography/HeadingOne";
import BodyOne from "../../components/typography/BodyOne";
import Input from "../../components/inputs/Input";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
import RemoveButton from "../../components/buttons/RemoveButton";
import BlueBlockButton from "../../components/buttons/BlueBlockButton";

export default {
  name: "CustomerTab",
  components: {
    HeadingOne,
    RedBlockButton,
    RedOutlineButton,
    BodyOne,
    Input,
    RemoveButton,
    BlueBlockButton,
  },
};
</script>
