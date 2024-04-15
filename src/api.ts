import type {Drawing} from "./types";

const api = {
    drawing : {
     list : async (): Promise<Drawing[]> => {
        return [
            {
                id : 1,
                date : "2024-04-10:13:00:00",
                url : "/draw1.png",
                description : "If I told you that I loved you Tell me, what would you say?"
            },
            {
                id : 2,
                date : "2024-04-10:17:00:00",
                url : "/draw1.png",
                description : "Fallin' again, I need a pick-me-up I've been callin' you friend, I might need to give it up"
            },
            {
                id : 3,
                date : "2024-04-11:20:00:00",
                url : "/draw1.png",
                description : "I'm sick and I'm tired too I can admit, I am not fireproof I feel it burning me I feel it burning you I hope I don't murder me I hope I don't burden you If I do, I do"
            },
            {
                id : 4,
                date : "2024-04-14:21:10:00",
                url : "/draw1.png",
                description : "I don't wanna be alone Sharper the blade is The easier it scars your soul"
            },
        ]
     }
    }
};

export default api;