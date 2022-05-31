<template>
  <div class="top">
    <h3>Mail-System</h3>
    <div class="right">
      <el-dropdown>
        <span class="el-dropdown-link">
          用户<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin: 30px;
  // margin-top: 2px;
  .right{
    // margin-top: 17px;
  }
}
</style>