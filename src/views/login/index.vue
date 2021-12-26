<template>
	<div><el-input v-model="input" placeholder="Please input" /></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      input: ref(''),
    }
  },
})
</script>

<style scoped lang="scss">
	// #login{
	// 	height: 100vh;
	// 	background-color: gainsboro;
	// }

</style>
