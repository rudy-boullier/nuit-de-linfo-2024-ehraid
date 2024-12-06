<script setup lang="ts">
import OceanLayer1 from "./components/OceanLayer1.vue";
import data from "./data/data.json"
import Depth from "./models/depth.ts";

const depths = data as Depth[];
console.log(depths[0].fine)
</script>

<template>
  <OceanLayer1 />
  <div v-for="depth in depths" :key="depth.depth" class="d-flex depth">
    <div>
      <h2>{{ depth.fine?.title }}</h2>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.depth:nth-child(odd) {
  justify-content: end;
  padding: 3rem;
}

.depth:nth-child(even) {
  justify-content: start;
  padding: 3rem;
}
</style>
