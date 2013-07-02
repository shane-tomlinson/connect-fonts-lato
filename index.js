const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // Package info
  "package": {
    "name": "connect-fonts-lato",
    "homepage": "https://github.com/shane-tomlinson/connect-fonts-lato",
    "repourl": "https://github.com/shane-tomlinson/connect-fonts-lato",
    "bugsurl": false
  },

  // Package author info
  "author": {
    "name": "Shane Tomlinson",
    "emails": "shane@shanetomlinson.com,stomlinson@mozilla.com,set117@yahoo.com",
    "urls": "https://shanetomlinson.com",
    "githubs": "https://github.com/shane-tomlinson,https://github.com/stomlinson",
    "twitter": "@shane_tomlinson"
  },

  // package license info
  "license": {
    "name": "SIL Open Font License",
    "version": "1.1",
    "abbreviation": "OFL-1.1",
    "url": "http://scripts.sil.org/OFL",
    "text": "Copyright 2010, 2012 Adobe Systems Incorporated (http://www.adobe.com/), with Reserved Font Name 'Source'. Source is a trademark of Adobe Systems Incorporated in the United States and/or other countries.\n\nThis Font Software is licensed under the SIL Open Font License, Version 1.1.\n\nThis license is copied below, and is also available with a FAQ at: http://scripts.sil.org/OFL\n\n\n-----------------------------------------------------------\nSIL OPEN FONT LICENSE Version 1.1 - 26 February 2007\n-----------------------------------------------------------\n\nPREAMBLE\nThe goals of the Open Font License (OFL) are to stimulate worldwide\ndevelopment of collaborative font projects, to support the font creation\nefforts of academic and linguistic communities, and to provide a free and\nopen framework in which fonts may be shared and improved in partnership\nwith others.\n\nThe OFL allows the licensed fonts to be used, studied, modified and\nredistributed freely as long as they are not sold by themselves. The\nfonts, including any derivative works, can be bundled, embedded, \nredistributed and/or sold with any software provided that any reserved\nnames are not used by derivative works. The fonts and derivatives,\nhowever, cannot be released under any other type of license. The\nrequirement for fonts to remain under this license does not apply\nto any document created using the fonts or their derivatives.\n\nDEFINITIONS\n\"Font Software\" refers to the set of files released by the Copyright\nHolder(s) under this license and clearly marked as such. This may\ninclude source files, build scripts and documentation.\n\n\"Reserved Font Name\" refers to any names specified as such after the\ncopyright statement(s).\n\n\"Original Version\" refers to the collection of Font Software components as\ndistributed by the Copyright Holder(s).\n\n\"Modified Version\" refers to any derivative made by adding to, deleting,\nor substituting -- in part or in whole -- any of the components of the\nOriginal Version, by changing formats or by porting the Font Software to a\nnew environment.\n\n\"Author\" refers to any designer, engineer, programmer, technical\nwriter or other person who contributed to the Font Software.\n\nPERMISSION & CONDITIONS\nPermission is hereby granted, free of charge, to any person obtaining\na copy of the Font Software, to use, study, copy, merge, embed, modify,\nredistribute, and sell modified and unmodified copies of the Font\nSoftware, subject to the following conditions:\n\n1) Neither the Font Software nor any of its individual components,\nin Original or Modified Versions, may be sold by itself.\n\n2) Original or Modified Versions of the Font Software may be bundled,\nredistributed and/or sold with any software, provided that each copy\ncontains the above copyright notice and this license. These can be\nincluded either as stand-alone text files, human-readable headers or\nin the appropriate machine-readable metadata fields within text or\nbinary files as long as those fields can be easily viewed by the user.\n\n3) No Modified Version of the Font Software may use the Reserved Font\nName(s) unless explicit written permission is granted by the corresponding\nCopyright Holder. This restriction only applies to the primary font name as\npresented to the users.\n\n4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font\nSoftware shall not be used to promote, endorse or advertise any\nModified Version, except to acknowledge the contribution(s) of the\nCopyright Holder(s) and the Author(s) or with their explicit written\npermission.\n\n5) The Font Software, modified or unmodified, in part or in whole,\nmust be distributed entirely under this license, and must not be\ndistributed under any other license. The requirement for fonts to\nremain under this license does not apply to any document created\nusing the Font Software.\n\nTERMINATION\nThis license becomes null and void if any of the above conditions are\nnot met.\n\nDISCLAIMER\nTHE FONT SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT\nOF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE\nCOPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\nINCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL\nDAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\nFROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM\nOTHER DEALINGS IN THE FONT SOFTWARE.\n"
  },

  // Common font information
  "font_common": {
    "names": "lato-black,lato-blackitalic,lato-bold,lato-bolditalic,lato-hairline,lato-hairlineitalic,lato-italic,lato-light,lato-lightitalic,lato-regular",
    "description": "Lato is a sanserif typeface family designed in the Summer 2010 by Warsaw-based designer Lukasz Dziedzic (\"Lato\" means \"Summer\" in Polish). It tries to carefully balance some potentially conflicting priorities: it should seem quite \"transparent\" when used in body text but would display some original traits when used in larger sizes. The classical proportions, particularly visible in the uppercase, give the letterforms familiar harmony and elegance. At the same time, its sleek sanserif look makes evident the fact that Lato was designed in 2010, even though it does not follow any current trend. The semi-rounded details of the letters give Lato a feeling of warmth, while the strong structure provides stability and seriousness.",
    "family": "Lato",
    "copyright": "Copyright (c) 2010-2011 by tyPoland Lukasz Dziedzic with Reserved Font Name \"Lato\". Licensed under the SIL Open Font License, Version 1.1.",
    "trademark": "Lato is a trademark of tyPoland Lukasz Dziedzic.",
    "manufacturer": "tyPoland Lukasz Dziedzic",
    "url_vendor": "http://www.typoland.com/",
    "designer": "Lukasz Dziedzic",
    "url_designer": "http://www.typoland.com/designers/Lukasz_Dziedzic/"
  },


  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": {
  },

  // what font types are enabled and what are the extensions of
  // the font files.
  //
  // valid types are embedded-opentype, woff, truetype, svg
  "enabled-types": [ "eot", "woff", "ttf", "svg" ],

  // The fonts. The name of the font must be the same as the font
  // in the fonts directory.
  "fonts": {
      "lato-black": {
        "fontFamily": "Lato",
        "fontStyle": "normal",
        "fontWeight": "900",
        "local": [ "Lato Black", "Lato-Black" ]
      },
      "lato-blackitalic": {
        "fontFamily": "Lato",
        "fontStyle": "italic",
        "fontWeight": "900",
        "local": [ "Lato Black Italic", "Lato-BlackItalic" ]
      },
      "lato-bold": {
        "fontFamily": "Lato",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Lato Bold", "Lato-Bold" ]
      },
      "lato-bolditalic": {
        "fontFamily": "Lato",
        "fontStyle": "italic",
        "fontWeight": "700",
        "local": [ "Lato Bold Italic", "Lato-BoldItalic" ]
      },
      "lato-hairline": {
        "fontFamily": "Lato",
        "fontStyle": "normal",
        "fontWeight": "200",
        "local": [ "Lato Hairline", "Lato-Hairline" ]
      },
      "lato-hairlineitalic": {
        "fontFamily": "Lato",
        "fontStyle": "italic",
        "fontWeight": "200",
        "local": [ "Lato Hairline Italic", "Lato-HairlineItalic" ]
      },
      "lato-italic": {
        "fontFamily": "Lato",
        "fontStyle": "italic",
        "fontWeight": "400",
        "local": [ "Lato Italic", "Lato-Italic" ]
      },
      "lato-light": {
        "fontFamily": "Lato",
        "fontStyle": "normal",
        "fontWeight": "300",
        "local": [ "Lato Light", "Lato-Light" ]
      },
      "lato-lightitalic": {
        "fontFamily": "Lato",
        "fontStyle": "italic",
        "fontWeight": "300",
        "local": [ "Lato Light Italic", "Lato-LightItalic" ]
      },
      "lato-regular": {
        "fontFamily": "Lato",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Lato Regular", "Lato-Regular" ]
      }
  }
};
