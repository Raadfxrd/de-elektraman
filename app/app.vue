<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style scoped>
:deep(.page-enter-active),
:deep(.page-leave-active) {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.page-enter-from) {
  opacity: 0;
  transform: translateY(8px);
}

:deep(.page-leave-to) {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
