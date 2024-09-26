window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let storyTitle = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let storyText = document.getElementById('story');
  let previewSection = document.getElementById('preview-list');


  let publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', getInfo);

  function getInfo() {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let ageValue = age.value;
    let storyTitleValue = storyTitle.value;
    let storyTextValue = storyText.value;
    let genreValue = genre.value;

    if (!firstNameValue || !lastNameValue || !ageValue || !storyTitleValue || !storyTextValue) {
      return;
    }

    let listedItem = document.createElement('li');
    listedItem.classList = 'story-info';
    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstNameValue} ${lastNameValue}`;

    let ageP = document.createElement('p');
    ageP.textContent = `Age: ${ageValue}`;

    let titleP = document.createElement('p');
    titleP.textContent = `Title: ${storyTitleValue}`;

    let genreP = document.createElement('p');
    genreP.textContent = `Genre: ${genreValue}`;

    let storyP = document.createElement('p');
    storyP.textContent = storyTextValue;

    let saveBtn = document.createElement('button');
    saveBtn.classList = 'save-btn';
    saveBtn.textContent = 'Save Story';
    saveBtn.addEventListener('click', saveInfo);

    let editButton = document.createElement('button');
    editButton.classList = 'edit-btn';
    editButton.textContent = 'Edit Story';
    editButton.addEventListener('click', editInfo);

    let deleteButton = document.createElement('button');
    deleteButton.classList = 'delete-btn';
    deleteButton.textContent = 'Delete Story';
    deleteButton.addEventListener('click', deleteInfo)

    listedItem.appendChild(article);
    article.appendChild(h4);
    console.log(ageP)
    article.appendChild(ageP);
    article.appendChild(titleP);
    article.appendChild(genreP);
    article.appendChild(storyP);
    listedItem.appendChild(saveBtn);
    listedItem.appendChild(editButton);
    listedItem.appendChild(deleteButton);

    previewSection.appendChild(listedItem);
    publishBtn.setAttribute('disabled', true);

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    genre.value = '';
    storyText.value = '';
  }

  function editInfo() {
    debugger;

    //ne sum disable-nal butonite v preview sekciqta 
    

    let currentPost = document.getElementsByTagName('li')[0].children;
    let articleContent = currentPost[0].children;

    let dataName = articleContent[0].textContent.split(' ');
    let firstNameValue = dataName[1];
    let lastNameValue = dataName[2];

    let dataAge = articleContent[1].textContent.split(' ');
    let ageValue = dataAge[1];


    let titleData = articleContent[2].textContent.split(' ');
    let titleValue = titleData[1];


    let genreData = articleContent[3].textContent.split(' ');
    let genreValue = genreData[1];

    let storyValue = articleContent[4].textContent;

    firstName.value = firstNameValue;
    lastName.value = lastNameValue
    age.value = ageValue;
    storyTitle.value = titleValue;
    genre.value = genreValue;
    storyText.value = storyValue

    let saveButton = document.getElementsByClassName('save-btn')[0];
    saveButton.setAttribute('disabled', true);

    let editButton = document.getElementsByClassName('edit-btn')[0];
    editButton.setAttribute('disabled', true);

    let deleteButton = document.getElementsByClassName('delete-btn')[0];
    deleteButton.setAttribute('disabled', true);

    document.getElementsByClassName('story-info')[0].remove();
    publishBtn.removeAttribute('disabled');


  }

  function saveInfo() {
    let itemsToRemove = Array.from(document.getElementById('main').children);
    for (let item of itemsToRemove) {
      item.remove();
    }
    let h1 = document.createElement('h1');
    h1.textContent = 'Your scary story is saved!';
    document.getElementById('main').appendChild(h1);
  }

  function deleteInfo() {
    previewSection.children[1].remove();
    publishBtn.removeAttribute('disabled');
  }


}
