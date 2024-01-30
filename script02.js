var persons;
persons = getData();
if(persons === null)
{
    persons = [
        { name: 'BIROUK Mohamed Abderrahmane', Class: 'A', isChecked: true},
        { name: 'Adrian Brown', Class: 'A', isChecked: false },
        { name: 'Tina Johnson', Class: 'A', isChecked: false },
        { name: 'Steve Smith', Class: 'A', isChecked: false },
        { name: 'Emily Davis', Class: 'A', isChecked: false },
        { name: 'Michael Wilson', Class: 'A', isChecked: false },
        { name: 'Megan Jones', Class: 'B', isChecked: false },
        { name: 'Ryan Thomas', Class: 'B', isChecked: false },
        { name: 'Sophia Taylor', Class: 'B', isChecked: false },
        { name: 'Brandon Brown', Class: 'B', isChecked: false },
        { name: 'Alexis Moore', Class: 'B', isChecked: false },
        { name: 'Brian Davis', Class: 'B', isChecked: false },
        { name: 'Jessica Lewis', Class: 'C', isChecked: false },
        { name: 'Christopher Garcia', Class: 'C', isChecked: false },
        { name: 'Haley Hernandez', Class: 'C', isChecked: false },
        { name: 'Erica Rodriguez', Class: 'C', isChecked: false },
        { name: 'Jonathan Anderson', Class: 'C', isChecked: false },
        { name: 'Jennifer Davis', Class: 'C', isChecked: false },
        { name: 'Daniel Williams', Class: 'C', isChecked: false },
        { name: 'Amy Miller', Class: 'C', isChecked: false },
        { name: 'Mark Johnson', Class: 'C', isChecked: false },
        { name: 'Sarah Taylor', Class: 'C', isChecked: false },
        { name: 'Jordan Wilson', Class: 'C', isChecked: false },
        { name: 'Laura Smith', Class: 'C', isChecked: false },
        { name: 'Gregory Lewis', Class: 'C', isChecked: false },
        { name: 'Melissa Martinez', Class: 'C', isChecked: false },
        { name: 'Kevin Garcia', Class: 'C', isChecked: false },
        { name: 'Taylor Davis', Class: 'C', isChecked: false }
    ];
    saveData(persons);
}

persons = [
        { name: 'BIROUK Mohamed Abderrahmane', Class: 'A', isChecked: true},
        { name: 'Adrian Brown', Class: 'A', isChecked: false },
        { name: 'Tina Johnson', Class: 'A', isChecked: false },
        { name: 'Steve Smith', Class: 'A', isChecked: false },
        { name: 'Emily Davis', Class: 'A', isChecked: false },
        { name: 'Michael Wilson', Class: 'A', isChecked: false },
        { name: 'Megan Jones', Class: 'B', isChecked: false },
        { name: 'Ryan Thomas', Class: 'B', isChecked: false },
        { name: 'Sophia Taylor', Class: 'B', isChecked: false },
        { name: 'Brandon Brown', Class: 'B', isChecked: false },
        { name: 'Alexis Moore', Class: 'B', isChecked: false },
        { name: 'Brian Davis', Class: 'B', isChecked: false },
        { name: 'Jessica Lewis', Class: 'C', isChecked: false },
        { name: 'Christopher Garcia', Class: 'C', isChecked: false },
        { name: 'Haley Hernandez', Class: 'C', isChecked: false },
        { name: 'Erica Rodriguez', Class: 'C', isChecked: false },
        { name: 'Jonathan Anderson', Class: 'C', isChecked: false },
        { name: 'Jennifer Davis', Class: 'C', isChecked: false },
        { name: 'Daniel Williams', Class: 'C', isChecked: false },
        { name: 'Amy Miller', Class: 'C', isChecked: false },
        { name: 'Mark Johnson', Class: 'C', isChecked: false },
        { name: 'Sarah Taylor', Class: 'C', isChecked: false },
        { name: 'Jordan Wilson', Class: 'C', isChecked: false },
        { name: 'Laura Smith', Class: 'C', isChecked: false },
        { name: 'Gregory Lewis', Class: 'C', isChecked: false },
        { name: 'Melissa Martinez', Class: 'C', isChecked: false },
        { name: 'Kevin Garcia', Class: 'C', isChecked: false },
        { name: 'Taylor Davis', Class: 'C', isChecked: false }
    ];
    saveData(persons);
var tupleCPT = 7;

function ShowListPersons(persons){
    persons = getData();
    var personSection = document.getElementById("person");
    personSection.innerHTML = `<h1>Result</h1>`;
    let i = 0;
    console.log(persons);
    for(const person of persons)
    {
        const newRow = document.createElement("div");
        newRow.setAttribute("id", "row" + i);
        newRow.setAttribute("class", "row");
        if(person['isChecked'] === true)
        {
            newRow.innerHTML += `<input type="checkbox" id="check${i}" checked>`;
        }else{
            newRow.innerHTML += `<input type="checkbox" id="check${i}">`;
        }
        newRow.innerHTML += `<span id="name${i}"> ${person['name']} </span>`;
        if(person['Class'] == 'A')
        {
            newRow.innerHTML += `<span id="class${i}" class="classA"> Class ${person['Class']} </span>`;
        }else if(person['Class'] == 'B'){
            newRow.innerHTML += `<span id="class${i}" class="classB"> Class ${person['Class']} </span>`;
        }else{
            newRow.innerHTML += `<span id="class${i}" class="classC"> Class ${person['Class']} </span>`;
        }
        //newRow.innerHTML += `<br>`;
        personSection.appendChild(newRow);
        i++;
    }
    //console.log(tupleCPT, personFullName, personClass, personIsChecked);
    return personSection.innerHTML;
}
function afficherSelected(persons){
    var personSection = document.getElementById("person");
    personSection.innerHTML = `<h1>Result</h1>`;
    var searchValue = document.getElementById("searchInput").value.toLowerCase();
    var regex = new RegExp(".*"+searchValue+".*");
    let i = 0;
    for(const person of persons)
    {
        if (regex.test(person['name'].toLowerCase())){
            if(person['isChecked'] === true)
            {
                personSection.innerHTML += `<input type="checkbox" id="check${i}" checked>`;
            }else{
                personSection.innerHTML += `<input type="checkbox" id="check${i}">`;
            }
            personSection.innerHTML += `<span id="name${i}"> ${person['name']} </span>`;
            personSection.innerHTML += `<span id="class${i}">|| Class ${person['Class']} </span>`;
            personSection.innerHTML += `<br>`; 
        }
        i++;
    }
    return personSection.innerHTML;
}
function saveData(persons)
{
    localStorage.setItem("persons", JSON.stringify(persons));
}

function getData()
{
    return JSON.parse(localStorage.getItem("persons"));
}


function checkHandler(){
    let i = 0;
    
    for(const person of persons)
    {
        var checkboxId = "check" + i;
        var checkbox = document.getElementById(checkboxId);
        if(checkbox)
        {
            checkbox.addEventListener("change", function() {
                if (this.checked) {
                    person['isChecked'] = true;
                } else {
                    person['isChecked'] = false;
                }
            });
        }
        i++;
    }
    saveData(persons);
}

setInterval(checkHandler, 500);


// main 
var inputField = document.getElementById("searchInput");
var personSection = document.getElementById("person");

ShowListPersons(persons);


// changing result section HTML
inputField.addEventListener("input", function() {

    personSection.innerHTML = afficherSelected(persons);
    
});



function help() {
    alert("Welcome!\nYou can search for persons by NAME and check.");
}
