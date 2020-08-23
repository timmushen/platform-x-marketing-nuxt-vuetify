<template>
	<v-hover v-slot:default="{ hover }">
		<v-btn
			v-bind="$attrs"
			:color="color"
			:depressed="depressed"
			:elevation="hover ? 3 : 0"
			class="font-weight-regular px-14 py-6 text-capitalize"
			@click="$emit('click')"
		>
			<slot></slot>
		</v-btn>
	</v-hover>
</template>

<script>
export default {
	props: {
		color: {
			default: "primary",
		},
		depressed: {
			default: true,
		},
	},
	data() {
		return {
			loader: null,
			loading: false,
		};
	},
};
</script>

<style lang="scss" scoped>
// .v-btn:hover:before {
// 	background-color: none;
// }
</style>
