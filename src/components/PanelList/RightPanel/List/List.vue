<template>
  <div @click="isCheckedList" class="list-block">
    <div class="list-title-button">
      <span>List {{ number }}</span>
      <button v-if="openList" @click.stop="mixColorSquare">{{ textButton }}</button>
    </div>

    <div v-if="openList" class="list-colors">
    <div class="color-column" v-for="(column, index) in 3">
      <div class="block-color" v-for="(block, index) in 40"></div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["number"],
  data() {
    return {
      openList: false,
      textButton: 'Перемешать'
    };
  },
  computed: {
    mixButton(){
      return this.$store.state.mixButton
    }
  },
  methods: {
    isCheckedList() {
      this.openList = !this.openList;
    },
    mixColorSquare() {
      if (!this.mixButton) {
        this.textButton = "Сортировать";
        this.$store.commit('toggleMixButton')
      } else {
        this.textButton = "Перемешать";
        this.$store.commit('toggleMixButton')
      }
    },
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
.block-color{
  display: inline-block;
  background-color: brown;
  width: 12px;
  height: 12px;
  margin: 3px;
  font-size: 0px;
}
</style>
