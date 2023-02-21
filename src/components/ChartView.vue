<template>
  <!-- <template v-if="list.length === 0">
    </template> -->
  <IntroductionList></IntroductionList>

  <div class="chart-box" v-scroll-bottom>
    <div v-for="(item, index) in list" :key="index">
      <component
        :is="compMap[item.comp]"
        :content="item.content"
        :id="index"
      ></component>
    </div>
  </div>
  <div class="input">
    <input type="text" v-model="input" @keydown.enter="submit" />
    <i @click="submit">
      <SendIcon></SendIcon>
    </i>
  </div>
</template>

<script setup lang="ts">
import SendIcon from "./icons/IconSend.vue";
import AskContent from "./AskContent.vue";
import ReplyContent from "./ReplyContent.vue";
import IntroductionList from "./IntroductionList.vue";
import { ref, onMounted, type Ref } from "vue";
import {
  getGlowingTerms,
  getDuJiTang,
  getFriendWords,
  getPoetry,
  getDogLicking,
  getLoveWords,
  getWenAn,
  getJoke,
} from "@/api/index";

const compMap = {
  ask: AskContent,
  reply: ReplyContent,
};

const vScrollBottom = {
  updated(el: Element) {
    console.log(el, el.scrollHeight, el.clientHeight);
    el.scrollTo({
      top: el.scrollHeight - el.clientHeight,
      behavior: "smooth",
    });
  },
};

const input = ref("");

const list: Ref<{ comp: "ask" | "reply"; content: string }[]> = ref([]);

onMounted(() => {
  list.value.push({ comp: "ask", content: "你好！" });
  list.value.push({
    comp: "reply",
    content: "hi～ 开始与我一道吟诗作赋，对酒当歌",
  });
});

async function submit() {
  if (!input.value) return;
  list.value.push({ comp: "ask", content: input.value });
  input.value = "";
  await getDogLicking().then((res) => {
    const content = res.data.text;
    list.value.push({ comp: "reply", content });
  });
}
</script>

<style lang="scss">
.chart-box {
  min-width: 1200px;
  min-height: 200px;
  height: calc(100vh - 340px);
  border: 1px solid var(--vt-c-divider-light-2);
  border-radius: 4px;
  padding: 20px;
  margin: 20px 0;
  overflow: auto;
}

.input {
  display: flex;
  align-items: center;

  > input {
    flex: 1;
    min-height: 40px;
    margin-right: 20px;
    border-radius: 4px;
    border: 1px solid hsla(160, 100%, 37%, 1);
    outline: none;
    padding: 0 10px;

    &:hover,
    &:focus,
    &:focus-visible {
      border: 2px solid hsla(160, 100%, 37%, 1);
    }
  }

  > i {
    font-size: 24px;
    font-style: normal;
    color: hsla(160, 100%, 37%, 1);
    cursor: pointer;
  }
}
</style>
