export default {
  mounted(el, binding) {
    el.clickOutside = function ($event) {
      if ($event.target !== el || !el.contains($event.target)) {
        binding.value($event);
      }
    };
    document.addEventListener('click', el.clickOutside);
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutside);
  },
};
