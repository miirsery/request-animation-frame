import {reactive} from "vue";

const screen = reactive({
  width: window.innerWidth,
  height: window.innerHeight,
})

export const useWindowSize = () => {
  window.addEventListener("resize", () => {
    screen.width = window.innerWidth
    screen.height = window.innerHeight
  });

  return {
    screen
  };
}
