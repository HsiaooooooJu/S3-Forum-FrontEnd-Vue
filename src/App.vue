<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
// 表示要載入 Bootstrap 的 JS，因為在 node_module/bootstrap/package.json 的 main 中，已有指定預設路徑為 dist/js/bootstrap，所以可以簡寫，但 CSS 的部分反而就找不到了，所以要寫出完整路徑
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: 'App'
}
</script>
