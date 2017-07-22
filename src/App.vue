<template>
  <div id="app" class="container">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </router-link>
        <div class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu">
        <!-- navbar start, navbar end -->
        <div class="navbar-end">
          <router-link to="/signin" class="navbar-item">登录</router-link>
          <router-link to="/signup" class="navbar-item">注册</router-link>
        </div>
      </div>
    </nav>
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

</style>
