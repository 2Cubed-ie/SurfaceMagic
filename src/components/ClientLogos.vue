<template>
  <div
    class="flex flex-wrap items-center gap-4  justify-evenly sm:flex-nowrap md:justify-between"
  >
    <div
      class="max-w-sm mb-4"
      v-for="({ logo }, index) in $static.wordPressPage.acf.ourClients"
      :key="index"
    >
      <GImage
        :src="logo.downloaded"
        :alt="logo.altText"
        :title="logo.title"
      />
    </div>
  </div>
</template>

<static-query>
query {
  wordPressPage(id: "10"){
    title
    acf{
      ourClients{
        logo{
          downloaded(width: 140, height: 140, quality: 95)
          title
          altText
        }
      }
    }
  }
}
</static-query>
