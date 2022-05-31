<template>
  <div>test</div>
</template>

<script>
import { getMenu } from '@/api/data'
export default {
  mounted() {
    getMenu().then(res => {
      console.log(res)
    })
  }

}
</script>

<style>

</style>