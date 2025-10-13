<script lang="ts" setup>
const props = withDefaults(defineProps<{
  as?: 'a' | 'button'
  href?: string
}>(), {
  as: 'a'
})
</script>

<template>
  <component :is="props.as" class="MCButton" :href="props.as === 'a' || props.href ? props.href : undefined"
    :target="props.as === 'a' ? '_blank' : undefined" :rel="props.as === 'a' ? 'noopener' : undefined">
    <span>
      <slot />
    </span>
  </component>
</template>



<style scoped>
.MCButton {
  background: #3c8527;
  box-shadow: inset 0 -6px 0 #2a641c, inset 0 6px 0 #52a535;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: .03em;
  text-transform: uppercase;

  cursor: pointer;

  border: 2px solid #262423;
  display: inline-flex;
  align-items: center;
  font-size: 1.125rem;
  line-height: 1.25rem;
  min-width: 4.75rem;
  padding: .9375rem 1.75rem;
  padding-right: 1rem;
  text-decoration: none;
  text-align: center;

  -webkit-user-select: none;
  user-select: none;
  text-shadow: 0 2px 0 #505050;
}

.MCButton:hover {
  background: linear-gradient(0deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)), #3c8527;
}

.MCButton:focus:active {
  box-shadow: 0 0 0 1px #ffffff;
}

.MCButton:active {
  background-color: #2a641c;
}

.MCButton:focus {
  outline: 2px solid #ffffff;
  outline-offset: -2px;
}

.MCButton::after {
  background-color: #ffffff;
  clip-path: polygon(0% 0%, 0% 25%, 14.286% 25%, 14.286% 50%, 28.572% 50%, 28.572% 75%, 42.858% 75%, 42.858% 100%, 57.142% 100%, 57.142% 75%, 71.428% 75%, 71.428% 50%, 85.714% 50%, 85.714% 25%, 100% 25%, 100% 0%, 85.714% 0%, 85.714% 25%, 71.428% 25%, 71.428% 50%, 57.142% 50%, 57.142% 75%, 42.858% 75%, 42.858% 50%, 28.572% 50%, 28.572% 25%, 14.286% 25%, 14.286% 0%);
  content: "";
  display: inline-block;
  flex-basis: 14px;
  flex-grow: 0;
  flex-shrink: 0;
  height: 8px;
  transform: rotate(-90deg);
  width: 14px;
  margin-left: 10px;
}
</style>