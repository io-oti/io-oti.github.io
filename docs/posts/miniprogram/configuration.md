# VS Code 小程序配置

## prettier

vscode `settings.json`:

```json
{
  "[wxml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[wxss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[wxs]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.documentSelectors": ["**/*.wxml", "**/*.wxss", "**/*.wxs"],
  "explorer.fileNesting.enabled": true,
  "explorer.fileNesting.expand": false,
  "explorer.fileNesting.patterns": {
    "README.md": "project.*.json,sitemap.json",
    "package.json": ".*,package-lock.json"
  }
}

```

`.prettierrc`:

```json {.prettierrc}
{
  "arrowParens": "avoid",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "printWidth": 80,
  "semi": false,
  "singleAttributePerLine": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "overrides": [
    {
      "files": "*.wxml",
      "options": {
        "parser": "html"
      }
    },
    {
      "files": "*.wxss",
      "options": {
        "parser": "css"
      }
    },
    {
      "files": "*.wxs",
      "options": {
        "parser": "babel"
      }
    }
  ]
}
```
