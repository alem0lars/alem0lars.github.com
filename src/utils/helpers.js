export function isWideScreen(theme) {
  if (typeof window !== `undefined`) {
    const windowWidth = window.innerWidth;
    const mediaQueryL = theme.mediaQueryTresholds.L;

    return windowWidth >= mediaQueryL;
  }
}

export function timeoutThrottlerHandler(timeouts, name, delay, handler) {
  if (!timeouts[name]) {
    timeouts[name] = setTimeout(() => {
      timeouts[name] = null;
      handler();
    }, delay);
  }
}
