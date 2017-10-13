<template>
  <div>
    <h1>hello World</h1>
    <input type="text" ref="testInput" @input="updateDate()" placeholder="type here..">
  </div>
</template>
<script>
export default {
    data () {
      return {

      }
    },
   
    methods: {
      updateDate(val) {
        this.$emit('updateData', this.$refs.testInput.value)
      }
    }
}
</script>

