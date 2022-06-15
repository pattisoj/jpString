# jpString

![](https://img.shields.io/github/issues/pattisoj/jpString?style=plastic)
![](https://img.shields.io/github/forks/pattisoj/jpString?style=plastic)
![](https://img.shields.io/github/stars/pattisoj/jpString?style=plastic)
![](https://img.shields.io/npm/v/jp-string?style=plastic)
![](https://img.shields.io/github/license/pattisoj/jpString?style=plastic)

A string manipulation NPM package. Designed to allow for various string alterations in javascript.

# Installation & Usage

Install the package with npm

```js
npm i jp-string
```

Import the package to your file

```js
const jpString = require("jpString")
```

Use the function you need by accessing it through the jpString object

```js
jpString.initial(string, capital);
```

## initial

Usage:

```js
jpString.initial(string, capital);
```

It takes in two arguments; a string of any length and a boolean.

If capital is set to true every initial will be capitalized.
If capital is set to false every initial will be set to lower case.
If there is no second argument the initials will be returned in the case of their submission.

The first argument HAS to be a string.

It returns the initials of each word that is separated by a space. The initials are returned joined.
Special characters such as £$%^ are ignored but numbers are returned.
Commas (,) and periods (.) that are not spaced will be returned within the initials.

Example:

```js
jpString.initial("john smith");
// will return unchanged initials 'js'
```

```js
jpString.initial("john Smith", true);
// will return capitalized initials 'JS'
```

```js
jpString.initial("John Smith. Mary Jane", false);
// will return lower case initials with periods 'js.mj'
// this is also true with commas
```

```js
jpString.initial("$£John Smith , Mary 1Jane");
// will return unchanged initials without the comma or $£ 'JSM1'
// this is also true with periods
```
