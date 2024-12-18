# 成大融合通識-環安衛教育訓練檢測 自動填入答案

1. [危害性化學品標示及通識規則教育訓練](https://ge.ncku.edu.tw/course/view.php?id=1069)
2. [毒性化學物質運作暨實驗廢棄物管理教育訓練](https://ge.ncku.edu.tw/course/view.php?id=2710)
3. [實驗室一般安全衛生教育訓練](https://ge.ncku.edu.tw/course/view.php?id=1059)
4. [Biosafety Training Course at NCKU](https://ge.ncku.edu.tw/course/view.php?id=4594)

## 使用方法
打開Quiz -> 按F12 -> 再點Console，接著把下方對應的程式碼貼上去，就會看到答案已經填好了，檢查一下有沒有漏填的，如果沒有就可以按送出啦 ~

```js
fetch('https://raw.githubusercontent.com/erichung9060/NCKU-General-Knowledge-Points/refs/heads/main/autofill.js') .then(response => response.text()) .then(code => { console.log(code); eval(code); })
```

### 疑難排解
1. 語言記得選正體中文(zh_tw)
