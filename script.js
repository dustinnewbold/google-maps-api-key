/**
 * Get static DOM elements
 */
const apiKeyForm = document.getElementById("api-key-form");
const apiTestForm = document.getElementById("api-key-test");
const apiKeyInput = document.getElementById("api-key");

/**
 * Add autocomplete to input field to test autocomplete
 */
const testGoogleAPI = () => {
  const autocompleteInput = document.getElementById("autocomplete");
  const autocomplete = new google.maps.places.Autocomplete(
    autocompleteInput,
    {}
  );
};

/**
 * Append google maps API key
 * @param {string} apiKey
 */
const addGoogleAPIScript = apiKey => {
  const scriptNode = document.createElement("script");
  scriptNode.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
  scriptNode.id = "google-maps-api";
  scriptNode.onload = testGoogleAPI;

  document.body.appendChild(scriptNode);
  apiKeyForm.classList.add("hide");
  apiTestForm.classList.remove("hide");
};

/**
 * Set up listener to kick off the testing process
 */
apiKeyForm.addEventListener("submit", e => {
  e.preventDefault();

  const apiKey = apiKeyInput.value;
  addGoogleAPIScript(apiKey);
});
