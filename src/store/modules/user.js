import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    count: 1,
    name: "shenhnogchun",
    age: 18,
  }),
  actions: {
    increase() {
      this.count++;
    },
    async decrease() {
      function delay(timeout = 2000) {
        return new Promise((resolve) => {
          setTimeout(() => {
            // 位运算符
            resolve(~~(Math.random() * 100));
          }, timeout);
        });
      }
      this.increase();
      this.count -= await delay();
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "huijia_v1_user",
        storage: localStorage,
        paths: ["name"],
      },
    ],
  },
});
