---
outline: deep
---

# 字符串处理函数

Sprig 有许多字符串操作函数

## `trim`

移除字符串首尾的空格

```
trim "   hello    "
```

上述语句返回字符串 `hello`

## `trimAll`

移除字符串首尾指定的字符

```
trimAll "$" "$5.00"
```

上述语句返回字符串 `5.00`

## `trimSuffix`

移除字符串尾部指定的字符

```
trimSuffix "-" "hello-"
```

上述语句返回字符串 `hello`

## `trimPrefix`

移除字符串首部指定的字符

```
trimPrefix "-" "-hello"
```

上述语句返回字符串 `hello`

## `upper`

将字符串中所有字母转换为大写

```
upper "hello"
```

上述语句返回字符串 `HELLO`

## `lower`

将字符串所有字母转换为小写

```
lower "HELLO"
```

上述语句返回字符串 `hello`

## `title`

将字符串转换为题目样式 (单词首字母大写)

```
title "hello world"
```

上述语句返回字符串 `Hello World`

## `untitle`

移除字符串题目样式

```
untitle "Hello World"
```

上述语句返回字符串 `hello world`

## `repeat`

字符串重复指定的次数

```
repeat 3 "hello"
```

上述语句返回字符串 `hellohellohello`

## `substr`

获取一个字符串的子串

参数:

- 起始位置 (整数)
- 结束位置 (整数)
- 待处理的字符串 (字符串)

```
substr 0 5 "hello world"
```

上述语句返回字符串 `hello`

## `nospace`

移除字符串中所有的空格

```
nospace "hello w o r l d"
```

上述语句返回字符串 `helloworld`

## `trunc`

截取指定长度字符串 (截断后末尾不添加任何内容)

```
trunc 5 "hello world"
```

上述语句返回字符串 `hello`

```
trunc -5 "hello world"
```

上述语句返回字符串 `world`

## `abbrev`

截取指定长度字符串 (截断后末尾添加省略号)

参数:

- 最大长度 (整数)
- 待处理的字符串 (字符串)

```
abbrev 5 "hello world"
```

上述语句返回字符串 `he...`，最大长度中包含三个英文句号组成的省略号

## `abbrevboth`

从指定位置截取指定长度字符串 (首尾添加省略号)

```
abbrevboth 5 10 "1234 5678 9123"
```

上述语句返回字符串 `...5678...`

参数:

- 字符串起始位置 (整数)
- 字符串截取长度 (整数)
- 待处理的字符串 (字符串)

## `initials`

获取并拼接每个单词的首字母

```
initials "First Try"
```

上述语句返回字符串 `FT`

## `randAlphaNum`，`randAlpha`，`randNumeric`，`randAscii`

生成指定长度的随机字符串 (使用 `crypto/rand` 模块)

- `randAlphaNum`: 生成的随机字符串包含 `0-9a-zA-Z`
- `randAlpha`: 生成的随机字符串包含 `a-zA-Z`
- `randNumeric`: 生成的随机字符串包含 `0-9`
- `randAscii`: 生成的随机字符串包含所有可打印的 ASCII 字符

参数:

- 待生成的随机字符串的长度 (整数)

```
randNumeric 3
```

上述语句将生成一个由 `3` 个数字组成的随机字符串

## `wrap`

在指定列处使用 `\n` 换行

```
wrap 80 $someText
```

若字符串 `$someText` 中

- 若第 `81` 个字符为空格，则将第 `81` 个字符替换为 `\n`
- 若第 `81` 个字符不为空格，则将 `80` 个字符中最后的一个空格替换为换行符 `\n`
- 若前 `80` 个字符中不存在空格，则在第 `80` 个字符后插入一个换行符 `\n`

## `wrapWith`

与 `wrap` 相似，在指定列处使用使用指定的字符串作为换行符号进行换行

```
wrapWith 5 "\t" "Hello World"
```

上述语句返回字符串 `Hello	World` (空白字符为制表符 `\t`)

## `contains`

测试一个字符串是否包含另一个字符串

```
contains "cat" "catch"
```

上述语句返回 `true`，因为字符串 `catch` 包含字符串 `cat`

## `hasPrefix`，`hasSuffix`

测试一个字符串是否具有指定的前缀(`hasPrefix`)或后缀(`hasSuffix`)

```
hasPrefix "cat" "catch"
```

上述语句返回 `true`，因为字符串 `catch` 包含前缀 `cat`

## `quote`，`squote`

使用双引号 (`quote`) 或单引号 (`squote`) 包括一个字符串

```
quote "abc"
```

上述语句返回 `"abc"`

```
squote "def"
```

上述语句返回 `'def'`

## `cat`

`cat` 函数可将多个字符串拼接为一个字符串 (拼接后的字符串使用空格分隔)

```
cat "hello" "beautiful" "world"
```

上述语句返回 `hello beautiful world`

## `indent`

`indent` 函数可将给定的字符串中每一行都缩进到指定的宽度 (用于对齐多行字符串)

```
indent 4 $lots_of_text
```

上述语句将使用 4 个空格缩进字符串中的每一行

## `nindent`

`nindent` 函数的功能与 `indent` 函数相同，但是会在字符串开头插入一个新行 (空行)

```
nindent 4 $lots_of_text
```

上述语句将使用 4 个空格缩进字符串中的每一行，且会在字符串首插入一个新行 (空行)

## `replace`

执行简单的字符串替换

参数:

- 查找的字符串 (字符串)
- 替换的字符日 (字符串)
- 原始字符串 (字符串)

```
"I Am Henry VIII" | replace " " "-"
replace " " "-" "I Am Henry VIII"
```

上述语句将返回 `I-Am-Henry-VIII`

## `plural`

字符串的复数化

```
len $fish | plural "one anchovy" "many anchovies"
plural "one anchovy" "many anchovies" (len $fish)
```

上述语句中，若 `len $fish` 为 `1`，那么第一个参数 `one anchovy` 将会被返回，否则第二个参数 `many anchovies` 将会被返回

参数:

- 单数字符串 (字符串)
- 复数字符串 (字符串)
- 数量 (整数)

注意: Sprig 当前不支持存在更多复数形式的语言。
`0` 被认为是复数形式，因为英语将其视为复数形式(`zero anchovies`)。
Sprig 开发人员正在研究一种更好的国际化解决方案。

## `snakecase`

将字符串从驼峰命名格式(camelCase)转换为蛇形命名格式(snake_case)

```
snakecase "FirstName"
```

上述语句将返回 `first_name`

## `camelcase`

将字符串从蛇形命名格式(snake_case)转换为驼峰命名格式(CamelCase)

```
camelcase "http_server"
```

上述语句将返回 `HttpServer`

## `kebabcase`

将字符串从驼峰命名格式(camelCase)转换为短横线命名格式(kebab-case)

```
kebabcase "FirstName"
```

上述语句将返回 `first-name`

## `swapcase`

使用基于单词的算法交换字符串的大小写

转换算法:

- 大写字母转换为小写字母
- 标题字母转换为小写字母
- 首字母与空白字符后的字母转换为标题字母
- 其他消息字母转换为大写字母
- 空白字符使用 `unicode.IsSpace(char)` 判断

```
swapcase "This Is A.Test"
```

上述语句将返回 `tHIS iS a.tEST`

## `shuffle`

打乱一个字符串中各字符的位置

```
shuffle "hello"
```

上述语句将打乱字符串 `hello` 中的字母，可能返回 `oelhl`

## `regexMatch`，`mustRegexMatch`

如果指定的正则表达式能够匹配输入的字符串，则返回 `true`

```
regexMatch "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$" "test@acme.com"
```

上述语句返回 `true`

`regexMatch` 出现异常时会抛出 `panic`，`mustRegexMathc` 出现异常时会向模板引擎返回一个 `error`

## `regexFindAll`，`mustRegexFindAll`

返回输入字符串中正则表达式所有匹配项的切片。最后一个参数 `n` 确定要返回的子字符串数，其中 `-1` 表示返回所有匹配项。

```
regexFindAll "[2,4,6,8]" "123456789" -1
```

上述语句返回 `[2 4 6 8]`

`regexFindAll` 出现异常时会抛出 `panic`，`mustRegexFindAll` 出现异常时会向模板引擎返回一个 `error`

## `regexFind`，`mustRegexFind`

返回输入字符串中正则表达式第一个匹配项(最左侧的匹配项)

```
regexFind "[a-zA-Z][1-9]" "abcd1234"
```

上述语句返回 `d1`

`regexFind` 出现异常时会抛出 `panic`，`mustRegexFind` 出现异常时会向模板引擎返回一个 `error`

## `regexReplaceAll`，`mustRegexReplaceAll`

将输入字符串中正则表达式的匹配项替换为替换字符串。在替换字符串中，符号`$`具有特殊含义，例如 `${1}` 表示第一个分组匹配的文本。

```
regexReplaceAll "a(x*)b" "-ab-axxb-" "${1}W"
```

上述语句返回 `-W-xxW-`

`regexReplaceAll` 出现异常时会抛出 `panic`，`mustRegexReplaceAll` 出现异常时会向模板引擎返回一个 `error`

## `regexReplaceAllLiteral`，`mustRegexReplaceAllLiteral`

将输入字符串中正则表达式的匹配项替换为替换字符串。在替换字符串中所有字符都没有特殊含义。

```
regexReplaceAllLiteral "a(x*)b" "-ab-axxb-" "${1}"
```

上述语句返回 `-{1}-`

`regexReplaceAllLiteral` 出现异常时会抛出 panic，`mustRegexReplaceAllLiteral` 出现异常时会向模板引擎返回一个 error

## `regexSplit`，`mustRegexSplit`

使用正则表达式分割输入的字符串为字符串切片，分割的位置为正则表达式匹配的字符串。最后一个参数 `n` 确定要返回的子字符串数，其中 `-1` 表示返回所有匹配项。

```
regexSplit "z+" "pizza" -1
```

上述语句返回 `[pi a]`

`regexSplit` 出现异常时会抛出 panic，`mustRegexSplit` 出现异常时会向模板引擎返回一个 error

## `regexQuoteMeta`

转义字符串中所有正则表达式元字符; 返回的字符串是与文本匹配的正则表达式。

```
regexQuoteMeta "1.2.3"
```

上述语句返回 `1\.2\.3`

## 其他

- [转换函数](./conversion.md) 包含用于转换字符串的函数
- [字符串切片函数](./string-slice.md) 包含用于处理字符串数组的函数
