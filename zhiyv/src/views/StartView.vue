<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" style="background-color:cyan; padding: 10px; box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);">
        Aside
      </el-aside>
      <el-container>
        <el-header style="background-color: #409EFF; color: white; text-align: center; padding: 10px 0;">
          Header
        </el-header>
        <el-main style="background-color: #f9f9f9; padding: 20px; overflow-y: auto;">
          Main
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'StartView',
}
</script>

<style scoped>
.common-layout {
  font-family: Arial, sans-serif;
}
</style>
