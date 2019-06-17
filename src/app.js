import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      list: [
        {detail: 'test1', done: false},
        {detail: 'test2', done: false}
      ],
      newDetail: '',
    },
    methods: {
      addToList: function(){
        this.list.push({detail: this.newDetail, done: false})
        this.newDetail = ''
      },
      itemDone: function(index){
        this.list[index].done = true
      }
    }
  })
})
