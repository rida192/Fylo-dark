<script setup>
  import Support from "./Support.vue";
  import { onMounted } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#testimonials",
          start: "top 65%",
          end: "bottom top",
          toggleActions: "restart none none reset",
          scrub: 2,
        },
      })
      .from("#review", { opacity: 0, yPercent: 50, stagger: 0.15, duration: 0.5, ease: "back" })
      // .from(".btn", { opacity: 0, stagger: 0.05, duration: 0.2 }, 0)
      // .from("button", { y: 100, opacity: 0, ease: "back", duration: 1 }, "<1")
      .to("#review", {
        yPercent: 0,
        opacity: 1,
        duration: 1,
      });
  });
</script>
<template>
  <section id="testimonials" class="bg-darkBlueMain text-white pt-[100px] md:pt-[200px]">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-3 [&>div>p]:opacity-70 [&>div]:bg-darkBlueTestimonials gap-[41px] relative z-0">
        <div id="review" class="pt-[44px] px-[27px] pb-[23px] text-[14px] rounded-sm">
          <img src="../assets/bg-quotes.png" alt="" class="absolute -top-[30px] left-0 -z-[3]" />
          <p class="mb-[26px]">
            Fylo has improved our team productivity by an order of magnitude. Since marking the switch our team has become a well-oiled collaboration machine.
          </p>
          <div class="flex items-center gap-[8px]">
            <img class="w-[26px] h-[26px] rounded-full" src="../assets/profile-1.jpg" alt="" />
            <div>
              <h5 class="text-[12px]">Satish Patel</h5>
              <p class="text-[11px] opacity-70">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div id="review" class="pt-[44px] px-[27px] pb-[23px] text-[14px] rounded-sm">
          <p class="mb-[26px]">
            Fylo has improved our team productivity by an order of magnitude. Since marking the switch our team has become a well-oiled collaboration machine.
          </p>
          <div class="flex items-center gap-[8px]">
            <img class="w-[26px] h-[26px] rounded-full" src="../assets/profile-2.jpg" alt="" />
            <div>
              <h5 class="text-[12px]">Bruce McKenzle</h5>
              <p class="text-[11px] opacity-70">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div id="review" class="pt-[44px] px-[27px] pb-[23px] text-[14px] rounded-sm">
          <p class="mb-[26px]">
            Fylo has improved our team productivity by an order of magnitude. Since marking the switch our team has become a well-oiled collaboration machine.
          </p>
          <div class="flex items-center gap-[8px]">
            <img class="w-[26px] h-[26px] rounded-full" src="../assets/profile-3.jpg" alt="" />
            <div>
              <h5 class="text-[12px]">Iva Boyd</h5>
              <p class="text-[11px] opacity-70">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Support />
  </section>
</template>

<style scoped></style>
