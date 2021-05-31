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

    <section class="container my-12">
      <div
        class="prose prose-blue max-w-none"
        v-html="$static.wordPressPage.content"
      ></div>
    </section>
  </Layout>
</template>

<static-query>
query {
  wordPressPage(id: "3"){
    title
    content
    yoastHead
    featuredMedia{
      downloaded
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
