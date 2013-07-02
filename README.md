# connect-fonts-lato

Lato fontpack for [connect-fonts](https://github.com/shane-tomlinson/connect-fonts).

## Usage

1. Include [connect-fonts](https://github.com/shane-tomlinson/connect-fonts) in a node module.
```js
const font_middleware = require("connect-fonts");
```

2. Include the font packs that you want to serve.
```js
const font_pack  = require("connect-fonts-lato");
```

3. Add a middleware by calling the `setup` function.
```js
    app.use(font_middleware.setup({
      fonts: [ font_pack ],
      allow_origin: "https://exampledomain.com"
    }));
```

4. Add a link tag to include the font CSS.
```html
<link href="/lato-black/fonts.css" type="text/css" rel="stylesheet"/ >
```

Multiple fonts from the family can be included by using a comma separated list of fonts:
```html
<link href="/lato-black,lato-blackitalic,lato-bold,lato-bolditalic,lato-hairline,lato-hairlineitalic,lato-italic,lato-light,lato-lightitalic,lato-regular/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available fonts:
* lato-black
* lato-blackitalic
* lato-bold
* lato-bolditalic
* lato-hairline
* lato-hairlineitalic
* lato-italic
* lato-light
* lato-lightitalic
* lato-regular

Locale-optimised font sets can be served by specifying the locale in the fonts.css URL.
```html
<link href="/latin/lato-black/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available subsets:
* latin

5. Set your CSS up to use the new font by using the "Lato" font-family.
```
    body {
      font-family: 'Lato', 'sans-serif', 'serif';
    }
```

## Font Info
Lato

* Description: Lato is a sanserif typeface family designed in the Summer 2010 by Warsaw-based designer Lukasz Dziedzic ("Lato" means "Summer" in Polish). It tries to carefully balance some potentially conflicting priorities: it should seem quite "transparent" when used in body text but would display some original traits when used in larger sizes. The classical proportions, particularly visible in the uppercase, give the letterforms familiar harmony and elegance. At the same time, its sleek sanserif look makes evident the fact that Lato was designed in 2010, even though it does not follow any current trend. The semi-rounded details of the letters give Lato a feeling of warmth, while the strong structure provides stability and seriousness.
* Copyright: Copyright (c) 2010-2011 by tyPoland Lukasz Dziedzic with Reserved Font Name "Lato". Licensed under the SIL Open Font License, Version 1.1.
* Trademark: Lato is a trademark of tyPoland Lukasz Dziedzic.
* Designer: Lukasz Dziedzic
* Designer URL: http://www.typoland.com/designers/Lukasz_Dziedzic/ 
* Vendor: tyPoland Lukasz Dziedzic
* Vendor URL: http://www.typoland.com/

## Development Info
* Homepage: https://github.com/shane-tomlinson/connect-fonts-lato
* Repo: https://github.com/shane-tomlinson/connect-fonts-lato

## Author
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* https://github.com/shane-tomlinson
* https://github.com/stomlinson
* @shane_tomlinson


## License

Software: Licenced under version 2.0 of the MPL

  https://www.mozilla.org/MPL/

Fonts: Licensed under version 1.1 of the SIL Open Font License

  http://scripts.sil.org/OFL

