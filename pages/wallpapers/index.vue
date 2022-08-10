<template>
  <main id="wallpapers-home">
    <h1>omercup's wallpaper picks</h1>

    <NuxtLink to="/wallpapers/pc">
      <Icon icon="mdi:laptop-windows" width="2rem" /> pc wallpapers
    </NuxtLink>
    <NuxtLink to="/wallpapers/phone">
      <Icon icon="mdi:cellphone" width="2rem" /> phone wallpapers
    </NuxtLink>

    <div class="decoration">
      <div />
      <div />
    </div>
  </main>
</template>

<style lang="scss">
@use "assets/styles/util";

main#wallpapers-home {
  @include util.flex(column, 2rem, center, center);

  a {
    @include util.flex(row, 1rem, center);
  }
}
</style>
