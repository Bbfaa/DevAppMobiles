document.addEventListener("deviceready", loadContacts, false);

function loadContacts() {
    let options = new ContactFindOptions()
    // options.filter = "";
    options.multiple = true;
    options.hasPhoneNumber = true;
    let fields = ["name"]
    navigator.contacts.find(fields, showContacts, handleError, options)
}

function showContacts(contacts) {
    let code = ' ';
    for (let i = 0; i < contacts.length; i++) {
        code += `
            <li>
                <a href="#">
                    <img src="img/avatar.png" alt="profile photo">
                    <h1>${contacts[i].name.formatted}</h1>
                    <p>${contacts[i].phoneNumbers[0].value}</p>
                </a>
            </li>
        `;
        contactList.innerHTML = code;
        $('#contactList').listview('refresh');
    }
}

function handleError(error) {
    console.log(error)
}

// function createContact() {
//   var contact = navigator.contacts.create();

//   contact.displayName = "Nom Complet";
//   var nom = new ContactName();
//   nom.givenName = "Prénom";
//   nom.familyName = "Nom";
//   contact.name = nom;

//   var numeros = [];
//   numeros[0] = new ContactField('mobile', '0612345678', true);
//   contact.phoneNumbers = numeros;

//   contact.save(function() {
//     console.log("Contact enregistré avec succès");
//   }, function(error) {
//     console.log("Erreur lors de l'enregistrement du contact : " + error.code);
//   });
// }