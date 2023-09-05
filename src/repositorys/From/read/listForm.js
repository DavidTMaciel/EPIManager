import { prisma } from "../../../services/prisma";


export const listForm = async (id) =>{

    const form = await prisma.releaseForm.findUnique({where:{id},
        select:{
            id: true,
            collaborator:{
                select:{
                    name: true,
                    function: true,
                    admission_Date: true,
                    company: true,
                    constructions: true,
                    company: true,
                }
            },
            releaseListEpis:{
                select:{
                    listEpis:{
                        select:{
                            id: true,
                            name: true,
                        }

                    }
                }
            }
        }});

    return form;
}