
import type { Response, Request } from "express"
import { prisma } from "../index.ts"

export const addpost = async (req: Request, resp: Response)=> {

    try {
        // const userList =[{email:"ashagmaico",name:"asha",phone:1234567},{email:"juma.com",name:"juma",phone:7890},]
        const userList = [{ title: "ashagmaico", content: "asha1", published: false,authorId:1 }, { title: "juma.com1", content: "juma1", published: true ,authorId:2},{ title: "ashagmaico2", content: "asha2", published: false,authorId:4}, { title: "juma.com2", content: "juma2", published: true ,authorId:5},]
        const results = await prisma.post.createMany({
            data:userList
        })
        resp.status(200).json(results)
    } catch (error) {
        return resp.status(500).json(` errror at : ${error}`)

    }

}


///////////////////RELATION FILTER QUERY//////(is, isnot, every) THIS FOR MANY ===> ONE, ONE ==>ONE ,relations

// export const getpost = async(req:Request, resp:Response)=>{

//     try {
//         const results =await prisma.post.findMany({
//            where:{
//                 author:{
//                     isNot:{
//                         name:'juma'
//                     }
//                 }
//            }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }


// export const getpost = async(req:Request, resp:Response)=>{

//     try {
//         const results =await prisma.post.findMany({
//            where:{
//                 author:{
//                     isNot:{
//                         name:'juma'
//                     },
//                     is:{
//                         phone:{
//                             equals:12345
//                         }
//                     }
//                 }
//            }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }


export const getpost = async(req:Request, resp:Response)=>{

    try {
        const results =await prisma.post.findMany({
           where:{
                author:{
                    isNot:{
                        name:'juma'
                    },
                    is:{
                        email:{
                            startsWith:"ju"
                        }
                    }
                }
           },
           include:{
            author:true
           }
        })
        resp.status(200).json(results)
    } catch (error) {
        return resp.status(500).json(` errror at : ${error}`)

    }

}