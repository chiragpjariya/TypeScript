//! Usnions


type ID = number | string


function ids(id: ID) {
    if (typeof (id) == 'string') {
        console.log(id.toUpperCase());
    }
    else{
        console.log(id);
        
    }
}

ids('he')
ids(10)
