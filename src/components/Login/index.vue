<template>
  <div class="w-100 mx-auto mt-10%">
    <h1>登录</h1>
    <form>
      <el-input v-model="userInfo.username" placeholder="请输入用户名" />
      <el-input v-model="userInfo.password" show-password placeholder="请输入密码" />
    </form>
    <el-row justify="space-between">
      <el-col :span="6"><el-checkbox v-model="userInfo.checked" label="记住我" /></el-col>
      <el-col :span="4"> <el-button link>忘记密码?</el-button></el-col>
    </el-row>
    <el-row>
      <el-button class="w-100%" type="primary" @click="login">登录</el-button>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { User } from '@/modules/user'
import { useRouter } from 'vue-router'
import { getMock } from '@/apis/user'
const userInfo = reactive<User>({
  username: '',
  password: '',
  checked: false
})

const router = useRouter()
const login = () => {
  getMock()
  router.push({
    path: '/home'
  })
}
</script>

<style lang="scss" scoped></style>
