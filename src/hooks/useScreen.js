import {reactive} from "vue";

const screen = reactive({
  width: window.innerWidth,
  height: window.innerHeight,
})

export const useScreen = () => {
  window.addEventListener("resize", () => {
    screen.width = window.innerWidth
    screen.height = window.innerHeight
  });

  return {
    screen
  };
}
