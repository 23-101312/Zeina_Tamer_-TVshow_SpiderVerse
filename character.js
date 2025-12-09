let chosenPortal = JSON.parse(localStorage.getItem("selectedPortal"));

document.getElementById("characters_page").innerHTML = `<div id="left_image">
        <img src="${chosenPortal.mainImg}" id="character_main_img" alt="">
      </div>

      <div class="right_character">
        <img class="spider_gif" src="assets/Spider Web Halloween GIF by cbdMD.gif" alt="">
      </div>

      <div id="character_content">
        <img src="${chosenPortal.nameTag}" id="character_name_tag" class="name_tag" alt="">
        <p id="character_description">${chosenPortal.description}</p>
        <img src="${chosenPortal.sticker}" id="character_figure" class="character_figure" alt="">
      </div>`