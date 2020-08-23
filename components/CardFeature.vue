<template>
	<v-card :elevation="10" class="mx-auto" :max-width="width" v-bind="$attrs">
		<v-img class="align-end" :height="height" :src="img" />
		<v-card-text class="pa-6">
			<slot />
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
	},
};
</script>

<style lang="scss" scoped>
</style>