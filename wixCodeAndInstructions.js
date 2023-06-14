// DYNAMICALLY POPULATE IFRAMES WITH WAVESURFER AND SOUNDCLOUD URLS


//// Instructions:

// First, get the correct URL from Soundcloud's embed code. Towards the beginning of the code, it will say "src=" then a long URL in quotes. Enter that URL in the dataset, not including the quotes.

// Next, get the Wavesurfer files from the GitHub repo here: https://github.com/allyesw/esw-wavesurfer (see readme there for upload instructions.) Copy the path and append to this link: https://allyesw.github.io/esw-wavesurfer/
// EXAMPLE: https://allyesw.github.io/esw-wavesurfer/SamplePacks/NuVintage/NV-01-1x4.html
// Then enter that URL into the dataset.

// Lastly, replace all the IDs below with the correct ones. Keep everything wrapped in the onReady for the dataset. Paste into Wix page code.

$w("#ReadDataset").onReady(function () {
	// Soundcloud - make sure 
	$w("#soundcloudIframe").src = $w("#ReadDataset").getCurrentItem().soundcloudUrl;
	
	// Wavesurfer
	$w("#wavesurferIframe").scrolling = "no"; //might fix scrollbar issue?
	$w("#wavesurferIframe").src = $w("#ReadDataset").getCurrentItem().wavesurferUrl;
})