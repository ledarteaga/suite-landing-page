<template>
  <div class="relative flex h-[848px] flex-col lg:h-[546px]">
    <div class="h-1/2 bg-white"></div>
    <div class="h-1/2 bg-palewhite"></div>

    <section
      id="testimonial"
      class="absolute inset-x-0 m-auto mt-10 flex h-full flex-col justify-center rounded-lg bg-darkblue md:mx-[36px] lg:mx-[166px] lg:flex-row"
    >
      <div
        class="avatar-container relative h-full w-full after:overflow-visible lg:w-5/12"
      >
        <img
          src="../assets/image-jeremy-large@2x.webp"
          alt="testimonial"
          class="absolute inset-x-0 -bottom-10 z-20 mx-auto h-[402px] lg:bottom-0 lg:h-[589px]"
        />
      </div>
      <div class="w-full lg:w-1/12">
        <img
          src="../assets/pattern-curved-line-2.svg"
          alt=""
          srcset=""
          class="mx-auto my-20 lg:my-36"
        />
      </div>
      <div
        class="mb-14 flex flex-col justify-center gap-10 px-12 text-center lg:w-5/12 lg:px-0 lg:text-start"
      >
        <p class="heading-lg text-white">
          It just <span class="font-bold">works</span>
        </p>
        <p class="text-quote text-white">
          “I really like how it is an all-in-one solution that handle many of
          the tasks that you would normally need separate tools to do the same
          job. This thing is a miracle worker.”
        </p>
        <span>
          <p class="heading-md text-white">JEREMY ROBINSON</p>
          <p class="heading-sm text-white">CMO, FYLO</p>
        </span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.avatar-container:after {
  content: "  ";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  width: 600px;
  height: 600px;
  background-image: url("../assets/pattern-blur.svg");
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 800px) {
    width: 400px;
    height: 400px;
  }
}
</style>
