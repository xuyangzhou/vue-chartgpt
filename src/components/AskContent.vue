<template>
  <WelcomeItem>
    <template #icon>
      <UserIcon />
    </template>

    {{ content }}
  </WelcomeItem>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import WelcomeItem from "./WelcomeItem.vue";
import UserIcon from "./icons/iconUser.vue";

defineProps({ content: String, id: Number });
</script>
