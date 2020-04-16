<style scoped>
.picker-toolbar {
  border-bottom: 1px solid #eaeaea;
}
</style>
<template>
  <div>
    <div @click="innerVisible = true">
      <slot />
    </div>
    <mt-popup
    style="width: 100%"
    position="bottom"
    v-model="innerVisible">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="cancel">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="confirm">确定</span>
      </div>
      <mt-picker
      :valueKey="rangeKey"
      :slots="innerRange"
      @change="onValuesChange"></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
export default {
  props: {
    range: {
      type: Array,
      default: () => ['没有数据']
    },
    value: {
      type: Array,
      default: () => []
    },
    rangeKey: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      // multiSelector, selector, date, area
      default: 'selector',
      validator (val) {
        return ['multiSelector', 'selector', 'date', 'area'].includes(val)
      }
    }
  },
  data () {
    return {
      innerVisible: false,
      innerValue: this.value || []
    }
  },
  computed: {
    innerRange () {
      if (this.mode === 'multiSelector') {
        return this.range.map(item => {
          return {
            flex: 1,
            values: this.item,
            className: 'slot1',
            textAlign: 'center'
          }
        })
      } else {
        return [
          {
            flex: 1,
            values: this.range,
            className: 'slot1',
            textAlign: 'center'
          }
        ]
      }
    }
  },
  mounted () {
  },
  methods: {
    onValuesChange (component, index) {
      this.innerValue = index
      this.$emit('columnchange', index)
    },
    close () {
      this.innerVisible = false
      this.$emit('close')
    },
    confirm () {
      this.$emit('change', this.innerValue)
      this.close()
    },
    cancel () {
      this.close()
    }
  },
  watched: {
    innerVisible (val) {
      this.$emit('visibleChange', val)
    }
  }
}
</script>
