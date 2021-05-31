<template>
  <g-link
    :to="`/post/${node.slug}`"
    class="block bg-white border-b border-gray-300 rounded-md shadow-lg"
  >
    <g-image
      v-if="node.featuredMedia"
      :src="node.featuredMedia.downloaded"
      class="object-cover w-full h-200 rounded-t-md"
    ></g-image>
    <g-image
      v-else
      src="~/assets/images/no-img-found.jpg"
      class="object-cover w-full h-200 rounded-t-md"
    ></g-image>
    <div class="flex flex-col p-4">
      <h2
        class="mb-2 overflow-scroll leading-tight  whitespace-nowrap hide-scrollbar"
      >
        {{ node.title }}
      </h2>
      <p
        class="flex-1 mb-3 text-sm font-light leading-tight text-gray-500  line-clamp-3"
        v-html="node.excerpt"
      ></p>
    </div>
  </g-link>
</template>

<script>
export default {
  props: ["node"],
  computed: {
    categories() {
      // Exclude uncategorized
      return this.node.categories.filter(
        (item) => item.slug != "uncategorized"
      );
    },
  },
};
</script>

<style>
.hide-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent; /* make scrollbar transparent */
}
.h-200 {
  height: 200px;
}
.line-clamp-3 {
  --lines: 3;
  --line-height: 1.125rem;
  -webkit-line-clamp: var(--lines);
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  line-height: var(--line-height);
  height: calc(var(--line-height) * var(--lines));
}
</style>
