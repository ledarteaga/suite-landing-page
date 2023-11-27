<template>
  <div
    class="mb-32 flex flex-wrap px-5 md:mb-24 md:px-[36px] lg:mb-32 lg:mt-0 lg:flex-nowrap lg:px-[166px]"
  >
    <div class="relative flex h-full w-full justify-end lg:w-5/6">
      <span
        class="debug-border bottom-0 left-0 top-8 m-auto flex w-full flex-col flex-wrap justify-center md:w-5/6 lg:absolute"
      >
        <h1
          class="heading-xl lg:heading-xl mb-10 line-clamp-2 overflow-visible"
        >
          <span class="font-normal">A</span> super
          <span class="solution-span">solution</span>
          <br />
          <span class="font-normal">for your</span> business
        </h1>

        <p class="text-body mb-10 w-full lg:w-1/2">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </p>

        <CustomButton> Request Beta Access </CustomButton>
      </span>

      <img
        src="../assets/image-hero-portrait.webp"
        alt=""
        class="hidden md:block"
      />
    </div>

    <div class="my-14 w-full md:hidden">
      <img
        src="../assets/image-hero-landscape@2x.webp"
        alt=""
      />
    </div>

    <div
      class="flex w-full flex-col items-center justify-center gap-14 md:my-28 md:flex-row lg:w-1/5 lg:flex-col"
    >
      <div>
        <h2 class="heading-lg text-center font-bold lg:text-start">2K +</h2>
        <p class="heading-sm">Companies</p>
      </div>
      <div>
        <h2 class="heading-lg text-center font-bold lg:text-start">8</h2>
        <p class="heading-sm">Languages</p>
      </div>
      <div>
        <h2 class="heading-lg text-center font-bold lg:text-start">1.2M</h2>
        <p class="heading-sm">Leads</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.solution-span {
  position: relative;
  overflow: visible;
}

.solution-span:after {
  position: absolute;
  top: -40px;
  left: 0;
  right: 0;
  margin: auto;
  content: " ";
  width: 90%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("../assets/pattern-curved-line-1.svg");
}

@media (max-width: 800px) {
  .solution-span:after {
    top: -20px;
  }
}
</style>
