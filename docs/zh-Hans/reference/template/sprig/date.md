---
outline: deep
---

# 日期函数

## `now`

当前日期/时间。与其他日期函数一起使用。

## `ago`

`ago` 函数返回从 `time.Now` 开始计算的时间间隔，以秒为单位。

```
ago .CreatedAt"
```

上述语句以 `time.Duration` String() 格式返回 `2h34m7s`

## `date`

`date` 函数可以格式化日期

将日期格式化为 `年-月-日`

```
now | date "2006-01-02"
```

使用 Go 的时间日期格式化方案

简而言之，将以下日期作为格式化的模板日期

```
1月2日 15:04:05 2006年
```

## `dateInZone`

与 `date` 类似，但包含时区信息

```
dateInZone "2006-01-02" (now) "UTC"
```

## `duration`

将给定的秒数格式化为 `time.Duration`

```
duration 95
```

上述语句返回 `1m36s`

## `durationRound`

将给定的时间间隔四舍五入到最重要的单位。解析字符串和 `time.Duration` 作为时间间隔，而 `time.Time` 则计算为时间间隔。

```
durationRound "2h10m5s"
```

上述语句返回 `2h`

```
durationRound "2400h10m5s"
```

上述语句返回 `3mo`

## `unixEpoch`

返回 `time.Time` 自 Unix 时刻以来的秒数

```
now | unixEpoch
```

## `dateModify`, `mustDateModify`

`dateModify` 接受一个修改量和一个日期，并返回时间戳

```
now | date_modify "-1.5h"
```

上述语句从当前时间减去1小时30分钟

如果修改格式不正确，则 `dateModify` 将返回日期未修改的结果。否则 `mustDateModify` 将返回错误。

## `htmlDate`

`htmlDate` 函数将日期格式化为 HTML 日期选择器的输入字段的格式。

```
now | htmlDate
```

## `htmlDateInZone`

与 `htmlDate` 相同，但包含时区信息

```
htmlDateInZone (now) "UTC"
```

## `toDate`, `mustToDate`

`toDate` 将字符串转换为日期

参数

- 日期模板字符串
- 日期字符串

`toDate` 如果不能转换字符串，则返回零值

`mustToDate` 如果字符串无法转换，则返回错误

可用于将字符串日期转换为另一种格式

```
toDate "2006-01-02" "2017-12-31" | date "02/01/2006"
```

上述语句将字符串 `"2017-12-31"` 转换为 `"31/12/2017"`
