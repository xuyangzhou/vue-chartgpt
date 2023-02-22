<template>
    <div class="VPNavBarAppearance appearance" @click="toggle" >
        <button class="vt-switch vt-switch-appearance" type="button" role="switch" aria-label="切换深色模式">
            <span class="vt-switch-check">
                <span class="vt-switch-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"
                        class="vt-switch-appearance-sun">
                        <path
                            d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z">
                        </path>
                        <path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path>
                        <path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path>
                        <path
                            d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z">
                        </path>
                        <path
                            d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z">
                        </path>
                        <path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path>
                        <path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                        <path
                            d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z">
                        </path>
                        <path
                            d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z">
                        </path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"
                        class="vt-switch-appearance-moon">
                        <path
                            d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z">
                        </path>
                    </svg>
                </span>
            </span>
        </button>
    </div>
</template>
<script setup lang="ts">

function toggle() {
    const root = document.querySelector('html')
    root?.classList.toggle('dark')
}
</script>
<style lang="scss">
.VPNavBarAppearance {
    margin-right: 10px;
}

.VPNavBar {
    position: relative;
    border-bottom: 1px solid var(--vt-c-divider-light);
    padding: 0 12px 0 24px;
    height: var(--vt-nav-height);
    background-color: var(--vt-c-bg);
    white-space: nowrap;
    transition: border-color .5s, background-color .5s;
}

.vt-switch {
    position: relative;
    border-radius: 11px;
    display: block;
    width: 40px;
    height: 22px;
    flex-shrink: 0;
    border: 1px solid var(--vt-c-divider);
    background-color: var(--vt-c-bg-mute);
    transition: border-color .25s, background-color .25s;
    cursor: pointer;
}

.vt-switch-check {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--vt-c-white);
    box-shadow: var(--vt-shadow-1);
    transition: background-color .25s, transform .25s;
}

.vt-switch-icon {
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
}

.vt-switch-icon svg {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 12px;
    height: 12px;
    fill: var(--vt-c-text-2);
}
.dark .vt-switch-icon svg {
    fill: var(--vt-c-text-1);
    transition: opacity .25s;
}
.vt-switch-appearance-sun {
    opacity: 1;
}
.dark .vt-switch-appearance .vt-switch-check {
    transform: translate(18px);
}
.dark .vt-switch-check {
    background-color: var(--vt-c-black);
}


.dark .vt-switch-appearance-moon {
    opacity: 1;
}

.vt-switch-appearance-moon,
.dark .vt-switch-appearance-sun {
    opacity: 0;
}</style>