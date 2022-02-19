
function compress(list)  {

    console.log(list);

    let listNew = [];
    let r = 1;   // считает количество одинаковых повторений  

    for (let i=1; i<=list.length; i++) {
        if (list[i] === list[i-1]) {
            r++;    // если текущий элемент равен предыдущему добавляем +1 
        }
        else {
            listNew.push(r);
            r=1;  // если нет, счётчик ставим на 1
        }
    }
    console.log(listNew);

    return listNew;
}

compress([0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1])

