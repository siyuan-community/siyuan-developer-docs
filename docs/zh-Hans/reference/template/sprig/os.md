---
outline: deep
---

# 操作系统函数

::: warning
如果不适当使用，这些函数可能会导致信息泄露。

一些著名的 Sprig 实现（例如 [Kubernetes Helm](http://helm.sh)）会因为安全原因而不提供这些函数。
:::

## `env`

`env` 函数用于读取环境变量

```
env "HOME"
```

## `expandenv`

使用 `expandenv` 函数将字符串环境变量名替换为对应的环境变量值

```
expandenv "Your path is set to $PATH"
```
