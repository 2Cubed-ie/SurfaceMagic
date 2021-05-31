<template>
  <Layout>
    <article class="pb-20 -mb-12 content bg-light">
      <div
        v-if="$page.wordPressPost.featuredMedia"
        class="w-full -mb-24 bg-center bg-cover h-50vh"
        :style="{
          backgroundImage: `url(${$page.wordPressPost.featuredMedia.downloaded.src})`,
        }"
      ></div>
      <div class="container">
        <div class="z-10 w-full p-2 -mt-12 bg-white shadow-lg md:p-8 mx4">
          <h1 class="px-8 mx-auto my-12 text-4xl leading-none text-center">
            {{ $page.wordPressPost.title }}
          </h1>
          <div
            class="px-8 py-4 m-auto mt-8 font-light prose  post-content max-w-none"
            v-html="$page.wordPressPost.content"
          ></div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Post($id: ID!) {
  wordPressPost(id: $id) {
    title
    content
    featuredMedia {
      sourceUrl
      downloaded
      altText
      title
      mediaDetails {
        width
      }
    }
  }
  post(id: $id, idType: DATABASE_ID) {
    title(format: RENDERED)
    seo {
      metaDesc
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      // title: this.$page.post.seo.title,
      // meta: [{ name: "description", content: this.$page.post.seo.metaDesc }],
    };
  },
};
</script>

<style>
.h-50vh {
  height: 50vh;
}
</style>
