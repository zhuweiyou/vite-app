<template>
  <h1 class="hello">Hello, World!</h1>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Hello, World!')
})
</script>

<style lang="less" scoped>
.hello {
  color: #fff;
  background: url(./hello.png) no-repeat;
}
</style>
