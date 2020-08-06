import Vue from "vue";
import HeadingOne from "./HeadingOne";
import HeadingTwo from "./HeadingTwo";
import HeadingThree from "./HeadingThree";
import BodyOne from "./BodyOne";

const Typography = {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  BodyOne,
};

Object.keys(Typography).forEach((name) => {
  Vue.component(name, Typography[name]);
});

export default Typography;
