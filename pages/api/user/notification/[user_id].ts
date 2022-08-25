import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res:NextApiResponse) {
    if (req.method !== 'GET'){
        res.status(405).json({
            message: 'Method Not Allowed'
        });
        return;
    }
    res.status(200).json([
        {
            id: 1,
            level: 'success',
            message: 'Tu as validé toutes tes obligations Phoenix, bravo !'
        },
        {
            id: 2,
            level: 'info',
            message: 'Tu as 2 nouvelles obligations Phoenix à valider'
        },
        {
            id: 3,
            level: 'warning',
            message: 'Il ne te reste plus que 2 jours pour valider tes obligations Phoenix'
        },
        {
            id: 4,
            level: 'error',
            message: 'Tu as 2 obligations non validées la semaine dernière'
        },
        {
            id: 5,
            level: 'error',
            message: 'Tu as 2 obligations non validées la semaine dernière' 
        }
    ] as notification[]);
}