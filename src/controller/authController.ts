import type { Response, Request } from "express"
import { prisma } from "../index.ts"

export const addUser = async (req: Request, resp: Response) => {

    try {
        // const userList =[{email:"ashagmaico",name:"asha",phone:1234567},{email:"juma.com",name:"juma",phone:7890},]
        const userList = [ {email: "juma.com3", name: "juma3", phone: 73890 }]
        const results = await prisma.user.createMany({
            data: userList
        })
        resp.status(200).json(results)
    } catch (error) {
        return resp.status(500).json(` errror at : ${error}`)

    }

}

// export const getUser = async(req:Request, resp:Response)=>{

//     try {
//         const results =await prisma.user.findMany({
//            where:{
//             id:{
//                 // in:[1,2]
//                 notIn:[1,2]
//             }
//            }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }

// export const getUser = async(req:Request, resp:Response)=>{

//     try {
//         const results =await prisma.user.findMany({
//            where:{
//             id:{
//                not:{
//                 in:[1,2]
//                }
//             }
//            }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }


// export const getUser = async(req:Request, resp:Response)=>{

//     try {
//         const results =await prisma.user.findMany({
//            where:{
//             phone:{
//                 not:{
//                    gte :123456890
//                 }
//             }
//            }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }




// export const getUser = async (req: Request, resp: Response) => {

//     try {
//         const results = await prisma.user.findMany({
//             where: {
//                 OR: [
//                     {
//                         id: {
//                             gt: 12345
//                         }
//                     },
//                     {
//                         name: {
//                             contains: "A",
//                             startsWith: 'a',
//                             mode:'insensitive'
//                         }
//                     }
//                 ],
//                 AND: [
//                     {
//                         email:{
//                             endsWith:'2'
//                         }
//                     }
//                 ]
//             }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }



///////////////////RELATION FILTER//////(none, some, every) THIS FOR ONE ===> MANY

export const getUser = async(req:Request, resp:Response)=>{

    try {
        const results =await prisma.user.findMany({
           where:{
            posts:{
                some:{
                    published:false,
                }
            }
           }
        })
        resp.status(200).json(results)
    } catch (error) {
        return resp.status(500).json(` errror at : ${error}`)

    }

}