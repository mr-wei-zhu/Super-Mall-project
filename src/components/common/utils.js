export function debounce(func, dalay) {
    //防抖动
    //防斗，debounce/节流throttle
    let timer = null;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, dalay);
    };
  }