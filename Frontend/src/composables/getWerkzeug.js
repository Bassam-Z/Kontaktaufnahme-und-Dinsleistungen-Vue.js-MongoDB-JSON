import {ref} from 'vue'

const getWerkzeug = () =>{

    const Werkz = ref([])
    const error = ref(null)
        
    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/wz')
            if (!data.ok){
            throw Error('Keine Data vorhanden')
        }
        console.log(data)
        Werkz.value = await data.json()
        }
        catch(err){
            error.value = err.message
            console.log(error.value)
            
        }
    }
    return {Werkz, error, load}
}

export default getWerkzeug