import cow from './cow'

var app = new Vue({
		  el: '#app',
		  data: {
		  	fala: '',
		  },
		  methods:{
		  	clickButton : function() {
		  		this.fala = cow.say('treinamento JS')
		  	}
		  }
		})
