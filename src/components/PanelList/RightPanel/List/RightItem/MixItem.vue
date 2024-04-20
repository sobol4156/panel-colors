<script>
export default {
    props: ['item'],
    methods:{
        checkData(){
            console.log(this.item)
        }
    }
}
</script>

<template>
    <div v-if="item" class="block-color" v-for="(block, index) in item[1]" :style="{backgroundColor: item[2]}">
        123
    </div>
    <!-- <button @click="checkData"></button> -->
</template>

<style lang="scss" scoped>
.block-color {
  display: inline-block;
  background-color: brown;
  width: 12px;
  height: 12px;
  margin: 3px;
  font-size: 0px;
}
</style>