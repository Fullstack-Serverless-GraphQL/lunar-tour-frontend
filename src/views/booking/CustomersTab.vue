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
          v-model="customer.surname"
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
      <BlueBlockButton @click="addCustomer">Add a customer</BlueBlockButton>
    </div>
    <div class="flex lg:flex-row mt-5 s:flex-col">
      <RedBlockButton @click="$emit('goNext', 3)" class="mr-5 s:mb-5 lg:mb-0"
        >Proceed</RedBlockButton
      >

      <RedOutlineButton @click="$emit('goNext', 1)">Back</RedOutlineButton>
    </div>
  </div>
</template>
<script>
import Typography from "../../components/typography";
import Input from "../../components/inputs/Input";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
import RemoveButton from "../../components/buttons/RemoveButton";
import BlueBlockButton from "../../components/buttons/BlueBlockButton";

const { HeadingOne, BodyOne } = Typography;
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
  props: {
    customers: Array,
  },
  methods: {
    addCustomer() {
      // const o = [...this.customers];
      this.customers.push({
        name: null,
        surname: null,
      });
      // this.customers.push({ o });
      // console.log(this.customers);
    },
    removeCustomer(i) {
      this.customers.splice(i, 1);
    },
    submit() {
      this.$emit("inputData");
    },
  },
  watch: {
    name() {
      this.$emit("event", this.customers);
    },
  },
};
</script>
