
const checkVaildData =(email,password,name, isLoggedIn)=>{
        const isEmailVaild = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
        const isPasswordVaild = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

        if(!isLoggedIn){
            const isNameVaild = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
            if(!isNameVaild) return "Please enter correct name";
        }
        if(!isEmailVaild) return "Please enter correct email id";
        if(!isPasswordVaild) return "Please give correct password";

        return null;


}

export default checkVaildData;