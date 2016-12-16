# timepiece-vue
![](https://img.shields.io/npm/v/timepiece-vue.svg)

> Datetime format plugin for Vue.js

## Installation
```
npm install timepiece-vue --save
```

## Usage
```
import Vue from 'Vue'
import Timepiece from 'timepiece-vue'

Vue.use(Timepiece)
```

## Example
```
new Vue({
  el: '#app',
  data: {
    now: this.$timepiece(new Date()).format('YYYY-MM-DD')
  }
})
```
