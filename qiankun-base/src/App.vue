<template>
    <div id="app-base">
        <img alt="Vue logo" src="./assets/logo.png">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <el-menu default-active="/" :router="true" mode="horizontal">
            <el-menu-item index="/">base</el-menu-item>
            <el-menu-item index="/vue">vue应用</el-menu-item>
            <el-menu-item index="/react">react应用</el-menu-item>
        </el-menu>
        <router-view></router-view>
        <div id="vue"></div>
        <div id="react"></div>
    </div>
</template>
  

<script>

export default {
    name: 'App',
    components: {
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
