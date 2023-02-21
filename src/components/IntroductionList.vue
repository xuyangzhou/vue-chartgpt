<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
// import DocumentationIcon from "./icons/IconDocumentation.vue";
// import ChartIcon from './icons/IconChart.vue'
// import UserIcon from './icons/iconUser.vue'
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
// import SupportIcon from "./icons/IconSupport.vue";
</script>
<template>
  <div class="intr">
    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>吟诗作赋</template>

      期待与你一起吟诗作赋，斗酒百篇
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>废话文学</template>

      听君一席话，如听一席话
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>More</template>

      笑话、段子、土味情话、彩虹屁 ...
    </WelcomeItem>
  </div>
</template>

<style lang="scss">
.intr {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin: 20px 0;
}
</style>
