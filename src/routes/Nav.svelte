<script>
	// Page variables
	import { page } from '$app/stores';

	// Images
	import logo from '$lib/assets/sca.png';
	import slc from '$lib/assets/slc.png';
	import banner from '$lib/assets/banner.png';

	// Animations + Transitions
	import { fly } from 'svelte/transition';
	let y = 0;

	// Mobile menu
	let menu = false;
</script>

<svelte:window bind:scrollY={y} />

{#if menu == false}
	<nav
		class={y > 25 ? 'scroll-nav' : undefined}
		in:fly={{ x: -200, duration: 100, delay: 100 }}
		out:fly={{ x: -200, duration: 100 }}
	>
		<a href="/">
			<img
				draggable="false"
				src={banner}
				class="banner"
				alt="Southern Canal Association"
				title="Southern Canal Association"
			/>
			<img src={logo} draggable="false" alt="S.C.A." />
		</a>
		<ul>
			<li class={$page.url.pathname === '/' ? 'current-page' : 'page'}>
				<a href="/">Home</a>
			</li>
			<li class={$page.url.pathname === '/team' ? 'current-page' : 'page'}>
				<a href="/team">Our team</a>
			</li>
			<li class={$page.url.pathname.split('/')[1] === 'projects' ? 'current-page' : 'page'}>
				<a href="/projects">Projects</a>
			</li>
			<li class={$page.url.pathname.split('/')[1] === 'news' ? 'current-page' : 'page'}>
				<a href="/news">News</a>
			</li>
		</ul>
		<div>
			<a href="https://discord.gg/southerncanal" title="Join our Discord server"
				><i class="fa-brands fa-discord" /></a
			>
			<a href="https://www.patreon.com/user?u=81591861" title="Support us on Patreon"
				><i class="fa-brands fa-patreon" /></a
			>
		</div>
		<button
			on:click={() => {
				menu = true;
			}}><span class="sr-only">Main menu</span><i class="fa-solid fa-bars" /></button
		>
	</nav>
{/if}
{#if menu == true}
	<aside
		role="dialog"
		aria-modal="true"
		in:fly={{ x: 200, duration: 100, delay: 100 }}
		out:fly={{ x: 200, duration: 100 }}
	>
		<hgroup>
			<a href="/">
				<img src={slc} alt="S.L.C." />
				<img src={logo} alt="S.C.A." />
			</a>
			<button
				on:click={() => {
					menu = false;
				}}><span class="sr-only">Exit</span><i class="fa-solid fa-x" /></button
			>
		</hgroup>
		<ul>
			<li class={$page.url.pathname === '/' ? 'current-page' : 'page'}>
				<a href="/" on:click={(event) => {event.preventDefault(); menu = false;}}>Home</a>
			</li>
			<li class={$page.url.pathname === '/team' ? 'current-page' : 'page'}>
				<a href="/team" on:click={(event) => {event.preventDefault(); menu = false;}}>Our team</a>
			</li>
			<li class={$page.url.pathname.split('/')[1] === 'projects' ? 'current-page' : 'page'}>
				<a href="/projects" on:click={(event) => {event.preventDefault(); menu = false;}}>Projects</a>
			</li>
			<li class={$page.url.pathname.split('/')[1] === 'news' ? 'current-page' : 'page'}>
				<a href="/news" on:click={(event) => {event.preventDefault(); menu = false;}}>News</a>
			</li>
		</ul>
		<hr />
		<ul>
			<li>
				<a href="https://discord.gg/southerncanal"
					><i class="fa-brands fa-discord w-6 text-center mr-1" />Join our Discord server</a
				>
			</li>
			<li>
				<a href="https://www.patreon.com/user?u=81591861"
					><i class="fa-brands fa-patreon w-6 text-center mr-1" />Support us on Patreon</a
				>
			</li>
		</ul>
	</aside>
{/if}
