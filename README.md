# vue-postcss

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## postCSS

➜  ~ vue --version
2.9.3

vue-cli 项目已经默认集成了 postCSS, package.json 中导入 `postcss-import` `postcss-loader` `postcss-url`

在 .vue 文件中 style 标签指定使用 postcss（推荐），这样 stylelint 等规则校验工具会开启 postCSS 语法支持

插件

###`autoprefixer`

由于cssnext和cssnano都具有autoprefixer,事实上只需要一个，所以把默认的autoprefixer删除掉，然后把cssnano中的autoprefixer设置为false。著作权归作者所有。

### cssnext

[postcss-cssnext 面向未来的CSS(css4)](https://github.com/jiayisheji/blog/issues/4)

使用 css4 语法

js是定义一个变量，它是引用。他需要借助一个:root选择器

* 自定义属性 （var）

* 自定义选择器


不推荐 @apply

You are using @apply rule and custom property sets.
This feature won't be included in the next major release of postcss-cssnext

### postcss-bem 使用

[PostCSS深入学习: 结合BEM和SUIT方法使用PostCSS](https://www.w3cplus.com/PostCSS/using-postcss-with-bem-and-suit-methodologies.html)

```
npm install saladcss-bem
```

### cssnano

cssnano 主要用来压缩和清理 css 代码。

```
npm i cssnano-preset-advanced --save-dev
```

查询 `usePostCSS:true` ，配置文件中已经启用
