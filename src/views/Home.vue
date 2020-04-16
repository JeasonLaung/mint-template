<template>
  <div>
    <PtPicker
    @change="pickerValue = $event[0].name"
    :range="slots"
    range-key="name"
    >
      <mt-cell
      :value="pickerValue"
      title="标题文字"></mt-cell>
    </PtPicker>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      pickerValue: '值',
      slots: [
        {
          id: 1,
          name: '尼玛'
        },
        {
          id: 2,
          name: '尼222玛'
        }
      ]
    }
  },
  methods: {
  },
  mounted () {
    this.$Modal({
      title: '测试',
      message: 'Are you sure?'
    })
    this.$Toast({
      message: '测试'
    })
    this.$axios({
      url: '/'
    }).then(data => {
      console.log(data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
