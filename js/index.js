// =========================== side bar ================================

let boxWidth = $(".sideBarBlack").outerWidth();

function hideSideBar() {
  $(".openSideBar").click(function () {

    $(".itemSec").toggle(1000);
    if ($(".sideBar").css("left") === "0px") {
      $(".sideBar").animate({ left: `-${boxWidth}` }, 500);
    }
    else {
      $(".sideBar").animate({ left: `0px` }, 500, function () {

      });

    }
  })
}

hideSideBar();


async function FirstOpen() {
  let apiRespose = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=egyptian`);
  let finalResult = await apiRespose.json();
  let egyptian = finalResult.meals;

  let hasala = ``;
  for (let i = 0; i < egyptian.length; i++) {

    hasala += `<div class="col-md-3 my-3 py-3 px-4">
    <div class="itemCategory position-relative text-center">
        <img class=" img-fluid" src="${egyptian[i].strMealThumb}" alt="">
        <div class=" desc px-2 py-3 d-flex flex-column justify-content-center align-items-center">
            <h3>${egyptian[i].strMeal}</h3>
        </div>
    </div>
  </div>`
  }
  document.getElementById("dispCat").innerHTML = hasala;

  // $(".itemCategory").click(function (e) {
  //   let nameOfTheMeal = e.target.innerHTML

  //   async function getDetails() {
  //     let apiRespose = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${nameOfTheMeal}`);
  //     let finalResult = await apiRespose.json();
  //     let details = finalResult.meals;
  //   }

  //   let hasala = ``;
  //   for (let i = 0; i < details.length; i++) {

  //     hasala += `<div class="col-md-3 my-3 py-3 px-4">
  //   <div class="itemCategory position-relative text-center">
  //       <img class=" img-fluid" src="${details[i].strMealThumb}" alt="">
  //       <div class=" desc px-2 py-3 d-flex flex-column justify-content-center align-items-center">
  //           <h3>${details[i].strMeal}</h3>
  //       </div>
  //   </div>
  //   </div>`
  //   }

  //   document.getElementById("dispCat").innerHTML = hasala;



  // })
  // getDetails()

}
FirstOpen()


// =========================== get category ================================

let category;

async function getCat() {
  let apiRespose = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  let finalResult = await apiRespose.json();
  category = finalResult.categories;
}

getCat();


$("#Categories").click(function () {

  $(".itemSec").toggle(1000);
  if ($(".sideBar").css("left") === "0px") {
    $(".sideBar").animate({ left: `-${boxWidth}` }, 500);
  }
  else {
    $(".sideBar").animate({ left: `0px` }, 500);
  }
  document.getElementById("searchSection").innerHTML = ``;
  document.getElementById("contact").innerHTML = ``;

  let hasala = ``;
  for (let i = 0; i < category.length; i++) {

    let description = category[i].strCategoryDescription.split(" ").splice(0, 20).join(" ")

    hasala += `<div class="col-md-3 my-3 py-3 px-4">
    <div class="itemCategory position-relative text-center">
        <img class=" img-fluid" src="${category[i].strCategoryThumb}" alt="">
        <div class=" desc px-2 py-3 d-flex flex-column justify-content-center align-items-center">
            <h3>${category[i].strCategory}</h3>
            <p>${description}</p>
        </div>
    </div>
  </div>`
  }
  document.getElementById("dispCat").innerHTML = hasala;
}
)


// =========================== get area ================================

async function getArea() {
  let apiRespose = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  let finalResult = await apiRespose.json();
  meal = finalResult.meals;
}

getArea();


$("#Area").click(function () {

  $(".itemSec").toggle(1000);

  if ($(".sideBar").css("left") === "0px") {
    $(".sideBar").animate({ left: `-${boxWidth}` }, 500);
  }
  else {
    $(".sideBar").animate({ left: `0px` }, 500);
  }

  document.getElementById("searchSection").innerHTML = ``;
  document.getElementById("contact").innerHTML = ``;

  let hasala = ``;
  for (let i = 0; i < 20; i++) {

    hasala += `<div class="col-md-3 my-3 py-3 px-4">
    <div class="itemCategory position-relative text-center">
        <i class="fa-solid fa-city fa-3x text-danger"></i>
        <h3 class=" text-light">${meal[i].strArea}</h3>
    </div>
  </div>`
  }
  document.getElementById("dispCat").innerHTML = hasala;
}
)

// ======================= get Ingredient ========================

let mainIng;

async function getIngredient() {
  let apiRespose = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  let finalResult = await apiRespose.json();
  Ingredients = finalResult.meals;
}

getIngredient();

let nameOfMeal;

$("#Ingredient").click(function () {

  $(".itemSec").toggle(1000);

  if ($(".sideBar").css("left") === "0px") {
    $(".sideBar").animate({ left: `-${boxWidth}` }, 500);
  }
  else {
    $(".sideBar").animate({ left: `0px` }, 500);
  }

  document.getElementById("searchSection").innerHTML = ``;
  document.getElementById("contact").innerHTML = ``;

  let hasala = ``;
  for (let i = 0; i < 20; i++) {

    let descriptionOfIngredient = Ingredients[i].strDescription
    if (descriptionOfIngredient != null) {
      let fDesc = descriptionOfIngredient.split(" ").splice(0, 15).join(" ")
      hasala += `<div class="col-md-3 my-3 py-3 px-4">
    <div id="itemCategory" class="itemCategory position-relative text-center">
        <i class="fa-solid fa-utensils fa-3x"></i>
        <h3 class=" text-light">${Ingredients[i].strIngredient}</h3>
        <p>${fDesc}</p>
    </div>
  </div>`
    }
  }
  document.getElementById("dispCat").innerHTML = hasala;

  // getIngredientFilter();


})

// async function getIngredientFilter() {

//   let apiRespose = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=salmon`);
//   let finalResult = await apiRespose.json();
//   IngredientsFilter = finalResult.meals;

//   // let itemList = document.querySelectorAll(".itemCategory");
//   let hasala = ``;
//   for (let i = 0; IngredientsFilter.length; i++) {

//       hasala += `<div class="col-md-3 my-3 py-3 px-4">
//     <div class="itemCategory position-relative text-center">
//         <img class=" img-fluid" src="${IngredientsFilter[i].strMealThumb}" alt="">
//         <div class=" desc px-2 py-3 d-flex flex-column justify-content-center align-items-center">
//             <h3>${IngredientsFilter[i].strMeal}</h3>
//         </div>
//     </div>
//   </div>`
//       document.getElementById("test").innerHTML = hasala;
//     }
// }







// ======================= search ========================


$("#Search").click(function () {

  $(".itemSec").toggle(1000);

  if ($(".sideBar").css("left") === "0px") {
    $(".sideBar").animate({ left: `-${boxWidth}` }, 500);
  }
  else {
    $(".sideBar").animate({ left: `0px` }, 500);
  }

  document.getElementById("dispCat").innerHTML = ``;
  document.getElementById("contact").innerHTML = ``;


  let hasala = ``;
  hasala += `<div class="search d-flex justify-content-evenly">
  <input id="sName" onkeyup="searchName()" class=" sName py-2 text-center text-muted" type="text" placeholder=" Search By Name">
  <input id="sFirstLetter" onkeyup="searchFL()" class=" sFirstLetter py-2 text-center text-muted" type="text" placeholder=" Search By First Letter">
</div>`


  document.getElementById("searchSection").innerHTML = hasala;

})


async function searchFL() {
  let firstLetter = document.getElementById("sFirstLetter").value;
  let apiRespose = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  let finalResult = await apiRespose.json();
  let sName = finalResult.meals;


  let hasala = ``;
  for (let i = 0; i < sName.length; i++) {

    hasala += `<div class="col-md-3 my-3 py-3 px-4">
    <div class="itemCategory position-relative text-center">
        <img class=" img-fluid" src="${sName[i].strMealThumb}" alt="">
        <div class=" desc px-2 py-3 d-flex flex-column justify-content-center align-items-center">
            <h3>${sName[i].strMeal}</h3>
        </div>
    </div>
  </div>`
  }
  document.getElementById("dispCat").innerHTML = hasala;

}

// searchFL();


async function searchName() {
  let mealName = document.getElementById("sName").value;
  let apiRespose = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
  let finalResult = await apiRespose.json();
  let sName = finalResult.meals;


  let hasala = ``;
  for (let i = 0; i < sName.length; i++) {

    hasala += `<div class="col-md-3 my-3 py-3 px-4">
    <div class="itemCategory position-relative text-center">
        <img class=" img-fluid" src="${sName[i].strMealThumb}" alt="">
        <div class=" desc px-2 py-3 d-flex flex-column justify-content-center align-items-center">
            <h3>${sName[i].strMeal}</h3>
        </div>
    </div>
  </div>`
  }
  document.getElementById("dispCat").innerHTML = hasala;

}

// searchFL();



// ====================== contact us =====================



$("#ContactUs").click(function () {

  $(".itemSec").toggle(1000);

  if ($(".sideBar").css("left") === "0px") {
    $(".sideBar").animate({ left: `-${boxWidth}` }, 500);
  }
  else {
    $(".sideBar").animate({ left: `0px` }, 500);
  }

  document.getElementById("searchSection").innerHTML = ``;
  document.getElementById("dispCat").innerHTML = ``;


  let hasala = `<div class="container w-50">
  <h2 class=" text-center mb-5 text-light">Contact Us...</h2>
  <div class="row">
      <div class="col-md-6 mb-4 ">
          <div class="itemInput">
              <input id="nameContact" class=" contactInput text-muted" type="text" placeholder="Enter Your Name">
          </div>
      </div>
      <div class="col-md-6 mb-4 ">
          <div class="itemInput">
              <input onkeyup="validation()" id="emailContact" class=" contactInput text-muted" type="email" placeholder="Enter Email">
          </div>
      </div>
      <div class="col-md-6 mb-4 ">
          <div class="itemInput">
              <input onkeyup="validation()" id="phoneContact" class=" contactInput text-muted" type="text" placeholder="Enter Phone">
          </div>
      </div>
      <div class="col-md-6 mb-4 ">
          <div class="itemInput">
              <input id="ageContact" class=" contactInput text-muted" type="text" placeholder="Enter Age">
          </div>
      </div>
      <div class="col-md-6 mb-4 ">
          <div class="itemInput">
              <input onkeyup="validation()" id="passContact" class=" contactInput text-muted" type="password" placeholder="Enter Passowrd">
          </div>
      </div>
      <div class="col-md-6 mb-4 ">
          <div class="itemInput">
              <input onkeyup="validation()" id="rePassContact" class=" contactInput text-muted" type="password" placeholder="Enter RePassword">
          </div>
      </div>
  </div>
  <div class="warning text-center text-warning mb-3"></div>
  <button id="btnContact" class=" btn btn-outline-danger " disabled >Submit</button>
</div>`;


  document.getElementById("contact").innerHTML = hasala;



})

// ======================== validation ====================



function validation(){
  function validatEmail(){
    let emailContact = $("#emailContact").val();
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regexEmail.test(emailContact) == true) {
      return true;
    }
    else {
      return false;
    }
  }
  
  function validatPhone() {
    let phoneContact = $("#phoneContact").val();
    let regexPhone = /^(002)?01[0125][0-9]{8}$/;
    if (regexPhone.test(phoneContact) == true) {
      return true;
    }
    else {
      return false;
    }
  }
  
  function validatPassword(){
    let passContact = $("#passContact").val();
    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (regexPassword.test(passContact) == true) {
      return true;
    }
    else {
      return false;
    }
  }
  
  function validatRePassword(){
    let rePassContact = $("#rePassContact").val();
    let passContact = $("#passContact").val();
    if (rePassContact == passContact) {
      return true;
    }
    else {
      return false;
    }
  }

  if (validatEmail() == true && validatPhone() == true && validatPassword() == true && validatRePassword() == true ){
    $("#btnContact").removeAttr("disabled");
  }
  else if (validatEmail()==false){
    $(".warning").text("please enter a valid email email@exalple.com")
  }
  else if (validatPhone()==false){
    $(".warning").text("please enter a valid egyption phone number ")
  }
  else if (validatPassword()==false){
    $(".warning").text("please enter at least 8 charchter consists of at least 1 number")
  }
  else if (validatRePassword()==false){
    $(".warning").text("password doesn't match")
  }
}


























/* 3andy m4kla eny 3ayz a4gl function 3la 7aga htdaf fe el7sala
w kman ageb el target mn 7aga htdaf fe el7sala
w b3d ama ageb el target m4 3rf ast5dmo fe link el API

w3ny elmoshkla 3ndy fe el         sequence  ????????????????????????????????????????????????????????????
*/