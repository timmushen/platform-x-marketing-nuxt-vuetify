<template>
	<v-card :elevation="10" class="mx-auto" :max-width="width" dark v-bind="$attrs">
		<v-img class="white--text align-end" :height="height" :src="img" />
		<v-card-text class="pa-5">
			<div class="text-h5">{{name}}</div>
			<div class="overline mt-n2 mb-3">{{title}}</div>
			<v-sheet class="mb-4">{{description}}</v-sheet>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	props: {
		img: {
			type: String,
			default: "/img/placeholder.jpg",
		},
		elevation: {
			type: Number,
			default: 10,
		},
		width: {
			type: Number,
			default: 360,
		},
		height: {
			type: Number,
			default: 240,
		},
		defaultClass: {
			type: String,
			default: "rounded-xl mx-auto",
		},
		rounded: {
			type: Boolean,
			default: true,
		},
		name: {
			type: String,
			default: "Kevin McMannis",
		},
		title: {
			type: String,
			default: "VP of Stuff",
		},
		description: {
			type: String,
			default:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga molestias dolores pariatur deleniti fugit voluptas perspiciatis magni delectus laudantium veritatis quibusdam quas, aut omnis, corrupti quod iusto eaque temporibus.",
		},
	},
};
</script>

<style lang="scss" scoped>
</style>