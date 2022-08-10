<template>
  <main id="home">
    <h1>omercup's wallpaper picks</h1>

    <NuxtLink to="/pc"> <IconLaptop /> pc wallpapers </NuxtLink>
    <NuxtLink to="/phone"> <IconPhone /> phone wallpapers </NuxtLink>
  </main>
</template>

<style lang="scss">
@use "assets/styles/util";

main#home {
  height: 100vh;
  @include util.flex(column, 1rem, center, center);

  a {
    @include util.flex(row, 1rem, center);
  }
}
</style>
