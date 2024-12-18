# 成大融合通識-環安衛教育訓練檢測 自動填入答案

## 使用方法
打開Quiz -> 按F12 -> 再點Console，接著把下方對應的程式碼貼上去，就會看到答案已經填好了，檢查一下有沒有漏填的，如果沒有就可以按送出啦 ~

```js
fetch('https://raw.githubusercontent.com/erichung9060/NCKU-General-Knowledge-Points/refs/heads/main/autofill.js') .then(response => response.text()) .then(code => { console.log(code); eval(code); })
```

### 疑難排解
1. 語言記得選正體中文(zh_tw)