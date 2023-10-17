<script>

import axios from 'axios';

	export default {

		data() {
			return {
				project: {},
			}
		},

		methods : {

			fetchData() {

				axios.get('http://127.0.0.1:8000/api/projects/' + this.$route.params.slug).then((response) => {
				this.project = response.data;
				});

			},

			getImgUrl(project) {

				return `http://127.0.0.1:8000/storage/${project.image}`

			},

		},	
			
		mounted() {
			this.fetchData()
		}
	
	}
		
</script>

<template>

	<main>

		<div class="container">

			<h1 class="py-5 text-center text-danger">This is the App's Single Project Page</h1>

			<div class="card h-100">
				<img :src="getImgUrl(project)" class="card-img-top" alt="">
				<div class="card-body">
					<h5 class="card-title">{{project.name}}</h5>
					<p class="card-text">{{project.description}}</p>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">{{project.type.name}}</li>
					<li class="list-group-item">{{project.publication_date}}</li>
					<li class="list-group-item d-flex">
						<div class="pe-2" v-for="technology in project.technologies" :key="technology.id" v-html="technology.icon"></div>
					</li>
					<li class="list-group-item">
						<a :href="project.git_link">{{project.git_link}}</a>
					</li>
				</ul>
			</div>

		</div>

	</main>

</template>

<style scoped>

</style>