const getAPIKeyFromHash = () => {
  return window.location.search;
};

const addGoogleAPIScript = () => {
  scriptNode = document.createElement("script");
  const APIKey = getAPIKeyFromHash();
  scriptNode.src = `https://maps.googleapis.com/maps/api/js${APIKey}&libraries=places`;
  scriptNode.onload = testGoogleAPI;

  document.body.appendChild(scriptNode);
};

const testGoogleAPI = () => {
  const autocompleteInput = document.getElementById("autocomplete");
  const autocomplete = new google.maps.places.Autocomplete(
    autocompleteInput,
    {}
  );
};

addGoogleAPIScript();
