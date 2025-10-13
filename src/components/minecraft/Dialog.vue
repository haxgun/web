<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'

interface Props {
  modelValue: boolean
  title?: string
  description?: string
  closeOnOverlay?: boolean
  showCloseButton?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Нажмите на кнопку ниже',
  closeOnOverlay: true,
  showCloseButton: true
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const close = () => {
  emit('update:modelValue', false)
}

const handleOverlayClick = () => {
  if (props.closeOnOverlay) {
    close()
  }
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.modelValue) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
  if (props.modelValue) {
    document.body.style.overflow = 'hidden'
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})

const toggleBodyScroll = (isOpen: boolean) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
}


watch(() => props.modelValue, (newValue) => {
  toggleBodyScroll(newValue)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue"
        class="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-100 p-5"
        @click="handleOverlayClick">
        <div
          class="flex flex-col items-center justify-center gap-4 bg-[#171615]  text-white shadow-[inset_0_-4px_0_0_#000,inset_-4px_0_0_0_#3d3938,inset_4px_0_0_0_#000,inset_0_4px_0_0_#3d3938] w-fit max-h-[90dvh] overflow-y-auto max-w-2xl p-12"
          @click.stop>
          <!-- Заголовок -->
          <div v-if="showCloseButton" class="flex justify-center items-center">
            <h3 class="m-0 text-3xl minecraft-ten">{{ props.title }}</h3>
          </div>

          <!-- Контент -->
          <div class="flex flex-col gap-4 w-fit items-center justify-center">
            <span v-if="props.description"
              class="text-lg text-[#a0a0a0] text-center text-pretty whitespace-pre-line leading-relaxed mb-2">
              {{ props.description }}
            </span>

            <div class="flex gap-4 items-center justify-center">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.95);
}
</style>
