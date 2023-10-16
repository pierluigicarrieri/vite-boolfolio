<script>
	export default {

		props : {
			project: {
				type: Object,
                required: true,
			}
		},

		methods : {

			getImgUrl(project) {

				return `http://127.0.0.1:8000/storage/${project.image}`

			}
			
		}

	}
</script>

<template>

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

</template>

<style scoped>

</style>