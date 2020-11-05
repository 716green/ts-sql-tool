<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/mevn.jpg" width="250" />
    <Main msg="Default Boilerplate Template" />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";

export default {
  name: "home",
  components: {
    Main,
  },
};
</script>
