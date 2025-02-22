import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
library.add(faCaretRight);
const _sfc_main = {
  components: {
    "font-awesome-icon": FontAwesomeIcon
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-a7dcdca2><h1 data-v-a7dcdca2><ruby data-v-a7dcdca2>東大 <rt data-v-a7dcdca2>とうだい</rt></ruby> <ruby data-v-a7dcdca2>CAST <rt data-v-a7dcdca2>きゃすと</rt></ruby> <ruby data-v-a7dcdca2>五月祭 <rt data-v-a7dcdca2>ごがつさい</rt></ruby>2025</h1><div class="text-lg md_text-3xl my-1" data-v-a7dcdca2><span class="text-sm md_text-base" data-v-a7dcdca2>5</span><span class="text-xs" data-v-a7dcdca2>月</span><span class="text-sm md_text-base ml-1" data-v-a7dcdca2>24</span><span class="text-xs" data-v-a7dcdca2>日</span><span class="text-xs bg-blue-600 text-white mx-2 p-1 rounded" data-v-a7dcdca2>土</span>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    class: "mx-2 text-lg",
    icon: ["fas", "caret-right"]
  }, null, _parent));
  _push(`<span class="text-sm md_text-base" data-v-a7dcdca2>25</span><span class="text-xs" data-v-a7dcdca2>日</span><span class="text-xs bg-red-600 text-white mx-2 p-1 rounded" data-v-a7dcdca2>日</span></div><div data-v-a7dcdca2> 「なるほど<ruby data-v-a7dcdca2>実感<rt data-v-a7dcdca2>じっかん</rt></ruby>サイエンスミュージアム」 「なるほど <ruby data-v-a7dcdca2>体感<rt data-v-a7dcdca2>たいかん</rt></ruby>サイエンスショー」 「<ruby data-v-a7dcdca2>作<rt data-v-a7dcdca2>つく</rt></ruby>って<ruby data-v-a7dcdca2>体感<rt data-v-a7dcdca2>たいかん</rt></ruby>サイエンスアトリエ」 を出展しています！ </div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a7dcdca2"]]);
export {
  index as default
};
//# sourceMappingURL=index-DX6m0PJ_.js.map
