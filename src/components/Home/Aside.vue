<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo h-100%"
    default-active="2"
    text-color="#fff"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>首页</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">分析台</el-menu-item>
        <el-menu-item index="1-2">工作台</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><lock /></el-icon>
      <template #title>权限管理</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><icon-menu /></el-icon>
      <template #title>图表</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><Clock /></el-icon>
      <template #title>页面</template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><Pointer /></el-icon>
      <template #title>组件</template>
    </el-menu-item>
    <el-menu-item index="6">
      <el-icon><document /></el-icon>
      <template #title>系统管理</template>
    </el-menu-item>
    <el-menu-item index="7">
      <el-icon><setting /></el-icon>
      <template #title>关于</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  return [key, keyPath]
}
const handleClose = (key: string, keyPath: string[]) => {
  return [key, keyPath]
}
</script>

<style></style>
