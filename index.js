const checkboxes = document.querySelectorAll(".item input");
let startIndex, endIndex;

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", () => {

    if(checkboxes[i].checked) {
      
      if (event.shiftKey && startIndex !== undefined) {

        endIndex = i;

        if(startIndex < endIndex) {
          for (let n = startIndex; n <= endIndex; n++) {
            checkboxes[n].checked = true;
          }
        }
        if(startIndex > endIndex) {
          for (let n = startIndex; n >= endIndex; n--) {
            checkboxes[n].checked = true;
          }
        }
      }

      startIndex = i;
    };

  });
}
