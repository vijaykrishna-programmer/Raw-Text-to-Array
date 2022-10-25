// import saveAs from 'file-saver';


let rawTextEl = document.getElementById("rawText");

let rawtextSubmitEl = document.getElementById("rawtextSubmit");

let displayListEl = document.getElementById("displayList");

let paraEl = document.getElementById("para");


let mylist = [];
function processRawTextAndPasteInDisplay() {

  let textofuser = rawTextEl.value;
  textofuser = textofuser.replace(/[^a-zA-Z ]/g, " ");
  console.log(textofuser);
  textofuser = textofuser.split(" ");
  // console.log(textofuser);
  textofuser = textofuser.map(element => {
    return element.toLowerCase();
  });
  // textofuser = textofuser.sort((a, b) => b.length - a.length);
  textofuser = textofuser.sort();
  textofuser = [...new Set(textofuser)];
  // let count = 0;

  for (let a of textofuser) {
    mylist.push(a);
  }

  let data_list = JSON.stringify(mylist);

  displayListEl.value = data_list;

  // var blob = new Blob([data_list], {type: "text/plain;charset=utf-8"});
  // saveAs(blob, "sample.txt");


}

rawtextSubmitEl.onclick = function() {
  processRawTextAndPasteInDisplay();

  


}