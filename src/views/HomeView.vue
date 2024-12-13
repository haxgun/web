<script setup lang="ts">
import TelegramIcon from '@/components/icons/TelegramIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import TwitchIcon from '@/components/icons/TwitchIcon.vue'

import { ref, onMounted, onUnmounted } from "vue";
import CvIcon from '@/components/icons/cvIcon.vue'

const isDeveloper = ref(false);

const handleKeyDown = (event) => {
  if (event.ctrlKey && event.altKey && (event.key === 'h' || event.key === 'р')) {
    isDeveloper.value = !isDeveloper.value; // Переключаем значение
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

</script>

<template>
  <section id="hero" class="hero">
    <Transition mode="out-in">
      <div v-if="!isDeveloper" class="main">
        <div class="title">HAXGUN</div>
        <div class="subtitle">Little bit of a fullstack developer</div>
        <a href="mailto:haxgun@vk.com" class="email">haxgun@vk.com</a>
        <ul class="social">
          <li class="social-icon content-center">
            <a href="https://www.twitch.tv/magicxcmd" target="__blank">
              <TwitchIcon />
            </a>
          </li>
          <li class="social-icon">
            <a href="https://t.me/haxgun" target="__blank">
              <TelegramIcon />
            </a>
          </li>
          <li class="social-icon">
            <a href="https://github.com/haxgun" target="__blank">
              <GithubIcon />
            </a>
          </li>
          <li class="social-icon">
            <a href="/cv" target="__blank">
              <cv-icon />
            </a>
          </li>
        </ul>
      </div>
      <div v-else class="">
        <div class="title develop">
          <img class="logo" src="/logo.png" alt="">
        </div>
        <ul class="tools">
          <li class="social-icon">
            <a href="/outline" target="__blank">
              Outline
            </a>
          </li>
          <li class="social-icon">
            <a href="/nekoray" target="__blank">
              Nekoray
            </a>
          </li>
          <li class="social-icon">
            <a href="/aio" target="__blank">
              Windows AIO
            </a>
          </li>
          <li class="social-icon">
            <a href="/spotify" target="__blank">
              Spotify
            </a>
          </li>
          <li class="social-icon">
            <a href="/discord" target="__blank">
              Discord
            </a>
          </li>
          <li class="social-icon">
            <a href="/notepad" target="__blank">
              Notepad
            </a>
          </li>
          <li class="social-icon">
            <a href="/tools" target="__blank">
              Tools
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </section>

</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: hsl(0, 0%, 7%);
}

.main {
  display: flex;
  gap: 6px;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
}

.title {
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 5px;
  color: hsl(0, 0%, 100%);

  &.develop {
    display: flex;
    justify-content: center;

    .logo {
      width: 500px;
    }
  }
}

.subtitle {
  font-size: 1em;
  font-weight: 600;
  color: hsl(0, 0%, 100%);
}

.email {
  margin-top: 5px;
  font-size: 1em;
  font-weight: 600;
  color: hsl(0, 0%, 100%);
  position: relative;
  display: inline-block;
  text-decoration: none;
  transition:
    color 0.2s,
    box-shadow 0.2s;
  padding: 5px;
  box-shadow: inset 0 -2px 0 0 #fff;

  &:hover {
    color: #16171b;
    box-shadow: inset 0 -32px 0 0 #fff;
  }
}

.social {
  margin-top: 20px;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 14px;
  justify-content: center;
}

.tools {
  margin-top: 36px;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 14px;

  a {
    color: #A00411;
    transition: color .2s;
    text-decoration: none;

    &:hover {
      color: #6b000a;
    }
  }


  li:not(:last-child)::after {
    content: " |";
    margin-left: 5px;
    color: #A00411;
  }

  .social-icon {
    color: #fff;
  }
}
</style>
