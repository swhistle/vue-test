import Vue from 'vue'
import VueRouter from 'vue-router'

var About = require('./components/About.vue')
var Projects = require('./components/Projects.vue')
var Contacts = require('./components/Contacts.vue')
var Blog = require('./components/Blog.vue')
var Post = require('./components/Post.vue')

Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
		{ path: '/about', component: About },
		{ path: '/projects', component: Projects },
		{ path: '/contacts', component: Contacts },
		{ path: '/blog', component: Blog },
		{ path: '/post/:id', name: 'post', component: Post }
	]
})

new Vue({
  el: '#app',
  router: router
})