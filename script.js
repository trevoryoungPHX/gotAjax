$(document).ready(function() {
  var favChar = [148, 583, 1346]; //148(Arya), 583(Jon), 1303(Danerys)
  for (var i = 0; i<favChar.length; i++) {
      $.get(`https://www.anapioficeandfire.com/api/characters/${favChar[i]}`, function(data) {

          let characterDiv = document.createElement("div");

          let charName = document.createElement('h3');
          $(charName).text(data.name);
          $(characterDiv).append(charName);

          let titles = document.createElement('p')
          $(titles).text(data.titles);
          $(characterDiv).append(titles);

          let spouse_container = document.createElement('p');
              if (data.spouse !== "") {
                $.get(data.spouse, function(spouseData) {
              $(spouse_container).text(spouseData.name)
              $(characterDiv).append(spouse_container);
            })
          }
          $('.row').append(characterDiv);


          // if there's a spouse "meaning if the spouse string is greater than  0 characters"
          // then do another ajax call to the spouse link
          // grab the name only
          // and then finish the ajax call
          // and populate the spouse_container with that name.
        })
}
})
