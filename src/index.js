import './styles.css'
import observer from './modules/observer.js'
import weatherAPI from './modules/weatherAPI.js'
import cityInputForm from './modules/DOM/cityInputForm.js'

cityInputForm.init()
observer.subscribe('cityQueried', weatherAPI)
