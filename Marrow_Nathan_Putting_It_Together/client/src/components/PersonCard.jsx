import {useState} from 'react'


const PersonCard = (props) => {
    const {firstName, lastName , age, hairColor} = props
    
    const[newAge, setNewAge] = useState(age)
    const birthdayButton = () => {
        setNewAge(newAge + 1)

}
return (
    <>
        <p>{lastName}, {firstName}</p>
        <p>Age: {newAge}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={birthdayButton}>Birthday Button for {firstName} {lastName} </button>
    </>
)
}

export default PersonCard