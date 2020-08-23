<template>
	<section>
		<v-parallax :src="background" class="pa-0" v-if="background" :height="height">
			<v-sheet :class="outerClass" :color="color" v-bind="$attrs">
				<div :class="innerClass">
					<slot />
				</div>
			</v-sheet>
		</v-parallax>
		<v-sheet :class="outerClass" :color="color" :height="height" v-bind="$attrs" v-else>
			<div :class="innerClass">
				<slot />
			</div>
		</v-sheet>
	</section>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: "transparent",
		},
		outerClass: {
			type: String,
			default: "py-16",
		},
		height: {
			default: null,
		},
		innerClass: {
			type: String,
			default: "py-16",
		},
		background: {
			type: String,
			default: "",
		},
	},
};
</script>

<style lang="scss" scoped>
</style>