---
outline: deep
---

# 路径与文件路径函数

尽管 Sprig 不允许访问文件系统，但它提供了一些函数用于处理遵循文件路径约定的字符串。

## 路径

路径由斜杠字符（`/`）分隔，由`path`包处理。

示例：

- [Linux](https://en.wikipedia.org/wiki/Linux) 和 [MacOS](https://en.wikipedia.org/wiki/MacOS) 文件系统：`/home/user/file`，`/etc/config`；
- [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) 的路径部分：`https://example.com/some/content/`，`ftp://example.com/file/`。

### `base`

返回路径的最后一个元素。

```
base "foo/bar/baz"
```

上述语句将返回 `"baz"`。

### `dir`

返回目录，删除路径的最后一部分。因此，`dir "foo/bar/baz"` 返回 `"foo/bar"`。

### `clean`

清理路径。

```
clean "foo/bar/../baz"
```

以上将解析 `..` 并返回 `"foo/baz"`。

### `ext`

返回文件扩展名。

```
ext "foo.bar"
```

以上将返回 `".bar"`。

### `isAbs`

要检查路径是否为绝对路径，请使用 `isAbs`。

## 文件路径

路径由`os.PathSeparator`变量分隔，由`path/filepath`包处理。

这些是在解析本地文件系统路径时推荐使用的函数，通常用于处理本地文件、目录等。

示例：

- 在 Linux 或 MacOS 上运行时，文件系统路径由斜杠字符（`/`）分隔：
  `/home/user/file`，`/etc/config`；
- 在 [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows) 上运行时，文件系统路径由反斜杠字符（`\`）分隔：
  `C:\Users\Username\`，`C:\Program Files\Application\`。

### `osBase`

返回文件路径的最后一个元素。

```
osBase "/foo/bar/baz"
osBase "C:\\foo\\bar\\baz"
```

以上在 Linux 和 Windows 上均返回 `"baz"`。

### `osDir`

返回目录，删除路径的最后一部分。

`osDir "/foo/bar/baz"` 在 Linux 上返回`"/foo/bar"`

`osDir "C:\\foo\\bar\\baz"`在 Windows 上返回`"C:\\foo\\bar"`

### `osClean`

清理路径。

```
osClean "/foo/bar/../baz"
osClean "C:\\foo\\bar\\..\\baz"
```

上述语句在 Linux 上解析 `..` 并返回 `"foo/baz"`，在 Windows 上返回 `"C:\\foo\\baz"`。

### `osExt`

返回文件扩展名。

```
osExt "/foo.bar"
osExt "C:\\foo.bar"
```

上述语句在 Linux 和 Windows 上均返回 `".bar"`。

### `osIsAbs`

要检查文件路径是否为绝对路径，请使用 `osIsAbs`。
