<template>
	<section>
		<v-row align-content no-gutters align="stretch">
			<v-col md="6" :order="order" :class="innerClass">
				<slot />
			</v-col>
			<v-col md="6">
				<v-sheet :height="height">
					<v-img :src="img" :height="height"></v-img>
				</v-sheet>
			</v-col>
		</v-row>
	</section>
</template>

<script>
export default {
	props: {
		img: {
			type: String,
			default: "/img/placeholder.jpg",
		},
		height: {
			type: Number,
			default: 300,
		},
		order: {
			type: Boolean,
			default: "first",
		},
		innerClass: {
			type: String,
			default: "pa-16 grey lighten-3",
		},
	},
};
</script>

<style lang="scss" scoped>
</style>