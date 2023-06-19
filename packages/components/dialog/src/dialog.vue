<template>
  <teleport to="body">
    <div v-if="showModal" :class="dialogNs.b()">
      <div :class="dialogNs.e('header')"></div>
      <div :class="dialogNs.e('body')">
        <h2>Modal Title</h2>
        <p>Modal Content</p>
        <button @click="handleVisibility">Close</button>
      </div>
      <div :class="dialogNs.e('footer')"></div>
    </div>
    <div v-else :class="dialogNs.b()">
      <button @click="handleVisibility">show</button>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { createNamespace } from "@do-ui/utils/bem";

defineOptions({
  name: "d-dialog",
  inheritAttrs: false,
});

const dialogNs = createNamespace("dialog");
const showModal = ref(true);

watch(
  () => showModal.value,
  (newV) => {
    if (newV) {
      document.body.classList.add("dialog-show");
    } else {
      document.body.classList.remove("dialog-show");
    }
  },
  {
    immediate: true,
  }
);

function handleVisibility() {
  showModal.value = !showModal.value;
}
</script>
