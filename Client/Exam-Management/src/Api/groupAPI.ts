export const fetchgroup = async () =>{

        const reponse = await fetch('http://localhost:8080/group')
        const data = await reponse.json()
        return data




}