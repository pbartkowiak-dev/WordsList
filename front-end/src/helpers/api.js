import axios from "axios";

function getWords() {
	const useMockData = false;
	if (useMockData) {
		const mockData = {data: [ { "es": "la quijada", "timestamp": 1231234345, "favorite": false, "color": false, "examples": [ "La prominente {b}quijada{/b} del hombre lo hacía parecer desproporcionado.", "Los arqueólogos encontraron una {b}quijada{/b} inferior con todos los dientes." ], "translations": { "eng": [ "jaw", "jawbone" ], "pol": [ "żuchwa" ] } }, { "es": "el nudillo", "timestamp": 1231234348, "favorite": false, "color": true, "examples": [ "Di unos golpes en la puerta con {b}los nudillos{/b}, pero no me contestó nadie." ], "translations": { "eng": [ "knuckle" ], "pol": [ "kostka" ] } }, { "es": "la carcasa", "timestamp": 1231234360, "favorite": true, "color": false, "examples": [ "{b}La carcasa{/b} de mi celular se rompió cuando lo tiré sin querer." ], "translations": { "eng": [ "case" ], "pol": [] } } ]};
		return new Promise((resolve) => {
			resolve(mockData);
		});
	}
	return axios.get('./getWordsAction');
}

function addWord(newFormModel) {
	console.log('addWord newFormModel', newFormModel)
	axios.post('./addWordAction', newFormModel)
		.then(response => {
			if (response && response.message) {
				console.log(response.message);
			}
		})
		.catch(error => {
			console.log(error);
		});
}

export {
	getWords,
	addWord
};
