---
outline: deep
---

# 思源内置模板函数

| 函数名                                                            | 简介                                                    |
| :---------------------------------------------------------------- | :------------------------------------------------------ |
| [`FormatFloat`](#FormatFloat) <Badge type="tip" text="^3.0.12" /> | 格式化输出浮点数                                        |
| [`ISOWeek`](#ISOWeek) <Badge type="tip" text="^2.11.1" />         | 获取日期对应的 ISO 8601 周数                            |
| [`WeekdayCN2`](#WeekdayCN2) <Badge type="tip" text="^2.11.2" />   | 获取日期对应的中文星期名称 (Sunday: `"日"`)             |
| [`WeekdayCN`](#WeekdayCN) <Badge type="tip" text="^2.11.1" />     | 获取日期对应的中文星期名称 (Sunday: `"天"`)             |
| [`Weekday`](#Weekday) <Badge type="tip" text="^2.11.1" />         | 获取日期对应的星期编号 (Sunday: `0`)                    |
| [`log`](#log) <Badge type="tip" text="^2.11.3" />                 | 对数运算 $\lfloor \log_a N \rfloor$ (返回 `int64` 类型) |
| [`logf`](#logf) <Badge type="tip" text="^2.11.3" />               | 对数运算 $\log_a N$ (返回 `float64` 类型)               |
| [`parseTime`](#pow) <Badge type="tip" text="^1.5.5" />            | 解析时间戳字符串                                        |
| [`pow`](#powf) <Badge type="tip" text="^2.11.3" />                | 指数运算 $\lfloor a^n \rfloor$ (返回 `int64` 类型)      |
| [`powf`](#parseTime) <Badge type="tip" text="^2.11.3" />          | 指数运算 $a^n$ (返回 `float64` 类型)                    |

## `FormatFloat` <Badge type="tip" text="^3.0.12" /> {#FormatFloat}

- 介绍
  - 格式化输出浮点数
- 函数定义 `func FormatFloat(format string, n float64) string` [:link:](https://pkg.go.dev/github.com/siyuan-note/siyuan/kernel/util#FormatFloat)
  - 参数
    1. `format`: [`string`](https://pkg.go.dev/builtin#string) 格式字符串
    2. `n`: [`float64`](https://pkg.go.dev/builtin#float64) 待格式化的浮点数
  - 返回值
    1. [`string`](https://pkg.go.dev/builtin#string) 浮点数格式化输出字符串
- 参考
  - [Issue #11158 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/11158)
  - [humanize package `FormatFloat` - github.com/dustin/go-humanize - Go Packages](https://pkg.go.dev/github.com/dustin/go-humanize#FormatFloat)
    - [示例 - Go Playground](https://go.dev/play/p/LXc1Ddm1lJ)

::: details 示例

```text:no-line-numbers
=> {{FormatFloat "" 12345.6789}} // [!code highlight]
<= 12,345.68

=> {{FormatFloat "#" 12345.6789}} // [!code highlight]
<= 12345.678900000

=> {{FormatFloat "#." 12345.6789}} // [!code highlight]
<= 12346

=> {{FormatFloat "#,###" 12345.6789}} // [!code highlight]
<= 12345,679

=> {{FormatFloat "#.###" 12345.6789}} // [!code highlight]
<= 12345.679

=> {{FormatFloat "#,###." 12345.6789}} // [!code highlight]
<= 12,346

=> {{FormatFloat "#'###." 12345.6789}} // [!code highlight]
<= 12'346

=> {{FormatFloat "#,###.##" 12345.6789}} // [!code highlight]
<= 12,345.68

=> {{FormatFloat "#'###.##" 12345.6789}} // [!code highlight]
<= 12'345.68

=> {{FormatFloat "#,###.######" 12345.6789}} // [!code highlight]
<= 12,345.678900

=> {{FormatFloat "#'###.######" 12345.6789}} // [!code highlight]
<= 12'345.678900
```

:::

## `ISOWeek` <Badge type="tip" text="^2.11.1" /> {#ISOWeek}

- 介绍
  - 获取日期对应的 ISO 8601 周数
  - 每年的第一周在一月内至少包含四天 (包含一月第一个星期四的一周)
- 函数定义 `func ISOWeek(date time.Time) int` [:link:](https://pkg.go.dev/github.com/siyuan-note/siyuan/kernel/util#ISOWeek)
  - 参数
    1. `data`: [`time.Time`](https://pkg.go.dev/time#Time) 时间日期对象
  - 返回值
    1. [`int`](https://pkg.go.dev/builtin#int) 指定日期对应的周数 `1 ~ 53`
- 参考
  - [Pull Request #9812 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/pull/9812)
  - [time package `Time.ISOWeek` - time - Go Packages](https://pkg.go.dev/time#Time.ISOWeek)
  - [ISO week numbers](https://weeknumber.com/how-to/iso-week-numbers)

::: details 示例

```text:no-line-numbers
=> 2020-01-01 在 2020 年第 {{toDate "2006-01-02" "2020-01-01" | ISOWeek}} 周 // [!code highlight]
<= 2020-01-01 在 2020 年第 1 周

=> 2021-01-01 在 2020 年第 {{toDate "2006-01-02" "2021-01-01" | ISOWeek}} 周 // [!code highlight]
<= 2021-01-01 在 2020 年第 53 周

=> 2022-01-01 在 2021 年第 {{toDate "2006-01-02" "2022-01-01" | ISOWeek}} 周 // [!code highlight]
<= 2022-01-01 在 2021 年第 52 周

=> 2023-01-01 在 2022 年第 {{toDate "2006-01-02" "2023-01-01" | ISOWeek}} 周 // [!code highlight]
<= 2023-01-01 在 2022 年第 52 周

=> 2024-01-01 在 2024 年第 {{toDate "2006-01-02" "2024-01-01" | ISOWeek}} 周 // [!code highlight]
<= 2024-01-01 在 2024 年第 1 周
```

:::

## `WeekdayCN2` <Badge type="tip" text="^2.11.2" /> {#WeekdayCN2}

- 介绍
  - 获取日期对应的中文星期名称
  - Sunday: 天
- 函数定义 `func WeekdayCN2(date time.Time) string` [:link:](https://pkg.go.dev/github.com/siyuan-note/siyuan/kernel/util#WeekdayCN2)
  - 参数
    1. `data`: [`time.Time`](https://pkg.go.dev/time#Time) 时间日期对象
  - 返回值
    1. [`string`](https://pkg.go.dev/builtin#int) 指定日期对应的中文星期名称字符串 `天/一/二/三/四/五/六`
- 参考
  - [Pull Request #9815 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/pull/9815)

::: details 示例

```text:no-line-numbers
=> 2024-01-01 星期{{toDate "2006-01-02" "2024-01-01" | WeekdayCN2}} // [!code highlight]
<= 2024-01-01 星期一

=> 2024-01-02 星期{{toDate "2006-01-02" "2024-01-02" | WeekdayCN2}} // [!code highlight]
<= 2024-01-02 星期二

=> 2024-01-03 星期{{toDate "2006-01-02" "2024-01-03" | WeekdayCN2}} // [!code highlight]
<= 2024-01-03 星期三

=> 2024-01-04 星期{{toDate "2006-01-02" "2024-01-04" | WeekdayCN2}} // [!code highlight]
<= 2024-01-04 星期四

=> 2024-01-05 星期{{toDate "2006-01-02" "2024-01-05" | WeekdayCN2}} // [!code highlight]
<= 2024-01-05 星期五

=> 2024-01-06 星期{{toDate "2006-01-02" "2024-01-06" | WeekdayCN2}} // [!code highlight]
<= 2024-01-06 星期六

=> 2024-01-07 星期{{toDate "2006-01-02" "2024-01-07" | WeekdayCN2}} // [!code highlight]
<= 2024-01-07 星期天
```

:::

## `WeekdayCN` <Badge type="tip" text="^2.11.1" /> {#WeekdayCN}

- 介绍
  - 获取日期对应的中文星期名称
  - Sunday: 日
- 函数定义 `func WeekdayCN(date time.Time) string` [:link:](https://pkg.go.dev/github.com/siyuan-note/siyuan/kernel/util#WeekdayCN)
  - 参数
    1. `data`: [`time.Time`](https://pkg.go.dev/time#Time) 时间日期对象
  - 返回值
    1. [`string`](https://pkg.go.dev/builtin#int) 指定日期对应的中文星期名称字符串 `日/一/二/三/四/五/六`
- 参考
  - [Pull Request #9812 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/pull/9812)

::: details 示例

```text:no-line-numbers
=> 2024-01-01 周{{toDate "2006-01-02" "2024-01-01" | WeekdayCN}} // [!code highlight]
<= 2024-01-01 周一

=> 2024-01-02 周{{toDate "2006-01-02" "2024-01-02" | WeekdayCN}} // [!code highlight]
<= 2024-01-02 周二

=> 2024-01-03 周{{toDate "2006-01-02" "2024-01-03" | WeekdayCN}} // [!code highlight]
<= 2024-01-03 周三

=> 2024-01-04 周{{toDate "2006-01-02" "2024-01-04" | WeekdayCN}} // [!code highlight]
<= 2024-01-04 周四

=> 2024-01-05 周{{toDate "2006-01-02" "2024-01-05" | WeekdayCN}} // [!code highlight]
<= 2024-01-05 周五

=> 2024-01-06 周{{toDate "2006-01-02" "2024-01-06" | WeekdayCN}} // [!code highlight]
<= 2024-01-06 周六

=> 2024-01-07 周{{toDate "2006-01-02" "2024-01-07" | WeekdayCN}} // [!code highlight]
<= 2024-01-07 周日
```

:::

## `Weekday` <Badge type="tip" text="^2.11.1" /> {#Weekday}

- 介绍
  - 获取日期对应的星期编号
- 函数定义 `func Weekday(date time.Time) int` [:link:](https://pkg.go.dev/github.com/siyuan-note/siyuan/kernel/util#Weekday)
  - 参数
    1. `data`: [`time.Time`](https://pkg.go.dev/time#Time) 时间日期对象
  - 返回值
    1. [`int`](https://pkg.go.dev/builtin#int) 指定日期对应的星期编号 `0 ~ 6`
       | 星期编号 | 星期名称 |
       | :------: | :------: |
       | `0` | 周日 |
       | `1` | 周一 |
       | `2` | 周二 |
       | `3` | 周三 |
       | `4` | 周四 |
       | `5` | 周五 |
       | `6` | 周六 |
- 参考
  - [Pull Request #9812 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/pull/9812)
  - [time package](https://pkg.go.dev/time#Time.Weekday) [`Time.Weekday`](https://pkg.go.dev/time#Time.Weekday) [- time - Go Packages](https://pkg.go.dev/time#Time.Weekday)

::: details 示例

```text:no-line-numbers
=> {{toDate "2006-01-02" "2024-01-01" | Weekday}} // [!code highlight]
<= 1

=> {{toDate "2006-01-02" "2024-01-02" | Weekday}} // [!code highlight]
<= 2

=> {{toDate "2006-01-02" "2024-01-03" | Weekday}} // [!code highlight]
<= 3

=> {{toDate "2006-01-02" "2024-01-04" | Weekday}} // [!code highlight]
<= 4

=> {{toDate "2006-01-02" "2024-01-05" | Weekday}} // [!code highlight]
<= 5

=> {{toDate "2006-01-02" "2024-01-06" | Weekday}} // [!code highlight]
<= 6

=> {{toDate "2006-01-02" "2024-01-07" | Weekday}} // [!code highlight]
<= 0
```

:::

## `log` <Badge type="tip" text="^2.11.3" /> {#log}

- 介绍
  - 对数运算 $\lfloor \log_a N \rfloor$
  - 运算结果向下取整
- 函数定义 `func log(N, a interface{}) int64`
  - 参数
    1. `N`: `interface{}` 真数
    2. `a`: `interface{}` 底数
  - 返回值
    1. [`int64`](https://pkg.go.dev/builtin#int64) 向下取整后的对数运算结果 $\lfloor \log_a N \rfloor$
- 参考
  - [Issue #9911 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9911)

::: details 示例

```text:no-line-numbers
=> {{log 10 10}} // [!code highlight]
<= 1

=> {{log 10.0 10.0}} // [!code highlight]
<= 1

=> {{log "10" "10"}} // [!code highlight]
<= 1

=> {{log "10.0" "10.0"}} // [!code highlight]
<= 1

=> {{log 99 10}} // [!code highlight]
<= 1

=> {{log 100 10}} // [!code highlight]
<= 2

=> {{log 101 10}} // [!code highlight]
<= 2

=> {{log 0 10}} // [!code highlight]
<= -9223372036854775808

=> {{log 10 0}} // [!code highlight]
<= 0

=> {{log -10 10}} // [!code highlight]
<= -9223372036854775808

=> {{log 10 -10}} // [!code highlight]
<= -9223372036854775808

=> {{log -10 -10}} // [!code highlight]
<= -9223372036854775808
```

:::

## `logf` <Badge type="tip" text="^2.11.3" /> {#logf}

- 介绍
  - 对数运算 $\log_a N$
  - 保留浮点数运算结果
- 函数定义 `func logf(N, a interface{}) float64`
  - 参数
    1. `N`: `interface{}` 真数
    2. `a`: `interface{}` 底数
  - 返回值
    1. [`float64`](https://pkg.go.dev/builtin#float64) 对数运算结果 $\log_a N$
- 参考
  - [Issue #9911 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9911)

::: details 示例

```text:no-line-numbers
=> {{logf 10 10}} // [!code highlight]
<= 1

=> {{logf 10.0 10.0}} // [!code highlight]
<= 1

=> {{logf "10" "10"}} // [!code highlight]
<= 1

=> {{logf "10.0" "10.0"}} // [!code highlight]
<= 1

=> {{logf 99 10}} // [!code highlight]
<= 1.9956351945975497

=> {{logf 100 10}} // [!code highlight]
<= 2

=> {{logf 101 10}} // [!code highlight]
<= 2.0043213737826426

=> {{logf 0 10}} // [!code highlight]
<= -Inf

=> {{logf 10 0}} // [!code highlight]
<= -0

=> {{logf -10 10}} // [!code highlight]
<= NaN

=> {{logf 10 -10}} // [!code highlight]
<= NaN

=> {{logf -10 -10}} // [!code highlight]
<= NaN
```

:::

## `parseTime` <Badge type="tip" text="^1.5.5" /> {#parseTime}

- 介绍
  - 解析时间戳字符串
- 函数定义 `func parseTime(dateStr string) time.Time`
  - 参数
    1. `dateStr`: [`string`](https://pkg.go.dev/builtin#string) 时间戳字符串
  - 返回值
    1. [`time.Time`](https://pkg.go.dev/time#Time) 时间戳对应的时间日期对象
- 参考
  - [Issue #3605 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/3605)
  - [GitHub - araddon/dateparse](https://github.com/araddon/dateparse)

::: details 示例

```text:no-line-numbers
=> {{FormatFloat "" 12345.6789}} // [!code highlight]
<= 12,345.68

=> {{parseTime "May 8, 2009 5:57:51 PM"}} // [!code highlight]
<= 2009-05-08 17:57:51 +0000 UTC

=> {{parseTime "oct 7, 1970"}} // [!code highlight]
<= 1970-10-07 00:00:00 +0000 UTC

=> {{parseTime "oct 7, '70"}} // [!code highlight]
<= 1970-10-07 00:00:00 +0000 UTC

=> {{parseTime "oct. 7, 1970"}} // [!code highlight]
<= 1970-10-07 00:00:00 +0000 UTC

=> {{parseTime "oct. 7, 70"}} // [!code highlight]
<= 1970-10-07 00:00:00 +0000 UTC

=> {{parseTime "Mon Jan  2 15:04:05 2006"}} // [!code highlight]
<= 2006-01-02 15:04:05 +0000 UTC

=> {{parseTime "Mon Jan  2 15:04:05 MST 2006"}} // [!code highlight]
<= 2006-01-02 15:04:05 +0000 MST

=> {{parseTime "Mon Jan 02 15:04:05 -0700 2006"}} // [!code highlight]
<= 2006-01-02 15:04:05 -0700 -0700

=> {{parseTime "Monday, 02-Jan-06 15:04:05 MST"}} // [!code highlight]
<= 2006-01-02 15:04:05 +0000 MST

=> {{parseTime "Mon, 02 Jan 2006 15:04:05 MST"}} // [!code highlight]
<= 2006-01-02 15:04:05 +0000 MST

=> {{parseTime "Tue, 11 Jul 2017 16:28:13 +0200 (CEST)"}} // [!code highlight]
<= 2017-07-11 16:28:13 +0200 +0200

=> {{parseTime "Mon, 02 Jan 2006 15:04:05 -0700"}} // [!code highlight]
<= 2006-01-02 15:04:05 -0700 -0700

=> {{parseTime "Mon 30 Sep 2018 09:09:09 PM UTC"}} // [!code highlight]
<= 2018-09-30 21:09:09 +0000 UTC

=> {{parseTime "Mon Aug 10 15:44:11 UTC+0100 2015"}} // [!code highlight]
<= 2015-08-10 15:44:11 +0000 UTC

=> {{parseTime "Thu, 4 Jan 2018 17:53:36 +0000"}} // [!code highlight]
<= 2018-01-04 17:53:36 +0000 UTC

=> {{parseTime "Fri Jul 03 2015 18:04:07 GMT+0100 (GMT Daylight Time)"}} // [!code highlight]
<= 2015-07-03 18:04:07 +0100 GMT

=> {{parseTime "Sun, 3 Jan 2021 00:12:23 +0800 (GMT+08:00)"}} // [!code highlight]
<= 2021-01-03 00:12:23 +0800 +0800

=> {{parseTime "September 17, 2012 10:09am"}} // [!code highlight]
<= 2012-09-17 10:09:00 +0000 UTC

=> {{parseTime "September 17, 2012 at 10:09am PST-08"}} // [!code highlight]
<= 2012-09-17 10:09:00 -0800 PST

=> {{parseTime "September 17, 2012, 10:10:09"}} // [!code highlight]
<= 2012-09-17 10:10:09 +0000 UTC

=> {{parseTime "October 7, 1970"}} // [!code highlight]
<= 1970-10-07 00:00:00 +0000 UTC

=> {{parseTime "October 7th, 1970"}} // [!code highlight]
<= 1970-10-07 00:00:00 +0000 UTC

=> {{parseTime "12 Feb 2006, 19:17"}} // [!code highlight]
<= 2006-02-12 19:17:00 +0000 UTC

=> {{parseTime "12 Feb 2006 19:17"}} // [!code highlight]
<= 2006-02-12 19:17:00 +0000 UTC

=> {{parseTime "14 May 2019 19:11:40.164"}} // [!code highlight]
<= 2019-05-14 19:11:40.164 +0000 UTC

=> {{parseTime "7 oct 70"}} // [!code highlight]
<= 1970-10-07 00:00:00 +0000 UTC

=> {{parseTime "7 oct 1970"}} // [!code highlight]
<= 1970-10-07 00:00:00 +0000 UTC

=> {{parseTime "03 February 2013"}} // [!code highlight]
<= 2013-02-03 00:00:00 +0000 UTC

=> {{parseTime "1 July 2013"}} // [!code highlight]
<= 2013-07-01 00:00:00 +0000 UTC

=> {{parseTime "2013-Feb-03"}} // [!code highlight]
<= 2013-02-03 00:00:00 +0000 UTC

=> {{parseTime "06/Jan/2008:15:04:05 -0700"}} // [!code highlight]
<= 2008-01-06 15:04:05 -0700 -0700

=> {{parseTime "06/Jan/2008 15:04:05 -0700"}} // [!code highlight]
<= 2008-01-06 15:04:05 -0700 -0700

=> {{parseTime "3/31/2014"}} // [!code highlight]
<= 2014-03-31 00:00:00 +0000 UTC

=> {{parseTime "03/31/2014"}} // [!code highlight]
<= 2014-03-31 00:00:00 +0000 UTC

=> {{parseTime "08/21/71"}} // [!code highlight]
<= 1971-08-21 00:00:00 +0000 UTC

=> {{parseTime "8/1/71"}} // [!code highlight]
<= 1971-08-01 00:00:00 +0000 UTC

=> {{parseTime "4/8/2014 22:05"}} // [!code highlight]
<= 2014-04-08 22:05:00 +0000 UTC

=> {{parseTime "04/08/2014 22:05"}} // [!code highlight]
<= 2014-04-08 22:05:00 +0000 UTC

=> {{parseTime "4/8/14 22:05"}} // [!code highlight]
<= 2014-04-08 22:05:00 +0000 UTC

=> {{parseTime "04/2/2014 03:00:51"}} // [!code highlight]
<= 2014-04-02 03:00:51 +0000 UTC

=> {{parseTime "8/8/1965 12:00:00 AM"}} // [!code highlight]
<= 1965-08-08 00:00:00 +0000 UTC

=> {{parseTime "8/8/1965 01:00:01 PM"}} // [!code highlight]
<= 1965-08-08 13:00:01 +0000 UTC

=> {{parseTime "8/8/1965 01:00 PM"}} // [!code highlight]
<= 1965-08-08 13:00:00 +0000 UTC

=> {{parseTime "8/8/1965 1:00 PM"}} // [!code highlight]
<= 1965-08-08 13:00:00 +0000 UTC

=> {{parseTime "8/8/1965 12:00 AM"}} // [!code highlight]
<= 1965-08-08 00:00:00 +0000 UTC

=> {{parseTime "4/02/2014 03:00:51"}} // [!code highlight]
<= 2014-04-02 03:00:51 +0000 UTC

=> {{parseTime "03/19/2012 10:11:59"}} // [!code highlight]
<= 2012-03-19 10:11:59 +0000 UTC

=> {{parseTime "03/19/2012 10:11:59.3186369"}} // [!code highlight]
<= 2012-03-19 10:11:59.3186369 +0000 UTC

=> {{parseTime "2014/3/31"}} // [!code highlight]
<= 2014-03-31 00:00:00 +0000 UTC

=> {{parseTime "2014/03/31"}} // [!code highlight]
<= 2014-03-31 00:00:00 +0000 UTC

=> {{parseTime "2014/4/8 22:05"}} // [!code highlight]
<= 2014-04-08 22:05:00 +0000 UTC

=> {{parseTime "2014/04/08 22:05"}} // [!code highlight]
<= 2014-04-08 22:05:00 +0000 UTC

=> {{parseTime "2014/04/2 03:00:51"}} // [!code highlight]
<= 2014-04-02 03:00:51 +0000 UTC

=> {{parseTime "2014/4/02 03:00:51"}} // [!code highlight]
<= 2014-04-02 03:00:51 +0000 UTC

=> {{parseTime "2012/03/19 10:11:59"}} // [!code highlight]
<= 2012-03-19 10:11:59 +0000 UTC

=> {{parseTime "2012/03/19 10:11:59.3186369"}} // [!code highlight]
<= 2012-03-19 10:11:59.3186369 +0000 UTC

=> {{parseTime "2014:3:31"}} // [!code highlight]
<= 2014-03-31 00:00:00 +0000 UTC

=> {{parseTime "2014:03:31"}} // [!code highlight]
<= 2014-03-31 00:00:00 +0000 UTC

=> {{parseTime "2014:4:8 22:05"}} // [!code highlight]
<= 2014-04-08 22:05:00 +0000 UTC

=> {{parseTime "2014:04:08 22:05"}} // [!code highlight]
<= 2014-04-08 22:05:00 +0000 UTC

=> {{parseTime "2014:04:2 03:00:51"}} // [!code highlight]
<= 2014-04-02 03:00:51 +0000 UTC

=> {{parseTime "2014:4:02 03:00:51"}} // [!code highlight]
<= 2014-04-02 03:00:51 +0000 UTC

=> {{parseTime "2012:03:19 10:11:59"}} // [!code highlight]
<= 2012-03-19 10:11:59 +0000 UTC

=> {{parseTime "2012:03:19 10:11:59.3186369"}} // [!code highlight]
<= 2012-03-19 10:11:59.3186369 +0000 UTC

=> {{parseTime "2014年04月08日"}} // [!code highlight]
<= 2014-04-08 00:00:00 +0000 UTC

=> {{parseTime "2006-01-02T15:04:05+0000"}} // [!code highlight]
<= 2006-01-02 15:04:05 +0000 UTC

=> {{parseTime "2009-08-12T22:15:09-07:00"}} // [!code highlight]
<= 2009-08-12 22:15:09 -0700 -0700

=> {{parseTime "2009-08-12T22:15:09"}} // [!code highlight]
<= 2009-08-12 22:15:09 +0000 UTC

=> {{parseTime "2009-08-12T22:15:09.988"}} // [!code highlight]
<= 2009-08-12 22:15:09.988 +0000 UTC

=> {{parseTime "2009-08-12T22:15:09Z"}} // [!code highlight]
<= 2009-08-12 22:15:09 +0000 UTC

=> {{parseTime "2017-07-19T03:21:51:897+0100"}} // [!code highlight]
<= 2017-07-19 03:21:51.897 +0100 +0100

=> {{parseTime "2019-05-29T08:41-04"}} // [!code highlight]
<= 2019-05-29 08:41:00 -0400 -0400

=> {{parseTime "2014-04-26 17:24:37.3186369"}} // [!code highlight]
<= 2014-04-26 17:24:37.3186369 +0000 UTC

=> {{parseTime "2012-08-03 18:31:59.257000000"}} // [!code highlight]
<= 2012-08-03 18:31:59.257 +0000 UTC

=> {{parseTime "2014-04-26 17:24:37.123"}} // [!code highlight]
<= 2014-04-26 17:24:37.123 +0000 UTC

=> {{parseTime "2013-04-01 22:43"}} // [!code highlight]
<= 2013-04-01 22:43:00 +0000 UTC

=> {{parseTime "2013-04-01 22:43:22"}} // [!code highlight]
<= 2013-04-01 22:43:22 +0000 UTC

=> {{parseTime "2014-12-16 06:20:00 UTC"}} // [!code highlight]
<= 2014-12-16 06:20:00 +0000 UTC

=> {{parseTime "2014-12-16 06:20:00 GMT"}} // [!code highlight]
<= 2014-12-16 06:20:00 +0000 UTC

=> {{parseTime "2014-04-26 05:24:37 PM"}} // [!code highlight]
<= 2014-04-26 17:24:37 +0000 UTC

=> {{parseTime "2014-04-26 13:13:43 +0800"}} // [!code highlight]
<= 2014-04-26 13:13:43 +0800 +0800

=> {{parseTime "2014-04-26 13:13:43 +0800 +08"}} // [!code highlight]
<= 2014-04-26 13:13:43 +0800 +0800

=> {{parseTime "2014-04-26 13:13:44 +09:00"}} // [!code highlight]
<= 2014-04-26 13:13:44 +0900 +0900

=> {{parseTime "2012-08-03 18:31:59.257000000 +0000 UTC"}} // [!code highlight]
<= 2012-08-03 18:31:59.257 +0000 UTC

=> {{parseTime "2015-09-30 18:48:56.35272715 +0000 UTC"}} // [!code highlight]
<= 2015-09-30 18:48:56.35272715 +0000 UTC

=> {{parseTime "2015-02-18 00:12:00 +0000 GMT"}} // [!code highlight]
<= 2015-02-18 00:12:00 +0000 UTC

=> {{parseTime "2015-02-18 00:12:00 +0000 UTC"}} // [!code highlight]
<= 2015-02-18 00:12:00 +0000 UTC

=> {{parseTime "2015-02-08 03:02:00 +0300 MSK m=+0.000000001"}} // [!code highlight]
<= 2015-02-08 03:02:00 +0300 +0300

=> {{parseTime "2015-02-08 03:02:00.001 +0300 MSK m=+0.000000001"}} // [!code highlight]
<= 2015-02-08 03:02:00.001 +0300 +0300

=> {{parseTime "2017-07-19 03:21:51+00:00"}} // [!code highlight]
<= 2017-07-19 03:21:51 +0000 UTC

=> {{parseTime "2014-04-26"}} // [!code highlight]
<= 2014-04-26 00:00:00 +0000 UTC

=> {{parseTime "2014-04"}} // [!code highlight]
<= 2014-04-01 00:00:00 +0000 UTC

=> {{parseTime "2014"}} // [!code highlight]
<= 2014-01-01 00:00:00 +0000 UTC

=> {{parseTime "2014-05-11 08:20:13,787"}} // [!code highlight]
<= 2014-05-11 08:20:13.787 +0000 UTC

=> {{parseTime "2020-07-20+08:00"}} // [!code highlight]
<= 2020-07-20 00:00:00 +0800 +0800

=> {{parseTime "3.31.2014"}} // [!code highlight]
<= 2014-03-31 00:00:00 +0000 UTC

=> {{parseTime "03.31.2014"}} // [!code highlight]
<= 2014-03-31 00:00:00 +0000 UTC

=> {{parseTime "08.21.71"}} // [!code highlight]
<= 1971-08-21 00:00:00 +0000 UTC

=> {{parseTime "2014.03"}} // [!code highlight]
<= 2014-03-01 00:00:00 +0000 UTC

=> {{parseTime "2014.03.30"}} // [!code highlight]
<= 2014-03-30 00:00:00 +0000 UTC

=> {{parseTime "20140601"}} // [!code highlight]
<= 2014-06-01 00:00:00 +0000 UTC

=> {{parseTime "20140722105203"}} // [!code highlight]
<= 2014-07-22 10:52:03 +0000 UTC

=> {{parseTime "171113 14:14:20"}} // [!code highlight]
<= 2017-11-13 14:14:20 +0000 UTC

=> {{parseTime "1332151919"}} // [!code highlight]
<= 2012-03-19 10:11:59 +0000 UTC

=> {{parseTime "1384216367189"}} // [!code highlight]
<= 2013-11-12 00:32:47.189 +0000 UTC

=> {{parseTime "1384216367111222"}} // [!code highlight]
<= 2013-11-12 00:32:47.111222 +0000 UTC

=> {{parseTime "1384216367111222333"}} // [!code highlight]
<= 2013-11-12 00:32:47.111222333 +0000 UTC
```

:::

## `pow` <Badge type="tip" text="^2.11.3" /> {#pow}

- 介绍
  - 指数运算 $\lfloor a^n \rfloor$
  - 运算结果向 0 取整
- 函数定义 `func pow(a, n interface{}) int64`
  - 参数
    1. `a`: `interface{}` 底数
    2. `n`: `interface{}` 指数
  - 返回值
    1. [`int64`](https://pkg.go.dev/builtin#int64) 向 0 取整后的指数运算结果 $\lfloor a^n \rfloor$
- 参考
  - [Issue #9911 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9911)

::: details 示例

```text:no-line-numbers
=> {{pow 10 1}} // [!code highlight]
<= 10

=> {{pow 10.0 1.0}} // [!code highlight]
<= 10

=> {{pow "10" "1"}} // [!code highlight]
<= 10

=> {{pow "10.0" "1.0"}} // [!code highlight]
<= 10

=> {{pow 10 0.5}} // [!code highlight]
<= 3

=> {{pow 10 1.5}} // [!code highlight]
<= 31

=> {{powf 10 10}} // [!code highlight]
<= 10000000000

=> {{pow 0 10}} // [!code highlight]
<= 0

=> {{pow 10 0}} // [!code highlight]
<= 1

=> {{pow -10 1}} // [!code highlight]
<= -10

=> {{pow 10 -1}} // [!code highlight]
<= 0

=> {{pow -10 -1}} // [!code highlight]
<= 0
```

:::

## `powf` <Badge type="tip" text="^2.11.3" /> {#powf}

- 介绍
  - 指数运算 $a^n$
  - 保留浮点数运算结果
- 函数定义 `func powf(a, n interface{}) float64`
  - 参数
    1. `a`: `interface{}` 底数
    2. `n`: `interface{}` 指数
  - 返回值
    1. [`float64`](https://pkg.go.dev/builtin#float64) 指数运算结果 $a^n$
- 参考
  - [Issue #9911 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9911)

::: details 示例

```text:no-line-numbers
=> {{powf 10 1}} // [!code highlight]
<= 10

=> {{powf 10.0 1.0}} // [!code highlight]
<= 10

=> {{powf "10" "1"}} // [!code highlight]
<= 10

=> {{powf "10.0" "1.0"}} // [!code highlight]
<= 10

=> {{powf 10 0.5}} // [!code highlight]
<= 3.1622776601683795

=> {{powf 10 1.5}} // [!code highlight]
<= 31.622776601683796

=> {{powf 10 10}} // [!code highlight]
<= 1e+10

=> {{powf 0 10}} // [!code highlight]
<= 0

=> {{powf 10 0}} // [!code highlight]
<= 1

=> {{powf -10 1}} // [!code highlight]
<= -10

=> {{powf 10 -1}} // [!code highlight]
<= 0.1

=> {{powf -10 -1}} // [!code highlight]
<= -0.1
```

:::
