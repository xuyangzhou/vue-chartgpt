<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <ChartIcon></ChartIcon>
        <span>VUE ChartGPT</span>
      </div>
      <div class="nav">
        <SwitchColor></SwitchColor>
        <a href="https://github.com/xuyangzhou/vue-chartgpt" class="vt-social-link" target="_blank">
          <GitHubIcon></GitHubIcon>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChartIcon from "./icons/IconChart.vue";
import GitHubIcon from "./icons/IconGitHub.vue";
import SwitchColor from '@/components/SwitchColor.vue'
</script>

<style lang="scss">
.header {
  padding: 0 32px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background: var(--vt-c-bg);
  border-bottom: 1px solid var(--vt-c-divider-light);
  height: var(--vt-nav-height);
  background-color: var(--vt-c-bg);
  white-space: nowrap;
  transition: border-color 0.5s, background-color 0.5s;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 auto;

    .logo {
      display: flex;
      align-items: center;

      >svg {
        color: hsla(160, 100%, 37%, 1);
      }

      >span {
        margin-left: 10px;
      }
    }

    .nav {
      display: flex;
      align-items: center;
    }
  }
}

.vt-social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--vt-c-text-2);
  transition: color .5s;

  &:hover {
    color: var(--vt-c-text-1);
    transition: color .25s;
  }
}
</style>
