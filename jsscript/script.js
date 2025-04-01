let toggleBtn = document.getElementById('toggleModeBtn');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  if (icon.classList.contains('fa-moon-o')) {
    icon.classList.replace('fa-moon-o', 'fa-sun-o');
  } else {
    icon.classList.replace('fa-sun-o', 'fa-moon-o');
  }
});
function addTab() {

  document.querySelector("#topHeader").innerHTML = `
      <button id="toggleModeBtn"><i class="fa fa-moon-o"></i></button>
      <p id="addTaskButton" onclick="removeTabEntry()">-</p>
  `
  document.querySelector("#addTaskButton").innerHTML = "-";
  if (document.querySelector('#addTaskUI') == null){
    document.querySelector('body').innerHTML += `
  <div id="addTaskUI">
    <p>Input Task Name:</p>
    <input type="text" name="nameinput" id="nameInputField" class="input">
    <p>Input Task Description:</p>
    <input type="text" name="descinput" id="descInputField" class="input">
    <br>
    <input type="submit" value="add">
  </div>
  `
  } else{
    document.querySelector("#addTaskUI").innerHTML = `
         <div id="addTaskUI">
          <p>Input Task Name:</p>
          <input type="text" name="nameinput" id="nameInputField" class="input">
          <p>Input Task Description:</p>
          <input type="text" name="descinput" id="descInputField" class="input">
          <br>
          <input type="submit" value="add">
        </div>
`;
  }

}
function removeTabEntry(){
  document.querySelector("#topHeader").innerHTML = `
      <button id="toggleModeBtn"><i class="fa fa-moon-o"></i></button>
      <p id="addTaskButton" onclick="addTab()">+</p>
  `
  document.querySelector('#addTaskUI').innerHTML = "";
}
