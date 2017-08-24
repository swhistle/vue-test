<template>
  <section class="blog">
	  <h2>Blog</h2>
  	<div v-for="(post, index) in posts" class="post">
  		<h3>{{ post.title }}</h3>
  		<router-link :to="{ name: 'post', params: { id: index } }" class="link-read-more">read more</router-link>
  	</div>        
  </section>
</template>

<script>
	var posts = require('../posts')

	module.exports = {
		data: function() {
			return {
				posts: posts
			}
		}
	}
</script>