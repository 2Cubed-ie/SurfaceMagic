<template>
  <VueSlickCarousel v-bind="slickOptions" class="relative pb-8">
    <div
      class="max-w-sm"
      v-for="({ logo }, index) in $static.wordPressPage.acf.ourClients"
      :key="index"
    >
      <GImage
        class="object-contain w-full p-8 pointer-events-none"
        :src="logo.downloaded"
        :alt="logo.altText"
        :title="logo.title"
      />
    </div>
    <template #prevArrow>
      <GImage
        class="cursor-pointer"
        width="28"
        height="24"
        src="/arrow-forward-outline.svg"
        loading="lazy"
        alt="Slider Navigation"
      />
    </template>
    <template #nextArrow>
      <GImage
        class="rotate-180 cursor-pointer"
        width="28"
        height="24"
        src="/arrow-forward-outline.svg"
        loading="lazy"
        alt="Slider Navigation"
      />
    </template>
  </VueSlickCarousel>
</template>

<static-query>
query {
  wordPressPage(id: "10"){
    title
    acf{
      ourClients{
        logo{
          downloaded(width: 120, height: 120, quality: 95, fit: inside)
          title
          altText
        }
      }
    }
  }
}
</static-query>


<script>
export default {
  data() {
    return {
      slickOptions: {
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        // variableWidth: true,
        swipeToSlide: true,
        // lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 4 }
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 2 }
          }
        ]
      }
    }
  },
}
</script>

<style lang="postcss">
.slick-track {
  display: flex;
  /* cursor: grab !important; */
  /* will-change: transform; */
  align-items: center;
  /* gap: 2rem; */
}

.slick-arrow {
  position: absolute;
  bottom: 0;
  right: 2rem;
  outline: none !important;
  width: 24px;
  height: 24px;
}
.slick-prev {
  right: 5rem;
  transform: rotate(180deg);
}
/* @media (min-width: 768px) { */
.slick-slide {
  will-change: transform, opacity;
  transition: transform 500ms, opacity 500ms;
}
[aria-hidden="true"] {
  opacity: 0;
  transform: scale(0.75);
}
/* } */
.slick-disabled {
  opacity: 0.5;
}
</style>