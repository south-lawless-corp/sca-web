<script>
	// Props
	export let image;

	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	// Images
	import a from '$lib/assets/images/0.png';
	import b from '$lib/assets/images/1.png';
	import d from '$lib/assets/images/3.png';
	import f from '$lib/assets/images/5.png';
	import g from '$lib/assets/images/6.png';
	import h from '$lib/assets/images/7.png';
	import i from '$lib/assets/images/8.png';
	import j from '$lib/assets/images/9.png';
	import k from '$lib/assets/images/a.png';
	import l from '$lib/assets/images/b.png';

	
	/** @type {string} */
	let backgroundImage;

	if (image === '*') {
		const images = [a, b, d, f, g, h, i, j, k, l];
		let random = Math.floor(Math.random() * images.length);
		backgroundImage = images[random];
	} else {
		backgroundImage = image;
	}

	// Transitions and animations
	import { fade, fly } from 'svelte/transition';

	let scrollPls = false;
	let ready = false;
	onMount(() => {
		scrollPls = true;
		ready = true;
	});

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<section
	class="hero {$page.url.pathname === '/' ? 'hero-full' : 'hero-partial'}"
	style="background-image: url({backgroundImage})"
	in:fade={{ duration: 200 }}
>
	<div>
		{#if ready == true}
			<hgroup in:fly={{ y: 50 }}>
				<slot />
			</hgroup>
		{/if}
	</div>
	{#if $page.url.pathname === '/' && scrollPls == true}
		<button
			class="scroll-pls {y < 1 ? undefined : 'opacity-0'}"
			on:click={() => {
				window.location.href = '#about';
			}}
			in:fly={{ y: 100, delay: 2000 }}><i class="fa-solid fa-chevron-down" /></button
		>
	{/if}
</section>
