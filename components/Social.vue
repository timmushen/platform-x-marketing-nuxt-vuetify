<template>
	<v-btn
		:href="url"
		target="_blank"
		:fab="fab"
		:dark="dark"
		:color="color"
		:small="small"
		v-bind="$attrs"
	>
		<v-icon :dark="dark" :small="small">mdi-{{platform}}</v-icon>
	</v-btn>
</template>

<script>
export default {
	props: {
		platform: {
			type: String,
			default: "facebook",
		},
		url: {
			type: String,
			default: "",
		},
		color: {
			type: String,
			default: "grey darken-3",
		},
		fab: {
			type: Boolean,
			default: true,
		},
		dark: {
			type: Boolean,
			default: true,
		},
		small: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>
</style>