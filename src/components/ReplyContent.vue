<template>
  <div class="reply">
    <WelcomeItem>
      <template #icon>
        <ChartIcon />
      </template>

      <Suspense>
        <span :id="'content' + id"></span>
      </Suspense>
    </WelcomeItem>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import WelcomeItem from "./WelcomeItem.vue";
import ChartIcon from "./icons/IconChart.vue";
import { init } from "ityped";

const props = defineProps({ id: Number, content: String });

function contentInit(ele: Element, strings: string[]) {
  init(ele, {
    strings,
    /**
     * @param {Number} typeSpeed Type speed in milliseconds
     */
    typeSpeed: 100,

    /**
     * @param {Number} backSpeed Type back speed in milliseconds
     */
    backSpeed: 50,

    /**
     * @param {Number} startDelay Time before typing starts
     */
    startDelay: 500,

    /**
     * @param {Number} backDelay Time before backspacing
     */
    backDelay: 500,

    /**
     * @param {Boolean} loop The animation loop
     */
    loop: false,

    /**
     * @param {Boolean} showCursor Show the cursor element
     */
    showCursor: true,

    /**
     * @param {Boolean} placeholder Write the string in the placeholder content
     */
    placeholder: false,

    /**
     * @param {Boolean} disableBackTyping Disable back typing for the last string sentence
     */
    disableBackTyping: false,

    /**
     * @property {String} cursorChar character for cursor
     */
    cursorChar: "|",

    // optional: The callback called (if `loop` is false)
    // once the last string was typed
    /**
     * @property {Function} onFinished The callback called , if `loop` is false,
     * once the last string was typed
     */
    onFinished: function () {
      console.log("finished");
    },
  });
}

onMounted(() => {
  const ele = document.querySelector(`#content${props.id}`);
  const msg = "对对对，你说啥都对！";
  if (ele) {
    // init(ele, { strings: [props.content || msg], loop: false })
    contentInit(ele, [props.content || msg]);
  }
});
</script>

<style lang="scss">
.reply {
  padding: 10px 0;
  background: #f6f6f6;
  margin: 10px 0;
}

.ityped-cursor {
  font-size: 1.2rem;
  opacity: 1;
  -webkit-animation: blink 0.3s infinite;
  -moz-animation: blink 0.3s infinite;
  animation: blink 0.3s infinite;
  animation-direction: alternate;
}

@keyframes blink {
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes blink {
  100% {
    opacity: 0;
  }
}

@-moz-keyframes blink {
  100% {
    opacity: 0;
  }
}
</style>
