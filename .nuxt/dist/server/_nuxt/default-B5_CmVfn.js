import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { ref, useSSRContext, mergeProps } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _sfc_main$3 = {
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const rubyVisible = ref(true);
    const menuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(_attrs)} data-v-7638442e><div class="header-content" data-v-7638442e><div class="title" data-v-7638442e><ruby data-v-7638442e>東大 <rt data-v-7638442e>とうだい</rt></ruby> <ruby data-v-7638442e>CAST <rt data-v-7638442e>きゃすと</rt></ruby> <ruby data-v-7638442e>五月祭 <rt data-v-7638442e>ごがつさい</rt></ruby>2025</div><div class="toggle-buttons" data-v-7638442e><div class="label" data-v-7638442e>ふりがな</div><div class="${ssrRenderClass([{ active: rubyVisible.value }, "toggle-button"])}" data-v-7638442e>あり</div><div class="${ssrRenderClass([{ active: !rubyVisible.value }, "toggle-button"])}" data-v-7638442e>なし</div></div><div class="menu-icon" data-v-7638442e><span data-v-7638442e></span><span data-v-7638442e></span><span data-v-7638442e></span></div></div><nav class="${ssrRenderClass({ open: menuOpen.value })}" data-v-7638442e><ul data-v-7638442e><li data-v-7638442e><a href="/" data-v-7638442e>ホーム</a></li><li data-v-7638442e><a href="/museum" data-v-7638442e>ミュージアム</a></li><li data-v-7638442e><a href="/show" data-v-7638442e>ショー</a></li><li data-v-7638442e><a href="/atelier" data-v-7638442e>アトリエ</a></li><li data-v-7638442e><a href="/time" data-v-7638442e>タイムスケジュール</a></li></ul></nav><div class="nav-links" data-v-7638442e><span data-v-7638442e><a href="/" data-v-7638442e>ホーム</a></span><span data-v-7638442e><a href="/museum" data-v-7638442e>ミュージアム</a></span><span data-v-7638442e><a href="/show" data-v-7638442e>ショー</a></span><span data-v-7638442e><a href="/atelier" data-v-7638442e>アトリエ</a></span><span data-v-7638442e><a href="/time" data-v-7638442e>タイムスケジュール</a></span></div></header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7638442e"]]);
const _sfc_main$2 = {
  __name: "kyosan",
  __ssrInlineRender: true,
  setup(__props) {
    const sponsors = ref([
      {
        name: "企業A",
        image: "path/to/imageA.jpg",
        link: "https://www.companyA.com"
      },
      {
        name: "企業B",
        image: "path/to/imageB.jpg",
        link: "https://www.companyB.com"
      },
      {
        name: "企業C",
        image: "path/to/imageC.jpg",
        link: "https://www.companyC.com"
      }
      // 他の企業データもここに追加
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sponsors" }, _attrs))} data-v-70bc74b7><!--[-->`);
      ssrRenderList(sponsors.value, (sponsor) => {
        _push(`<div class="sponsor" data-v-70bc74b7><a${ssrRenderAttr("href", sponsor.link)} target="_blank" rel="noopener noreferrer" data-v-70bc74b7><img${ssrRenderAttr("src", sponsor.image)}${ssrRenderAttr("alt", sponsor.name)} class="sponsor-image" data-v-70bc74b7><p class="sponsor-name" data-v-70bc74b7>${ssrInterpolate(sponsor.name)}</p></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/kyosan.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-70bc74b7"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="container"><p>© 2025 東大CAST五月祭</p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0,
    Kyosan: __nuxt_component_1,
    // kyosan コンポーネントを登録
    Footer: __nuxt_component_2
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_Kyosan = __nuxt_component_1;
  const _component_Footer = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Kyosan, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-B5_CmVfn.js.map
