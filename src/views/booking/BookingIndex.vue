<template>
  <div>
    <a-tabs v-model="activeKey">
      <a-tab-pane tab="Tab 1" key="1" class="flex justify-center">
        <CustomerDetailsTab
          v-on:goNext="next"
          :personal="personal"
          @event="
            (newPersonal) => {
              personal = newPersonal;
            }
          "
        />
      </a-tab-pane>

      <!-- TAB ONE  END--->

      <!-- TAB TWO --->

      <a-tab-pane tab="Tab 2" key="2" class="flex justify-center">
        <CustomersTab
          v-on:goNext="next"
          :customers="customers"
          @event="
            (cus) => {
              customers = cus;
            }
          "
          @inputData="showData"
        />
      </a-tab-pane>
      <!-- TAB TWO  END--->
      <!-- TAB THREE --->

      <a-tab-pane tab="Tab 3" key="3" class="text-black flex justify-center">
        <CheckoutTab
          v-on:goNext="next"
          :errors="hasError"
          :loading="isLoading"
          :showErrorMessage="showError"
          @makeBooking="mutate"
        />
      </a-tab-pane>
      <!-- TAB THREE END--->
      <!-- TAB FOUR --->

      <a-tab-pane tab="Tab 4" key="4" class="text-black flex justify-center">
        <SuccessTab />
      </a-tab-pane>
      <!-- TAB FOUR END--->
    </a-tabs>
  </div>
</template>

<script>
import CustomersTab from "./CustomersTab";
import CustomerDetailsTab from "./CustomerDetailsTab";
import SuccessTab from "./SuccessTab";
import CheckoutTab from "./CheckoutTab";
export default {
  name: "BookingIndex",
  components: { CustomersTab, CustomerDetailsTab, CheckoutTab, SuccessTab },
  data() {
    return {
      activeKey: "1",
      personal: {
        date: "",
        email: "",
      },
      customers: [],
      isLoading: false,
      hasError: false,
      showError: "",
    };
  },
  methods: {
    next(k) {
      this.activeKey = k.toString();
    },
    showData() {
      console.log(this.customers);
      alert(
        ` ${this.personal.date}${this.personal.number} ${this.personal.email}  ${this.customers[0].name}`
      );
    },
    mutate() {
      this.isLoading = true;
      this.$apollo
        .mutate({
          mutation: require("../../graphql/makeABooking.gql"),
          variables: {
            customerEmail: this.personal.email,
            bookingDate: this.personal.date,
            listingId: this.$route.params.id,
            customers: this.customers,
          },
        })
        .then((data) => {
          console.log(data);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.hasError = false;
          this.showError = error;
        });
    },
  },
};
</script>
<style>
.ant-tabs-bar.ant-tabs-top-bar {
  display: none;
}
</style>
