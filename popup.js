chrome.storage.local.onChanged.addListener(function (changes, namespace) {
  console.log(changes);
  chrome.storage.local.get(null, function (recipes) {
    for (let i = 0; i < recipes.length; i++) {
      console.log(recipe[i]);
    }
  });
});

