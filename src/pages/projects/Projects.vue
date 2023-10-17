<script>

import axios from 'axios';
import ProjectCard from "/src/components/ProjectCard.vue";

	export default {

		components : {

			ProjectCard,
    },

		data() {
			
			return {

				fetched_data : [],
				pagination_info : {},
			}

		},
		
		methods : {

			fetchData(url) {

				axios.get(url ?? 'http://127.0.0.1:8000/api/projects').then((response) => {
				this.fetched_data = response.data.results.data;
				delete response.data.results.data;
				this.pagination_info = response.data.results;
				});

			},

		},

		mounted() {
			this.fetchData()
		}

	}
</script>

<template>

	<div class="main">

		<div class="container">

			<h1 class="py-5 text-center text-danger">Questa è la parte pubblica della mia app</h1>

			<div class="row row-cols-2 g-4">

				<div class="col" v-for="project in fetched_data" :key="project.id">

					<ProjectCard :project="project"></ProjectCard>

				</div>

			</div>

			<div class="d-flex justify-content-center py-4">

				<a class="btn btn-link" v-for="linkToPage in pagination_info.links" @click="fetchData(linkToPage.url)" v-html="linkToPage.label"></a>
		
			</div>

		</div>

	</div>

</template>



<style scoped>

</style>