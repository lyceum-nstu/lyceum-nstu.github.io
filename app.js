if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register(`${location.href}/service-worker.js`)
}
