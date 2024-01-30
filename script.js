// fullName, class, is checked 
var tupleCPT = 0;
var personFullName = [];
var personClass = [];
var personIsChecked = [];
getData();

function addPerson(fullName, Class){
    personFullName.push(fullName);
    personClass.push(Class);
    personIsChecked.push(false);
    tupleCPT++;
}
function defaultList(){
    getData();
    var personSection = document.getElementById("person");
    personSection.innerHTML = `<h1>Result</h1>`;
    for(let i = 0 ; i < tupleCPT; i ++)
    {
        if(personIsChecked[i] == true)
        {
            personSection.innerHTML += `<input type="checkbox" id="check${i}" checked>`;
        }else{
            personSection.innerHTML += `<input type="checkbox" id="check${i}">`;
        }
        personSection.innerHTML += `<span id="name${i}"> ${personFullName[i]} </span>`;
        personSection.innerHTML += `<span id="class${i}">|| Class ${personClass[i]} </span>`;
        personSection.innerHTML += `<br>`;
        
    }
    //console.log(tupleCPT, personFullName, personClass, personIsChecked);
    return personSection.innerHTML;
}
function afficherSelected(){
    var personSection = document.getElementById("person");
    personSection.innerHTML = `<h1>Result</h1>`;
    var searchValue = document.getElementById("searchInput").value.toLowerCase();
    var regex = new RegExp(".*"+searchValue+".*");
    for(let i = 0 ; i < tupleCPT; i ++)
    {
        if (regex.test(personFullName[i].toLowerCase())){
            if(personIsChecked[i] == true)
            {
                personSection.innerHTML += `<input type="checkbox" id="check${i}" checked>`;
            }else{
                personSection.innerHTML += `<input type="checkbox" id="check${i}">`;
            }
            personSection.innerHTML += `<span id="name${i}"> ${personFullName[i]} </span>`;
            personSection.innerHTML += `<span id="class${i}">|| Class ${personClass[i]} </span>`;
            personSection.innerHTML += `<br>`;   
        }
    }
    //console.log(tupleCPT, personFullName, personClass, personIsChecked);
    return personSection.innerHTML;
}
function saveData()
{
    localStorage.setItem("personFullName", JSON.stringify(personFullName));
    localStorage.setItem("personClass", JSON.stringify(personClass));
    localStorage.setItem("personIsChecked", JSON.stringify(personIsChecked));
}

function getData()
{
    personFullName = JSON.parse(localStorage.getItem("personFullName"));
    personClass = JSON.parse(localStorage.getItem("personClass"));
    personIsChecked = JSON.parse(localStorage.getItem("personIsChecked"));
}


function checkHandler(){
    for(let i = 0; i<tupleCPT; i++)
    {
        var checkboxId = "check" + i;
        var checkbox = document.getElementById(checkboxId);
        if(checkbox)
        {
            checkbox.addEventListener("change", function() {
                if (this.checked) {
                    personIsChecked[i] = true;
                } else {
                    personIsChecked[i] = false;
                }
            });
        }
    }
    saveData();
}

setInterval(checkHandler, 500);


// main 
var inputField = document.getElementById("searchInput");
var personSection = document.getElementById("person");
//addPerson : 
addPerson("Birouk Mohamed Abderrahamane", "A");
addPerson("KHALIL", "A");
addPerson("BOBO 01 ", "B");
addPerson("BOBO 04 ", "C");

saveData();
// fin addPerson
// afficher la list
defaultList();



// changing result section HTML
inputField.addEventListener("input", function() {

    personSection.innerHTML = afficherSelected() || defaultList();
    
});



function help() {
    alert("Welcome!\nYou can search for persons by NAME and check.");
}