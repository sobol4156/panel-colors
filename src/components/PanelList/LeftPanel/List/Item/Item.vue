<template>
  <div class="item-left-block">
    <input
      class="item-left-input"
      type="checkbox"
      :checked="selectedAllInputs"
      @change="updateChecked"
    />
    <span>Item {{ number }}</span>
  </div>
  <div class="item-right-block">
    <input class="count-input" type="text" v-model="countValue" @change="updateCount"/>
    <input
      class="color-input"
      type="color"
      v-model="colorValue"
      @input="updateColorValue"
    />
  </div>
</template>

<script>
export default {
  props: ["number", "color", "selectedAllInputs", "listNumber"],
  data() {
    return {
      indexList: this.listNumber,
      numberItem: this.number,
      isChecked: false,
      countValue: 0,
      colorValue: this.color,
    };
  },
  methods: {
    updateCount(event){
      this.countValue = event.target.value
    },
    updateColorValue(event) {
      this.colorValue = event.target.value;
    },
    updateChecked(event) {
      this.isChecked = event.target.checked;

      // const test = ['1','2','3']
      // this.$store.commit('addLists', test)
      const indexList = this.indexList;
      const numberItem = "item" + this.numberItem;

      const itemList = {
        indexList: this.indexList,
        numberItem: "item" + this.numberItem,
        isChecked: this.isChecked,
        countValue: parseFloat(this.countValue),
        colorValue: this.colorValue,
      };

      this.$store.commit("addLists", itemList);
    },
  },
};
</script>
<style>
.item-1 {
  display: flex;
  justify-content: space-between;
  margin: 0 75px;
  align-items: center;

  .item-left-block {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 20px;

    .item-left-input {
      width: 25px;
      height: 25px;
    }
  }

  .item-right-block {
    display: flex;
    align-items: center;

    .count-input {
      font-size: 17px;
      width: 30px;
      height: 30px;
      padding: 0;
      border: none;
      outline: none;
    }

    .color-input {
      border: none;
      width: 25px;
      height: 25px;
      background-color: white;
    }
  }
}
</style>
