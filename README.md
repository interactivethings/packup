# Packup

Work in progress. Most of the things below are not yet implemented.

## Options

- `--port`: Specify a server port (Default: any free port starting from 8080)
- `--config`: Use a configuration file

### Configuration file

Through the `--config` option, a configuration file can be supplied. Currently only the `entry` key is supported to specify multiple entry files. For example:

```js
module.exports = {
  entry: {
    app: './index',
    foo: './foo'
  }
}
```

## Goals

### Easy usage

No configuration needed.

- Provide a hot-reloading enabled development server without the boilerplate
- Provide a default set of webpack loaders
- Provide a default set of NPM packages (less is more)
- Always route all routes to the app, to enable HTML5 pushState routing

### Advanced usage

Enable some or complete configuration.

- Allow extension of default webpack config
- Allow use of a completely separate webpack config
- Allow easy replacement through webpack itself

## Global install (good for quick no-config experiments)

    npm install packup -g
    packup main.js

## Local install (good for serious projects)

    npm install packup --save-dev
    node_modules/.bin/packup main.js

## See also

- [react-heatpack](https://github.com/insin/react-heatpack) is the main inspiration but different enough in goals and implementation.
