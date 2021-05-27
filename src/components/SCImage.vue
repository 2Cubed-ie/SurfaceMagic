<template>
  <img
    :alt="alt"
    :src="img.src"
    :width="img.size.width"
    :height="img.size.height"
    :srcset="img.srcset"
    :sizes="img.sizes"
    :class="scClass"
    loading="lazy"
  />
</template>

<script>
export default {
  props: ["img", "alt", "scClass"],
};
</script>
