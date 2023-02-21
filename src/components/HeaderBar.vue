<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <ChartIcon></ChartIcon>
        <span>VUE ChartGPT</span>
      </div>
      <a href="">
        <GitHubIcon></GitHubIcon>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChartIcon from "./icons/IconChart.vue";
import GitHubIcon from "./icons/IconGitHub.vue";
</script>

<style lang="scss">
.header {
  padding: 0 32px;
  position: relative;
  border-bottom: 1px solid var(--vt-c-divider-light);
  // padding: 0 12px 0 24px;
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
      > svg {
        color: hsla(160, 100%, 37%, 1);
      }
      > span {
        margin-left: 10px;
      }
    }
  }
}
</style>
