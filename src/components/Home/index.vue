<template>
  <el-container>
    <el-aside width="200px">
      <Aside />
    </el-aside>
    <el-container>
      <el-header style="padding: 0">
        <Header />
      </el-header>
      <el-main>
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Aside from './Aside.vue'
import Header from './Header.vue'
</script>
