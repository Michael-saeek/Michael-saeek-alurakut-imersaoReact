

const Input = ({type, label, name, placeholder, estado, setEstado}) => {


const handleInputChange = (e) => {
const {name, value } = e.target
setEstado({...estado, [name]: value})
console.log(estado)

}



const validacaoDeDados = () => {

   

}

return (
    <div>
            <input   
                onKeyUp={validacaoDeDados}
                onChange={handleInputChange}
                value={estado.campo}
                placeholder={placeholder} 
                name={name}
                aria-label={label}
                type={type}
                />
    </div>
    )
}


export default Input
