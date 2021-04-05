
export const submitLogin = async ( username, password ) => { //how are these objects, they are string values?
  try { 
   const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
     method: "POST",
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       username: `${username}`,
       password: `${password}`
     })
   })

   const data = await response.json();    
   return data;


  } catch (error) {
    throw error
  }
}


export const submitRegister = async ( username, password ) => { //how are these objects, they are string values?
   try { 
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`
      })
    })

    const data = await response.json();    
    return data;


   } catch (error) {
     throw error
   }

}

export const fetchAllRoutines = async () => {
  try{
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
  headers: {
    'Content-Type': 'application/json',
  },
})
    const data = await response.json();
    console.log(data.filter(act=> act.creatorId === 206))
    return data
  
  } catch (error) {
    throw error
  }

}

export const fetchAllActivities = async () => {
  try{
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
  headers: {
    'Content-Type': 'application/json',
  },
})
    const data = await response.json();
    return data
  
  } catch (error) {
    throw error
  }

}

  export const fetchMyRoutines = async (username) => {

  try{
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/albert/routines`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  const data = await response.json();
  return data;

  } catch(error){
    throw error
}

}