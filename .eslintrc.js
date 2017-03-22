"use strict";

module.exports = {
  globals: {
    AudioPlayer: true,
    Playlist: true,
    Element: true,
    Utils: true
  },
  env: {
    es6: true,
    browser: true
  },
  "rules": {
    // Disallow using variables outside the blocks they are defined (especially
    // since only let and const are used, see "no-var").
    "block-scoped-var": 2,
    // Enforce one true brace style (opening brace on the same line) and avoid
    // start and end braces on the same line.
    "brace-style": [2, "1tbs", {"allowSingleLine": false}],
    // Require camel case names
    "camelcase": 2,
    // Allow trailing commas for easy list extension.  Having them does not
    // impair readability, but also not required either.
    "comma-dangle": 0,
    // Enforce spacing before and after comma
    "comma-spacing": [2, {"before": false, "after": true}],
    // Enforce one true comma style.
    "comma-style": [2, "last"],
    // Warn about cyclomatic complexity in functions.
    "complexity": [2, 35],
    // Require return statements to either always or never specify values.
    "consistent-return": 2,
    // Don't warn for inconsistent naming when capturing this (not so important
    // with auto-binding fat arrow functions).
    "consistent-this": 0,
    // Enforce curly brace conventions for all control statements.
    "curly": 2,
    // Don't require a default case in switch statements. Avoid being forced to
    // add a bogus default when you know all possible cases are handled.
    "default-case": 0,
    // Enforce dots on the next line with property name.
    "dot-location": [2, "property"],
    // Encourage the use of dot notation whenever possible.
    "dot-notation": 2,
    // Enforce newline at the end of file, with no multiple empty lines.
    "eol-last": 2,
    // Allow using == instead of ===, in the interest of landing something since
    // the devtools codebase is split on convention here.
    "eqeqeq": 0,
    // Don't require function expressions to have a name.
    // This makes the code more verbose and hard to read. Our engine already
    // does a fantastic job assigning a name to the function, which includes
    // the enclosing function name, and worst case you have a line number that
    // you can just look up.
    "func-names": 0,
    // Allow use of function declarations and expressions.
    "func-style": 0,
    // Deprecated, will be removed in 1.0.
    "generator-star": 0,
    // Enforce the spacing around the * in generator functions.
    "generator-star-spacing": [2, "after"],
    // Deprecated, will be removed in 1.0.
    "global-strict": 0,
    // Only useful in a node environment.
    "handle-callback-err": 0,
    // Tab width.
    "indent": [2, 2, {"SwitchCase": 1}],
    // Enforces spacing between keys and values in object literal properties.
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
    // Allow mixed 'LF' and 'CRLF' as linebreaks.
    "linebreak-style": 0,
    // Don't enforce the maximum depth that blocks can be nested. The complexity
    // rule is a better rule to check this.
    "max-depth": 0,
    // Maximum length of a line.
    "max-len": [2, 90, 2, {"ignoreUrls": true, "ignorePattern": "data:image\/|\\s*require\\s*\\(|^\\s*loader\\.lazy|-\\*-"}],
    // Maximum depth callbacks can be nested.
    "max-nested-callbacks": [2, 3],
    // Don't limit the number of parameters that can be used in a function.
    "max-params": 0,
    // Don't limit the maximum number of statement allowed in a function. We
    // already have the complexity rule that's a better measurement.
    "max-statements": 0,
    // Require a capital letter for constructors, only check if all new
    // operators are followed by a capital letter. Don't warn when capitalized
    // functions are used without the new operator.
    "new-cap": [2, {"capIsNew": false}],
    // Disallow the omission of parentheses when invoking a constructor with no
    // arguments.
    "new-parens": 2,
    // Disallow use of the Array constructor.
    "no-array-constructor": 2,
    // Allow use of bitwise operators.
    "no-bitwise": 0,
    // Disallow use of arguments.caller or arguments.callee.
    "no-caller": 2,
    // Disallow the catch clause parameter name being the same as a variable in
    // the outer scope, to avoid confusion.
    "no-catch-shadow": 2,
    // Deprecated, will be removed in 1.0.
    "no-comma-dangle": 0,
    // Disallow assignment in conditional expressions.
    "no-cond-assign": 2,
    // Allow using the console API.
    "no-console": 0,
    // Allow using constant expressions in conditions like while (true)
    "no-constant-condition": 0,
    // Allow use of the continue statement.
    "no-continue": 0,
    // Disallow control characters in regular expressions.
    "no-control-regex": 2,
    // Disallow use of debugger.
    "no-debugger": 2,
    // Disallow deletion of variables (deleting properties is fine).
    "no-delete-var": 2,
    // Allow division operators explicitly at beginning of regular expression.
    "no-div-regex": 0,
    // Disallow duplicate arguments in functions.
    "no-dupe-args": 2,
    // Disallow duplicate keys when creating object literals.
    "no-dupe-keys": 2,
    // Disallow a duplicate case label.
    "no-duplicate-case": 2,
    // Disallow else after a return in an if. The else around the second return
    // here is useless:
    // if (something) { return false; } else { return true; }
    "no-else-return": 2,
    // Disallow empty statements. This will report an error for:
    // try { something(); } catch (e) {}
    // but will not report it for:
    // try { something(); } catch (e) { /* Silencing the error because ...*/ }
    // which is a valid use case.
    "no-empty": 2,
    // Disallow the use of empty character classes in regular expressions.
    "no-empty-character-class": 2,
    // Disallow use of eval(). We have other APIs to evaluate code in content.
    "no-eval": 2,
    // Disallow assigning to the exception in a catch block.
    "no-ex-assign": 2,
    // Disallow adding to native types
    "no-extend-native": 2,
    // Disallow unnecessary function binding.
    "no-extra-bind": 2,
    // Disallow double-negation boolean casts in a boolean context.
    "no-extra-boolean-cast": 2,
    // Allow unnecessary parentheses, as they may make the code more readable.
    "no-extra-parens": 0,
    // Disallow unnecessary semicolons.
    "no-extra-semi": 2,
    // Deprecated, will be removed in 1.0.
    "no-extra-strict": 0,
    // Disallow fallthrough of case statements, except if there is a comment.
    "no-fallthrough": 2,
    // Allow the use of leading or trailing decimal points in numeric literals.
    "no-floating-decimal": 0,
    // Disallow comments inline after code.
    "no-inline-comments": 2,
    // Disallow if as the only statement in an else block.
    "no-lonely-if": 2,
    // Allow mixing regular variable and require declarations (not a node env).
    "no-mixed-requires": 0,
    // Disallow mixed spaces and tabs for indentation.
    "no-mixed-spaces-and-tabs": 2,
    // Disallow use of multiple spaces (sometimes used to align const values,
    // array or object items, etc.). It's hard to maintain and doesn't add that
    // much benefit.
    "no-multi-spaces": 2,
    // Disallow use of multiline strings (use template strings instead).
    "no-multi-str": 2,
    // Disallow multiple empty lines.
    "no-multiple-empty-lines": [2, {"max": 1}],
    // Disallow reassignments of native objects.
    "no-native-reassign": 2,
    // Disallow nested ternary expressions, they make the code hard to read.
    "no-nested-ternary": 2,
    // Allow use of new operator with the require function.
    "no-new-require": 0,
    // Disallow use of octal literals.
    "no-octal": 2,
    // Allow reassignment of function parameters.
    "no-param-reassign": 0,
    // Allow string concatenation with __dirname and __filename (not a node env).
    "no-path-concat": 0,
    // Allow use of unary operators, ++ and --.
    "no-plusplus": 0,
    // Allow using process.env (not a node environment).
    "no-process-env": 0,
    // Allow using process.exit (not a node environment).
    "no-process-exit": 0,
    // Disallow usage of __proto__ property.
    "no-proto": 2,
    // Disallow declaring the same variable more than once (we use let anyway).
    "no-redeclare": 2,
    // Disallow multiple spaces in a regular expression literal.
    "no-regex-spaces": 2,
    // Allow reserved words being used as object literal keys.
    "no-reserved-keys": 0,
    // Don't restrict usage of specified node modules (not a node environment).
    "no-restricted-modules": 0,
    // Disallow use of assignment in return statement. It is preferable for a
    // single line of code to have only one easily predictable effect.
    "no-return-assign": 2,
    // Allow use of javascript: urls.
    "no-script-url": 0,
    // Disallow comparisons where both sides are exactly the same.
    "no-self-compare": 2,
    // Disallow use of comma operator.
    "no-sequences": 2,
    // Warn about declaration of variables already declared in the outer scope.
    // This isn't an error because it sometimes is useful to use the same name
    // in a small helper function rather than having to come up with another
    // random name.
    // Still, making this a warning can help people avoid being confused.
    "no-shadow": 2,
    // Disallow shadowing of names such as arguments.
    "no-shadow-restricted-names": 2,
    // Deprecated, will be removed in 1.0.
    "no-space-before-semi": 0,
    // Disallow space between function identifier and application.
    "no-spaced-func": 2,
    // Disallow sparse arrays, eg. let arr = [,,2].
    // Array destructuring is fine though:
    // for (let [, breakpointPromise] of aPromises)
    "no-sparse-arrays": 2,
    // Allow use of synchronous methods (not a node environment).
    "no-sync": 0,
    // Allow the use of ternary operators.
    "no-ternary": 0,
    // Disallow throwing literals (eg. throw "error" instead of
    // throw new Error("error")).
    "no-throw-literal": 2,
    // Disallow trailing whitespace at the end of lines.
    "no-trailing-spaces": 2,
    // Disallow use of undeclared variables unless mentioned in a /*global */
    // block. Note that globals from head.js are automatically imported in tests
    // by the import-headjs-globals rule form the mozilla eslint plugin.
    "no-undef": 2,
    // Allow dangling underscores in identifiers (for privates).
    "no-underscore-dangle": 0,
    // Allow use of undefined variable.
    "no-undefined": 0,
    // Disallow the use of Boolean literals in conditional expressions.
    "no-unneeded-ternary": 2,
    // Disallow unreachable statements after a return, throw, continue, or break
    // statement.
    "no-unreachable": 2,
    // Disallow global and local variables that aren't used, but allow unused function arguments.
    "no-unused-vars": [2, {"vars": "all", "args": "none"}],
    // Allow using variables before they are defined.
    "no-use-before-define": 0,
    // We use var-only-at-top-level instead of no-var as we allow top level
    // vars.
    "no-var": 0,
    // Allow using TODO/FIXME comments.
    "no-warning-comments": 0,
    // Disallow use of the with statement.
    "no-with": 2,
    // Require method and property shorthand syntax for object literals.
    "object-shorthand": 2,
    // Allow more than one variable declaration per function.
    "one-var": 0,
    // Disallow padding within blocks.
    "padded-blocks": [2, "never"],
    // Don't require quotes around object literal property names.
    "quote-props": 0,
    // Double quotes should be used.
    "quotes": [2, "double", "avoid-escape"],
    // Don't require use of the second argument for parseInt().
    "radix": 0,
    // Always require use of semicolons wherever they are valid.
    "semi": [2, "always"],
    // Enforce spacing after semicolons.
    "semi-spacing": [2, {"before": false, "after": true}],
    // Don't require to sort variables within the same declaration block.
    // Anyway, one-var is disabled.
    "sort-vars": 0,
    // Deprecated, will be removed in 1.0.
    "space-after-function-name": 0,
    // Require a space around all keywords.
    "keyword-spacing": 2,
    // Require a space before the start brace of a block.
    "space-before-blocks": [2, "always"],
    // Deprecated, will be removed in 1.0.
    "space-before-function-parentheses": 0,
    // Require space after keyword for anonymous functions, but disallow space
    // after name of named functions.
    "space-before-function-paren": [2, {"anonymous": "never", "named": "never"}],
    // Disable the rule that checks if spaces inside {} and [] are there or not.
    // Our code is split on conventions, and it'd be nice to have 2 rules
    // instead, one for [] and one for {}. So, disabling until we write them.
    "space-in-brackets": 0,
    // Disallow spaces inside parentheses.
    "space-in-parens": [2, "never"],
    // Require spaces around operators, except for a|0.
    "space-infix-ops": [2, {"int32Hint": true}],
    // Require spaces before/after unary operators (words on by default,
    // nonwords off by default).
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    // Deprecated, will be removed in 1.0.
    "space-unary-word-ops": 0,
    // Require a space immediately following the // in a line comment.
    "spaced-comment": [2, "always"],
    // Require "use strict" to be defined globally in the script.
    "strict": [2, "global"],
    // Disallow comparisons with the value NaN.
    "use-isnan": 2,
    // Warn about invalid JSDoc comments.
    // Disabled for now because of https://github.com/eslint/eslint/issues/2270
    // The rule fails on some jsdoc comments like in:
    // devtools/client/webconsole/console-output.js
    "valid-jsdoc": 0,
    // Ensure that the results of typeof are compared against a valid string.
    "valid-typeof": 2,
    // Allow vars to be declared anywhere in the scope.
    "vars-on-top": 0,
    // Don't require immediate function invocation to be wrapped in parentheses.
    "wrap-iife": 0,
    // Don't require regex literals to be wrapped in parentheses (which
    // supposedly prevent them from being mistaken for division operators).
    "wrap-regex": 0,
    // Disallow Yoda conditions (where literal value comes first).
    "yoda": 2,

    // And these are the rules that haven't been discussed so far, and that are
    // disabled for now until we introduce them, one at a time.

    // Require for-in loops to have an if statement.
    "guard-for-in": 0,
    // allow/disallow an empty newline after var statement
    "newline-after-var": 0,
    // disallow the use of alert, confirm, and prompt
    "no-alert": 0,
    // disallow comparisons to null without a type-checking operator
    "no-eq-null": 0,
    // disallow overwriting functions written as function declarations
    "no-func-assign": 0,
    // disallow use of eval()-like methods
    "no-implied-eval": 0,
    // disallow function or variable declarations in nested blocks
    "no-inner-declarations": 0,
    // disallow invalid regular expression strings in the RegExp constructor
    "no-invalid-regexp": 0,
    // disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": 0,
    // disallow usage of __iterator__ property
    "no-iterator": 0,
    // disallow labels that share a name with a variable
    "no-label-var": 0,
    // disallow use of labeled statements
    "no-labels": 2,
    // disallow unnecessary nested blocks
    "no-lone-blocks": 0,
    // disallow creation of functions within loops
    "no-loop-func": 0,
    // disallow negation of the left operand of an in expression
    "no-negated-in-lhs": 0,
    // disallow use of new operator when not part of the assignment or
    // comparison
    "no-new": 0,
    // disallow use of new operator for Function object
    "no-new-func": 0,
    // disallow use of the Object constructor
    "no-new-object": 0,
    // disallows creating new instances of String,Number, and Boolean
    "no-new-wrappers": 0,
    // disallow the use of object properties of the global object (Math and
    // JSON) as functions
    "no-obj-calls": 0,
    // disallow use of octal escape sequences in string literals, such as
    // var foo = "Copyright \251";
    "no-octal-escape": 0,
    // disallow use of undefined when initializing variables
    "no-undef-init": 0,
    // disallow usage of expressions in statement position
    "no-unused-expressions": 0,
    // disallow use of void operator
    "no-void": 0,
    // disallow wrapping of non-IIFE statements in parens
    "no-wrap-func": 0,
    // require assignment operator shorthand where possible or prohibit it
    // entirely
    "operator-assignment": 0,
    // enforce operators to be placed before or after line breaks
    "operator-linebreak": 0,
    // enforce quote around keys
    "quote-props": ["error", "consistent-as-needed"],
  }
}