<template>
<div>
  <el-button class="write-btn" @click="writePage">写邮件</el-button>
  <el-row class="tac">
  <el-col :span="24">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#334054"
      text-color="#fff">
      <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
        <template slot="title">
          <i :class="'el-icon-'+item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subItem.path">
          <el-menu-item :index="subIndex">{{subItem.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</div>
</template>

<script>
  export default {
    data() {
      return {
        menu: [
          {
            path: '/',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: 'Home/home'
          },
          {
            path: '/user',
            name: 'user',
            label: '商品管理',
            icon: 'video-play',
            url: 'MallManage/MallManage'
          }
          // {
          //   label: '其它',
          //   icon: 'location',
          //   children: [
          //     {
          //       path: '/page1',
          //       name: 'page1',
          //       label: '页面1',
          //       icon: 'setting',
          //       url: 'Other/PageOne'
          //     },
          //     {
          //       path: '/page2',
          //       name: 'page2',
          //       label: '页面2',
          //       icon: 'setting',
          //       url: 'Other/PageTwo'
          //     },
          //   ]
          // }
        ]
      }
    },
    methods: {
      writePage(){
        console.log('u跳转到写邮件页面')
      },
      clickMenu(item){
        this.$router.push({
          name: item.name
        })
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed: {
      noChildren() {
        return this.menu.filter(item => !item.children)
      },
      hasChildren() {
        return this.menu.filter(item => item.children)
      }
    }
  }
</script>

<style lang="scss" scoped>
.write-btn{
  margin: 30px;
}
.el-menu-vertical-demo:not(.el-menu--collapse){
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height: 100%;
  border: none;
  li{
    text-align: left;
  }
  h3{
    color: #fff;
    text-align: left;
    line-height: 48px;
  }
}
</style>