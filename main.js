let body = document.querySelector('body');
let container = document.createElement('main');
let list = document.createElement('ul');

body.appendChild(container);
container.appendChild(list);


for (let i =0; i < customers.results.length; i++){
let currentPerson = customers.results[i];
let li = document.createElement('li');
let img = document.createElement('img');
let name= document.createElement('h1');
let email=document.createElement('h2');
let address=document.createElement('p');
let address2=document.createElement('p');
let phoneNumber=document.createElement('p');


img.src = currentPerson.picture.large;
name.textContent = currentPerson.name.first +" "+ currentPerson.name.last;
email.textContent = currentPerson.email;
address.textContent=currentPerson.location.street;
address2.textContent=currentPerson.location.city +", "+currentPerson.location.state + "  "+currentPerson.location.postcode;
phoneNumber.textContent = currentPerson.phone;


list.appendChild(li);
li.appendChild(img);
li.appendChild(name);
li.appendChild(email);
li.appendChild(address);
li.appendChild(address2);
li.appendChild(phoneNumber);

}
