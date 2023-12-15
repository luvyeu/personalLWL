function calculateLifePathNumber() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);

    // Validate input
    if (isNaN(day) || isNaN(month) || isNaN(year) || 
        day < 1 || day > 31 || month < 1 || month > 12 || 
        year < 1900 || year > 2100) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    // Perform calculation and display result
    var total = day + month + year;
    while (total > 9) {
        total = Math.floor(total / 10) + total % 10;
    }

    var info = getLifePathInfo(total);
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = info;
    //resultDiv.innerHTML = "Life Path Number: " + total + "<br>" + info;


    // Display additional content based on the result (middle section & bottom section)
    var additionalContentDiv = document.getElementById("additionalContent");
    if (total % 2 === 0) {
        // Display a table
        additionalContentDiv.innerHTML = generateTable(total);
    } else {
        // Display an image
        additionalContentDiv.innerHTML = generateImage(total);
    }


}

function getLifePathInfo(lifePathNumber) {
    var infoDict = {
        1: "创始型: 天生老大，有主见，有目标，有行动力，很有原创性，能独立开创很多新事物。是领导者但是容易自大，自我中心, **创始型的人通常很有自己的想法-自己的意建。你讲话都会是 “我认为......",
        2: "平衡型: 像母亲一样柔性领导，你的透视能力能够看穿和看透事情，分析能力很强，能很和谐的与人配合，非常强的沟通和协调能力。习惯拖延，喜欢依赖，柔性也是母情的一个力量，保护的力量， **是一个平衡者，是一个很好的中间人，协调者，和事佬，可以做一个领导者--用柔性能量去领导，说话会是（ “我听你的。。” ），很容易接受别人的意建，听取别人的意建",
        3: "表达型: 表现力很强，很爱演，很有点子，有想法，有创造力，有时候很任性情绪化， **代表是可爱的人，有孩子脾气的人，所以会被很多人喜欢，也很可爱--很随便--是很聪明的人，你会听别人说的，你也会表达你的意见，你是很喜欢表达的",
        4: "执行型: 很稳重认真，喜欢有规律的生活，有条有理，按部就班，很务实。但是缺乏安全感，不喜欢变动， **你的执行力非常强，大企业家都是执行型的人，因为代表坚固，安全的，你的中心思想是，要做很多事情，可是最后要的是稳定。内心就是要稳定，看钱很重，也是慈善家，很注重帮助别人，很有责任感，稳重可靠，讲求情怀，有骨气的人，把钱捐给有更大目标的人或机构，或是帮助过自己的人",
        5: "自由型: 喜欢自由的生活，挑战新鲜事物，品味自由自在的人生旅途。不安于现状，很善变，被束缚就想逃避, **代表自由的能量, 代表革命的能量，突破框框和限制, 代表颠覆传统的能量，你的中心思想，你比较会只顾跟着自己心的感受去做事情，非常任性，想到什么就去做",
        6: "奉献型: 关怀体贴与奉献，爱别人多过爱自己，善解人意，给人很温暖的感觉。事事要求完美，就变得很挑剔，有时太过热心变得爱管闲事， **代表很圆满的爱，代表奉献的能量，代表亲情，你的中心思想（骨子里）想的东西是 “我爱。。”我爱的是什么东西。我要如何去奉献我的爱出去",
        7: "内敛型: 理性分析，实考能力强，寻求真理，很内敛，老谋深算。由于大脑很强大，很常会出现很自负的样子，疑心病很重， **你一直要追求真理，追求事实，要求真理，所以你都会去怀疑。你要探求事实的真相，你都会去怀疑",
        8: "创富型: 天生的老板，目光犀利，能够实现理想获取财富，坐拥权力，事业有成。做事的目的太强，所以很固执，什么都要赢，好斗怕输，**你要赚到钱，一定要做对的事情，要做帮助别人的事情，要做行善的事情。中什么因，得什么果，你如果奸诈，最后会没有赚到钱。你可以赚到钱，你可以是老板，政治家，领导，企业家，成功人士（站在前方或前面的一个人），你的血里流着什么？就是钱，对钱最敏感",
        9: "大爱型: 有智慧，博爱，奉献，很擅长照顾人群，服务大众，有着世界和平的理想，人道主义者。常常脱离现实很爱幻想，**你的奉献是全球的，大爱，是无私的，和平的真理，明主，本身就像万花筒，变幻莫测，变幻无穷，是至高境界。就是很无我，很放下的境界，成就别人，也是一种天马行空的人（头脑里无时无刻都在幻想，有梦想要做到）《《你是一个的综合体--你就是变色龙--所有人格的能量你都有一点点》》"
    };
    //return infoDict[lifePathNumber] || "生命数字无效";

    var info = infoDict[lifePathNumber] || "生命数字无效";
    // Split the info into lines based on the comma and join them with line breaks
    return info.split('，').join('<br>');


    // Display additional content based on the result (middle section & bottom section)
    var additionalContentDiv = document.getElementById("additionalContent");
    if (total % 2 === 0) {
        // Display a table
        additionalContentDiv.innerHTML = generateTable(total);
    } else {
        // Display an image
        additionalContentDiv.innerHTML = generateImage(total);
    }
}


function generateTable(lifePathNumber) {
    // Customize the table content based on the life path number
    var tableContent = "";
    switch (lifePathNumber) {
        case 1:
            tableContent = `
                <div class="table-container">
                    <table>
                        <tr>
                            <td>Table for Life Path Number 1</td>
                        </tr>
                    </table>
                </div>
            `;
            break;
        // Add cases for other life path numbers as needed
        // ...

        default:
            tableContent = "No table available for this Life Path Number";
    }

    return tableContent;
}

function generateImage(lifePathNumber) {
    // Customize the image content based on the life path number
    var imagePath = ""; // Set the image path based on the life path number
    switch (lifePathNumber) {
        case 1:
            imagePath = "lifePath/创始数.png";
            break;
        // Add cases for other life path numbers as needed
        // ...
        case 2:
            imagePath = "lifePath/平衡数.png";
            break;
        case 3:
            imagePath = "lifePath/表达数.png";
            break;
        case 4:
            imagePath = "lifePath/平衡数.png";
            break;
        case 5:
            imagePath = "lifePath/自由数-1.png";
            break;
        case 6:
            imagePath = "lifePath/奉献数.png";
            break;
        case 7:
            imagePath = "lifePath/内敛数.png";
            break;
        case 8:
            imagePath = "lifePath/创富数.png";
            break;
        case 9:
            imagePath = "lifePath/大爱数.png";
            break;

        default:
            imagePath = "lifePath/default/image.jpg"; // Set a default image path
    }

    return `
        <div class="image-container">
            <img src="${imagePath}" alt="Description of the image">
        </div>
    `;
}




document.addEventListener("DOMContentLoaded", function () {

    // Function to navigate back to discover-1.html
    function goBack() {
        window.location.href = "home.html";
    }
    
    // Back button click event
    var backButton = document.querySelector("#backButton");
    if (backButton) { // Check if the back button exists
        backButton.addEventListener("click", goBack);
    }
    
});

