<template>
  <div @click="isCheckedList" class="list-block">
    <div class="list-title-button">
      <span>List {{ number }}</span>
      <button v-if="openList" @click.stop="mixColorSquare">
        {{ textButton }}
      </button>
    </div>

    <div v-if="openList" class="list-colors">
      <div
        class="color-column"
        v-for="(column, index) in listKeys"
        :key="column">
      
        <Item v-if="listKeys && !mixButton"    
            :item="Object.values(list[column])"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./RightItem/Item.vue";
export default {
  props: ["number", "list"],
  data() {
    return {
      mixButton: false,
      openList: false,
      textButton: "Перемешать",
    };
  },
  computed: {
    listKeys(){
      return this.list? Object.keys(this.list) : []
    }
  },
  methods: {
    isCheckedList() {
      this.openList = !this.openList;
      
    },
    mixColorSquare() {
      if (!this.mixButton) {
        this.textButton = "Сортировать";
        this.mixButton = !this.mixButton
      } else {
        this.textButton = "Перемешать";
        this.mixButton = !this.mixButton
      }
    },
  },
  components: {
    Item,
  },
};
</script>

<style lang="scss">
.list-block {
  border: 1px solid black;
  padding-left: 10px;
  font-size: 25px;
  cursor: pointer;

  .list-title-button {
    display: flex;
    justify-content: space-between;

    button {
      background-color: rgb(68, 175, 224);
      color: white;
      border: none;
      border-radius: 10px;
      margin: 5px;
      cursor: pointer;
      padding: 8px;
    }
  }

  .list-colors {
    font-size: 0px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>
