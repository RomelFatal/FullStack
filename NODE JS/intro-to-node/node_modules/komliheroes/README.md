## Komli Superheroes

> Get Komli superheroes names

## Install
```
$ npm install --save komliheroes
```

## Usage
```js
var komliheroes = require('komliheroes');
komliheroes.random();
//=> 'Samar Panda'
```

## API
### .all
Type: `array`

Komli heroes name in alphabetical order

### .random()
Type: `function`

Random komli hero name


## CLI

```
$ npm install --global komliheroes
```

```
$ komliheroes --help

  Examples
    $ komliheroes
    Samar Panda

    $ komliheroes --all
    Samar Panda
    Deepak David
    ...

  Options
    --all   Get all komli heroes name instead of a random komli hero name
```

## Reference

[https://github.com/sindresorhus/supervillains](https://github.com/sindresorhus/supervillains)
