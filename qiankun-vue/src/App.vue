<template>
    <div id="base">
      <el-menu :router="true" mode="horizontal">
        <!--基座中可以放自己的路由-->
        <!-- <el-menu-item index="/vue">Home</el-menu-item> -->
        <!-- <el-menu-item index="/about">About</el-menu-item> -->
        <!--引用其他子应用-->
        <!-- <el-menu-item index="/vue">vue应用</el-menu-item>
        <el-menu-item index="/react">react应用</el-menu-item> -->
      </el-menu>
      <router-view></router-view>
      <!-- <div id="vue"></div>
      <div id="react"></div> -->
    </div>
  </template>
  

<script>

export default {
  name: 'Main-Index',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
