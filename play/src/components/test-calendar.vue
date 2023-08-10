<template>
  <button @click="handlePrint">打印</button>
  <div class="calendar-demo" ref="calendarRef">
    <d-calendar v-model="currentDate">
      <template #date-cell="{ data }">
        {{ data.text }}
        <div class="dou-kuai">dou</div>
        <div class="dou-kuai">kuai</div>
        <div class="dou-kuai">yun</div>
      </template>
    </d-calendar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Print } from "../utils";

const currentDate = ref(new Date());
const calendarRef = ref<HTMLElement>();
function handlePrint() {
  Print(calendarRef.value as HTMLElement);
}
</script>

<style lang="scss">
.dou-kuai {
  line-height: 20px;
  text-align: left;
  color: #666;
}

.calendar-demo .d-calendar__header {
  display: none;
}
</style>
