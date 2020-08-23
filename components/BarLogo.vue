<template>
	<v-sheet v-bind="$attrs" :class="defaultClass">
		<v-row align-content="space-around">
			<v-col v-for="(logo,index) in logos" :key="index" class="py-8">
				<v-img :src="logo" :height="logoHeight" contain />
			</v-col>
		</v-row>
	</v-sheet>
</template>

<script>
export default {
	props: {
		logos: {
			type: Array,
		},
		defaultClass: {
			type: String,
			default: "pa-16",
		},
		logoHeight: {
			type: Number,
			default: 50,
		},
	},
};
</script>

<style lang="scss" scoped>
</style>