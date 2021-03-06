---
title: Modules in Javascript
description: Notes for myself
date: 2021-02-15
tags:
  - javascript
  - ES-6
layout: layouts/post.njk
---

Contents
========

[Reasons for Modules](#reasons-for-modules)

[Using Modules - Three Approaches](#using-modules---three-approaches)

[Module Pattern](#module-pattern)

-   [Anonymous Closure](#anonymous-closure)
-   [Global Import](#global-import)
-   [Object Interface or Module Export](#object-interface-or-module-export)
-   [Revealing Module](#revealing-module)

[Resources](#resources)


Reasons for Modules
===================

-   maintainability
-   namespacing
-   reusability

Using Modules - Three Approaches
================================

Module Pattern
--------------

### Anonymous Closure

      
      (function () {
        // ... all vars and functions are in this scope only
        // still maintains access to all globals
      }());
      
      

An anonymous closure has its own evaluation environment \-- the scope of
the anonymous function protects variables inside the closure. You can
use variables inside the closure without fear of overwriting global
variables, but you still have access to any global variables.

Note that the \"()\" around the anonymous function is required, because
any statement that begins with `function` is always considered to be a
**function declaration**.

See the Pen
[d21b316c6b5b95bc12d64fada9b1a2e6](https://codepen.io/cediorio/pen/d21b316c6b5b95bc12d64fada9b1a2e6)
by Chris D\'Iorio ([\@cediorio](https://codepen.io/cediorio)) on
[CodePen](https://codepen.io).

### Global Import

      
      (function ($, YAHOO) {
          // now have access to globals jQuery (as $) and YAHOO in this code
      }(jQuery, YAHOO));
      
      

A global import both makes the import/use of globals in the closure
explicit and also makes the code run faster (presumably because the
interpreter does not have to climb back up the chain to find the global
variable).

See the Pen [Global Import](https://codepen.io/cediorio/pen/NWWWjXj) by
Chris D\'Iorio ([\@cediorio](https://codepen.io/cediorio)) on
[CodePen](https://codepen.io).


### Object Interface or Module Export

      
      var MODULE = (function () {
        var   myVar             = {},         
              privateVariable   = 1;

        function privateMethod() {
          // ...
        }

        my.moduleProperty = 1;
        my.moduleMethod = function () {
          // ...
        };

        return myVar;
      }());
      
      

With this module pattern, you actually declare a global module with
public properties. The example above has a public property
\"moduleProperty\" and a public method \"moduleMethod\". It also has a
\"privateVariable\" and a \"privateMethod\" that have private internal
state because of the closure provided by the anonymous function. Note
that you could also pass in a global variable using the \"Global
Import\" method noted above.

See the Pen [Object
Interface](https://codepen.io/cediorio/pen/427ac5da267d1e24bf7d91b05ac3503b)
by Chris D\'Iorio ([\@cediorio](https://codepen.io/cediorio)) on
[CodePen](https://codepen.io).

### Revealing Module

      
        var revealingModule = (function(){
          var privateVar  =   "private variable",
              publicVar   =   "public variable";
          
          function privateFunction(){
            return privateVar;
          }
          
          function setVar(e) {
            privateVar = e;
          }
          
          function getVar(){
            privateFunction();
          }
          
          // reveal public pointers to private functions and properties
          return {
            setVar: publicSetVar,
            value: publicVar,
            getVar: publicGetVar
          };
        })();
        
        RevealingModule.publicFunction();
      
      

The Revealing Module pattern creates public pointers to private
functions, which means that

See the Pen [Revealing Module](https://codepen.io/cediorio/pen/abbbyMY)
by Chris D\'Iorio ([\@cediorio](https://codepen.io/cediorio)) on
[CodePen](https://codepen.io).


Resources
=========

-   [JavaScript Modules: A Beginner's
    Guide](https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/#.y8hs0nsne)
-   [JavaScript Module
    Pattern](https://medium.com/@tkssharma/javascript-module-pattern-b4b5012ada9f)
-   [JavaScript Module Pattern:
    In-Depth](https://www.nilovelez.com/2018/06/javascript-module-pattern-in-depth/)
-   [Learning JavaScript Design
    Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)
