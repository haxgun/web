<script setup lang="ts"></script>

<template>
  <section id="hero" class="hero">
    <div class="content">
      <div class="title">@HAXGUN</div>
      <div class="subtitle">Little bit of a fullstack developer</div>
      <a href="mailto:haxgun@vk.com" class="email">haxgun@vk.com</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

body {
  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: hsl(0, 0%, 7%);
}

.content {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.title {
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 5px;
  color: hsl(0, 0%, 100%);
}

.subtitle {
  font-size: 1em;
  font-weight: 600;
  color: hsl(0, 0%, 100%);
}

.email {
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
</style>
