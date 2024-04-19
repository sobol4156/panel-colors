<template>
  <div class="left-panel-block">
    <div class="left-block-lists">
      <div class="block-lists">
        <List
          v-for="index in 5"
          :key="index"
          
          :count="index"
          :items="randomItem(5)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List/List.vue";

export default {
  data() {
    return{}
  },
  methods: {
    randomItem(count) {
      if(count){
        return count
      }
      return Math.floor(Math.random() * (10 - 4 + 1)) + 4;
    },
  },
  components: {
    List,
  },

};
</script>

<style lang="scss" scoped>
.left-panel-block {
  border: 1px solid black;
  padding: 30px 10px;
  width: 500px;

  .block-lists {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
