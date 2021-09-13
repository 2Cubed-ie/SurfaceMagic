<template>
	<Layout>
		<PageTitle :pageTitle="$static.wordPressPage.title" :style="{
        backgroundImage: this.$static.wordPressPage.featuredMedia
          ? `url(${this.$static.wordPressPage.featuredMedia.downloaded.src})`
          : ``,
      }" class="bg-cover" />

		<section class="container my-20">
			<div class="flex flex-col-reverse items-center justify-between gap-8 md:flex-nowrap md:flex-row">
				<div>
					<div class="flex items-center mb-8">
						<img width="64" height="64" src="../assets/images/icons/noun_Bathroom_2738007.svg" alt="Bathroom Repairs Icon" class="inline-block mr-8" loading="lazy" />
						<h2 class="text-3xl font-bold text-primary-dark">
							Bathroom <br />Repairs
						</h2>
					</div>
					<p class="max-w-lg text-gray-700" v-html="$static.wordPressPage.acf.bathroomRepairsInfo"></p>
				</div>
				<GImage class="w-full md:w-1/2" :src="$static.wordPressPage.acf.bathroomRepairsImage.downloaded" :alt="$static.wordPressPage.acf.bathroomRepairsImage.altText" />
			</div>
		</section>

		<section class="container my-20">
			<div class="flex flex-col items-center justify-between gap-8 md:flex-nowrap md:flex-row">
				<GImage class="w-full md:w-1/2" :src="$static.wordPressPage.acf.flooringRepairsImage.downloaded" :alt="$static.wordPressPage.acf.flooringRepairsImage.altText" />
				<div class="md:ml-auto">
					<div class="flex items-center mb-8">
						<img width="64" height="64" src="../assets/images/icons/noun_Floor_1667809.svg" alt="Flooring Repairs Icon" class="inline-block mr-8" loading="lazy" />
						<h2 class="text-3xl font-bold text-primary-dark">
							Flooring <br />Repairs
						</h2>
					</div>
					<p class="max-w-lg text-gray-700" v-html="$static.wordPressPage.acf.flooringRepairsInfo"></p>
				</div>
			</div>
		</section>

		<section class="container my-20">
			<div class="flex flex-col-reverse items-center justify-between gap-8 md:flex-nowrap md:flex-row">
				<div>
					<div class="flex items-center mb-8">
						<img width="64" height="64" src="../assets/images/icons/noun_window_1313735.svg" alt="Window Repairs Icon" class="inline-block mr-8" loading="lazy" />
						<h2 class="text-3xl font-bold text-primary-dark">
							Window <br />Repairs
						</h2>
					</div>
					<p class="max-w-lg text-gray-700" v-html="$static.wordPressPage.acf.windowRepairsInfo"></p>
				</div>
				<GImage class="w-full md:w-1/2" :src="$static.wordPressPage.acf.windowRepairsImage.downloaded" :alt="$static.wordPressPage.acf.windowRepairsImage.altText" />
			</div>
		</section>

		<section class="container my-20">
			<div class="flex flex-col items-center justify-between gap-8 md:flex-nowrap md:flex-row">
				<GImage class="w-full md:w-1/2" :src="
            $static.wordPressPage.acf.worktopAndKitchenRepairsImage.downloaded
          " :alt="$static.wordPressPage.acf.worktopAndKitchenRepairsImage.altText" />
				<div class="md:ml-auto">
					<div class="flex items-center mb-8">
						<img width="64" height="64" src="../assets/images/icons/noun_Kitchen_1294335.svg" alt="Worktop and Kithen Repairs Icon" class="inline-block mr-8" loading="lazy" />
						<h2 class="text-3xl font-bold text-primary-dark">
							Worktop & <br />Kitchen Repairs
						</h2>
					</div>
					<p class="max-w-lg text-gray-700" v-html="$static.wordPressPage.acf.worktopAndKitchenRepairsInfo"></p>
				</div>
			</div>
		</section>

		<section class="container my-20">
			<div class="flex flex-col-reverse items-center justify-between gap-8 md:flex-nowrap md:flex-row">
				<div>
					<div class="flex items-center mb-8">
						<img width="64" height="64" src="../assets/images/icons/noun_Door_3267183.svg" alt="Door Repairs Icon" class="inline-block mr-8" loading="lazy" />
						<h2 class="text-3xl font-bold text-primary-dark">
							Door <br />Repairs
						</h2>
					</div>
					<p class="max-w-lg text-gray-700" v-html="$static.wordPressPage.acf.doorRepairsInfo"></p>
				</div>
				<GImage class="w-full md:w-1/2" :src="$static.wordPressPage.acf.doorRepairsImage.downloaded" :alt="$static.wordPressPage.acf.doorRepairsImage.altText" />
			</div>
		</section>

		<section class="container my-20">
			<div class="flex flex-col items-center justify-between gap-8 md:flex-nowrap md:flex-row">
				<GImage class="w-full md:w-1/2" :src="
            $static.wordPressPage.acf.brickStoneAndMarbleRepairsImage.downloaded
          " :alt="
            $static.wordPressPage.acf.brickStoneAndMarbleRepairsImage.altText
          " />
				<div class="md:ml-auto">
					<div class="flex items-center mb-8">
						<img width="64" height="64" src="../assets/images/icons/noun_brick_1283239.svg" alt="Brick Icon" class="inline-block mr-8" loading="lazy" />
						<h2 class="text-3xl font-bold text-primary-dark">
							Brick, Stone & <br />Marble Repairs
						</h2>
					</div>
					<p class="max-w-lg text-gray-700" v-html="$static.wordPressPage.acf.brickStoneAndMarbleRepairsInfo"></p>
				</div>
			</div>
		</section>

		<section class="container my-20">
			<div class="flex flex-col-reverse items-center justify-between gap-8 md:flex-nowrap md:flex-row">
				<div>
					<div class="flex items-center mb-8">
						<img width="64" height="64" src="../assets/images/icons/spray.svg" alt="UPVC Spraying Icon" class="inline-block mr-8" loading="lazy" />
						<h2 class="text-3xl font-bold text-primary-dark">
							UPVC <br />Spraying
						</h2>
					</div>
					<p class="max-w-lg text-gray-700" v-html="$static.wordPressPage.acf.upvcSprayingInfo"></p>
				</div>
				<GImage class="w-full md:w-1/2" :src="$static.wordPressPage.acf.upvcSprayingImage.downloaded" :alt="$static.wordPressPage.acf.upvcSprayingImage.altText" />
			</div>
		</section>
	</Layout>
</template>

<static-query>
query {
  wordPressPage(id: "14"){
    yoastHead
    title
    featuredMedia{
      downloaded
    }
    acf{
        bathroomRepairsInfo
        bathroomRepairsImage{
          downloaded (width: 574, height: 420, quality: 95)
          altText
        }
        flooringRepairsInfo
        flooringRepairsImage{
          downloaded (width: 574, height: 420, quality: 95)
          altText
        }
        windowRepairsInfo
        windowRepairsImage{
          downloaded (width: 574, height: 420, quality: 95)
          altText
        }
        worktopAndKitchenRepairsInfo
        worktopAndKitchenRepairsImage{
          downloaded (width: 574, height: 420, quality: 95)
          altText
        }
        doorRepairsInfo
        doorRepairsImage{
          downloaded (width: 574, height: 420, quality: 95)
          altText
        }
        brickStoneAndMarbleRepairsInfo
        brickStoneAndMarbleRepairsImage{
          downloaded (width: 574, height: 420, quality: 95)
          altText
        }
        upvcSprayingInfo
        upvcSprayingImage{
          downloaded (width: 574, height: 420, quality: 95)
          altText
        }
      }
  }
}
</static-query>

<script>
export default {
	created() {
		this.fetchMetaDatas(this.$static.wordPressPage.yoastHead)
	}
}
</script>
