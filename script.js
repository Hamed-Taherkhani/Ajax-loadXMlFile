const table = document.querySelector("table"),
  button = document.querySelector("button"),
  url = "??????????????????????????";

button.addEventListener("click", () => loadDoc(controlResponse));
function loadDoc(cFunc) {
  const xHttp = new XMLHttpRequest();
  xHttp.onload = () => cFunc(xHttp);
  xHttp.open("GET", url, true);
  xHttp.send();
}
function controlResponse(response) {
  const xmlDoc = response.responseXML, // create xml dom of response.
    allCDTags = xmlDoc.getElementsByTagName("CD");
  let innerTable =
    "<thead><tr><th>Song</th><th>Artist</th><th>Country</th><th>Company</th><th>Price</th><th>Year</th></tr></thead>";

  for (let i = 0; i < allCDTags.length; i++) {
    innerTable += "<tr>";
    for (let j = 0; j < allCDTags[i].childElementCount; j++) {
      innerTable += "<td>" + allCDTags[i].children[j].textContent + "</td>";
    }
    innerTable += "</tr>";
  }
  table.innerHTML = innerTable;
}
