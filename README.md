# jpString

String manipulation NPM package.

## initial

Usage:

```js
jpString.initial(string, capital);
```

It takes in two arguments; a string of any length and a capitalization boolean.

If capital is set to true every initial will be capitalized.
If capital is set to false every initial will be set to lower case.
If there is no second argument the initials will be returned in the case of their submission.

The first argument HAS to be a string.

It returns the initials of each word that is separated by a space. The initials are returned joined.
Commas (,) and periods (.) will be returned within the initials.

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
