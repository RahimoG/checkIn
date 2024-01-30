var persons;
getData();
if(persons === null)
{
    console.log("nulllll");
    persons = [
        { name: "Birouk Mohamed Abderramhane", Class: "A", isChecked: false },
        { name: "BOBO2 Mohamed Abderramhane", Class: "B", isChecked: false },
        { name: "zzw Mohamed Abderramhane", Class: "B", isChecked: false },
        { name: "Biroudasdk Mohamed Abderramhane", Class: "A", isChecked: false },
        { name: "Birdsadaouk Mohamed Abderramhane", Class: "D", isChecked: false },
        { name: "Bisdsarouk Mohamed Abderramhane", Class: "A", isChecked: false },
        { name: "dsarouk Mohamed Abderramhane", Class: "A", isChecked: false }
    ];
}
console.log("affter", persons);


var tupleCPT = 7;

function ShowListPersons(persons){
    getData();
    var personSection = document.getElementById("person");
    personSection.innerHTML = `<h1>Result</h1>`;
    let i = 0;
    console.log(persons);
    for(const person of persons)
    {
        if(person['isChecked'] === true)
        {
            personSection.innerHTML += `<input type="checkbox" id="check${i}" checked>`;
        }else{
            personSection.innerHTML += `<input type="checkbox" id="check${i}">`;
        }
        personSection.innerHTML += `<span id="name${i}"> ${person['name']} </span>`;
        personSection.innerHTML += `<span id="class${i}">|| Class ${person['Class']} </span>`;
        personSection.innerHTML += `<br>`;
        i++;
    }
    //console.log(tupleCPT, personFullName, personClass, personIsChecked);
    return personSection.innerHTML;
}
function afficherSelected(){
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
function saveData()
{
    localStorage.setItem("persons", JSON.stringify(persons));
}

function getData()
{
    persons = JSON.parse(localStorage.getItem("persons"));
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
    saveData();
}

setInterval(checkHandler, 500);


// main 
var inputField = document.getElementById("searchInput");
var personSection = document.getElementById("person");

ShowListPersons(persons);


// changing result section HTML
inputField.addEventListener("input", function() {

    personSection.innerHTML = afficherSelected();
    
});



function help() {
    alert("Welcome!\nYou can search for persons by NAME and check.");
}