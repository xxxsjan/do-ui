<template>
  <a
    :class="[ns.b(), createTypeClass(), 'is-underline']"
    :href="href"
    target="_blank"
    ><span :class="ns.e('inner')"><slot></slot></span
  ></a>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from "vue";
import { linkProps, linkEmits } from "./link";
import { createNamespace } from "@do-ui/utils/bem";

defineOptions({
  name: "d-link",
  inheritAttrs: false,
});

const props = defineProps(linkProps);

function createTypeClass() {
  return ns.m(props.type);
}
const ns = createNamespace("link");
</script>

<style scoped lang="scss"></style>
