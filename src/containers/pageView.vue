<template>
  <div>
    <div
      class="container"
      :class="[
        { 'custom-bg-light': this.mode === 'Light' },
        { 'custom-bg-black': this.mode === 'Dark' },
      ]"
    >
      <CNav
        :nav="content.nav"
        class="px-1 px-md-5 pt-md-33"
        @updateMode="updateMode"
      />
      <div class="px-1 px-md-5">
        <div
          class="px-1 px-md-5"
          :class="[
            { 'hr-light': this.mode === 'Light' },
            { 'hr-dark': this.mode === 'Dark' },
          ]"
        >
          <hr />
        </div>
      </div>
      <CHeader
        :nav="content.nav"
        :headerIcon="content.headerIcon"
        class="mb-4 mb-md-3 px-1 px-md-5"
      />
      <CToast ref="toast" :msg="msg" />
      <CLogin v-if="toLogin" :mode="mode" @reload="reload" />
      <div v-show="pageShow">
        <div class="mb-2 mb-md-3 px-1 px-md-5">
          <div class="mb-4 mb-md-3 px-1 px-md-5">
            <h3
              class="fw-bolder"
              :class="[
                { 'custom-text-dark': this.mode === 'Light' },
                { 'custom-text-white': this.mode === 'Dark' },
              ]"
            >
              {{ content.title }}
            </h3>
            <h5
              :class="[
                { 'custom-text-dark': this.mode === 'Light' },
                { 'custom-text-white': this.mode === 'Dark' },
              ]"
            >
              {{ content.subtitle }}
            </h5>
          </div>
          <div v-if="content.title === 'IntelRAN'" class="px-1 px-md-5">
            <div class="row">
              <div
                class="col-12 col-md-6 mb-4 mb-md-5 py-md-33"
                v-for="(e, i) in content.article"
                :key="i"
              >
                <h5
                  class="fw-bold"
                  :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                >
                  {{ e.title }}
                </h5>
                <p
                  :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                >
                  {{ e.article }}
                </p>
              </div>
            </div>
          </div>
          <div v-if="content.nav === 'User'" class="px-1 px-md-5">
            <CForm
              :headerLabel="content.headerLabel"
              @reload="reload"
              @toConfig="toConfig(item)"
              @showToast="showToast"
              :key="componentKey"
            />
          </div>
          <div
            v-if="content.nav !== 'User' && content.title !== 'IntelRAN'"
            class="px-1 px-md-5"
          >
            <div
              v-for="(e, i) in addIconsUrl(content.article)"
              :key="i"
              class="mb-4 mb-md-3"
            >
              <div v-show="e.type === 'text'">
                <h5
                  class="fw-bold"
                  :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                >
                  {{ e.title }}
                </h5>
                <p
                  :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                >
                  {{ e.article }}
                </p>
              </div>
              <div
                v-if="e.type === 'label'"
                class="row"
                :class="[
                  { 'justify-content-between': this.screenSize >= 768 },
                  { 'justify-content-center': this.screenSize < 768 },
                ]"
              >
                <h5
                  class="fw-bold"
                  :class="[
                    { 'custom-text-dark': this.mode === 'Light' },
                    { 'custom-text-white': this.mode === 'Dark' },
                  ]"
                >
                  {{ e.title }}
                </h5>
                <div
                  v-for="(f, j) in e.content"
                  :key="j"
                  class="col-5 m-3"
                  :class="[
                    { 'content-label-light': this.mode === 'Light' },
                    { 'content-label-dark': this.mode === 'Dark' },
                    { 'col-5': this.screenSize >= 768 },
                    { 'col-10': this.screenSize < 768 },
                  ]"
                >
                  <img :src="f.src" class="icon-22 me-md-2" /><span
                    :class="[
                      { 'custom-text-dark': this.mode === 'Light' },
                      { 'custom-text-white': this.mode === 'Dark' },
                    ]"
                    >{{ f.title }}</span
                  >
                </div>
              </div>
              <CDisplay
                class="mb-2 mb-md-3"
                v-if="content.nav === 'Solutions'"
                :headerLabel="content.headerLabel"
                :seq="i"
              />
            </div>
            <CTable v-if="content.table.length > 0" :table="content.table" />
            <button
              v-if="content.nav === 'Solutions'"
              class="btn w-100 my-5"
              :class="[
                { 'btn-main-light': this.mode === 'Light' },
                { 'btn-main-dark': this.mode === 'Dark' },
              ]"
              @click.prevent="toConfig"
            >
              Buy Now
            </button>
          </div>
          <div v-if="content.nav === 'Solutions'">
            <CConfig
              ref="config"
              :headerLabel="content.headerLabel"
              @showToast="showToast"
            />
          </div>
        </div>
        <div class="px-1 px-md-5">
          <div
            class="px-1 px-md-5"
            :class="[
              { 'hr-light': this.mode === 'Light' },
              { 'hr-dark': this.mode === 'Dark' },
            ]"
          >
            <hr />
          </div>
        </div>
      </div>
      <CFooter />
    </div>
  </div>
</template>

<script>
import CNav from "@/components/CNav";
import CHeader from "@/components/CHeader";
import CLogin from "@/components/CLogin";
import CDisplay from "@/components/CDisplay";
import CTable from "@/components/CTable";
import CForm from "@/components/CForm";
import CConfig from "@/components/CConfig";
import CToast from "@/components/CToast";
import CFooter from "@/components/CFooter";
import { contentIcons } from "@/content/icons";

export default {
  name: "pageView",
  components: {
    CNav,
    CHeader,
    CLogin,
    CToast,
    CDisplay,
    CTable,
    CForm,
    CConfig,
    CFooter,
  },
  props: {
    content: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      screenSize: this.$store.state.screenSize,
      mode: "",
      toLogin: false,
      pageShow: true,
      auth: this.$store.state.auth,
      msg: {},
      componentKey: 0,
    };
  },
  methods: {
    setBodyBackgroundColor() {
      if (this.mode === "Light") {
        document.body.style.backgroundColor = "#fff";
      } else {
        document.body.style.backgroundColor = "#262627";
      }
    },
    addIconsUrl(array) {
      for (let i in array) {
        if (array[i].type === "label") {
          for (let e in contentIcons) {
            for (let j in array[i].content) {
              if (contentIcons[e].name === array[i].content[j].contentIcon) {
                let str = this.mode.toLowerCase();
                array[i].content[
                  j
                ].src = require(`@/assets/img/icons/content/${contentIcons[e].url[str]}`);
              }
            }
          }
        }
      }
      return array;
    },
    toConfig() {
      if (this.auth === true) {
        this.$refs.config.showModal();
      } else {
        this.toLogin = true;
        this.pageShow = false;
      }
    },
    updateMode() {
      this.$emit("updateMode");
    },
    showToast(msg) {
      this.msg = msg;
      this.$refs.toast.showToast();
    },
    reload() {
      this.toLogin = false;
      this.pageShow = true;
    },
  },
  created() {
    this.mode = this.$store.state.mode;
    this.setBodyBackgroundColor();
  },
};
</script>

<style></style>
