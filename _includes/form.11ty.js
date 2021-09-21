let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(tab) {
  // This function will display the specified tab of the form ...
  const tabElements = document.getElementsByClassName('tab');
  tabElements[tab].classList.toggle('hidden');
  // ... and fix the Previous/Next buttons:
  if (tab == 0) {
    document.getElementById('prevButton').classList.toggle('hidden');
  } else if ((tab + 1) >= tabElements.length) {
    document.getElementById('prevButton').classList.toggle('hidden');
    document.getElementById('nextButton').classList.toggle('hidden');
  } else {
    document.getElementById('prevButton').classList.toggle('hidden');
  }
  // ... and run a function that displays the correct step indicator:
  // fixStepIndicator(tab)
}

function nextPrev(tab) {
  // This function will figure out which tab to display
  const tabElements = document.getElementsByClassName('tab');
  // EtabElementsit the function if any field in the current tab is invalid:
  if (tab == 1 && !validateForm()) return false;
  // Hide the current tab:
  tabElements[currentTab].classList.toggle('hidden');
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + tab;
  // if you have reached the end of the form... :
  if (currentTab >= tabElements.length) {
    //...the form gets submitted:
    document.getElementById('headerForm').submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  let tabElements, tabInputs, i, valid = true;
  tabElements = document.getElementsByClassName('tab');
  tabInputs = tabElements[currentTab].getElementsByTagName('input');
  // A loop that checks every input field in the current tab:
  for (i = 0; i < tabInputs.length; i++) {
    // If a field is empty...
    if (tabInputs[i].value == '') {
      // add an 'invalid' class to the field:
      tabInputs[i].className += ' invalid';
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  // if (valid) {
  //   document.getElementsByClassName('step')[currentTab].className += ' finish';
  // }
  return valid; // return the valid status
}

// function fixStepIndicator(tab) {
//   // This function removes the 'active' class of all steps...
//   const stepElements = document.getElementsByClassName('step');
//   for (let i = 0; i < stepElements.length; i++) {
//     stepElements[i].className = stepElements[i].className.replace(' active', '');
//   }
//   //... and adds the 'active' class to the current step:
//   stepElements[tab].className += ' active';
// }