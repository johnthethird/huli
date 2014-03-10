# Huli

Huli (Hawaiian for "search") is an autocomplete widget written in ClojureScript, and is built using CSP techniques with the core.async library.

Basically this is a re-packaging of David Nolen's (@swannodette) awesome blog post [here](http://swannodette.github.io/2013/08/17/comparative/). Mostly an excercise in learning ClojureScript and core.async, but maybe over time it can mature into a full-featured, stand-alone widget that can be dropped into any JavaScript project.


## Usage

For ease of development, a simple Ring server is included. Simply clone the repo:

```
git clone https://github.com/johnthethird/huli.git
cd huli
lein ring server
open http://localhost:3000/
```


### Copyright and license

Copyright © 2013-2014 David Nolen and John Lynch

Licensed under the EPL.

