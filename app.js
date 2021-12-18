var table =document.getElementById("table")

var content 

fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
    .then(Response => Response.json())
    .then(
        data => {
            let result = data.results;
            result.map(ques => {
                return content +=`
            <tr id="csstable"><th>${ques.category}
            
            </th>
            <th>${ques.type}</th>
            <th>${ques.difficulty}</th>
            <th>${ques.question}</th>
            <th>${ques.correct_answer}</th>
            <th>${ques.incorrect_answer}</th></tr>
            <style>
            #csstable{
                color: teal;
                font-size: 40px;
            }
            </style>`})
            
            .join(" ")
            table.innerHTML = content
        }
    )