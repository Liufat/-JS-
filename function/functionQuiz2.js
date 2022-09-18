function Tree(hight) {
    let tree = "^";
    let space = "&nbsp";
    for (let y = 1; y <= hight; y++) {
        for (let z = 1; z <= (hight - y) * 2; z++) {//y每+1，就印出(8-y)*2個空格
            document.write(space);
        }
        for (let x = 0; x <= (y - 1) * 2; x++) {//y每+1，就印出y-1個^(因為x從0開始，所以全部會多印一個^)
            document.write(tree);
        }
        document.write("</br>") //y每+1就換一層

    }
    for (let y = 1; y <= 2; y++) { //樹幹
        for (let z = 2; z < hight * 2; z++) { //讓樹幹位置保持在中間
            document.write(space);
        }
        document.write(tree + "</br>");
    }
}