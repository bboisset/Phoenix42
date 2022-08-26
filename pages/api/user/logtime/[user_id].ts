import { NextApiRequest, NextApiResponse } from "next";

/**
 * Convert 42 hour format to minutes
 * @param hours 
 */
const formatHours = (hours:string):number => {
    const [hoursCount, minutesCount] = hours.split(':');
    return (parseInt(hoursCount) * 60 + parseInt(minutesCount));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(405).json({
            message: 'Method Not Allowed'
        });
        return;
    }

    let data42:User42LogTime = {
        "2022-08-26": "02:56:21.097917",
        "2022-08-25": "02:20:35.738681",
        "2022-08-24": "03:23:36.453802",
        "2022-08-15": "04:40:36.89249",
        "2022-08-14": "04:51:22.499393",
        "2022-08-13": "06:05:59.372873",
        "2022-08-12": "00:21:53.590291",
        "2022-08-11": "03:05:36.994655",
        "2022-08-10": "05:16:55.007148",
        "2022-08-09": "04:36:29.373432",
        "2022-08-08": "04:49:50.382865",
        "2022-08-07": "05:58:58.220621",
        "2022-08-06": "04:12:54.190362",
        "2022-08-05": "06:44:53.740148",
        "2022-08-04": "03:20:40.099337",
        "2022-08-03": "04:28:59.221241",
        "2022-08-02": "02:58:40.99942",
        "2022-08-01": "01:49:22.04"
    };
    let data:UserLogTime = [];
    for (let [key, value] of Object.entries(data42)) {
        data.push({
            day: key,
            minutesInSchool: formatHours(value)
        });
    }
    res.status(200).json(data);
}