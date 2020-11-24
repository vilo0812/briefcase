import {backgroundZonaEducativaLogin,backgroundWeatherApp,backgroundPokeApp} from "./images.js"
const projects  = [
	{
		img:[
		backgroundZonaEducativaLogin
		],
		title:"Sistema de Control de Permanencias de la Zona Educativa",
		description:"Desarrollo completo de un sistema de seguimiento sobre las personas que van a ingresar a alguna de las muchas dependencias del edificio de la zona educativa del estado Guárico, ya sea por motivos de : visita personal, asistencia a una vídeo conferencia, entre otros. Almacenando un registro de las visitas que hayan realizado en el edificio, además que permitirá imprimir tickets con la dirección de la dependencia a al que deseas ingresar brindando un apoyo a la seguridad del edifico.",
		github:"https://github.com/vilo0812/zonaeducativa",
		host:{
			host_active: false,
			direction: "",
			user_active:false,
			user: "",
			password: "",
		}
	},
	{
		img:[
		backgroundWeatherApp
		],
		title:"weather app",
		description:"Sistema que permite visualizar el clima de distintas partes del mundo",
		github:"https://github.com/vilo0812/weather-app",
		host:{
			host_active: true,
			direction: "https://viloweb-weather-app.netlify.app/",
			user_active:false,
			user: "",
			password: "",
		}
	},
	{
		img:[
		backgroundPokeApp
		],
		title:"poke app",
		description:"Sistema que permite visualizar de los caracteres jugables del juego de pokemon con sus detalles",
		github:"https://github.com/vilo0812/poke-app",
		host:{
			host_active: true,
			direction: "https://viloweb-poke-app.netlify.app/",
			user_active:false,
			user: "",
			password: "",
		}
	},
]
export default projects;