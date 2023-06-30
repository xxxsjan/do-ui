<template>
  <teleport to="body">
    <div v-if="visible" :class="dialogNs.b()" @click="closeDialog">
      <div :class="dialogNs.e('header')">
        <slot name="header" />
      </div>
      <div :class="dialogNs.e('body')">
        <h2>Modal Title</h2>
        <p>Modal Content</p>
        <button @click="closeDialog">Close</button>
      </div>
      <div :class="dialogNs.e('footer')">
        <slot name="footer" />
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { ref, watch, useSlots } from "vue";
import { dialogEmits, dialogProps } from "./dialog";
import { createNamespace } from "@do-ui/utils/bem";

defineOptions({
  name: "d-dialog",
  inheritAttrs: false,
});

const props = defineProps(dialogProps);
const emit = defineEmits(dialogEmits);
const slots = useSlots();
const dialogNs = createNamespace("dialog");

watch(
  () => props.visible,
  (newV) => {
    if (newV) {
      document.body.classList.add("do-scrolling-effect");
    } else {
      document.body.classList.remove("do-scrolling-effect");
    }
  },
  {
    immediate: true,
  }
);

function closeDialog() {
  emit("update:visible", false);
  emit("close");
}
</script>
