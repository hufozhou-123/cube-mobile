<template>
  <div class="home">
    1111222333
    <cube-button @click="showDialog">show dialog</cube-button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang='ts'>
import { watch, defineComponent } from "@vue/composition-api";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  },
  setup(props: any, content: any) {
    console.log(1111111111111);
    return {
      showDialog
    }

    function showDialog() {
      content.root
        .$createDialog({
          type: "alert",
          title: "Alert",
          content: "dialog content"
        })
        .show();
    }
  }
})
</script>
