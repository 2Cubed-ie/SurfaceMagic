<template>
  <div
    class="flex flex-wrap items-center gap-4 justify-evenly md:justify-between"
  >
    <div
      class="max-w-sm mb-4"
      v-for="({ logo }, index) in $static.wordPressPage.acf.ourClients"
      :key="index"
    >
      <GImage :src="logo.downloaded" :alt="logo.altText" :title="logo.title" />
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
          downloaded(width: 120, height: 120, quality: 95, fit: inside)
          title
          altText
        }
      }
    }
  }
}
</static-query>
