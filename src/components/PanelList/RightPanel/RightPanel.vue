<template>
  <div class="right_panel_block">
    <div class="block-lists">
      <List
        v-for="index in 5"
        :key="index"
        :number="index"
        :list="giveList(index)"
      />
    </div>
  </div>
</template>

<script>
import List from "./List/List.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      localLists: {}
    };
  },
  components: {
    List,
  },
  methods: {
    giveList(index) {
      const listKey = `list${index}`;
      
      if (this.localLists && this.localLists[listKey]) {
        
        return this.localLists[listKey]
        
      } else {
        return null;
      }
      
    },
  },
  computed: {
    ...mapState(["lists"]),
  },
  mounted() {
    
  },
  watch:{
    lists: {
      handler(newLists){
        this.localLists = {...newLists}
        // console.log("localLists видит изменения", this.localLists.list1);
        
      },
      deep: true
    }
  }
};
</script>

<style scoped lang="scss">

.right_panel_block {
  border: 1px solid black;
  padding: 30px 20px;
  width: 500px;
}

.block-lists {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
