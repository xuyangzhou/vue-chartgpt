<template>
<template v-if="list.length <= 2">
  <IntroductionList></IntroductionList>
</template>

  <div class="chart-box" v-scroll-bottom :style="list.length <=2 ? {height: 'calc(100vh - 346px)'}:{height: 'calc(100vh - 242px)'}">
    <div v-for="(item, index) in list" :key="index">
      <component :is="compMap[item.comp]" :content="item.content" :id="index"></component>
    </div>
  </div>
  <div class="input">
    <input type="text" placeholder="input + Enter" v-model="input" @keydown.enter="submit" />
    <SendIcon class="icon" @click="submit"></SendIcon>
  </div>
</template>

<script setup lang="ts">
import SendIcon from "./icons/IconSend.vue";
import AskContent from "./AskContent.vue";
import ReplyContent from "./ReplyContent.vue";
import IntroductionList from "./IntroductionList.vue";
import { ref, onMounted, type Ref } from "vue";
import { getReply } from "@/api/index";
import type { resContentType, resDataType, responseType, resTextType ,resPoetryType} from "@/types";
import {
  GLOWINGTERMS,
  DUJITANG,
  LOVESENTENCE,
  FRIENDWORDS,
  POETRY,
  DOGLICKING,
  LOVEWORDS,
  WENAN,
  JOKE,
} from "@/api/urlConfig";

const compMap = {
  ask: AskContent,
  reply: ReplyContent,
};

const vScrollBottom = {
  updated(el: Element) {
    // console.log(el, el.scrollHeight, el.clientHeight);
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

const urls = [GLOWINGTERMS,
  DUJITANG,
  LOVESENTENCE,
  FRIENDWORDS,
  POETRY,
  DOGLICKING,
  LOVEWORDS,
  WENAN,
  JOKE];

  let flag = false;

async function submit() {
  if (!input.value || flag) return;

  list.value.push({ comp: "ask", content: input.value });
  input.value = "";
  const index = Math.floor(Math.random() * urls.length)
  console.log(index)
  const url = urls[index];
  flag = true;
  await getReply(url).then((res) => {
    const content = dataFormat(res);
    list.value.push({ comp: "reply", content });
  });
  flag = false;
}

function dataFormat(res: responseType) {
  if ((res as resContentType).content) return (res as resContentType).content
  if ((res as resTextType).text) return (res as resTextType).text
  if ((res as resDataType).data && (res as resDataType).data.text) return (res as resDataType).data.text
  if ((res as resPoetryType).data && (res as resPoetryType).data.contents) return (res as resPoetryType).data.contents
  
  return '服务出错了，请等待重新发起请求'
}
</script>

<style lang="scss">
.chart-box {
  // min-width: 1200px;
  min-height: 200px;
  height: calc(100vh - 200px);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 20px;
  margin: 20px 0;
  overflow: auto;
}

.input {
  display: flex;
  align-items: center;

  >input {
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

  >.icon {
    font-size: 24px;
    font-style: normal;
    color: hsla(160, 100%, 37%, 1);
    cursor: pointer;
  }
}
</style>
