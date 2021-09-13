<template>
	<Layout>
		<PageTitle :pageTitle="$page.wordPressPage.title" :style="{
        backgroundImage: this.$page.wordPressPage.featuredMedia
          ? `url(${this.$page.wordPressPage.featuredMedia.downloaded.src})`
          : ``,
      }" class="bg-cover" />
		<div class="px-4 pt-10 mx-auto my-8 max-w-7xl md:p-8">
			<PostGrid :posts="$page.allWordPressPost.edges" />
			<Pager class="text-center pagination" :info="$page.allWordPressPost.pageInfo" />
		</div>
	</Layout>
</template>

<page-query>
query($page: Int) {
  allWordPressPost(perPage: 12, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        path
        excerpt
        slug
        featuredMedia {
          sourceUrl
          downloaded
        }
      }
    }
  }
  wordPressPage(id: "20"){
    title
    yoastHead
    featuredMedia{
      downloaded
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import PostGrid from '../components/PostGrid'
export default {
	components: {
		PostGrid,
		Pager
	}
}
</script>
