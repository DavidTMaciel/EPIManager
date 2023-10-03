
export const resetPassword = async (request, reply) =>{

    try{
        const user = request.body;
        const email = await sendEmailPassword(user.email, user.name);

        reply.code(200).send({menssage: 'email send'});
    }catch(err){
        reply.code(400).send({menssage: 'Error sending email'});
    }
   

}