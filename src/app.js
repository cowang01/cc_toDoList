import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      list: [
        {priority: 'High', due: 'Thursday', detail: 'Provide feedback', assigned: 'Steve', done: false},
        {priority: 'Low', due: '20/07/19', detail: 'Complete homework', assigned: 'Graham', done: false}
      ],
      newPriority: '',
      newDue: '',
      newDetail: '',
      newAssigned: ''
    },
    methods: {
      addToList: function(){
        this.list.push({priority: this.newPriority, due: this.newDue, detail: this.newDetail, assigned: this.newAssigned, done: false})
        this.newPriority = ''
        this.newDue = ''
        this.newDetail = ''
        this.newAssigned = ''
      },
      itemDone: function(index){
        this.list[index].done = true
      }
    }
  })
})
