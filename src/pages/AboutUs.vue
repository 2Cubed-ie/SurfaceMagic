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

    <!-- MEET THE TEAM  -->
    <section class="py-20 my-24 bg-light">
      <div class="container text-center">
        <h3 class="mb-12 text-3xl font-semibold text-primary-dark">
          Meet the Team
        </h3>
        <GImage
          :src="$static.wordPressPage.acf.teamImage.downloaded"
          :alt="$static.wordPressPage.acf.teamImage.altText"
          :title="$static.wordPressPage.acf.teamImage.altText"
          class="w-full"
        />
      </div>
    </section>

    <!-- ABOUT US  -->
    <section class="container grid items-center gap-8 my-12 md:grid-cols-2">
      <g-image src="~/assets/images/sectors.jpg"></g-image>
      <div class="md:pl-12">
        <h2 class="mb-2 text-xl font-bold text-primary">SECTORS</h2>
        <h3 class="max-w-md mb-8 text-3xl font-semibold text-primary-dark">
          Surface Magic Operate Across Multiple Sectors
        </h3>
        <ul class="pl-6 mb-8 text-gray-700 list-disc">
          <li>
            <strong>Construction</strong> – Residential, Commercial &
            Pharmacutica
          </li>
          <li><strong>Retail</strong> – Shopping Centres, High End Stores</li>
          <li>
            <strong>Hospitality</strong> – Shopping Centres, High End Stores
          </li>
          <li>
            <strong>Healthcare</strong> – Hospitals, Care Homes & Rehab Centres
          </li>
          <li><strong>Education</strong> – Schools, Colleges</li>
          <li><strong>Facilities Management</strong> – Offices, Apartments</li>
          <li><strong>Insurance</strong></li>
          <li><strong>Caravan & Motorhome</strong> – Holiday Parks</li>
          <li><strong>Domestic</strong> – Houses, Apartments</li>
        </ul>
        <g-link to="/services" class="button">View All Services</g-link>
      </div>
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
      mainImage{
        downloaded (width: 580, height: 637, quality: 95)
      	altText
      }
      teamImage{
        downloaded (width: 1140, height: 445, quality: 95)
      	altText
      }
      subTitle
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
