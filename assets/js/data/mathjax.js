---
layout: compress
---

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
  }
};
