import datas from "../modals/Usermodal.js"
import encrypt from "encryptjs"

export const registration = async (req,res) =>
{
    try{
        
        const{name,email,password} = req.body
        {
        var secretkey ='apple'; 
        var plaintext = password;
        var ciphertext = encrypt.encrypt(plaintext,secretkey,256);
        const data = new datas
        ({
            name,
            email,
            password:ciphertext,
        })
        await data.save();
        return res.send("Registration succesfull");
        }

    }
    catch(err)
    {
        return res.send(err)
    }
}


