<script setup>
  import { ref } from "vue";
  import { onMounted } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#form",
          start: "top 65%",
          end: "bottom top",
          toggleActions: "restart none none reset",
          scrub: 2,
        },
      })
      .from("#form", { opacity: 0, scale: 0.5, stagger: 0.15, duration: 0.5, ease: "back" })
      // .from(".btn", { opacity: 0, stagger: 0.05, duration: 0.2 }, 0)
      // .from("button", { y: 100, opacity: 0, ease: "back", duration: 1 }, "<1")
      .to("#form", {
        // skewY: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
      });
  });

  const email = ref("");
  const isValid = ref(true);
  const validateEmail = () => {
    if (
      String(email.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      isValid.value = true;
      email.value = "";
    } else {
      isValid.value = false;
      gsap
        .from("#error", {
          opacity: 0,
          duration: 0.3,
          scale: 0.5,
          ease: "back",
        })
        .to("#error", {
          scale: 1,
          opacity: 1,
        });
    }
  };
</script>
<template>
  <div class="container translate-y-[150px]">
    <div id="form" class="mx-auto mt-16 max-w-[875px] bg-darkBlueIintro text-center pt-[47px] px-[30px] md:px-[72px] pb-[60px] relative">
      <h3 class="text-[26px] font-bold font-raleway mb-[20px] md:mb-[32px]">Get early access today</h3>
      <p class="text-[14px] max-w-[624px] mx-auto mb-[20px] md:mb-[32px]">
        It only takes minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
      </p>
      <form class="flex gap-[30px] flex-col md:flex-row" @submit.prevent="validateEmail">
        <input type="text" class="flex-1 rounded-3xl indent-5 py-[13px] text-black outline-none" placeholder="email@example.com" v-model="email" />
        <button class="bg-gradient-to-r from-Cyan to-Blue py-[14px] px-[30px] rounded-3xl hover:to-Cyan font-raleway font-bold">Get Started For Free</button>
      </form>
      <p
        id="error"
        class="text-red-500 text-xs font-bold absolute bottom-[17px] md:bottom-[30px] left-1/2 md:translate-x-0 -translate-x-1/2 md:left-[150px]"
        v-show="!isValid"
      >
        Please enter a valid email address
      </p>
    </div>
  </div>
</template>

<style scoped></style>
