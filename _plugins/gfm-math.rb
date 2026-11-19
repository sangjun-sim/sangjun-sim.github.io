# frozen_string_literal: true

require 'kramdown-parser-gfm'

module Kramdown
  module Parser
    class GfmMath < GFM
      # Keep code spans separate and avoid treating the start of a price as a closing dollar.
      SINGLE_DOLLAR_MATH = /\$(?![\s$])((?:\\.|[^\\$`\n])+)(?<!\s)\$(?![\d$])/
      define_parser(:inline_dollar_math, SINGLE_DOLLAR_MATH, '\$', :parse_inline_math)

      def initialize(source, options)
        super
        @span_parsers << :inline_dollar_math
      end
    end
  end
end
