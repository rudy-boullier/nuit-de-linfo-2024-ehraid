<script setup lang="ts">
import OceanLayer1 from "./components/OceanLayer1.vue";
import data from "./data/data.json";
import Depth from "./models/depth.ts";

const depths = data as Depth[];
</script>

<template>
  <div class="wrapper bg-sky">
    <svg width="50" height="50" id="sun" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M35.165 27.208 48 24l-12.835-3.208a11.44 11.44 0 0 1 0 6.416zM12.833 20.792 0 24l12.833 3.208a11.464 11.464 0 0 1 0-6.416zM27.207 12.833 24 0l-3.21 12.833a11.468 11.468 0 0 1 6.417 0zM20.79 35.166 24 48l3.208-12.834a11.444 11.444 0 0 1-6.417 0zM18.367 13.832 7.028 7.029l6.8 11.34a11.676 11.676 0 0 1 4.539-4.537zM29.631 34.167l11.339 6.8-6.8-11.338a11.684 11.684 0 0 1-4.539 4.538zM34.166 18.369l6.8-11.34-11.339 6.8a11.689 11.689 0 0 1 4.539 4.54zM13.832 29.632 7.028 40.97l11.339-6.8a11.671 11.671 0 0 1-4.535-4.538z"
        fill="#fddc85"
      />
      <circle cx="23.999" cy="24" r="9.375" fill="#ffbd66" />
    </svg>
    <h1 class="title">Anatomie des mers</h1>
    <OceanLayer1 />
    <div class="bg-sea">
      <div v-for="depth in depths" :key="depth.depth" class="d-flex">
        <div class="d-flex depth">
          <h2>{{ depth.fine?.title }}</h2>
          <p>{{ depth.fine?.text }}</p>
        </div>
      </div>
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

#sun {
  position: absolute;
  top: 0;
  right: 0;
  animation: rotateAndScale 120s linear infinite;
}

@keyframes rotateAndScale {
  from {
    transform: rotate(0deg) scale(10);
  }
  to {
    transform: rotate(360deg) scale(10);
  }
}

.title {
  font-size: 5rem;
  text-align: center;
  padding: 300px 2rem 4rem 2rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

.bg-sky {
  background: linear-gradient(0deg, hsla(200, 100%, 99%, 0.667), #a8d7fd);
}

.bg-sea {
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    #023d73 100%
  );
  height: 100%;
}
</style>
