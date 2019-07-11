// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
    <script>
        var a = '[a, b, c, d]';
        var b = [1, 2, 3, 4];
        var ArrayJudgment;
        function myFunction(array) {
            array instanceof Array?alert("true"):alert("false")
        }
        myFunction(b);
    </script>

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
    <script>
        var a = [1, 2, 3, 4, 5];
        var b = new Array;
        for (var i = 0; i < a.length; i++) {
            b[i] =2*a[i];
        }
        alert(b);

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
<body>

    <p>case 1:
        <p id="demo">case 1</p>
    </p>;
    <p>case 2:
        <p id="demo2">case 2</p>
    </p>;
    <p>case 3:
        <p id="demo3">case 3</p>
    </p>;
    <script>
        var colors = ["Red", "Green", "White", "Black"];
        //TODO case 1 output: 'Red Green White Black'
        // case 2 output: 'Red+Green+White+Black'
        // case 3 output: 'Red,Green,White,Black'
        document.getElementById("demo").innerHTML = colors.join(" ");
        document.getElementById("demo2").innerHTML = colors.join("+");
        document.getElementById("demo3").innerHTML = colors.join(",");
    </script>

</body>

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
<body>
    <p id="demo">单击按钮降序排列数组。</p>
    <button onclick="myFunction()">点我</button>
    <script>
        function myFunction() {
            var a = [5, 1, 8, 10, 4];
            a.sort(function (a, b) { return b - a });
            var x = document.getElementById("demo");
            x.innerHTML = a;
        }
    </script>>
</body>

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
<body>
    <p id="demo">数组中出现频率最高的元素</p>
    <button onclick="myFunction()">点我</button>
    <script>
        function myFunction() {
            var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
            var Mn = 0;
            var nunber = 0;
            var ele = a[0];
            for (var i = 0; i < a.length; i++) {
                for (var j = i; j < a.length ; j++) {
                    if (a[i] == a[j]) {
                        nunber = nunber + 1;
                    }
                }
                if (nunber > Mn) {
                    Mn = nunber;
                    ele = a[i];
                }
                nunber = 0;
            }
            document.getElementById("demo").innerHTML = ele;
        }
    </script>>
</body>
