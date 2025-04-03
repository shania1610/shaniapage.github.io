function toggleDetails(button) {
    const projectDetails = button.previousElementsSibling; //
Get the <p> element that holds the details
     if (projectDetails.classList.contains('hidden')) {
        projectDetails.classList.remove('hidden'); // Show the details

        button.textContent = 'View Less'; //Change button text 
     }else{
        projectDetails.classList.add('hidden'); //Hide the details
        button.textContent = 'View More'; //Change button text back

     }
     }
