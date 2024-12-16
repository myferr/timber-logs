![license](https://img.shields.io/npm/l/timber-logs) ![latest](https://img.shields.io/npm/v/timber-logs)

A simple logging utility for Node.js

- [Introduction](#introduction)
- [Features](#Features)
- [Options](#Options)

# Introduction

**timber-logs** is a simple logging utility for Node.js applications, **timber-logs** is useful for debugging, colored logs, and whatever else you can think of.

It provides multiple log types, colors, and optional icons to match the log type provided.

# Options

**timber-logs** offers multiple options to customize your logs.

#### `color` (string)

To customize the color of your logs you can use the following code

```js
timber.log("Hello, World!", {
  color: "red",
});
```

There are nine colors

- default (no color)
- black
- red
- green
- yellow
- blue
- purple
- cyan
- white

#### `filled` (boolean)

If filled is set to `true` then your color is set on the background and not the foreground.

```js
timber.log("Hello, World!", {
  color: "yellow",
  filled: true,
});
```

#### `type` (string)

You can provide a type to customize the type of log, it overrides the color field and add an optional icon next to the text content of your log.

An example of using this `type` field is

```js
timber.log("JavaScript has it's own Wikipedia page?", {
  type: "info",
});
```

There are five types

- default (no type)
- success
- info
- warn
- fatal (error)

You can add a icon using the `icon` field.

#### `icon` (boolean)

The `icon` field is a `true` or `false` condition that adds an icon next to your log when set to `true`, the icon only appears when a `type` is set.

| Type        | Icon |
| ----------- | ---- |
| \`default\` |      |
| \`success\` | ✓    |
| \`info\`    | 🛈    |
| \`warn\`    | ⚠    |
| \`fatal\`   | ✗    |

```js
timber.log("You don't have that permission.", {
  type: "fatal",
  icon: true,
});
```
