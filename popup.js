chrome.storage.local.onChanged.addListener(function (changes, namespace) {
  console.log(changes);
});

document.querySelector("a").addEventListener("click",function () {
  alert('click')
  return false;
})