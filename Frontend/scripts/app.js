var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];
function showList() {
    var myTable = '<table border="1" class="table table-striped"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>View</th><th>Delete</th></tr>';
    for(var i in employeesList) {
        myTable += '<tr><td>' +
            ''+employeesList[i].firstName+'</td>' +
            '<td>'+employeesList[i].lastName+'</td>' +
            '<td>'+employeesList[i].phone+'</td>' +
            '<td>'+employeesList[i].salary+'</td>' +
            '<td><button onclick="viewEmployee('+i+')">View</button></td>' +

            '<td><button onclick="deleteEmployeeRow('+i+')">Delete</button></td></tr>';
    }
    myTable+='<tr><td>' + average() + '</td></tr>';
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    document.getElementById("firstName").value="";
    document.getElementById("lastName").value="";
    document.getElementById("phone").value="";
    document.getElementById("salary").value="";

}

function salary(){

    var sum=0;
    for(var i in employeesList){
        sum+=parseFloat(employeesList[i].salary);
    }
    var container = document.getElementById('salaryTotal');
    container.innerHTML = "<span>Total: "+sum+"</span>" ;
}

function deleteEmployee(){
    employeesList.pop()
}

function viewEmployee(i){
    alert("Employee details: "+employeesList[i].firstName+" "+employeesList[i].lastName+" "+employeesList[i].phone+
            " "+employeesList[i].salary);
}

function deleteEmployeeRow(i){
    employeesList.splice(i,1);
    showList();
}

function average(){
    var average=0;
    var sum=0;
    for(var i in employeesList){
        sum+=parseFloat(employeesList[i].salary);
    }
     return average=sum/employeesList.length;
}

function mostFrequentLastName(){
   var size=employeesList.length;
    var names= new Array;
    var freq=new Array;
    for(var i in employeesList){
        names[i]=employeesList[i].firstName;
    }
    for(var i in names){
        for(var j in employeesList){

        }
    }




}