# vue-gerbera

This project is just for testing deployment on Azure Storage Account through DevOps pipelines.

It is a Vue 2 single-page app built with Vue CLI 4 and written in TypeScript.
`yarn build` outputs static files to `dist/`.

## Requirements

- Node.js 16 (the webpack 4 toolchain used by Vue CLI 4 does not build on Node.js 17+)
- Yarn 1

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Type-checks TypeScript files
```
yarn type-check
```

`yarn type-check` runs `tsc` on `src/**/*.ts` and `tests/**/*.ts`.
The `<script lang="ts">` blocks in `.vue` files are type-checked by
`@vue/cli-plugin-typescript` during `yarn serve` and `yarn build`; `yarn build`
fails when they contain type errors.

### Runs unit tests
```
yarn test:unit
```

Unit tests live in `tests/unit/` and run with Jest, `ts-jest` and `vue-jest`.

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
