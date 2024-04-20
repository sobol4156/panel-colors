<template>
  <div class="lists-list">
    <img
      @click="toggleDot"
      class="arrow"
      :class="{ rotate: isChecked }"
      :src="arrow"
      alt="Arrow"
    />
    <div class="checkbox" @click="selectedAll">
      <span
        :class="{ dot: selectedAllInputs, visible: selectedAllInputs }"
        class="dot"
      ></span>
    </div>
    <span class="list-name">List {{ count }}</span>
  </div>
  <div
    v-if="isChecked"
    v-for="(item, index) in items"
    :key="index"
    class="item-1"
  >
    <Item
      :listNumber="'list'+listNumber"
      :number="index + 1"
      :color="getColorByNumber(index)"
      :selectedAllInputs="selectedAllInputs"
    />
  </div>
</template>

<script>
import arrow from "@/assets/images/img/arrow-down.png";
import Item from "./Item/Item.vue";

export default {
  props: ["count", "items", "listNumber"],
  data() {
    return {
      arrow,
      isChecked: false,
      selectedAllInputs: false,
    };
  },
  methods: {
    toggleDot() {
      this.isChecked = !this.isChecked;
    },
    selectedAll() {
      this.selectedAllInputs = !this.selectedAllInputs;
    },
    getColorByNumber(index) {
      const colors = [
        "#FF0000",
        "#FF7F00",
        "#FFFF00",
        "#00FF00",
        "#0000FF",
        "#4B0082",
        "#9400D3",
        "#FFC0CB",
        "#00FF00",
        "#808080",
      ];
      
        return colors[index];
    },
  },
  components: {
    Item,
  },
};
</script>

<style lang="scss">
.lists-list {
  display: flex;
  gap: 5px;
  align-items: center;

  .arrow {
    width: 40px;
    transform: rotate(-90deg);
    cursor: pointer;
  }

  .rotate {
    transform: rotate(0deg);
  }

  .checkbox {
    width: 25px;
    height: 25px;
    border: 1px solid black;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1px;
    cursor: pointer;
    .dot {
      width: 8px;
      height: 8px;
      background-color: black;
      display: inline-block;
      visibility: hidden;
    }

    .visible {
      visibility: visible;
    }
  }

  .list-name {
    font-size: 25px;
  }
}
</style>
