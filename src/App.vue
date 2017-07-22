<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
import 'bulma'
import 'animate.css'
import 'font-awesome/css/font-awesome.min.css'
export default {
  name: 'app'
}
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
  margin: 0;
}
</style>
