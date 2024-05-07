---
outline: deep
---

# 列表与列表函数

Sprig 提供了一个简单的 “list” 类型，可以包含任意顺序的数据列表。这类似于数组或切片，但列表被设计用作不可变的数据类型。

创建一个整数列表：

```
$myList := list 1 2 3 4 5
```

上面创建了一个列表 `[1 2 3 4 5]`。

## `first`，`mustFirst`

要获取列表的第一项，请使用 `first`。

`first $myList` 返回 `1`

如果有问题，则 `first` 会产生 panic，而 `mustFirst` 会返回错误到模板引擎。

## `rest`，`mustRest`

要获取列表的尾部（除第一项外的所有项），请使用 `rest`。

`rest $myList` 返回 `[2 3 4 5]`

如果有问题，则 `rest` 会产生 panic，而 `mustRest` 会返回错误到模板引擎。

## `last`，`mustLast`

要获取列表的最后一项，请使用 `last`：

`last $myList` 返回 `5`。这基本上相当于反转列表然后调用 `first`。

## `initial`，`mustInitial`

要获取列表除最后一个元素外的所有元素，请使用 `initial`。
`initial $myList` 返回 `[1 2 3 4]`。

如果有问题，则 `initial` 会产生 panic，而 `mustInitial` 会返回错误到模板引擎。

## `append`，`mustAppend`

将新元素附加到现有列表的尾部，创建一个新列表。

```
$new = append $myList 6
```

上面将 `$new` 设置为 `[1 2 3 4 5 6]`。`$myList` 将保持不变。

如果有问题，则 `append` 会产生 panic，而 `mustAppend` 会返回错误到模板引擎。

## `prepend`，`mustPrepend`

将元素推入现有列表的首部，创建一个新列表。

```
prepend $myList 0
```

上面会产生 `[0 1 2 3 4 5]`。`$myList` 将保持不变。

如果有问题，则 `prepend` 会产生 panic，而 `mustPrepend` 会返回错误到模板引擎。

## `concat`

将任意数量的列表连接成一个列表。

```
concat $myList ( list 6 7 ) ( list 8 )
```

上面会产生 `[1 2 3 4 5 6 7 8]`。`$myList` 将保持不变。

## `reverse`，`mustReverse`

生成一个具有给定列表的元素顺序翻转的新列表。

```
reverse $myList
```

上面将生成列表 `[5 4 3 2 1]`。

如果有问题，则 `reverse` 会产生 panic，而 `mustReverse` 会返回错误到模板引擎。

## `uniq`，`mustUniq`

生成一个删除所有重复项的新列表。

```
list 1 1 1 2 | uniq
```

上面将生成 `[1 2]`

如果有问题，则 `uniq` 会产生 panic，而 `mustUniq` 会返回错误到模板引擎。

## `without`，`mustWithout`

`without` 函数从列表中过滤掉项目。

```
without $myList 3
```

上面将生成 `[1 2 4 5]`

`without` 可以使用多个过滤器：

```
without $myList 1 3 5
```

这将生成 `[2 4]`

如果有问题，则 `without` 会产生 panic，而 `mustWithout` 会返回错误到模板引擎。

## `has`，`mustHas`

测试列表是否具有特定元素。

```
has 4 $myList
```

上述代码将返回 `true`，而 `has "hello" $myList` 将返回 `false`。

如果有问题，则 `has` 会产生 panic，而 `mustHas` 会返回错误到模板引擎。

## `compact`，`mustCompact`

接受一个列表并删除其中的空值条目。

```
$list := list 1 "a" "foo" ""
$copy := compact $list
```

`compact` 将返回一个新列表，其中删除了空项（即`“”`）。

如果有问题，则 `compact` 会产生 panic，而 `mustCompact` 会返回错误到模板引擎。

## `slice`，`mustSlice`

要获取列表的部分元素，请使用 `slice list [n] [m]`。它相当于 `list[n:m]`。

- `slice $myList` 返回 `[1 2 3 4 5]`。它与 `myList[:]` 相同。
- `slice $myList 3` 返回 `[4 5]`。它与 `myList[3:]` 相同。
- `slice $myList 1 3` 返回 `[2 3]`。它与 `myList[1:3]` 相同。
- `slice $myList 0 3` 返回 `[1 2 3]`。它与 `myList[:3]` 相同。

如果有问题，则 `slice` 会产生 panic，而 `mustSlice` 会返回错误到模板引擎。

## `chunk`

将列表分成给定大小的块，使用 `chunk size list`。这对于分页很有用。

```
chunk 3 (list 1 2 3 4 5 6 7 8)
```

这将产生列表的列表 `[ [ 1 2 3 ] [ 4 5 6 ] [ 7 8 ] ]`。

## 列表内部的注意事项

在 Go 中，列表是作为 `[]interface{}` 实现的。对于嵌入 Sprig 的 Go 开发人员，您可以将 `[]interface{}` 项传递到模板上下文中，并能够在这些项上使用所有 `list` 函数。
