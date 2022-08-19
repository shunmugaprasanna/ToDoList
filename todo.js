"use strict";

window.addEventListener("load", () => {
  const form = document.querySelector("#form");
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const date = document.querySelector("#date");
  const cardList = document.querySelector(".cards");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let task = {
      title: title.value,
      description: description.value,
      date: date.value,
    };
  
    if (Object.values(task).includes("")) {
      alert("Fill the Form");
      return;
    }
    title.value = ''
    description.value = ''
    date.value = ''

    const dummy = document.createElement('div')
    dummy.classList.add('cards')

    const cardLi = document.createElement("div");
    cardLi.classList.add("card_wrap");

    const buttonWrap = document.createElement("div");
    buttonWrap.classList.add("button_wrap");
    
    const titleInput = document.createElement('input')
    titleInput.classList.add('text_title')
    titleInput.type = 'text'
    titleInput.value = task.title
    titleInput.setAttribute('readonly', 'readonly')
    cardLi.appendChild(titleInput)

    const descriptionInput = document.createElement('input')
    descriptionInput.classList.add('description_title')
    descriptionInput.type = 'text'
    descriptionInput.value = task.description
    descriptionInput.setAttribute('readonly', 'readonly')
    cardLi.appendChild(descriptionInput)

    const date1 = document.createElement('p')
    date1.innerHTML = task.date
    cardLi.appendChild(date1)
    cardList.appendChild(cardLi)

    const editbtn = document.createElement('button')
    editbtn.classList.add('btn1')
    editbtn.innerHTML = 'Edit'
    buttonWrap.appendChild(editbtn)
    cardLi.appendChild(buttonWrap)

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn')
    deleteBtn.innerHTML = ' '
    buttonWrap.appendChild(deleteBtn)
   cardLi.appendChild(buttonWrap)

   const deleteimage = document.createElement('img')
   deleteimage.src  = 'deleteicon.svg'
   deleteBtn.appendChild(deleteimage)
   
   editbtn.addEventListener('click', () => {
     if(editbtn.innerText.toLowerCase() === 'edit') {
       titleInput.removeAttribute("readonly")
       titleInput.focus()
       descriptionInput.removeAttribute("readonly")
       descriptionInput.focus()
       editbtn.innerText = 'Save'
      } else {
        titleInput.setAttribute('readonly', 'readonly')
        descriptionInput.setAttribute('readonly','readonly')
        editbtn.innerText = 'Edit'
      }
    })
      deleteBtn.addEventListener('click', () => {
        cardList.removeChild(cardLi)    
      })
         task.title.value = ''
         task.descriptionInput.value = ''
         task.date.value =''
    })
  });


