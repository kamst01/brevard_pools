let currentTab = 0; // Current tab is set to be the first tab (0)
const imageUploader = document.getElementById('image-upload');

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
}

function nextPrev(tab) {
  // This function will figure out which tab to display
  const tabElements = document.getElementsByClassName('tab');
  // if any field in the current tab is invalid:
  if (tab == 1 && !validateForm()) return false;
  // Hide the current tab:
  tabElements[currentTab].classList.toggle('hidden');
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + tab;
  // if you have reached the end of the form... :
  if (currentTab >= tabElements.length) {
    //...the form gets submitted:
    imageUploader.addEventListener('change', (e) => {
      const zip = new JSZip();
      const files = e.target.files;

      for (let file of files) {
        zip.file(file.name, file);
      }

      zip.generateAsync({ type: 'blob' }).then((blob) => {
        const zippedPhotos = new File([blob], `${blob}-photos`, {
          lastModified: Date.now(),
          type: 'application/zip'
        });
        return zippedPhotos;
      });
    });
    document.getElementById('headerForm').submit();
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
  return valid; // return the valid status
}