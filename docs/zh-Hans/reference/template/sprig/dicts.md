---
outline: deep
---

# 字典与字典函数

Sprig 提供了一个称为 `dict`（dictionary 的缩写，类比 Python 中的字典）的键/值存储类型。`dict` 是一个*无序*类型。

字典的键**必须是一个字符串**。然而，值可以是任何类型，甚至是另一个 `dict` 或 `list`。

与 `list` 不同，`dict` 是可变的。`set` 和 `unset` 函数将修改字典的内容。

## `dict`

通过调用 `dict` 函数并传递一个键值对的列表来创建字典。

以下代码创建了一个包含三个项的字典：

```
$myDict := dict "key1" "value1" "key2" "value2" "key3" "value 3"
```

## `get`

给定一个字典和一个键，从该字典中获取对应的值。

```
get $myDict "key1"
```

上述代码返回 `"value1"`。

请注意，如果未找到键，则此操作将简单地返回 `""`。不会生成错误。

## `set`

使用 `set` 向字典中添加一个新的键值对。

```
$_ := set $myDict "key4" "value4"
```

请注意，`set` 返回字典*（这是 Go 模板函数的要求），因此您可能需要像上面的 `$*` 赋值一样捕获该值。

## `unset`

给定一个字典和一个键，将该键及其对应的值从字典中删除。

```
$_ := unset $myDict "key4"
```

与 `set` 类似，这会返回字典。

请注意，如果未找到键，则此操作将简单地返回。不会生成错误。

## `hasKey`

如果给定的字典包含给定的键，`hasKey` 函数将返回 `true`。

```
hasKey $myDict "key1"
```

如果未找到给定的键，则返回 `false`。

## `pluck`

给定一个键和多个字典，`pluck` 函数可以获取所有匹配项的列表：

```
pluck "name1" $myDict $myOtherDict
```

上述代码将返回一个包含每个找到的值的 `list`（`[value1 otherValue1]`）。

如果给定的键在字典中**未找到**，那么该字典在列表中将没有对应的项（即返回的列表的长度将小于调用 `pluck` 时传入的字典数量）。

如果找到了键，但值是一个空值，该值将被插入。

在模板中，使用 `pluck ... | first` 的常见用法是从一组字典中获取第一个匹配的键。

## `dig`

`dig` 函数使用一个键名列表访问嵌套的字典集。

如果其中某个键在对应的字典中找不到，则返回默认值。

```
dig "user" "role" "humanName" "guest" $dict
```

给定一个结构化如下的字典：

```
{
  user: {
    role: {
      humanName: "curator"
    }
  }
}
```

上面的代码将返回 `"curator"`。如果字典甚至缺少 `user` 字段，则结果将是给定的默认值 `"guest"`。

`dig` 在你想避免守卫语句的情况下非常有用，特别是因为 Go 的模板包的 `and` 不会进行快速路由。例如，`and a.maybeNil a.maybeNil.iNeedThis` 将始终评估 `a.maybeNil.iNeedThis`，如果 `a` 缺少 `maybeNil` 字段则会引发错误。

`dig` 函数在最后接受字典参数以支持管道操作。例如：

```
merge a b c | dig "one" "two" "three" "<missing>"
```

## `merge`, `mustMerge`

将两个或多个字典合并为一个，以目标字典为准：

```
$newdict := merge $dest $source1 $source2
```

这是一个深度合并操作，但不是深度复制操作。合并的嵌套对象在两个字典上是同一个实例。

如果您想对合并进行深度复制，则需要将 `deepCopy` 函数与合并一起使用。例如：

```
deepCopy $source | merge $dest
```

`mustMerge` 在合并失败时会返回错误。

## `mergeOverwrite`, `mustMergeOverwrite`

将两个或多个字典合并为一个，从**右到左**给予目标字典优先权，从而覆盖目标字典中的值：

假设：

```
dst:
  default: default
  overwrite: me
  key: true

src:
  overwrite: overwritten
  key: false
```

将得到：

```
newdict:
  default: default
  overwrite: overwritten
  key: false
```

```
$newdict := mergeOverwrite $dest $source1 $source2
```

这是一个深度合并操作，但不是深度复制操作。合并的嵌套对象在两个字典上是同一个实例。

如果您想对合并进行深度复制，则需要将 `deepCopy` 函数与合并一起使用。例如：

```
deepCopy $source | mergeOverwrite $dest
```

`mustMergeOverwrite` 在合并失败时会返回错误。

## `keys`

`keys` 函数将返回一个包含一个或多个 `dict` 中所有键名组成的 `list`。

由于字典是*无序*的，键的顺序不可预测。可以使用 `sortAlpha` 对键进行排序。

```
keys $myDict | sortAlpha
```

当提供多个字典时，将对键进行连接。使用 `uniq` 函数和 `sortAlpha` 来获得一个唯一的、排序的键列表。

```
keys $myDict $myOtherDict | uniq | sortAlpha
```

## `pick`

`pick` 函数从一个字典中仅选择给定的键，创建一个新的 `dict`。

```
$new := pick $myDict "key1" "key2"
```

上述代码返回 `{key1: value1, key2: value2}`

## `omit`

`omit` 函数类似于 `pick`，但它返回一个新的 `dict`，其中包含所有与给定键**不匹配**的键。

```
$new := omit $myDict "key1" "key3"
```

上述代码返回 `{key2: value2}`

## `values`

`values` 函数类似于 `keys`，但它返回一个新的 `list`，其中包含源 `dict` 的所有值（仅支持一个字典）。

```
$vals := values $myDict
```

上述代码返回 `list["value1", "value2", "value 3"]`。请注意，`values` 函数对结果排序不作任何保证，如果您关心这一点，请使用 `sortAlpha`。

## `deepCopy`, `mustDeepCopy`

`deepCopy` 和 `mustDeepCopy` 函数接受一个值并对该值进行深拷贝。这包括字典和其他结构。

当有问题时，`deepCopy` 会抛出一个 panics，而 `mustDeepCopy` 会将错误返回给模板系统。

```
dict "a" 1 "b" 2 | deepCopy
```

## 关于字典内部的注释

在 Go 中，`dict` 以 `map[string]interface{}` 的形式实现。Go 开发人员可以将 `map[string]interface{}` 值传递到上下文中，以使它们在模板中作为 `dict` 使用。
