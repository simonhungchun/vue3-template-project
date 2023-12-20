<script setup>
import { ref, onMounted } from "vue";
const count = ref(0);
onMounted(() => {
  console.log(count.value);
});
</script>
<template>
  <div class="wrapper"></div>
</template>
<style scoped lang="less">
.wrapper {
}
</style>
