import { _ as __nuxt_component_0$1 } from "./nuxt-link-BJjwR1_u.js";
import { ref, withCtx, createTextVNode, useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
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
const _sfc_main$3 = {
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const rubyVisible = ref(true);
    const menuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(_attrs)} data-v-0d6ed677><div class="header-content" data-v-0d6ed677><div class="title" data-v-0d6ed677><ruby data-v-0d6ed677>東大 <rt data-v-0d6ed677>とうだい</rt></ruby> <ruby data-v-0d6ed677>CAST <rt data-v-0d6ed677>きゃすと</rt></ruby> <ruby data-v-0d6ed677>五月祭 <rt data-v-0d6ed677>ごがつさい</rt></ruby>2025</div><div class="toggle-buttons" data-v-0d6ed677><div class="label" data-v-0d6ed677>ふりがな</div><div class="${ssrRenderClass([{ active: rubyVisible.value }, "toggle-button"])}" data-v-0d6ed677>あり</div><div class="${ssrRenderClass([{ active: !rubyVisible.value }, "toggle-button"])}" data-v-0d6ed677>なし</div></div><div class="menu-icon" data-v-0d6ed677><span data-v-0d6ed677></span><span data-v-0d6ed677></span><span data-v-0d6ed677></span></div></div><nav class="${ssrRenderClass({ open: menuOpen.value })}" data-v-0d6ed677><ul data-v-0d6ed677><li data-v-0d6ed677>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ホーム`);
          } else {
            return [
              createTextVNode("ホーム")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-0d6ed677>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/museum" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ミュージアム`);
          } else {
            return [
              createTextVNode("ミュージアム")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-0d6ed677>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/show" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ショー`);
          } else {
            return [
              createTextVNode("ショー")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-0d6ed677>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/atelier" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`アトリエ`);
          } else {
            return [
              createTextVNode("アトリエ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-0d6ed677>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/time" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`タイムスケジュール`);
          } else {
            return [
              createTextVNode("タイムスケジュール")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav><div class="nav-links" data-v-0d6ed677><span data-v-0d6ed677>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ホーム`);
          } else {
            return [
              createTextVNode("ホーム")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span data-v-0d6ed677>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/museum" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ミュージアム`);
          } else {
            return [
              createTextVNode("ミュージアム")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span data-v-0d6ed677>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/show" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ショー`);
          } else {
            return [
              createTextVNode("ショー")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span data-v-0d6ed677>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/atelier" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`アトリエ`);
          } else {
            return [
              createTextVNode("アトリエ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span data-v-0d6ed677>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/time" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`タイムスケジュール`);
          } else {
            return [
              createTextVNode("タイムスケジュール")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0d6ed677"]]);
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
//# sourceMappingURL=default-DjEBhUsL.js.map
