---
outline: deep
---

# 浮点数数学函数

所有的数学函数都作用在 `float64` 类型的值上。

## `addf`

使用 `addf` 求和

```
addf 1.5 2 2
```

上述语句返回 `5.5`

## `add1f`

使用 `add1f` +1

```
add1f 1.5
```

上述语句返回 `2.5`

## `subf`

使用 `subf` 进行减法

```
subf 7.5 2 3
```

上述语句相当于 `7.5 - 2 - 3`，将返回 `2.5`

## `divf`

使用 `divf` 进行除法。

```
divf 10 2 4
```

上述语句相当于 `10 / 2 / 4`，将返回 `1.25`

## `mulf`

使用 `mulf` 进行乘法

```
mulf 1.5 2 2
```

上述语句将返回 `6`

## `maxf`

返回一系列浮点数中的最大值

```
maxf 1 2.5 3
```

上述语句将返回 `3`

## `minf`

返回一系列浮点数中的最小值

```
minf 1.5 2 3
```

上述语句将返回 `1.5`

## `floor`

返回小于或等于输入值的最大浮点数类型的整数值 (向下取整)

```
floor 123.9999
```

上述语句将返回 `123.0`

## `ceil`

返回大于或等于输入值的最小浮点数类型的整数值 (向上取整)

```
ceil 123.001
```

上述语句将返回 `124.0`

## `round`

返回一个浮点数值，其余数根据给定的小数点后位数四舍五入

```
round 1234.555555555 6
```

上述语句将返回 `1234.555556`
