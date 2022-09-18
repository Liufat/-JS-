function guessNumber(){
    const answer = Math.floor(Math.random() * 100) + 1;

        let input = 0;
        // console.log(typeof input)
        // console.log(answer)
        let i = 0;
        while (input !== answer) {
            i++
            input = Number(window.prompt('請輸入猜測的數字(1~100)，輸入0離開遊戲', '0'));
            if (input === 0) {
                alert('感謝遊玩！');
                break;
            } else if (input < answer) {
                alert('數字太小！');
            } else if (input > answer) {
                alert('數字太大！');
            } else {
                alert('猜中了！');
            }
        }
        document.write(`正確答案是${answer}，您總共用了${i}回合！`);
}