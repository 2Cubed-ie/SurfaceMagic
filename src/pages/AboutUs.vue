<template>
  <Layout>
    <PageTitle
      :pageTitle="$static.wordPressPage.title"
      :style="{
        backgroundImage: this.$static.wordPressPage.featuredMedia
          ? `url(${this.$static.wordPressPage.featuredMedia.downloaded.src})`
          : ``,
      }"
      class="bg-cover"
    />

    <!-- ABOUT US  -->
    <section class="container grid items-center gap-8 my-12 md:grid-cols-2">
      <div>
        <h2 class="mb-2 text-xl font-bold text-primary">ABOUT US</h2>
        <h3 class="max-w-md mb-8 text-3xl font-semibold text-primary-dark">
          {{ $static.wordPressPage.acf.subTitle }}
        </h3>
        <p class="max-w-md mb-8" v-html="$static.wordPressPage.content"></p>
        <p class="text-primary">
          <g-link to="/contact" class="underline">Get in touch today</g-link>,
          you won’t know if you don’t ask.
        </p>
      </div>
      <GImage
        :src="$static.wordPressPage.acf.mainImage.downloaded"
        :alt="$static.wordPressPage.acf.mainImage.altText"
        :title="$static.wordPressPage.acf.mainImage.altText"
      />
    </section>
  </Layout>
</template>

<static-query>
query {
  wordPressPage(id: "12"){
    yoastHead
    title
    content
    featuredMedia{
      downloaded
    }
    acf{
      subTitle
      mainImage{
        downloaded (width: 580, height: 637, quality: 95)
      	altText
      }
      teamImage{
        downloaded (width: 1140, height: 445, quality: 95)
      	altText
      }
    }
  }
}
</static-query>

<script>
export default {
  created() {
    this.fetchMetaDatas(this.$static.wordPressPage.yoastHead);
  },
};
</script>
