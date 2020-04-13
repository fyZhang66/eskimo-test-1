# 车轮饼：一个Vue UI组件

## 介绍

这是我学习 Vue 的过程中做的一个 UI 框架

## 开始使用

1. 添加 CSS 样式
    使用本框架前，请在 CSS 中开启 border-box
    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```
    IE 8 及以上浏览器都支持这个样式。

    你还需要设置默颜色等变量 （后面会改为 SCSS 变量）

    ```
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE 15 及以上支持此样式。

2. 安装 wheel-cake
    ```
    npm i --save wheel-cake-test
    ```

3. 引入 wheel-cake
    ```
    import { Button, Icon } from "wheel-cake-test";
    import "wheel-cake-test/dist/index.css";

    export default {
        name: "app",
        components: {
            "f-button": Button,
            'f-icon': Icon
        }
    };
    ```
4. 引入 svg symbols
    ```
    <script src="//at.alicdn.com/t/font_1628127_nkacgg2sf6.js"></script>
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献者

作者：Fangyuan Zhang


