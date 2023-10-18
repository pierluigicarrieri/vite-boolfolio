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

	<!-- <div class="card h-100">
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
		<div class="card-footer">
			<router-link :to="{name:'projects.show', params: {slug: project.slug}}">Project Details</router-link>
		</div>
    </div> -->

	<div class="card h-100 text-center">
		<h5 class="card-title py-1">{{project.name}}</h5>
		<img :src="getImgUrl(project)" class="card-img-top" alt="">
		<p class="card-text py-1">{{project.description}}</p>
			<div class="list-group-item d-flex px-2">
				<div class="pe-2" v-for="technology in project.technologies" :key="technology.id" v-html="technology.icon"></div>
			</div>
		<div>
			<router-link class="py-1" :to="{name:'projects.show', params: {slug: project.slug}}">Details</router-link>
		</div>
    </div>

</template>

<style scoped>

.card {
	transform: translate3D(0, 1px,0) scale(1);
	transition: 1s;
}
.card:hover {
	transform: translate3D(0,-1px,0) scale(1.25);
	transition: 1s;
}

h5 {
	color: #000000;
    transition: 1s;
}

.card:hover h5 {
	color: #EE3B2E;
    transition: 1s;
}

p {
	color: #000000;
    transition: 1s;
}

.card:hover p {
	color: #EE3B2E;
    transition: 1s;
}

a {
	color: #000000;
    transition: 1s;
}

.card:hover a {
	color: #EE3B2E;
    transition: 1s;
}

</style>