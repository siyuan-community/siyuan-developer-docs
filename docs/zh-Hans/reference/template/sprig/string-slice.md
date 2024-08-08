---
outline: deep
---

# 字符串切片函数

这些函数用于操作或生成字符串切片。在 Go 中，切片是一个可扩展的数组。在 Sprig 中，它是 `list` 的一个特例。

## `join`

使用指定的分隔符将字符串列表拼接成一个字符串。

```
list "hello" "world" | join "_"
```

上述语句将会产生 `hello_world`

`join` 函数会尝试将非字符串的值转换为字符串：

```
list 1 2 3 | join "+"
```

上述示例将会产生 `1+2+3`

## `splitList`, `split`

`splitList` 将字符串分割成一个字符串列表：

```
splitList "$" "foo$bar$baz"
```

上述语句将会返回 `[foo bar baz]`

`split` 函数将字符串分割成一个 `dict`。它的设计是为了方便使用点表示法访问成员：

```
$a := split "$" "foo$bar$baz"
```

上述语句将会生成一个具有索引键的映射。`{_0: foo, _1: bar, _2: baz}`

```
$a._0
```

上述示例将会返回 `foo`

## `splitn`

`splitn` 函数将字符串分割成一个 `dict`。它的设计是为了方便使用模板点表示法访问成员：

```
$a := splitn "$" 2 "foo$bar$baz"
```

上述语句将会生成一个具有索引键的映射。`{_0: foo, _1: bar$baz}`

```
$a._0
```

上述语句将会产生 `foo`

## sortAlpha

`sortAlpha` 函数将字符串列表按字母顺序（字典序）进行排序。

它不会原地排序，而是返回已排序的列表的副本，与列表的不可变性保持一致。
