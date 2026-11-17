# vue-gerbera

This project is just for testing deployment on Azure Storage Account through DevOps pipelines.

It is a Vue 2.7 single-page app written in TypeScript and built with Vite.
`yarn build` outputs static files to `dist/`: `index.html`, `favicon.ico`, the `app` entry in `js/`, styles in `css/` and images in `img/`, with source maps.

## Run with Docker

Requires Docker only. Node.js is not needed on the host.

```
docker build -t vue-gerbera .
docker run --rm --name vue-gerbera -p 8080:80 vue-gerbera
```

Open http://localhost:8080. Stop the container with `Ctrl+C` or `docker stop vue-gerbera`.

The `Dockerfile` runs `yarn install --frozen-lockfile` and `yarn build` (type-check included) on Node.js 26, then serves `dist/` with nginx on port 80.
`.dockerignore` keeps `node_modules`, `dist`, `.git` and local env files out of the build context.

## Requirements

- Node.js 26 (Active LTS, see `.node-version`). Node.js 24.15+ also works.
- Yarn 1.22.22 (`packageManager` in `package.json`)

`yarn install` fails on other Node.js versions because of the `engines` field.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

The development server listens on port 8080.

### Compiles and minifies for production
```
yarn build
```

`yarn build` runs `yarn type-check` first and fails when it finds type errors.

### Type-checks TypeScript files
```
yarn type-check
```

`yarn type-check` runs `vue-tsc` on `src/**/*.ts`, `src/**/*.vue` and `tests/unit/**/*.ts` (`tsconfig.json`), and on `vite.config.ts` and `tests/build/**/*.ts` (`tsconfig.node.json`).

### Runs unit tests
```
yarn test:unit
```

Tests live in `tests/` and run with Vitest and `@vue/test-utils` 1.
`tests/build/` builds the app into a temporary directory and checks the `dist/` layout.

### Lints and fixes files
```
yarn lint
```

ESLint uses `eslint.config.mjs`.

### Customize configuration
See [Vite Configuration Reference](https://vite.dev/config/) and [Vitest Configuration Reference](https://vitest.dev/config/).
