<template>
	<Layout>
		<section class="bg-primary-dark relative hero">
			<GImage
				class="w-full overflow-hidden hero"
				:src="$static.wordPressPage.featuredMedia.downloaded"
				:title="$static.wordPressPage.featuredMedia.title"
				:alt="$static.wordPressPage.featuredMedia.altText"
				blur="10"
				fit="cover"
				:immediate="true"
			/>

			<div class="flex h-full w-full top-0 absolute items-center">
				<div class="container">
					<div class="text-white w-full max-w-2xl 0 lg:max-w-2xl">
						<h1 class="font-semibold mb-2">SURFACE MAGIC</h1>
						<h2
							class="font-bold max-w-lg mb-4 text-3xl md:text-4xl xl:text-5xl"
						>{{ $static.wordPressPage.acf.heroTitle }}</h2>
						<p class="max-w-lg mb-12">{{ $static.wordPressPage.acf.heroIntro }}</p>
						<g-link class="text-lg button" to="/contact">Contact Us</g-link>
					</div>
				</div>
			</div>
		</section>

		<!-- BLUE ICONS -->
		<IconBanner />

		<!-- ABOUT US  -->
		<section class="container my-12 grid gap-8 items-center md:grid-cols-2">
			<div>
				<h3 class="font-bold text-xl text-primary mb-2">ABOUT US</h3>
				<h4
					class="font-semibold max-w-md text-primary-dark mb-8 text-3xl"
				>Surface Magic Are Experts In Surface Repair</h4>
				<p class="max-w-md mb-8">
					Surface Magic are Ireland’s No.1 surface repair company. Our
					specialist technicians have the ability to repair many types of
					surfaces, carefully re-creating pattern, colour, shape and finish,
					helping clients save on time, cost of replacements and stops waste
					that will end up in landfill.
				</p>
				<g-link to="/about-us" class="button">Find Out More</g-link>
			</div>
			<GImage
				src="~/assets/images/about.jpg"
				width="558"
				height="454"
				alt="Window repairs"
				quality="95"
			/>
		</section>

		<!-- SERVICES -->
		<section class="bg-light text-center py-20 px-4">
			<h3 class="font-bold text-primary-dark mb-12 text-3xl">Our Services</h3>
			<ServiceCards />
			<g-link to="/services" class="mt-12 button">View All Services</g-link>
		</section>

		<!-- OUR CLIENTS  -->
		<section class="container my-24 text-center">
			<h3 class="font-bold text-primary-dark mb-12 text-3xl">Our Clients</h3>
			<ClientLogos />
		</section>

		<!-- GET IN TOUCH  -->
		<section class="container my-12 mb-32 grid gap-8 items-center md:grid-cols-2">
			<div>
				<h3 class="font-bold text-xl text-primary mb-2">GET IN TOUCH</h3>
				<h4
					class="font-semibold max-w-md text-primary-dark mb-8 text-3xl"
				>Book Your Professional Property Repairs Today</h4>
				<p class="max-w-md mb-8">
					Surface Magic are a trusted & professional company with a great
					reputation to uphold in the trades business. We are vat registered and
					insured. We have experts in all areas of home repairs.
				</p>
				<SmallNav class="flex font-semibold text-primary" />
			</div>
			<ContactForm />
		</section>
	</Layout>
</template>

<static-query>
query {
  wordPressPage(id: "10"){
    yoastHead
    title
    featuredMedia{
      downloaded (width: 1920, height: 645, quality: 95)
      title
      altText
    }
    acf{
      heroTitle
      heroIntro
      aboutImage{
        downloaded
        altText
      }
    }
  }
}
</static-query>

<script>
import SmallNav from '../components/SmallNav'

export default {
	created() {
		this.fetchMetaDatas(this.$static.wordPressPage.yoastHead)
	},
	components: {
		SmallNav,
		ServiceCards: () => import('../components/ServiceCards'),
		ContactForm: () => import('../components/ContactForm'),
		IconBanner: () => import('../components/IconBanner'),
		ClientLogos: () => import('../components/ClientLogos')
	}
}
</script>

<style lang="postcss">
.hero {
	height: 420px;
	object-fit: cover;
}
@media (min-width: 768px) {
	.hero {
		height: 540px;
	}
}
@media (min-width: 960px) {
	.hero {
		height: 600px;
	}
}

.fade-in-up {
	animation: fade-in-up 300ms ease 300ms forwards;
}
.fade-in-up {
	opacity: 0;
	transform: translateY(5px);
}
@keyframes fade-in-up {
	from {
		opacity: 0;
		transform: translateY(5px);
	}
	to {
		opacity: 1;
		transform: none;
	}
}
</style>
