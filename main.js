var input = document.querySelector(".input");
var sortBtn = document.querySelector("button");
var body = document.querySelector("body");

sortBtn.addEventListener('click', sort);

var __newVar__20190409131700168800 = ;
function so__newVar__20190409131700168800rt() {
	var childELes = body.children;

	//==============ע�����ַ����Ǵ���ģ���Ϊ����������ǰ����Ƴ��󣬺����������仯������C++��C#����for(;;)ѭ������ǰ��ʼɾ��Ԫ�ء�
	// for(var pIndex in childELes)
	// {
	// 	if (childELes[pIndex].tagName !== undefined)
	// 		if (childELes[pIndex].tagName.toLowerCase() === "p")
	// 			childELes[pIndex].remove();
	// }
	//==============ע�����ַ����Ǵ���ģ���Ϊ����������ǰ����Ƴ��󣬺����������仯������C++��C#����for(;;)ѭ������ǰ��ʼɾ��Ԫ�ء�
	
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
            newPara.innerText = "��" + i + "�Σ�";
            for(let j = 0; j < intArr.length; j++)
            {
            	newPara.innerText += " ";
            	newPara.innerText += intArr[j];
            }
            body.appendChild(newPara);
        }

        var finishPara = document.createElement("p");
        finishPara.innerText = "�������";
        body.appendChild(finishPara)
    }
    else
    {
    	window.alert("��������!");
    }
}

//index��ʾλ������0��ʼ��0��ʾ��λ����1��ʾʮλ��...
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