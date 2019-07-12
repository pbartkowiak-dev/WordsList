import axios from "axios";

function getWords() {
	var mockData = [ { "es": "la quijada", "timestamp": 1231234345, "favorite": false, "color": false, "examples": [ "La prominente {b}quijada{/b} del hombre lo hacía parecer desproporcionado.", "Los arqueólogos encontraron una {b}quijada{/b} inferior con todos los dientes." ], "translations": { "ang": [ "jaw", "jawbone" ], "pol": [ "żuchwa" ] } }, { "es": "el nudillo", "timestamp": 1231234348, "favorite": false, "color": true, "examples": [ "Di unos golpes en la puerta con {b}los nudillos{/b}, pero no me contestó nadie." ], "translations": { "ang": [ "knuckle" ], "pol": [ "kostka" ] } }, { "es": "la carcasa", "timestamp": 1231234360, "favorite": true, "color": false, "examples": [ "{b}La carcasa{/b} de mi celular se rompió cuando lo tiré sin querer." ], "translations": { "ang": [ "case" ], "pol": [] } } ];
	// return axios.get("./words")
	return new Promise((resolve, reject) => {
		resolve(mockData)
	})
}

export {
	getWords
};
