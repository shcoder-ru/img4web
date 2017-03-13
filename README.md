# img4web
Image converter for adaptive web pages.

[![npm package](https://nodei.co/npm/img4web.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/img4web)

## Installation

First download and install [GraphicsMagick](http://www.graphicsmagick.org/) or [ImageMagick](http://www.imagemagick.org/).

##### Local installation
```sh
npm install --save-dev img4web
```

##### Global installation
```
npm install -g img4web
```

## Usage

To run the converter in command line

```sh
img4web --help
#
#  Usage: img4web [options]
#
#  Options:
#
#    -h, --help               output usage information
#    --src-dir <dir>          Specify source dir
#    --src-ext <extensions>   Specify source extensions
#    --out-dir <dir>          Specify output dir
#    --out-format <format>    Specify output format
#
```

Run the converter using

```
img4web --src-dir ./tmp/src --src-ext jpg,png,gif \
--out-dir ./tmp/out --out-format \
'sm1=ext:jpg,width:420,height:240,quality:80,strip:true,interlance:Line;\
md1=ext:jpg,width:640,height:480:quality:90,strip:true,interlance:Line'
```

To run the converter using npm, you can specify scripts in `package.json`

```json
{
  "scripts": {
    "convert-images": "img4web --src-dir ./tmp/src --src-ext jpg,png,gif --out-dir ./tmp/out --out-format 'sm1=ext:jpg,width:420,height:240,quality:80,strip:true,interlance:Line;md1=ext:jpg,width:640,height:480:quality:90,strip:true,interlance:Line'"
  }
}
```

You can specify the config in `.img4webrc`

```json
{
    srcDir: './tmp/src',
    srcExt: [ 'jpg', 'png', 'gif' ],
    outDir: './tmp/out',
    outFormat: {
        sm1: {
            ext: 'jpg',
            width: 420,
            height: 240,
            quality: 80,
            strip: true,
            interlance: 'Line'
        },
        md1: {
            ext: 'jpg',
            width: 640,
            height: 480,
            quality: 90,
            strip: true,
            interlance: 'Line'
        }
    }
}
```

Alternatively, you can specify the field `img4web` in your `package.json`

```json
{
    img4web: {
        srcDir: './tmp/src',
        srcExt: [ 'jpg', 'png', 'gif' ],
        outDir: './tmp/out',
        outFormat: {
            sm1: {
                ext: 'jpg',
                width: 420,
                height: 240,
                quality: 80,
                strip: true,
                interlance: 'Line'
            },
            md1: {
                ext: 'jpg',
                width: 640,
                height: 480,
                quality: 90,
                strip: true,
                interlance: 'Line'
            }
        }
    }
}

```

And specify scripts in `package.json`

```json
{
  "scripts": {
    "convert-images": "img4web"
  }
}
```

## Usage result

tag [picture](https://developer.mozilla.org/en/docs/Web/HTML/Element/picture)

``` html
<picture>
  <source media="(min-width: 768px)" srcset="img-sm1.jpg">
  <source media="(min-width: 992px)" srcset="img-md1.jpg">
  <img src="img.jpg">
</picture>
```

CSS media queries

``` css
.container {
    background: url(img.jpg);
}
@media (min-width: 768px) {
    .container {
        background: url(img-sm1.jpg);
    }
}
@media (min-width: 992px) {
    .container {
        background: url(img-md1.jpg);
    }
}
```

## Dependencies
[babel-core](https://www.npmjs.com/package/babel-core) * 
[babel-plugin-transform-object-rest-spread](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread) * 
[babel-polyfill](https://www.npmjs.com/package/babel-polyfill) * 
[babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) * 
[babel-preset-es2017](https://www.npmjs.com/package/babel-preset-es2017) * 
[commander](https://www.npmjs.com/package/commander) * 
[gm](https://www.npmjs.com/package/gm) * 
[mkdirp](https://www.npmjs.com/package/mkdirp) * 
[recursive-readdir](https://www.npmjs.com/package/recursive-readdir)

## Note on Patches/Pull Requests

1. Fork the project.
2. Make your feature addition or bug fix.
3. Send me a pull request.