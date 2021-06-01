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

    <section class="container my-20">
      <h3 class="mb-2 text-xl font-bold text-primary">GALLERY</h3>
      <h4 class="max-w-md mb-8 text-3xl font-semibold text-primary-dark">
        A Collection Of Images From Recent Projects
      </h4>
      <p
        class="max-w-4xl mb-8 text-gray-700"
        v-html="$static.wordPressPage.content"
      ></p>

      <ul class="grid gap-8 my-20 grid-col-2 md:grid-cols-3 lg:grid-cols-4">
        <li
          v-for="(item, index) in $static.wordPressPage.acf.gallery"
          :key="item.id"
        >
          <GImage @click="openGallery(index)" :src="item.downloaded" />
        </li>
      </ul>
    </section>
    <ClientOnly>
      <LightBox
        ref="lightbox"
        :media="media"
        :showLightBox="false"
        :showThumbs="false"
        :showCaption="true"
      ></LightBox>
    </ClientOnly>
  </Layout>
</template>

<static-query>
query {
  wordPressPage(id: "18"){
    yoastHead
    title
    content
    featuredMedia{
      downloaded
    }
    acf{
      gallery{
        caption
        downloaded
      }
    }
  }
}
</static-query>

<script>
require("vue-image-lightbox/dist/vue-image-lightbox.min.css");

export default {
  components: {
    LightBox: () => import("vue-image-lightbox"),
  },
  created() {
    this.fetchMetaDatas(this.$static.wordPressPage.yoastHead);
  },
  computed: {
    media() {
      return this.$static.wordPressPage.acf.gallery.map((item) => {
        return {
          src: item.downloaded.src,
          caption: item.caption,
        };
      });
    },
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    },
  },
};
</script>

<style>
.vue-lb-content {
  padding: 40px 60px !important;
  background: #fff !important;
}
.vue-lb-button-close svg {
  fill: #111 !important;
}
.vue-lb-header {
  margin-top: -20px;
}
</style>
