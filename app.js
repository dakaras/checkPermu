function checkPermu(str1, str2){
    if (str1.length === str2.length){
        return false
    }else{
        let sortStr1 = str1.split("").sort.join("")
        let sortStr2 = str2.split("").sort.join("")
        return sortStr1 === sortStr2
    }
}

console.log(checkPermu('aba', 'aab'), true);

console.log(checkPermu('aba', 'aaba'), false);

console.log(checkPermu('aba', 'aa'), false);