# frozen_string_literal: true

require 'jekyll'

site = Jekyll::Site.new(Jekyll.configuration('quiet' => true))
markdown = site.find_converter_instance(Jekyll::Converters::Markdown)
html = markdown.convert(<<~'MARKDOWN')
  Text $S_{i}S_{j}<x$ and $$y_0$$.

  - $\left(x_{1}\right)$

  | Formula |
  | --- |
  | $\lvert z\rvert$ |

  $$
  \begin{equation}a_1 + a_2\end{equation}
  $$

  Prices $5 and $10, escaped \$x\$, and code `$x_1$`.
MARKDOWN

[
  'Text \(S_{i}S_{j}&lt;x\) and \(y_0\).',
  '<li>\(\left(x_{1}\right)\)</li>',
  '<td>\(\lvert z\rvert\)</td>',
  '\[\begin{equation}a_1 + a_2\end{equation}\]',
  'Prices $5 and $10, escaped $x$, and code <code',
  '$x_1$</code>'
].each do |expected|
  abort "Missing #{expected.inspect} in #{html}" unless html.include?(expected)
end
