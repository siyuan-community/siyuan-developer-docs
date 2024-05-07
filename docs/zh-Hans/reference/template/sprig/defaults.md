---
outline: deep
---

# 默认值函数

Sprig 提供了为模板设置默认值的工具。

## `default`

要设置简单的默认值，请使用 `default`：

```
default "foo" .Bar
```

在上述示例中，如果 `.Bar` 的计算结果为非空值，则使用该值。但如果为空，则返回 `foo`。

"空" 的定义取决于类型：

- 数字：`0`
- 字符串：`""`
- 列表：`[]`
- 字典：`{}`
- 布尔值：`false`
- 同时也包括 `nil`（即 null）

对于结构体，没有空的定义，因此结构体永远不会返回默认值。

## `empty`

`empty` 函数会根据给定值是否为空返回 `true` 或 `false`。

空的值在 `default` 部分中列出。

```
empty .Foo
```

请注意，在 Go 模板的条件中，会为您计算是否为空。因此，您很少需要使用 `if empty .Foo`。而是直接使用 `if .Foo`。

## `coalesce`

`coalesce` 函数接受一列值，并返回第一个非空值。

```
coalesce 0 1 2
```

上述示例返回 `1`。

此函数适用于扫描多个变量或值的情况：

```
coalesce .name .parent.name "Matt"
```

上述示例首先检查 `.name` 是否为空。

如果不为空，则返回该值。

如果为空，`coalesce` 将评估 `.parent.name` 是否为空。

最后，如果 `.name` 和 `.parent.name` 都为空，则返回 `Matt`。

## `all`

`all` 函数接受一列值，并在所有值均非空时返回 `true`。

```
all 0 1 2
```

上述示例返回 `false`。

此函数适用于评估多个变量或值的条件的情况：

```
all (eq .Request.TLS.Version 0x0304) (.Request.ProtoAtLeast 2 0) (eq .Request.Method "POST")
```

上述示例将检查 `http.Request` 是否为 `"POST"` 方法，并具有 `tls 1.3` 和 `http/2` 版本。

## `any`

`any` 函数接受一列值，并在任何一个值非空时返回 `true`。

```
any 0 1 2
```

上述示例返回 `true`。

此函数适用于评估多个变量或值的条件的情况：

```
any (eq .Request.Method "GET") (eq .Request.Method "POST") (eq .Request.Method "OPTIONS")
```

上述示例将检查 `http.Request` 的方法是否为 `GET/POST/OPTIONS` 之一。

## `fromJson`, `mustFromJson`

`fromJson` 函数将 JSON 文档解码为结构体。

如果输入无法解码为 JSON，则该函数将返回空字符串。

`mustFromJson` 会在 JSON 无效时返回错误。

```
fromJson "{\"foo\": 55}"
```

## `toJson`, `mustToJson`

`toJson` 函数将项目编码为 JSON 字符串。

如果项目无法转换为 JSON，则该函数将返回空字符串。

`mustToJson` 会在项目无法以 JSON 编码时返回错误。

```
toJson .Item
```

上述示例返回 `.Item` 的 JSON 字符串表示形式。

## `toPrettyJson`, `mustToPrettyJson`

`toPrettyJson` 函数将项目编码为漂亮（缩进）的 JSON 字符串。

```
toPrettyJson .Item
```

上述示例返回 `.Item` 的缩进的 JSON 字符串表示形式。

## `toRawJson`, `mustToRawJson`

`toRawJson` 函数将项目编码为带有未转义 HTML 字符的 JSON 字符串。

```
toRawJson .Item
```

上述示例返回 `.Item` 的未转义的 JSON 字符串表示形式。

## `ternary`

`ternary` 函数接受两个值和一个测试值。

如果测试值为真，则返回第一个值。

如果测试值为空，则返回第二个值。

这类似于 C 三元运算符。

### 测试值为真

```
ternary "foo" "bar" true
```

或

```
true | ternary "foo" "bar"
```

上述示例返回 `"foo"`。

### 测试值为假

```
ternary "foo" "bar" false
```

或

```
false | ternary "foo" "bar"
```

上述示例返回 `"bar"`。
