import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Listing from "../views/Listing.vue";
import BookingIndex from "../views/booking/BookingIndex";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/listing/:id",
    component: Listing,
  },
  {
    path: "/booking/:id",
    component: BookingIndex,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
