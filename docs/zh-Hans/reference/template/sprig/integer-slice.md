---
outline: deep
---

# 整数切片函数

## `until`

`until` 函数生成一个整数列表

```
until 5
```

上述语句生成的列表为 `[0, 1, 2, 3, 4]`。

这在使用 `range e := until 5` 进行循环时非常有用。

## `untilStep`

与 `until` 类似，`untilStep` 生成一个计数整数列表。但它允许您定义一个起点、终点和步长：

```
untilStep 3 6 2
```

上述语句生成一个从 `3` 开始，每次增加 `2` 直到等于或大于 `6` 的整数列表 `[3 5]`。这类似于Python的 `range` 函数。

## `seq`

作用类似于 bash 的 `seq` 命令。

- 1个参数 `(end)`

  - 生成从 1 到 `end`（包括 `end`）的所有整数组成的列表

- 2个参数 `(start, end)`

  - 生成从 `start` 到 `end`（包括 `start` 和 `end`）以 `1` 为步长递增或递减的所有整数组成的列表

- 3个参数 `(start, step, end)`

  - 生成从 `start` 到 `end`（包括 `start` 和 `end`）以 `step` 为步长递增或递减的所有整数组成的列表

```
seq 5       => 1 2 3 4 5
seq -3      => 1 0 -1 -2 -3
seq 0 2     => 0 1 2
seq 2 -2    => 2 1 0 -1 -2
seq 0 2 10  => 0 2 4 6 8 10
seq 0 -2 -5 => 0 -2 -4
```
