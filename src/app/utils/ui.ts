import moment from 'moment';

export const scrollTo = (elem: HTMLElement, target: HTMLElement, customGap?: number) => {
  if (elem && target) {
    const gap = customGap || 0;
    const element = elem;
    const distance = target.offsetTop - element.scrollTop - gap;
    const pixelsPer10ms = 40;

    // If location changes, will stop scrolling
    const scrollLocation = location && location.href;

    let currentScroll = element.scrollTop;

    const animation = setInterval(() => {
      const isScrollTop = distance < 0;
      const nextScrollPosition = isScrollTop ? currentScroll - pixelsPer10ms : currentScroll + pixelsPer10ms;

      if (
        (distance > 0 && nextScrollPosition >= target.offsetTop - 10 - gap) ||
        (distance < 0 && nextScrollPosition <= target.offsetTop - 10 - gap) ||
        (location && location.href !== scrollLocation)
      ) {
        clearInterval(animation);
      } else {
        currentScroll = nextScrollPosition;
        element.scrollTop = currentScroll;
      }
    }, 10);
  }
};

export const formatDate = (date: number, absolute?: boolean, format = 'MMM Do YY') =>
  absolute ? moment(date).format(format) : moment(date).fromNow();
