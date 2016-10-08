# Traverse Landing

## Install

- Make sure you have [Node.js](https://nodejs.org/en/) installed.
- Clone this project.
- Install all dependencies `npm i`

## What's inside?

- Compiling of [jade](http://jade-lang.com/) templates
- Compiling of [sass](http://sass-lang.com/)
- Creation of svg-sprite
- Autoprefixer
- JS concatenation and minification
- Image optimisation
- Automatic browser reload
- HTML validation

## File structure

- `src` - source files
- `dist` - compiled files

### Structure of the `src` folder

- `assets`
  - `styles` - styles
  - `images` - images
    - `svg` - svg-icons for sprite
  - `scripts` - general scripys
- `templates`
  - `blocks` - independent blocks
  - `layouts` - layout
  - `pages` - pages templates

### Tasks

- `npm start` - compilation of files + dev server
- `npm run prod` - compilation of files and creation of zip-archive to send to the client
- `npm run validate` - html validation
