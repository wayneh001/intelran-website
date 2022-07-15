<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="d-flex jutify-content center align-items-between">
          <div>
            <label class="navbar-brand">IntelRAN</label>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    :class="{ active: navActive === 0 }"
                    to="/dashboard/smartHome"
                    >Smart Home</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    :class="{ active: navActive === 1 }"
                    to="/dashboard/hub"
                    >Solutions</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    :class="{ active: navActive === 2 }"
                    to="/dashboard/about"
                    >About</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div @click.prevent="changeMode">
              <svg viewBox="" width="22" height="22">
                <g
                  :stroke="modeIcon.stroke"
                  :stroke-width="modeIcon.strokeWidth"
                  :fill="modeIcon.fill"
                >
                  <path :d="modeIcon.path" />
                </g>
              </svg>
              <svg viewBox="" width="22" height="22">
                <g
                  :stroke="userIcon.stroke"
                  :stroke-width="userIcon.strokeWidth"
                  :fill="userIcon.fill"
                >
                  <path :d="userIcon.path" />
                </g>
              </svg>
              <div class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <router-link class="dropdown-item" to="/dashboard/account"
                      >Account</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/dashboard/cart"
                      >Cart</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/dashboard/order"
                      >Order</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { navIcons, contentIcons } from "@/content/icons";
export default {
  name: "CNav",
  props: {
    nav: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      modeIcon: contentIcons[4],
      userIcon: navIcons[11],
      navActive: 0,
    };
  },
  methods: {
    getActive() {
      switch (this.nav) {
        case "Smart Home":
          this.navActive = 0;
          break;
        case "Solutions":
          this.navActive = 1;
          break;
        case "About":
          this.navActive = 2;
          break;
        case "User":
          this.navActive = 3;
          break;
      }
    },
  },
};
</script>

<style></style>
