<template>
  <!-- <div> -->
    <el-container style="height:100%" class="container">
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <common-aside></common-aside>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  <!-- </div> -->
</template>
<script>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
export default {
  components: {
    CommonAside,
    CommonHeader
  }
}
</script>
<style lang="scss" scoped>
container{
  height: 100%;
  
}
.el-header{
    background-color: rgb(246, 246, 245);
  }
  .el-aside{
    background-color: #334054;
    height: 100%;
    margin-bottom: 0;
  }
</style>