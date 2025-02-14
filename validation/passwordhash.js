const bcrypt = require('bcrypt')

async function hashPassword (password){
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        return hashedPassword ;
       
    } catch (err) {
        throw err ;
    }
}

module.exports = { hashPassword } ;