import {
	backgroundZonaEducativaLogin,
	backgroundWeatherApp,
	backgroundPokeApp,
	backgroundCarrera,
	// backgroundSAVURG,
	backgroundTasksJquery,
	backgroundWalletReact,
	backgroundManejoOrdenDeCompra,
	backgroundStreetcasting,
	backgroundCasalira,
	backgroundMatematicos,
	backgroundInterarco,
} from "./images.js"
const projects  = [
	{
		title:"Sistema de Manejo de Orden de Compra",
		img:[
		backgroundManejoOrdenDeCompra
		],
		technology:{
			backend: {
				active_language:true,
				language:"php",
				active_framework:true,
				framework:"laravel"
			},
			frontend: {
				active_language:true,
				language:"javascript",
				active_framework:true,
				framework:"react"
			},
		},
		description:"Pequeño test como parte de un proceso de selección para una empresa colombiana llamada The Factory",
		github:"https://github.com/vilo0812/carrera4k",
		host:{
			host_active: true,
			direction: "https://orden-compra-venta.herokuapp.com/",
			user_active:true,
			user: "admin@gmail.com",
			password: "123456",
		}
	},
	{
		title:"Sistema de Control de Permanencias de la Zona Educativa",
		img:[
		backgroundZonaEducativaLogin
		],
		technology:{
			backend: {
				active_language:true,
				language:"php",
				active_framework:true,
				framework:"laravel"
			},
			frontend: {
				active_language:true,
				language:"javascript",
				active_framework:true,
				framework:"vue"
			},
		},
		description:"Sistema de seguimiento sobre las personas que van a ingresar a alguna de las muchas dependencias del edificio de la zona educativa del estado Guárico.",
		github:"https://github.com/vilo0812/zonaeducativa",
		host:{
			host_active: true,
			direction: "https://zona-educativa.herokuapp.com/",
			user_active:true,
			user: "gabriel.viloria0812@gmail.com",
			password: "1234",
		}
	},
	{
		title:"Sistema de Registro municipal de la Carrera Bruno Carrasquel del estado Guárico",
		img:[
		backgroundCarrera
		],
		technology:{
			backend: {
				active_language:true,
				language:"php",
				active_framework:true,
				framework:"laravel"
			},
			frontend: {
				active_language:true,
				language:"javascript",
				active_framework:true,
				framework:"vue"
			},
		},
		description:"sistema que permite el registro de los estudiantes de todos los municipios del estado guárico en la carrera bruno carrasquel",
		github:"https://github.com/vilo0812/carrera4k",
		host:{
			host_active: true,
			direction: "https://carrera4k.herokuapp.com/",
			user_active:false,
			user: "",
			password: "",
		}
	},
	{
		title:"weather app",
		img:[
		backgroundWeatherApp
		],
		technology:{
			backend: {
				active_language:false,
				language:"",
				active_framework:false,
				framework:""
			},
			frontend: {
				active_language:true,
				language:"javascript",
				active_framework:true,
				framework:"react"
			},
		},
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
		title:"poke app",
		img:[
		backgroundPokeApp
		],
		technology:{
			backend: {
				active_language:false,
				language:"",
				active_framework:false,
				framework:""
			},
			frontend: {
				active_language:true,
				language:"javascript",
				active_framework:true,
				framework:"react"
			},
		},
		description:"Sistema que permite visualizar de los pokemones del juego de pokemón con sus detalles",
		github:"https://github.com/vilo0812/poke-app",
		host:{
			host_active: true,
			direction: "https://viloweb-poke-app.netlify.app/",
			user_active:false,
			user: "",
			password: "",
		}
	},
	// {
	// 	title:"Sistema de Aula Virtual para la Universidad Romulo Gallegos",
	// 	img:[
	// 	backgroundSAVURG
	// 	],
	// 	technology:{
	// 		backend: {
	// 			active_language:true,
	// 			language:"php",
	// 			active_framework:true,
	// 			framework:"laravel"
	// 		},
	// 		frontend: {
	// 			active_language:true,
	// 			language:"javascript",
	// 			active_framework:true,
	// 			framework:"react"
	// 		},
	// 	},
	// 	description:"sistema que ayudara a la realización de las tareas a distancia de la Universidad Romulo Gallegos",
	// 	github:"https://github.com/vilo0812/savurg",
	// 	host:{
	// 		host_active: false,
	// 		direction: "",
	// 		user_active:false,
	// 		user: "",
	// 		password: "",
	// 	}
	// },
	{
		title:"Pequeña app web de tareas con php, jquery y ajax",
		img:[
		backgroundTasksJquery
		],
		technology:{
			backend: {
				active_language:true,
				language:"php",
				active_framework:false,
				framework:""
			},
			frontend: {
				active_language:true,
				language:"javascript",
				active_framework:true,
				framework:"jquery"
			},
		},
		description:"Pequeño aplicación de tareas que básicamente un pequeño crud que se hizo para practicar las tecnologías de jquery y ajax",
		github:"https://github.com/vilo0812/task-app-php-jquery-ajax",
		host:{
			host_active: false,
			direction: "",
			user_active:false,
			user: "",
			password: "",
		}
	},
	{
		title:"Laravel-react simple practice about a virtual wallet",
		img:[
		backgroundWalletReact
		],
		technology:{
			backend: {
				active_language:true,
				language:"php",
				active_framework:false,
				framework:""
			},
			frontend: {
				active_language:true,
				language:"javascript",
				active_framework:true,
				framework:"react"
			},
		},
		description:"Pequeño aplicación de que simula una cartera virtual hecha para practicar",
		github:"https://github.com/vilo0812/myWallet",
		host:{
			host_active: true,
			direction: "https://vilowebmywallet.herokuapp.com/",
			user_active:false,
			user: "",
			password: "",
		}
	},
	{
		title:"CasaLira",
		img:[
		backgroundCasalira
		],
		technology:{
			backend: {
				active_language:true,
				language:"php",
				active_framework:false,
				framework:"laravel"
			},
			frontend: {
				active_language:true,
				language:"javascript",
				active_framework:true,
				framework:"vue"
			},
		},
		description:"Desarrollo de los modulo de garantías del sistema de Casalira",
		github:"",
		host:{
			host_active: false,
			direction: "",
			user_active:false,
			user: "",
			password: "",
		}
	},
	{
		title:"StreetCasting",
		img:[
		backgroundStreetcasting
		],
		technology:{
			backend: {
				active_language:true,
				language:"php",
				active_framework:false,
				framework:"laravel"
			},
			frontend: {
				active_language:true,
				language:"javascript",
				active_framework:true,
				framework:"vue"
			},
		},
		description:"Desarrollo de los 8 CRUDs (backend y frontend) del sistema web StreetCasting",
		github:"",
		host:{
			host_active: false,
			direction: "",
			user_active:false,
			user: "",
			password: "",
		}
	},
	{
		title:"matematicos",
		img:[
		backgroundMatematicos
		],
		technology:{
			backend: {
				active_language:true,
				language:"php",
				active_framework:false,
				framework:"laravel"
			},
			frontend: {
				active_language:true,
				language:"javascript",
				active_framework:true,
				framework:"vue"
			},
		},
		description:"Desarrollo de una gran parte del backend del sistema web Matematicos",
		github:"",
		host:{
			host_active: false,
			direction: "",
			user_active:false,
			user: "",
			password: "",
		}
	},
	{
		title:"interárco",
		img:[
		backgroundInterarco
		],
		technology:{
			backend: {
				active_language:true,
				language:"php",
				active_framework:false,
				framework:"laravel"
			},
			frontend: {
				active_language:true,
				language:"javascript",
				active_framework:true,
				framework:"vue"
			},
		},
		description:"actualización del sistema interárco a la versión de laravel 7",
		github:"",
		host:{
			host_active: false,
			direction: "",
			user_active:false,
			user: "",
			password: "",
		}
	},
]
export default projects;