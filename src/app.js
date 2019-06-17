import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      list: [
        {detail: 'test1', done: false},
        {detail: 'test2', done: false}
      ]
    }
  })
})
