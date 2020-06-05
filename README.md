# Vue + Rollup Starter
A very simple boilerplate for creating a Vue project with single-page components. Running `npm run start` will create a single JS file and a single CSS file which can be directly attached to the main HTML file, the way our ancestors intended. It watches for any changes and automatically update the bundle. Once you're finished with development, run `npm run build` to create minified production-ready files.
 
Setting up a new frontend roject always feels like carrying a huge oversized boulder around when it really shouldn't be. The recommended scaffolding through Vue CLI is ridiculously heavy; I made this as a much lighter alternative.

Things included:
- Vue's single-page components
- Minification and ES2015-ready result through ESBuild
- Extract CSS into its own file through PostCSS
- Intended for use with PNPM, but there shouldn't be a problem if you use NPM or Yarn.

Things **not** included but you can easily add yourself:
- Server with hot-reload
- Linting
- CSS preprocessor