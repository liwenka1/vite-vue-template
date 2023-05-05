import { defineStore } from 'pinia'
import { useUserStore } from './user'

enum Sex {
  man = '男人',
  woman = '女人'
}

export const userSexStore = defineStore('user2', {
  state: () => {
    return {
      sex: Sex.man
    }
  },
  actions: {
    updateSex() {
      const userStore = useUserStore() // 引用其他store
      if (userStore.userInfo.name !== 'zhangsan') this.sex = Sex.woman
    }
  }
})
