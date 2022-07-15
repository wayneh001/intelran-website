<template>
  <div class="container">
    <CNav :nav="content.nav" />
    <CHeader :label="content.label" :icon="content.icon" />
    <div id="contentBody">
      <div id="title">
        <h2>{{ content.title }}</h2>
        <h4>{{ content.subtitle }}</h4>
      </div>
      <div id="form" v-if="content.nav === 'User'">
        <CForm />
      </div>
      <div id="article" v-if="content.title === 'IntelRAN'">
        <div v-for="(e, i) in content.article" :key="i" class="row">
          <div class="col-12 col-md-6">
            <h5>{{ e.title }}</h5>
            <p>{{ e.article }}</p>
          </div>
        </div>
      </div>
      <div id="article" v-else>
        <div v-for="(e, i) in content.article" :key="i">
          <div class="mb-3" id="text" v-show="e.type === 'text'">
            <h5>{{ e.title }}</h5>
            <p>{{ e.article }}</p>
          </div>
          <div class="mb-3" id="label" v-show="i.type === 'label'">
            <div class="label-custom col-md-6"><span></span>{{ e.title }}</div>
          </div>
          <CDisplay
            class="mb-3"
            id="display"
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
          @click.prevent="openModal"
        >
          Buy Now
        </button>
      </div>
    </div>
    <CFooter />
    <CModal v-if="content.nav === 'Solutions'" :data="content.label" />
  </div>
</template>

<script>
import CNav from "@/components/CNav";
import CHeader from "@/components/CHeader";
import CDisplay from "@/components/CDisplay";
import CTable from "@/components/CTable";
import CForm from "@/components/CForm.vue";
import CFooter from "@/components/CFooter";
import CAlert from "@/components/CAlert";

export default {
  name: "view",
  components: [
    { CNav },
    { CHeader },
    { CDisplay },
    { CTable },
    { CForm },
    { CFooter },
    { CAlert },
  ],
  props: {
    content: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      mode: "Light",
    };
  },
  methods: {
    openModal() {
      console.log("openModal");
    },
  },
};
</script>

<style></style>
