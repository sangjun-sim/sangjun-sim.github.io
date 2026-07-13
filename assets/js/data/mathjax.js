---
layout: compress
---

const mathDisplaySelector =
  'article[data-toc] > .content > mjx-container[display="true"]';
const mathTouchControllers = new WeakSet();
const touchDirectionThreshold = 8;
let mathResizeListenerInstalled = false;

const installMathTouchController = (container) => {
  if (mathTouchControllers.has(container)) {
    return;
  }

  mathTouchControllers.add(container);

  let gesture;

  container.addEventListener('touchstart', (event) => {
    if (!container.hasAttribute('data-scrollable')) {
      gesture = undefined;
      return;
    }

    if (event.touches.length !== 1) {
      gesture = undefined;
      return;
    }

    const touch = event.touches[0];

    gesture = {
      identifier: touch.identifier,
      startX: touch.clientX,
      startY: touch.clientY,
      startScrollLeft: container.scrollLeft,
      direction: undefined
    };
  });

  container.addEventListener(
    'touchmove',
    (event) => {
      if (!gesture || !container.hasAttribute('data-scrollable')) {
        return;
      }

      if (event.touches.length !== 1) {
        gesture = undefined;
        return;
      }

      const touch = Array.from(event.touches).find(
        (candidate) => candidate.identifier === gesture.identifier
      );

      if (!touch) {
        gesture = undefined;
        return;
      }

      const deltaX = touch.clientX - gesture.startX;
      const deltaY = touch.clientY - gesture.startY;

      if (!gesture.direction) {
        if (
          Math.max(Math.abs(deltaX), Math.abs(deltaY)) <
          touchDirectionThreshold
        ) {
          return;
        }

        gesture.direction =
          Math.abs(deltaX) > Math.abs(deltaY) ? 'horizontal' : 'vertical';
      }

      if (gesture.direction !== 'horizontal') {
        return;
      }

      event.preventDefault();
      container.scrollLeft = gesture.startScrollLeft - deltaX;
    },
    { passive: false }
  );

  const resetGesture = () => {
    gesture = undefined;
  };

  container.addEventListener('touchend', resetGesture);
  container.addEventListener('touchcancel', resetGesture);
};

const updateScrollableMath = () => {
  document.querySelectorAll(mathDisplaySelector).forEach((container) => {
    const isScrollable = container.scrollWidth > container.clientWidth + 1;

    container.toggleAttribute('data-scrollable', isScrollable);

    if (isScrollable) {
      installMathTouchController(container);
    }
  });
};

const installMathResizeListener = () => {
  if (mathResizeListenerInstalled) {
    return;
  }

  mathResizeListenerInstalled = true;
  window.addEventListener('resize', updateScrollableMath, { passive: true });
};

MathJax = {
  loader: {
    load: ['[tex]/mathtools']
  },
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)']
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]']
    ],
    tags: 'ams',
    packages: {
      '[+]': ['mathtools']
    }
  },
  startup: {
    pageReady() {
      return MathJax.startup.defaultPageReady().then(() => {
        updateScrollableMath();
        installMathResizeListener();
      });
    }
  }
};
