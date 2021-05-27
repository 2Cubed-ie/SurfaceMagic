<template>
  <img
    :alt="alt"
    :src="img.src"
    :width="img.size.width"
    :height="img.size.height"
    :srcset="img.srcset"
    :sizes="img.sizes"
    class="g-image g-image--lazy g-image--loading"
  />
</template>

<script>
export default {
  props: ["img", "alt"],
};
</script>
