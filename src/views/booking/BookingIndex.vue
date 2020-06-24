<template>
  <div>

        <a-tabs v-model="activeKey">
      <p>tab1</p>
          </a-tab-pane>

          <!-- TAB ONE  END--->

          <!-- TAB TWO --->

          <a-tab-pane tab="Tab 2" key="2" class="flex justify-center">
             <p>tab2</p>

          </a-tab-pane>
          <!-- TAB TWO  END--->
          <!-- TAB THREE --->

          <a-tab-pane
            tab="Tab 3"
            key="3"
            class="text-black flex justify-center"
          >
               <p>tab3</p>
          </a-tab-pane>
          <!-- TAB THREE END--->
          <!-- TAB FOUR --->

          <a-tab-pane
            tab="Tab 4"
            key="4"
            class="text-black flex justify-center"
          >
               <p>tab4</p>
          </a-tab-pane>
          <!-- TAB FOUR END--->
        </a-tabs>
  </div>
</template>

<script>



export default {
  name: "BookingIndex",
  components: {
   

  },
  data() {
    return {
      activeKey: "1",
   
    };
  },
  methods: {
    next(k) {
      this.activeKey = k.toString();
    }
  }
   
};
</script>
<style>
.ant-tabs-bar.ant-tabs-top-bar {
  display: none;
}


</style>