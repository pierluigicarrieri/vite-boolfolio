<script>

import axios from 'axios';
import ProjectComponent from "/src/components/ProjectComponent.vue";

	export default {

		components : {

			ProjectComponent,
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

			<div class="row row-cols-3 g-5 my-5 py-5">

				<div class="col" v-for="project in fetched_data" :key="project.id">

					<ProjectComponent :project="project"></ProjectComponent>

				</div>

			</div>

		</div>

		<div class="btn-container d-flex justify-content-center py-4">

			<a class="btn btn-outline-danger mx-2" v-for="linkToPage in pagination_info.links" @click="fetchData(linkToPage.url)" v-html="linkToPage.label"></a>

		</div>

	</div>

</template>

<style scoped>

.btn-container {
	background-color: rgba(0, 0, 0, 0);
	transition: 1s;
}
.btn-container:hover {
	background-color: rgba(0, 0, 0, 0.5);
	transition: 1s;
}

</style>