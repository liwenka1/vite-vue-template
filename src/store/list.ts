import { defineStore } from 'pinia'

const getData = () => {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(Math.random() * 100)
    }, 200)
  })
}

export const useListStore = defineStore('list', {
  state: () => {
    return {
      list: [] as number[]
    }
  },
  actions: {
    async updateList() {
      try {
        const data = await getData()
        this.list.push(data)
      } catch {
        /* empty */
      }
    }
  }
})
