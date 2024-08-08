---
outline: deep
---

# 反射函数

Sprig 提供了一些基本的反射工具，这些工具帮助高级模板开发者了解特定值的底层 Go 类型信息。

Go 有几种基本的“种类”，比如 `string`、`slice`、`int64` 和 `bool`。

Go 有一个开放的类型系统，允许开发者创建自己的类型。

Sprig 为每个种类提供了一组函数。

## 种类函数

有两个种类函数：

`kindOf` 返回一个对象的种类。

```
kindOf "hello"
```

上面的例子将返回 `"string"`。

对于简单的测试（比如在 `if` 语句块中），`kindIs` 函数可以让您验证一个值是否是特定的种类：

```
kindIs "int" 123
```

上面的例子将返回 `true`。

## 类型函数

类型稍微复杂些，因此有三个不同的函数：

- `typeOf`: 返回一个值的底层类型：`typeOf $foo`
- `typeIs`: 类似于 `kindIs`，但用于类型：`typeIs "*io.Buffer" $myVal`
- `typeIsLike`: 与 `typeIs` 相似，但也会解引用指针。

**注意：** 这些函数都不能测试某个对象是否实现了给定的接口，因为这将需要提前编译接口。

## `deepEqual`

如果两个值是 [“深度相等”](https://golang.org/pkg/reflect/#DeepEqual) 的则返回 `true`

与内置的 `eq` 函数相比，它也适用于非基本类型。

```
deepEqual (list 1 2 3) (list 1 2 3)
```

上面的例子将返回 `true`。
