
<template>
    <div class="right_panel_block">
        <div class="block-lists">
        <List
          v-for="index in 5"
          :key="index"
          :number="index"
        />
      </div>
    </div>
</template>

<script >
import List from './List/List.vue';

export default{
    data(){
        return{

        }
    },
    components:{
        List
    }
}
</script>

<style scoped lang="scss">
.right_panel_block{
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