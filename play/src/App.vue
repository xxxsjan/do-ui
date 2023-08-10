<script setup lang="ts">
// import { ref } from "vue";
import TestCalendar from "./components/test-calendar.vue";
// const visible = ref(false);
</script>

<template>
  <div>
    <!-- <d-link>default</d-link>
    <d-link type="primary">primary</d-link>
    <d-link type="success">success</d-link>
    <d-link type="warning">warning</d-link>
    <d-link type="danger">danger</d-link>
    <d-link type="info">info</d-link>

    <button @click="visible = !visible">Toggle</button>

    <div style="height: 1000px; width: 200px; border: 1px solid #333"></div>
    <d-dialog v-model:visible="visible" /> -->

    <TestCalendar />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
