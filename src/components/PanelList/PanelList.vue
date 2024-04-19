<script >
import LeftPanel from './LeftPanel/LeftPanel.vue';
import RightPanel from './RightPanel/RightPanel.vue'

export default{
    data(){
        return{}
    },
    components:{
        LeftPanel,
        RightPanel
    }
}

</script>

<template>
    <div class="panel">
        <LeftPanel/>
        <RightPanel/>
    </div>
</template>

<style scoped>
.panel{
    display: flex;
    justify-content: space-around;
    padding: 20px;
    border: 1px solid black;
    gap: 80px;
}
</style>