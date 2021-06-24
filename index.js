const url = "https://api.github.com/users";

// Using .then chaining
function getGitHubData(username){ // The function does not need the async keyword
  fetch(`${url}/${username}`) // We call `fetch` which we know returns a Promise
    .then(resp => resp.json()) // If the fetch Promise was fulfilled, we will call `json` which also returns a Promise
    .then(console.log)
    // .then(jsonData => console.log(jsonData.location)) // If the json Promise was fulfilled, we will do something with the data
    .catch(console.warn) // If anything went wrong during this chain, we will print a warning in the console
};
 
// Using async/await
async function getGitHubDatav2(username){ // The function needs the async keyword
  try { // The try/catch blocks are not async/await specific but are very useful for handling rejections and Errors neatly
    const resp = await fetch(`${url}/${username}`); // We call `fetch` which we know returns a Promise and when it is fulfilled, store the Response.
    const jsonData = await resp.json(); // Once we have resp, we will call `json` on it. When that is fulfilled we will store the resulting json data.
    console.log(jsonData);
    // console.log(jsonData.location); // Once we have jsonData, we will log out a piece of it
  } catch (err) {
    console.warn(err) // If anything went wrong during the try block, we will print a warning in the console
  }
};

getGitHubData('scott-a-code');
getGitHubDatav2("scott-a-code");
