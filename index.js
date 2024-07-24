// Add your code here
function submitData(dogName, dogBreed) {
    //data object
    const formData = {
        dogName: dogName,
        emaildogBreed: dogBreed
    };
// configuration object for the feetch request
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
};

//return the fetch promise
return fetch("http://localhost:3000/users",configurationObject)
   .then(function(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
   })
   .then(function(object) {
    document.body.innerHTML = object.id;
   })
   .catch(function(error) {
    document.body.innerHTML = error.message;
   });
}

document.getElementById('dogForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const dogName = document.getElementById('dogName').value;
    const dogBreed = document.getElementById('dogBreed').value;
    submitData(dogName, dogBreed);
});