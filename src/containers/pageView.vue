<template>
  <div class="container bg-light">
    <CNav :nav="content.nav" class="mb-5 px-5" />
    <CHeader :nav="content.nav" :mode="mode" class="mb-5 px-5" />
    <div class="mb-5 px-5">
      <div class="mb-5">
        <h2>{{ content.title }}</h2>
        <h4>{{ content.subtitle }}</h4>
      </div>
      <div v-if="content.nav === 'User' && !inConfig">
        <CForm @toConfig="toConfig(item)" />
      </div>
      <div v-if="content.title === 'IntelRAN' && !inConfig">
        <div class="row">
          <div
            class="col-12 col-md-6 py-3"
            v-for="(e, i) in content.article"
            :key="i"
          >
            <h5>{{ e.title }}</h5>
            <p>{{ e.article }}</p>
          </div>
        </div>
      </div>
      <div v-if="content.title !== 'IntelRAN' && !inConfig">
        <div v-for="(e, i) in content.article" :key="i">
          <div class="mb-5" v-show="e.type === 'text'">
            <h5>{{ e.title }}</h5>
            <p>{{ e.article }}</p>
          </div>
          <div class="mb-5" v-show="i.type === 'label'">
            <div class="label-custom col-md-6"><span></span>{{ e.title }}</div>
          </div>
          <CDisplay
            class="mb-5"
            v-if="content.nav === 'Solutions'"
            :label="content.label"
            :seq="i"
            :mode="mode"
          />
        </div>
        <CTable
          v-if="content.table.length > 0"
          :table="content.table"
          :mode="mode"
        />
        <button
          v-if="content.nav === 'Solutions'"
          class="btn btn-primary w-100"
          @click.prevent="toConfig"
        >
          Buy Now
        </button>
      </div>
      <div v-if="inConfig">
        <CConfig :label="content.label" />
      </div>
    </div>
    <CFooter />
  </div>
</template>

<script>
import CNav from "@/components/CNav";
import CHeader from "@/components/CHeader";
import CDisplay from "@/components/CDisplay";
import CTable from "@/components/CTable";
import CForm from "@/components/CForm";
import CConfig from "@/components/CConfig";
import CFooter from "@/components/CFooter";
import { contentIcons } from "@/content/icons";

export default {
  name: "pageView",
  components: {
    CNav,
    CHeader,
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
      mode: "Light",
      inConfig: false,
    };
  },
  methods: {
    toConfig() {
      this.inConfig = true;
    },
  },
  getIcon() {
    console.log(contentIcons);
  },
};
</script>

<style></style>
