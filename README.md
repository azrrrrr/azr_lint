#  使用lint提高代码质量


> 使用Lint工具和代码风格检测工具，可以辅助编码规范执行，有效控制代码质量。在团队协作时，良好的代码规范显得格外重要，这是保障一个团队代码风格相同、避免低级bug的途径之一。

# ESlint

## 基本了解

###  Link

- [中文Link](http://eslint.cn/)
- [英语Link](https://eslint.org/)

### 优势

1. 规则的开启和禁用比较好。
2. [ESLint的文档很完善](http://eslint.org/)。
3. 内置检查规则，可自定义规则。
4. 可以集成到开发工具中，Webstorm、VSCode等。

## 简单使用

### 安装

> 依赖环境是 [Node.js](https://nodejs.org/en/) (>=4.x), npm version 2+。

#### 全局安装

1. 安装

   ```
   $ npm i eslint -g
   ```

2. 配置文件

   ````javascript
   $ eslint --init
   ````

3. 运行```ESlint```

   ```javascript
   $ eslint yourfile.js 
   ```

   > 使用全局安装的时候，所有的插件也必须全局安装。

####  本地安装

1. 安装

   ```
   $ npm i eslint -D
   ```

1. 配置文件

   ```javascript
   $ eslint --init
   ```

2. 运行```ESlint```

   ```javascript
   $ eslint yourfile.js 
   ```

> 如果执行脚本写在package.json中，本地安装就可以。如果要生成eslint的配置文件，必须安装全局包。

### 配置

> 可查看[文档](http://eslint.cn/docs/user-guide/getting-started)

#### 1. 初始化。

```javascript
$ npm init
```
package.json
```javascript
{
  "name": "lint-eslint-dome",
  "version": "1.0.0",
  "description": "ESlint -Dome",
  "main": "index.js",
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "azr"
  ],
  "author": "Azr",
  "license": "ISC"
}
```

#### 2. 安装。

```javascript
$ npm i enlint -D
```
package.json
```javascript
{
  "name": "lint-eslint-dome",
  "version": "1.0.0",
  "description": "ESlint -Dome",
  "main": "index.js",
  "dependencies": {
    "eslint": "^5.9.0"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "azr"
  ],
  "author": "Azr",
  "license": "ISC"
}
```

#### 3. 配置。

```javascript
$ eslint --init
```

控制台

```javascript
$  Lint-ESlint-Dome eslint --init
#  以问答的形式创建配置文件
? How would you like to configure ESLint? Answer questions about your style
#  使用哪一个版本的ECMAScript   ES6(ES2015)
? Which version of ECMAScript do you use? ES2015
#  是否校验 Es6 模块语法
? Are you using ES6 modules? Yes
#  代码运行环境  Browser(浏览器)
? Where will your code run? (Press <space> to select, <a> to toggle all, <i> to 
invert selection)Browser
#  是否校验 CommonJs 语法
? Do you use CommonJS? Yes
#  是否校验 JSX 语法
? Do you use JSX? Yes
#  是否校验 React 语法
? Do you use React? No
#  首行空白使用 Tab / Space
? What style of indentation do you use? Tabs
#  字符串使用单引号 'string' 还是双引号 "string"
? What quotes do you use for strings? Single
#  操作系统是什么
? What line endings do you use? Unix
#  每行代码结尾是否校验加分号；
? Do you require semicolons? Yes
#  使用什么格式来生成配置文件  .js  我比较喜欢使用js文件
? What format do you want your config file to be in? JavaScript

Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint@latest
Successfully created .eslintrc.js file in /Users/amor/Desktop/Lint-ESlint-Dome
ESLint was installed locally. We recommend using this local copy instead of your globally-installed copy.
```

.eslintrc.js

```javascript
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
```

> 可查看[文档](https://eslint.cn/docs/user-guide/configuring)

####  5. 配置忽略目录。

创建```.eslintignore ```

```javascript
dist/
```

> 可查看[文档](https://cn.eslint.org/docs/user-guide/configuring#ignoring-files-and-directories)

#### 6. 验证。

在`package.json`中配置`scripts`来验证

```javascript
{
  //  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint src"
  },
  // ...
}
```

### 使用

1. 新建```scr/index.js```

   ```javascript
   const lint = "eslint"
   ```

   运行

   ```javascript
   $ npm run lint 
   ```

   控制台

   ```	javascript
   ➜  Lint-ESlint-Dome npm run lint
   
   > lint-eslint-dome@1.0.0 lint /Users/amor/Desktop/Lint-ESlint-Dome
   > eslint src
   
   
   /Users/amor/Desktop/Lint-ESlint-Dome/src/index.js
     1:7   error  'lint' is assigned a value but never used  no-unused-vars
     1:14  error  Strings must use singlequote               quotes
     1:22  error  Missing semicolon                          semi
   
   ✖ 3 problems (3 errors, 0 warnings)
     2 errors and 0 warnings potentially fixable with the `--fix` option.
   ```

   > 解释

   在`src/index.js` 中出现3个错误。

   | 序号 | 位置             | 报错规则       | 说明                                           |
   | ---- | ---------------- | -------------- | ---------------------------------------------- |
   | 1    | 第一行第7个字符  | no-unused-vars | 变量已经定义，但是没有使用。                   |
   | 2    | 第一行第14个字符 | quotes         | 编码规范规定只能使用单引号，这里使用了双引号。 |
   | 3    | 第一行第22个字符 | semi           | 编码规范规定代码末尾需要添加分号，这里没有。   |

### 修复

1. 在`package.json`中配置`scripts`来验证

   ```javascript
   {
     //  ...
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "lint": "eslint src",
       "fix": "eslint --fix src",
     },
     // ...
   }
   ```

2. 修复

   ```javascript
   $ npm run fix
   ```

   控制台

   ```javascript
    Lint-ESlint-Dome npm run fix 
   
   > lint-eslint-dome@1.0.0 fix /Users/amor/Desktop/Lint-ESlint-Dome
   > eslint --fix src
   
   
   /Users/amor/Desktop/Lint-ESlint-Dome/src/index.js
     1:7  error  'lint' is assigned a value but never used  no-unused-vars
   
   ✖ 1 problem (1 error, 0 warnings)
   
   ```

   可以看到运行```npm run fix```少了两条报错信息，ESlint帮我们进行了自动修复。但是像```no-unused-vars```这样的错误还是需要手动修改。 当我们打开``index.js``文件可以看到 字符串引号的改变，代码末尾分号的出现。
### .eslintrc.js

> 可查看 [ESlint Rules 文档 ](https://eslint.cn/docs/rules/)

1. 在上面有`.eslintrc.js` 配置文件。

2. 该文件导出了一个对象，这个对象有`env`、`extends`、`parserOptions`、`rules` 四个属性。

3. ```
   "env": {
       "browser": true,
       "commonjs": true,
       "es6": true
   },
   "extends": "eslint:recommended",
   "parserOptions": {
       "ecmaFeatures": {
           "jsx": true
       },
       "ecmaVersion": 2015,
       "sourceType": "module"
   },
   ```

4. ```env```和```parserOptions```是我们在问答配置ESlint的时候，配置ES6,JSX语法而生成的。

5. ```extends```的属性是启用一系列的核心规则。

   目前流行的规则是```eslint-config-airbnb```，在配置文件中为```"extends": "airbnb"```，这样就可以使用`airbnb`的规则了。当然也可以自己去进行配置规则，进行`npm`发布就可以进行使用。

   > 可参考[自定义规则文档](https://eslint.cn/docs/developer-guide/shareable-configs)

6. ```rules```是定义规则的地方，大于```extends```中的属性。

   ```rules```会覆盖```extends```中的标准规则。

   ESLint 附带有大量的规则，修改规则应遵循如下要求：

   - "off" 或 0 - 关闭规则
   - "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   - "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

   > 注意：
   >
   > 1. object-shorthand
   >
   >    在[rules](https://eslint.cn/docs/rules/)设置`object-shorthand`这个规则，对象属性要简写，可参考[ES6](http://es6.ruanyifeng.com/#docs/object#%E5%B1%9E%E6%80%A7%E7%9A%84%E7%AE%80%E6%B4%81%E8%A1%A8%E7%A4%BA%E6%B3%95)。
   >
   > 2. prefer-arrow-callback
   >
   >    在[rules](https://eslint.cn/docs/rules/)设置`prefer-arrow-callback`这个规则，回调函数使用箭头函数。
   >
   > 3. no-param-reassign
   >
   >    在[rules](https://eslint.cn/docs/rules/)设置`no-param-reassign`这个规则，禁止行尾空格。
   >
   > 4. no-trailing-spaces
   >
   >    在[rules](https://eslint.cn/docs/rules/)设置`no-param-reassign`这个规则，禁止对函数的参数重新赋值。
   >
   > 5. no-shadow
   >
   >    在[rules](https://eslint.cn/docs/rules/)设置`no-param-reassign`这个规则，禁止变量声明与外层作用域的变量同名。

   e.g.

    1. 修改文件配置文件，修改规则代码末尾加分号为末尾不加分号。

       ```javascript
       module.exports = {
           //  ...
           "rules": {
            // ...
               "semi": [
                   "error",
                   "never"
               ]
           }
       };
       ```

       2. 使用以下命令进行检查。

       ```javascript
       $ npm run lint
       ```

       控制台

       ```javascript
       ➜  Lint-ESlint-Dome npm run lint 
       
       > lint-eslint-dome@1.0.0 lint /Users/amor/Desktop/Lint-ESlint-Dome
       > eslint src
       
       
       /Users/amor/Desktop/Lint-ESlint-Dome/src/index.js
         1:7   error  'lint' is assigned a value but never used  no-unused-vars
         1:22  error  Extra semicolon                            semi
       
       ✖ 2 problems (2 errors, 0 warnings)
         1 error and 0 warnings potentially fixable with the `--fix` option.
       ```

       3. 使用以下命令进行修复。

       ```javascript
       $ npm run fix 
       ```

       控制台

       ```javascript
       ➜  Lint-ESlint-Dome npm run fix       
       
       > lint-eslint-dome@1.0.0 fix /Users/amor/Desktop/Lint-ESlint-Dome
       > eslint --fix src
       
       
       /Users/amor/Desktop/Lint-ESlint-Dome/src/index.js
         1:7  error  'lint' is assigned a value but never used  no-unused-vars
       
       ✖ 1 problem (1 error, 0 warnings)
       ```

       4. 打开```index.html```文件，发现代码末尾的分号已经没有了。 

7. ESLint 默认使用[Espree](https://github.com/eslint/espree)作为其解析器，我比较喜欢使用[Babel-ESLint](https://www.npmjs.com/package/babel-eslint) 做为解析器。

   ```javascript
   module.exports = {
       // ...
       parser: "babel-eslint"
   }
   ```

8. 默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。为了将 ESLint 限制到一个特定的项目，在项目根目录下的 `package.json` 文件或者 `.eslintrc.*` 文件里的 `eslintConfig`字段下设置 `"root": true`。ESLint 一旦发现配置文件中有 `"root": true`，它就会停止在父级目录中寻找。

   ```javascript
   module.exports = {
       // ...
       "root": true
   }
   ```

### 禁止规则发出警告

> 可参考[文档](https://eslint.cn/docs/user-guide/configuring#disabling-rules-with-inline-comments)

e.g.

**eslint-disable-line** 

单行跳过`Line`检查，添加注释```eslint-disable-line```就可以进行跳过。

```javascript
const lint = "eslint";  // eslint-disable-line
```

### [代码 ](https://github.com/azrrrrr/azr_lint/tree/master/ESlintlint-Dome)

package.json

```javascript
{
  "name": "lint-eslint-dome",
  "version": "1.0.0",
  "description": "ESlint-Dome",
  "main": "index.js",
  "dependencies": {
    "eslint": "^5.9.0"
  },
  "devDependencies": {
    "babel-eslint": "^10.0.1"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint src",
    "fix": "eslint --fix src",
    "stylelint": "stylelint src/css/*.* --fix"
  },
  "keywords": [
    "azr"
  ],
  "author": "Azr",
  "license": "ISC"
}

```

.eslintrc.js

```javascript
module.exports = {
    root:true,
    parser: "babel-eslint",
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-console":[
          2,
          { "allow":["warn","info","error"]}
         ],
    }
};
```

.eslintignore 

```javascript
dist/
```

src/index.js

```javascript
const lint = 'eslint'  // eslint-disable-line
```

## 在webpack中使用

使用`webpack`构建工具的话需要使用eslint的loader

需要安装`eslint-loader`

```javascript
$ npm i eslint-loader -D
```

在`webpack.config.js`中配置。

```javascript
module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }
  ]
},
```

使用`eslint --init` 来自动化生成文件`.eslintrc` 进行完善。

在`webpack.config.js`进行引入

```javascript
devServer: {
  contentBase: './dist',
  hot: true,
  historyApiFallback: true
},
eslint: {
  configFile: './.eslintrc'
}
```



#  stylelint

##  基本了解

### Link

- [中文Link](https://stylelint.io/)

#### 优势

一款强大的，时髦的css语法检查和纠错工具，它可以帮助开发者在编写样式文件时避免错误，同时它还可以强迫	   开发者们形成统一的开发规范。

## 基本使用

#### 1. 安装

```javascript
$ npm i stylelint stylelint-config-standard -D
```

####  2. 配置

```javascript
"stylelint": {
        "extends": "stylelint-config-standard", 
        "rules": {
            "规则名称1":"规则值1",
            "规则名称2":"规则值2"
        }
    }
```

#### 3. 测试

写好要测试的样式文件 xxx.css xxx.less xxx.scss，格式比较乱一些就好。

####  4. 脚本

```javascript
"scripts": {
    "stylelint": "stylelint src/css/*.* --fix"
 }
```

####  5. 运行

切换到项目根目录，运行 `npm run stylelint`

### [代码 ](https://github.com/azrrrrr/azr_lint/tree/master/Stylelelint-dome)

package.json

```javascript
{
  "name": "lint-eslint-dome",
  "version": "1.0.0",
  "description": "ESlint-Dome",
  "main": "index.js",
  "dependencies": {
    "eslint": "^5.9.0"
  },
  "devDependencies": {
    "babel-eslint": "^10.0.1",
    "stylelint": "^9.9.0",
    "stylelint-config-standard": "^18.2.0"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint src",
    "fix": "eslint --fix src",
    "stylelint": "stylelint src/css/*.* --fix"
  },
  "keywords": [
    "azr"
  ],
  "author": "Azr",
  "license": "ISC",
  "stylelint": {
    "extends": "stylelint-config-standard",
    "rules": {
      "color-no-invalid-hex": true,
      "string-quotes": "single",
      "property-no-unknown": [
        true,
        {
          "ignoreProperties": [
            "composes"
          ]
        }
      ],
      "selector-pseudo-class-no-unknown": [
        true,
        {
          "ignorePseudoClasses": [
            "global"
          ]
        }
      ]
    }
  }
}

```

src/css/test.css

```css
.box {
  width: 300px;
  height: 300px;
  background-color: 'yellowgreen';
}
```

## [在Vue使用](https://github.com/azrrrrr/azr_lint/tree/master/Lint_Vue)

1. 先使用webpack + Vue 搭建好项目

2. 安装

   ```
   $ npm i style-loader css-loader less less-loader node-sass sass-loader stylelint stylelint-webpack-plugin stylelint-config-standard -D
   ```

3. 在webpack的配置文件中，写好css、less、scss的loader配置 

   > 参考[文档](https://webpack.docschina.org/loaders/)

4. 在webpack的配置

   ```javascript
   const StyleLintPlugin = require("stylelint-webpack-plugin")
       
       plugins: [
           new StyleLintPlugin({
               context: "src",
               configFile: path.resolve(__dirname, './stylelint.config.js'),
               files: 'css/*.*',
               failOnError: false,
               quiet: true,
               fix:true, // 修复不规范的样式代码
               syntax: 'less'
           })
       ]
   ```

5. 在项目根目录下创建一个stylelint的配置文件 stylelint.config.js 并写好配置

   ```javascript
   module.exports = {
          "extends": "stylelint-config-standard",
          "rules": {
               "color-no-invalid-hex": true,
               "规则名称1":"规则值1",
               "规则名称2":"规则值2"
           }
    }
   ```

6. 在package.json中配置scripts脚本，启动项目

   ```javascript
   "dev": "webpack-dev-server --progress --config webpack.config.dev.js --open --hot"
   ```

7. 切换到根目录，运行启动脚本 `npm run dev` 即可



## 完

本文首次发布于 [Azr的博客](http://amor9.cn), 作者 [@azrrrrr](https://github.com/azrrrrr/) ,转载请保留原文链接.

原文链接： [http://amor9.cn/2018/12/02/lint](http://amor9.cn/2018/12/02/lint)

