<template>
  <div id="restaurant-forum">
    <router-view />
  </div>
</template>

<script>
// 表示要載入 Bootstrap 的 JS，因為在 node_module/bootstrap/package.json 的 main 中，已有指定預設路徑為 dist/js/bootstrap，所以可以簡寫，但 CSS 的部分反而就找不到了，所以要寫出完整路徑
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: 'Restaurant-forum'
}
</script>
