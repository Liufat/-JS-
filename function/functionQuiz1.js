function BMI(Weight , Hight) {
    let BMI = Math.floor((Weight / (Hight / 100) ** 2) * 10) / 10;
            const theResult = document.getElementById('result')
    if (BMI < 18.5) {
        theResult.textContent = (`您的BMI是${BMI}，您是過輕體型`);
    } else if (18.5 <= BMI && BMI < 24) {
        theResult.textContent = (`您的BMI是${BMI}，您是正常體型`);
    } else if (24 <= BMI && BMI < 27) {
        theResult.textContent = (`您的BMI是${BMI}，您是過重體型`);
    } else if (27 <= BMI && BMI < 30) {
        theResult.textContent = (`您的BMI是${BMI}，您是輕度肥胖體型`);
    } else if (30 <= BMI && BMI < 35) {
        theResult.textContent = (`您的BMI是${BMI}，您是中度肥胖體型`);
    } else if (BMI >= 35) {
        theResult.textContent = (`您的BMI是${BMI}，您是重度肥胖體型`);
    } else {
        theResult.textContent = ('您似乎忘記輸入數字了，請記得輸入數字');
    }
}