//! Generics

function loAny(param: any) {
    console.log(param);
}

loAny([1, 2, 3, 4, 5])
loAny([1, 2, 3, "j", { n: 'n' }])
loAny(true)

//**************************************************************************************************************************** */

type id = any
const Id: id = null

// function log<T>(parm: T): T {
//     console.log(parm);

// }
// log({l:['d',4,{d:4},null],k:'n'})


//********************************************************************************************************************* */

interface ids { IDS: number }


function greeting<T>(parm: T[]): T[] {
    return parm

}

// const d = greeting([1, 2, 'd'])
//**************************************************************************************************************************** */

// interface IPost {
//     name :string,
//     tital:string,
//     id:number
// }

// async function posts<IPost>(params:IPost):Promise<IPost[]> {
//     return params
// }

// interface IAuth  {
//     username:string,
//     password:string,
//     loging(username:string,password:string):void
// }


// const user:IAuth = {
//     username:'chi',
//     password:'cz',
//     loging(username,password){
//         console.log(username,password); 
//     }
// }


interface IAuth {
    username: string;
    password: string;
    loging: (username: string, password: string) => void;
}

const user: IAuth = {
    username: 'chi',
    password: 'cz',
    loging: (username, password) => {
        console.log(username, password);
    }
};


const {loging}=user
loging('chirag','sc')
