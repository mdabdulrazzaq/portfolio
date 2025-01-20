<script lang="ts">
	export let src: string;
	export let alt: string;
	export let size = 50;
	export let radius = '20px';  // Default border radius
	export let classes = '';
  </script>
  
  <img
	class={`${classes} aspect-square`}
	{src}
	{alt}
	height={size}
	width={size}
	style={`border-radius: ${'6px'};`} 
  />
  