import datas from "../modals/Usermodal.js";
import encrypt from "encryptjs";


export const registrationcheck = async (req,res,next) => {
    try{
        const {name,email,password} = req.body
        if(!name) return res.send("Name is Required");
        if(!email) return res.send("email is Required");
        if(!password) return res.send("password is Required");


        if(password.length < 8)
        {
            return res.send("password should be atleast 8 character")
        }
       const response = await datas.find({email:email}).exec();
       if(response.length)
       {
        return res.send("email is registered");
       }
       next();
    }
    catch(err)
    {
        return res.send(err);
    }
}


export const checkuser = async(req,res,next) =>
{
    try{
        const { id, password} = req.body;
        if (!id) return res.send("id is required - middleware");
        if (!password) return res.send("Password is required - middleware");

        var secretkey = 'apple';

        const response = await datas.find({ _id : id }).exec();
        console.log(response, "response here");

        var deciphertext = encrypt.decrypt(response[0].password, secretkey, 256);
        console.log(deciphertext);

        if (deciphertext == password) {  
            next();
        } else {
            return res.send("Incorrect password");
        }

    }catch(err)
    {
        return res.send(err);
    }
}