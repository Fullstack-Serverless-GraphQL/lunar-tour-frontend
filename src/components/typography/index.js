import Vue from "vue";
import HeadingOne from "./HeadingOne";
const Typography = {
  HeadingOne,
};

Object.keys(Typography).forEach((name) => {
  Vue.component(name, Typography[name]);
});

export default Typography;
