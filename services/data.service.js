user = {
    1000: { acno: 1000, uname: "Akhil", password: "userone", balance: 3000, transaction: [] },
    1001: { acno: 1001, uname: "Abhi", password: "usertwo", balance: 1000, transaction: [] },
    1002: { acno: 1002, uname: "Anu", password: "userthree", balance: 5000, transaction: [] },

}

const register = (acno, uname, password) => {
    console.log("register called");

    
    if (acno in user) {
        return {
            statusCode:422,
            status: false,
            message: "User exists, please login"
        }
    }
    else {
        user[acno] = {
            acno, uname, password, balance: 0, transaction: []
        }

        return {
            statusCode:200,
            status: true,
            message: "Registration Completed"
        }
    }
}

const signin = (acno, pswd)=> {
    console.log("login called");
    if (acno in user) {
      if (pswd == user[acno]["password"]) {
        //  
        
        
        return {
            statusCode:200,
            status: true,
            message: "Logged in successfully"
        }

      }
      else {
        
        return {
            statusCode:422,
            status: false,
            message: "Incorrect password"
        }
      }
    }
    else {
        return {
            statusCode:422,
            status: false,
            message: "Invalid user"
        }
    }
  }

  const deposit = (acno,pswd,amount)=>{

  var amt=parseInt(amount);
  
  if(acno in user)
  {
    if(pswd ==user[acno]["password"])
    {
      user[acno]["balance"]+=amt;
      user[acno].transaction.push({
        amount:amt,
        type:"Credit"}
      )
    
      return{
          statusCode:200,
          status:true,
          message: amount + "Deposited Successfully and new balance is : " +   user[acno]["balance"]
      }
    }
    else
    {
      
      return {
        statusCode:422,
        status: false,
        message: "Incorrect Password"
    }
    }
  }
  else{
    return{
        statusCode:422,
        status: false,
        message: "Invalid account number"
    }
  }
}

const withdraw = (acno,pswd,amount)=>{
  var amt=parseInt(amount);
  
  if(acno in user)
  {
    if(pswd ==user[acno]["password"])
    {
      if(user[acno]["balance"]>amt)
      {
      user[acno]["balance"]-=amt;
      user[acno].transaction.push({
        amount:amt,
        type:"Debit"}
      )
      return{
        statusCode:200,
        status:true,
        message: amount + "Withdrawn Successfully and new balance is : " +   user[acno]["balance"]
    }
      }
      else{
        return {
            statusCode:422,
            status: false,
            message: "Insufficient Balance"
        }
      }
    }
    else
    {
        return {
            statusCode:422,
            status: false,
            message: "Incorrect Password"
        }
    }
  }
  else{
    return{
        statusCode:422,
        status: false,
        message: "Invalid account number"
    }
  }
  
  
}

module.exports = {
    register,
    signin,
    deposit,
    withdraw
}