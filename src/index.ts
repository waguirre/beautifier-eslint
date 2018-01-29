import { Beautifier, Language } from "unibeautify";
import { wrapBeautifier, AtomPackage } from "unibeautify-beautifier";
const CLIEngine = require("eslint").CLIEngine;

const pkg = require("../package.json");

export const beautifier: Beautifier = {
  name: "ESLint",
  // link: "https://github.com/eslint/eslint",
  options: {
    _: {
      // "no-extra-boolean-cast": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-extra-parens": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-extra-semi": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-regex-spaces": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-unsafe-negation": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "valid-jsdoc": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "curly": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "dot-location": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "dot-notation": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "eqeqeq": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-else-return": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-extra-bind": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-extra-label": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-floating-decimal": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-implicit-coercion": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-multi-spaces": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-unused-labels": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-useless-return": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "wrap-iife": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "yoda": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "strict": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-undef-init": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "array-bracket-newline": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "array-bracket-spacing": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "array-element-newline": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "block-spacing": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "brace-style": [
      //   ["brace_style"],
      //   function(options) {
      //
      //   }
      // ],
      // "capitalized-comments": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "comma-dangle": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      "comma-dangle": [
        ["end_with_comma"],
        function(options) {
          if (options.end_with_comma === true) {
            return [2, "always"]
          }
          else if (options.end_with_comma === false) {
            return [2, "never"]
          }
          return 0;
        }
      ],
      // "comma-style": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "computed-property-spacing": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "eol-last": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "func-call-spacing": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "function-paren-newline": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "implicit-arrow-linebreak": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "indent": [
      //   ["force_indentation"],
      //   function(options) {
      //     if (options.force_indentation === true) {
      //
      //     }
      //   }
      // ],
      // "jsx-quotes": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "key-spacing": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "keyword-spacing": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "linebreak-style": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "lines-around-comment": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "lines-between-class-members": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "multiline-comment-style": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "new-parens": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      "newline-per-chained-call": [
        ["break_chained_methods"],
        function(options) {
          if (options.break_chained_methods === true) {
            return [2, {"ignoreChainWithDepth": 2 }]
          }
          return 0;
        }
      ],
      // "no-lonely-if": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-multiple-empty-lines": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      "no-trailing-spaces": [
        ["remove_trailing_whitespace"],
        function(options) {
          if (options.remove_trailing_whitespace === true) {
            return [2, {"skipBlankLines": true, "ignoreComments": true}]
          } else if (options.remove_trailing_whitespace === false) {
            return [2, {"skipBlankLines": false, "ignoreComments": false}]
          }
          return 0;
        }
      ],
      // "no-unneeded-ternary": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-whitespace-before-property": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "nonblock-statement-body-position": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "object-curly-newline": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      "object-curly-spacing": [
        ["object_curly_spacing"],
        function(options) {
          if (options.object_curly_spacing === true) {
            return [2, "always"]
          } else if (options.object_curly_spacing === false) {
            return [2, "never"]
          }
          return 0;
        }
      ],
      // "object-property-newline": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "one-var-declaration-per-line": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "operator-assignment": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "operator-linebreak": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "padded-blocks": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "padding-line-between-statements": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "quote-props": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      "quotes": [
        ["convert_quotes"],
        function(options) {
          if (options.convert_quotes === "none") {
            return 0;
          } else {
            return [2, options.convert_quotes]
          }
        }
      ],
      "semi": [
        ["end_with_semicolon"],
        function(options) {
          if (options.end_with_semicolon === true) {
            return [2, "always"]
          } else if (options.end_with_semicolon === true) {
            return [2, "never"]
          }
          return 0;
        }
      ],
      // "semi-spacing": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "semi-style": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "sort-vars": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "space-before-blocks": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "space-before-function-paren": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "space-in-parens": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "space-infix-ops": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "space-unary-ops": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "spaced-comment": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "switch-colon-spacing": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "template-tag-spacing": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "unicode-bom": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "wrap-regex": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "arrow-body-style": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      "arrow-parens": [
        ["arrow_parens"],
        function(options) {
          if(options.arrow_parens) {
            return [2, options.arrow_parens]
          }
          return 0;
        }
      ],
      // "arrow-spacing": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "generator-star-spacing": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-confusing-arrow": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-useless-computed-key": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-useless-rename": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "no-var": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "object-shorthand": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "prefer-arrow-callback": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "prefer-const": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "prefer-numeric-literals": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "prefer-spread": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "prefer-template": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "rest-spread-spacing": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "sort-imports": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "template-curly-spacing": [
      //   [""],
      //   function(options) {
      //   }
      // ],
      // "yield-star-spacing": [
      //   [""],
      //   function(options) {
      //   }
      // ]
    },
    JSX: true,
    JavaScript: true
  },
  beautify(data) {
    return new Promise<string>((resolve, reject) => {
      const cli = new CLIEngine({
        fix: true,
        rules: data.options
      });
      const text = cli.executeOnText(data.text).results[0].output;
      if (text) {
        return resolve(text);
      }
      else {
        return resolve(data.text);
      }
    });
  }
};

export function provideBeautifier() {
  return beautifier;
}

const config = {};

const wrappedBeautifier: Beautifier | AtomPackage = wrapBeautifier(
  pkg,
  beautifier,
  config
);
export { Beautifier, AtomPackage };
export default wrappedBeautifier;