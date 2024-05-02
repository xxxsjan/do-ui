<template>
  <div>
    <button @click="handlePrint">打印</button>
    <!-- <div id="printTest">
      <p>我是打印区域</p>
    </div> -->
    <!-- <button v-print="'#printTest'">print nb 打印</button> -->
    <div class="calendar-demo" ref="calendarRef">
      <d-calendar v-model="currentDate">
        <template #date-cell="{ data }">
          <div class="calendar-item">
            <div class="calendar-date">{{ data.text }}</div>
            <!-- <div class="vertical-line"></div> -->
            <!-- <div class="horizontal-line"></div> -->

            <div class="parent">
              <div
                class="child"
                v-for="(item, index) in 4"
                :key="index"
              ></div>
            </div>
          </div>
        </template>
      </d-calendar>
    </div>
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

  img {
    width: 10px;
    height: 10px;
  }
}
.calendar-demo {
  // --w: 1536px;
  // width: var(--w);
  // 297/210=1.41
  // height: calc(var(--w) / 1.41);
}
.calendar-demo .d-calendar__header {
  display: none;
}

.calendar-item {
  position: relative;
  height: 100%;

  .parent {
    // display: grid;
    // grid-template-columns: repeat(2, 1fr);
    // grid-template-rows: repeat(2, 1fr);
    // grid-column-gap: 0px;
    // grid-row-gap: 0px;
    display: flex;
    flex-wrap: wrap;

    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;

    .child {
      width: 50%;
      box-sizing: border-box;

      &:nth-child(1) {
        border-right-style: solid;
        border-right-width: 1px;
      }
      &:nth-child(2) {
        border-left-style: solid;
        border-left-width: 1px;
      }
      &:nth-child(3) {
        border-top-style: solid;
        border-top-width: 1px;
        border-right-style: solid;
        border-right-width: 1px;
      }
      &:nth-child(4) {
        border-top-style: solid;
        border-top-width: 1px;
        border-left-style: solid;
        border-left-width: 1px;
      }
    }
  }

  .calendar-date {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 22px;
  }
  .vertical-line {
    width: 50%;
    height: 1px;
    background-color: #333;

    position: absolute;
    left: 24%;
    top: 49%;
  }

  .horizontal-line {
    width: 1px;
    height: 50%;
    background-color: #333;

    position: absolute;
    left: 49%;
    top: 24%;
  }
}
@media print {
}
</style>
