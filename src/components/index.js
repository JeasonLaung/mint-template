import Vue from 'vue'
// import './Modal'
import PtPicker from './Picker'

const components = {
  PtPicker
}

Object.keys(components).map((key) => {
  Vue.component(key, components[key])
})
