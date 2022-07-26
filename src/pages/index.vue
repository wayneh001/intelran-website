<template>
  <div>
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-center custom-bg-main vh-100"
      >
        <router-link to="/dashboard/smartHome">
          <div class="wrapper bg-main">
            <svg
              id="svgOutline"
              width="100%"
              height="100%"
              viewBox="0 0 453 76"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              xmlns:serif="http://www.serif.com/"
              style="
                fill-rule: evenodd;
                clip-rule: evenodd;
                stroke-linejoin: round;
                stroke-miterlimit: 2;
              "
            >
              <g transform="matrix(1,0,0,1,-23.9,-212)">
                <g transform="matrix(1,0,0,1,-122.618,39.626)">
                  <path
                    d="M147.018,177.074L147.018,247.074L163.218,247.074L163.218,177.074L148.018,177.074"
                    style="
                      fill: none;
                      fill-rule: nonzero;
                      stroke: white;
                      stroke-width: 1px;
                    "
                  />
                  <path
                    d="M211.418,192.474C204.118,192.474 197.818,194.974 193.618,199.574L193.618,193.274L178.718,193.274L178.718,247.074L194.318,247.074L194.318,220.474C194.318,210.574 199.718,205.974 207.218,205.974C214.118,205.974 218.118,209.974 218.118,218.674L218.118,247.074L233.718,247.074L233.718,216.274C233.718,199.874 224.118,192.474 211.418,192.474Z"
                    style="
                      fill: none;
                      fill-rule: nonzero;
                      stroke: white;
                      stroke-width: 1px;
                    "
                  />
                  <path
                    d="M278.318,233.474C276.618,234.774 274.318,235.474 272.018,235.474C267.818,235.474 265.318,232.974 265.318,228.374L265.318,206.474L278.718,206.474L278.718,194.474L265.318,194.474L265.318,181.374L249.718,181.374L249.718,194.474L241.418,194.474L241.418,206.474L249.718,206.474L249.718,228.574C249.718,241.374 257.118,247.874 269.818,247.874C274.618,247.874 279.318,246.774 282.518,244.474L278.318,233.474Z"
                    style="
                      fill: none;
                      fill-rule: nonzero;
                      stroke: white;
                      stroke-width: 1px;
                    "
                  />
                  <path
                    d="M342.318,220.374C342.318,203.074 330.118,192.474 314.318,192.474C297.918,192.474 285.618,204.074 285.618,220.174C285.618,236.174 297.718,247.874 316.318,247.874C326.018,247.874 333.518,244.874 338.518,239.174L330.218,230.174C326.518,233.674 322.418,235.374 316.718,235.374C308.518,235.374 302.818,231.274 301.318,224.574L342.018,224.574C342.118,223.274 342.318,221.574 342.318,220.374ZM314.418,204.274C321.418,204.274 326.518,208.674 327.618,215.474L301.118,215.474C302.218,208.574 307.318,204.274 314.418,204.274Z"
                    style="
                      fill: none;
                      fill-rule: nonzero;
                      stroke: white;
                      stroke-width: 1px;
                    "
                  />
                  <path
                    d="M352.718,172.874L352.718,247.074L368.318,247.074L368.318,172.874L353.718,172.874"
                    style="
                      fill: none;
                      fill-rule: nonzero;
                      stroke: white;
                      stroke-width: 1px;
                    "
                  />
                  <path
                    d="M445.918,247.074L430.218,224.574C439.318,220.674 444.618,212.974 444.618,202.474C444.618,186.774 432.918,177.074 414.218,177.074L383.918,177.074L383.918,247.074L400.118,247.074L400.118,227.574L415.018,227.574L428.518,247.074L445.918,247.074ZM428.218,202.474C428.218,210.074 423.218,214.674 413.318,214.674L400.118,214.674L400.118,190.274L413.318,190.274C423.218,190.274 428.218,194.774 428.218,202.474Z"
                    style="
                      fill: none;
                      fill-rule: nonzero;
                      stroke: white;
                      stroke-width: 1px;
                    "
                  />
                  <path
                    d="M509.718,247.074L526.718,247.074L495.418,177.074L479.418,177.074L448.218,247.074L464.818,247.074L471.018,232.074L503.518,232.074L509.718,247.074ZM476.218,219.774L487.318,192.974L498.418,219.774L476.218,219.774Z"
                    style="
                      fill: none;
                      fill-rule: nonzero;
                      stroke: white;
                      stroke-width: 1px;
                    "
                  />
                  <path
                    d="M582.218,177.074L582.218,219.574L547.418,177.074L534.018,177.074L534.018,247.074L550.018,247.074L550.018,204.574L584.918,247.074L598.218,247.074L598.218,177.074L582.218,177.074Z"
                    style="
                      fill: none;
                      fill-rule: nonzero;
                      stroke: white;
                      stroke-width: 1px;
                    "
                  />
                </g>
              </g>
            </svg>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import drawsvg from "@/assets/js/drawsvg";
import $ from "jquery";
export default {
  name: "index",
  data() {
    return {
      screenWidth: document.body.clientWidth,
    };
  },
  methods: {
    drawsvg() {
      return drawsvg;
    },
    setTimes() {
      let date = new Date();
      if (date.getHours() >= 7 && date.getHours() < 19) {
        this.$store.commit("setTime", "day");
      } else {
        this.$store.commit("setTime", "night");
      }
    },
    getScreenSize() {
      const that = this;
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth;
          that.screenWidth = window.screenWidth;
        })();
      };
    },
  },
  mounted() {
    this.getScreenSize();
    window.onresize;
    this.$store.commit("saveScreenSize" , this.screenWidth)
    this.setTimes();
    var $svg = $("#svgOutline").drawsvg();
    $svg.drawsvg("animate");

    $(function () {
      setTimeout(function () {
        $("#svgFillElement").show("fast");
      }, 4000);
    });
    // this.timeout = setTimeout(() => {
    //   this.$router.push("/dashboard/smartHome");
    // }, 5500);
  },
};
</script>

<style>
body {
  background-color: #1a56a2;
}
</style>
