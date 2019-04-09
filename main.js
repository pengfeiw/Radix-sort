var input = document.querySelector(".input");
var sortBtn = document.querySelector("button");
var body = document.querySelector("body");

sortBtn.addEventListener('click', sort);

var __newVar__20190409131700168800 = ;
function so__newVar__20190409131700168800rt() {
	var childELes = body.children;

	//==============注意这种方法是错误的，因为遍历索引，前面的移除后，后面的索引会变化，类似C++，C#中用for(;;)循环，从前开始删除元素。
	// for(var pIndex in childELes)
	// {
	// 	if (childELes[pIndex].tagName !== undefined)
	// 		if (childELes[pIndex].tagName.toLowerCase() === "p")
	// 			childELes[pIndex].remove();
	// }
	//==============注意这种方法是错误的，因为遍历索引，前面的移除后，后面的索引会变化，类似C++，C#中用for(;;)循环，从前开始删除元素。
	
	for(let i = childELes.length - 1; i >= 0; i--)
	{
		if (childELes[i].tagName !== undefined)
		{
			if (childELes[i].tagName.toLowerCase() === "p")
				childELes[i].remove();
		}
	}

    if (input.value.trim() != "") {
        var strArr = input.value.split(" ");
        var intArr = strArr.map(element => parseInt(element));
        var maxLenth = 0;
        for (let valueIndex in strArr) {
            maxLenth = maxLenth > strArr[valueIndex].length ? maxLenth : strArr[valueIndex].length;
        }
        var res;
        for (let i = 0; i < maxLenth; i++) {
            res = subSort(i, intArr);
            var newPara = document.createElement("p");
            newPara.innerText = "第" + i + "次：";
            for(let j = 0; j < intArr.length; j++)
            {
            	newPara.innerText += " ";
            	newPara.innerText += intArr[j];
            }
            body.appendChild(newPara);
        }

        var finishPara = document.createElement("p");
        finishPara.innerText = "完成排序！";
        body.appendChild(finishPara)
    }
    else
    {
    	window.alert("输入有误!");
    }
}

//index表示位数，从0开始，0表示个位数，1表示十位数...
function subSort(index, arr) {
    if (index >= 0) {
        arr.sort(compare);
    }

    function compare(ele1, ele2) {
        var ele1Str = String(ele1);
        var ele2Str = String(ele2);
        if (ele1Str.length >= index + 1 && ele2Str.length >= index + 1) {
        	var value1 = parseInt(ele1Str.slice(ele1Str.length - 1 - index, ele1Str.length - index));
        	var value2 = parseInt(ele2Str.slice(ele2Str.length - 1 - index, ele2Str.length - index));
        	//return value1 > value2 ? 1 : -1;
        	if (value1 > value2)
        		return 1;
        	else if(value1 < value2)
        		return -1;
        	else
        		return 0;
        } else if (ele1Str.length >= index + 1 && ele2Str.length < index + 1) {
            return 1;
        } else if (ele1Str.length < index + 1 && ele2Str.length >= index + 1) {
            return -1;
        } else {
            return 0;
        }
    }
}