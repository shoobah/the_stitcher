window.SystemJS = window.System;

function insertNewImportMap(newMapJSON) {
  const newScript = document.createElement("script");
  newScript.type = "systemjs-importmap";
  newScript.text = JSON.stringify(newMapJSON);
  const allMaps = document.querySelectorAll(
    'script[type="systemjs-importmap"]'
  );

  allMaps[allMaps.length - 1].insertAdjacentElement("afterEnd", newScript);
}

const devDependencies = {
  imports: {}
};

const prodDependencies = {
  imports: {}
};

const devMode = true; // you will need to figure out a way to use a set of production dependencies instead
if (devMode) {
  insertNewImportMap(devDependencies);
} else {
  insertNewImportMap(prodDependencies);
}
