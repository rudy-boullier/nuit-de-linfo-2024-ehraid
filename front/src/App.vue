<script setup lang="ts">
import OceanLayer1 from "./components/OceanLayer1.vue";
const items = [
  {
    color: "red-lighten-2",
    icon: "mdi-star",
  },
  {
    color: "purple-lighten-2",
    icon: "mdi-book-variant",
  },
  {
    color: "green-lighten-1",
    icon: "mdi-airballoon",
  },
  {
    color: "indigo-lighten-2",
    icon: "mdi-layers-triple",
  },
];
</script>

<template>
  <OceanLayer1></OceanLayer1>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
