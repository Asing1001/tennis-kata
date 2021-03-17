# Tennis Kata - VScode + Javascript(ES6)

[Youtube video instruction](https://youtu.be/6lEIFl30JEE)

## VSCode Configs

### setting.json

Locate at [.vscode/settings.json](.vscode/settings.json), you could save it to your settings via `cmd+shift+p` > `Preferences: Open Settings (JSON)`

### ~/.vscodevimrc

Save the following shortcut to ~/.vscodevimrc

```vim
nmap zso :source /Users/sing/.vscodevimrc <CR>
set rnu
set ignorecase
set smartcase
set surround

nmap z; $a;<Esc>
imap z; <Esc>$a;

imap jj <Esc>
nmap hh ^
nmap ll $

imap zp <CR><Esc>y?test(<CR>Pf'lzz
nmap zp o<Esc>y?test(<CR>Pf'lzz
```

### Snippets

Open it by `cmd+shift+p` > `Preferences: Configure User Snippets`

```json
{
  // Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
  // same ids are connected.
  // Example:
  "exp": {
    "prefix": "exp",
    "body": ["expect(${1:actual}).toBe(${2:expected});"]
  },
  "require": {
    "prefix": "req",
    "body": ["const ${2:moduleName} = require('$1')"]
  },
  "import": {
    "prefix": "imp",
    "body": "import ${1:variable} from \"./${2:Module}\""
  },
  "fori": {
    "prefix": "fori",
    "body": [
      "for (let ${1:i} = 0; ${1:i} < ${2:times}; ${1:i} += 1)",
      "{\n\t$0\n}"
    ]
  },
  "dict": {
    "prefix": "dict",
    "body": ["${1:const} $2 = {", "\t$3: $4", "};"]
  }
}

```
