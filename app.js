setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("timer").innerHTML = date.toLocaleTimeString();
}

const testScore = {
    name: "",
    math: 0,
    physical: 0,
    chemistry: 0
}

let i = 0;

$("document").ready(function(){
    $("#btnInput").click(function(){
        testScore.name = $("#name").val();
        testScore.math = $("#math").val();
        testScore.physical = $("#physical").val();
        testScore.chemistry = $("#chemistry").val();

        if(testScore.name == "") {        
            return alert("Vui lòng nhập tên");         
        }
        if(testScore.math == "" || testScore.math < 0 || testScore.math > 10) {        
            return alert("Vui lòng nhập lại điểm toán");         
        }
        if(testScore.physical == "" || testScore.physical < 0 || testScore.physical > 10) {        
            return alert("Vui lòng nhập lại điểm lý");         
        }
        if(testScore.chemistry == "" || testScore.chemistry < 0 || testScore.chemistry > 10) {        
            return alert("Vui lòng nhập lại điểm hóa");         
        }               

        $("#name").val("");
        $("#math").val("");
        $("#physical").val("");
        $("#chemistry").val("");

        i++; 

        $("#displayTable").append(
            "<tr><td>" + i + "</td><td>" + testScore.name + "</td><td>" + testScore.math + "</td><td>" + testScore.physical + "</td><td>" + testScore.chemistry + "</td><td>" + "?" + "</td><td>" + "" + "</td><td> <button class='btnDelete btn-sm'>Xóa</button> </td></tr>");
    })

    $("#btnAvg").click(function(){        
        $("#displayTable").find("tr").each(function(){            
            let mathScore = $(this).find("td").eq(2).text();
            let physicalScore = $(this).find("td").eq(3).text();
            let chemistryScore = $(this).find("td").eq(4).text();

            let avgScore = ((parseFloat(mathScore) + parseFloat(physicalScore) + parseFloat(chemistryScore))/3).toFixed(1);
            $(this).find("td").eq(5).text(avgScore);            
        })
    })

    $("#btnIdeStu").click(function(){
        $("#displayTable").find("tr").each(function(){
            let avgScore = $(this).find("td").eq(5).text();
            if (parseFloat(avgScore) >= 8) {                
                $(this).find("td").eq(5).css({"color":"yellow", "font-size":"large"});
                $(this).find("td").eq(5).addClass("goodStudent");
                $(this).find("td").eq(6).html("Giỏi").css({"color":"yellow", "font-size":"large"});                
            }
        })
    })
    $("body").on('click','.btnDelete', function() {
        let c = confirm("Bạn có muốn xóa dòng này?");
        if (c === true) {
            $(this).parents("tr").remove();
        i--;
        }                
        $("#displayTable").find("tr").not(":first").each(function() {
            let index = $(this).index();
            $(this).find("td").eq(0).text(index);
        })
    })
    
    $("#btnSort").click(function() {        
        let table = document.getElementById("displayTable");
        for (let i = 1; i < table.rows.length - 1; i++) {
            for (let j = i + 1; j < table.rows.length; j++) {
                let y = parseFloat(table.rows[j].cells[5].innerHTML);
                let x = parseFloat(table.rows[i].cells[5].innerHTML);
                if (y > x) { 
                    let parentNode = table.rows[j].parentNode;
                    console.log(parentNode);
                    parentNode.insertBefore(table.rows[j], table.rows[i]);
                }
            }
        }
    })

    $("#btnReverse").click(function() {        
        let table = document.getElementById("displayTable");
        for (let i = 1; i < table.rows.length - 1; i++) {
            for (let j = i + 1; j < table.rows.length; j++) {
                let y = parseFloat(table.rows[j].cells[0].innerHTML);
                let x = parseFloat(table.rows[i].cells[0].innerHTML);
                if (y < x) { 
                    let parentNode = table.rows[j].parentNode;
                    console.log(parentNode);
                    parentNode.insertBefore(table.rows[j], table.rows[i]);
                }
            }
        }
    })
})










