<template><span v-html="html"></span></template>

<script>
export default {
  props: {
    v: {
      type: String,
      default: '',
    },
  },
  computed: {
    html() {
      const text = this.v || (this.$slots.default ? this.$slots.default[0].text : '');
      if (text !== '' && !text) throw new Error('Only text is allowed in T tag.');
      const re = /\[(.*?)\]\((.*?)\)/g;
      return text.replace(re, '<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>');
    },
  },
};
</script>