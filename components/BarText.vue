<template>
	<v-sheet v-bind="$attrs" :class="wrapperClass">
		<v-row align-content="space-around">
			<v-col v-for="(item,index) in items" :key="index" :class="colClass">
				<div :class="titleClass">{{item.title}}</div>
				<div :class="bodyClass">{{item.body}}</div>
			</v-col>
		</v-row>
	</v-sheet>
</template>

<script>
export default {
	props: {
		items: {
			type: Array,
		},
		wrapperClass: {
			type: String,
			default: "pa-16",
		},
		titleClass: {
			type: String,
			default: "font-weight-black text-h5 mb-2",
		},
		bodyClass: {
			type: String,
			default: "grey--text text--darken4 text-body-1",
		},
		colClass: {
			type: String,
			default: "pa-12",
		},
	},
};
</script>

<style lang="scss" scoped>
</style>

