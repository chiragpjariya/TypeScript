//! type alias 
//? creating custome types

//  * you can create a custome type for object
//  * creating custome always first latter is Capital
//  * if you want create optional property propertyName?:type(string or number Or ..)


type User = {
    userName: string,
    userAge: number,
    address?: string
}

//****************************************************************************************************************************** */
const userDetails: User = {
    userName: 'chirag',
    userAge: 12
}
// console.log(userDetails)
//****************************************************************************************************************************** */
function details(userD: User): User {
    return userD
}

// details(userDetails)

// ***************************************************************************************************************************** */
type ID = number | string;

const useID:ID = 'd'

//***************************************************************************************************************************** */



