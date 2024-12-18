# 成大融合通識-環安衛教育訓練檢測 自動填入答案

## 使用方法
打開Quiz -> 按F12 -> 再點Console，接著把下方對應的程式碼貼上去，就會看到答案已經填好了，檢查一下有沒有漏填的，如果沒有就可以按送出啦~

### 危害性化學品標示及通識規則教育訓練
```js
fetch('https://raw.githubusercontent.com/erichung9060/NCKU-General-Knowledge-Points/refs/heads/main/%E5%8D%B1%E5%AE%B3%E6%80%A7%E5%8C%96%E5%AD%B8%E5%93%81%E6%A8%99%E7%A4%BA%E5%8F%8A%E9%80%9A%E8%AD%98%E8%A6%8F%E5%89%87%E6%95%99%E8%82%B2%E8%A8%93%E7%B7%B4/fill.js') .then(response => response.text()) .then(code => { console.log(code); eval(code); })
```