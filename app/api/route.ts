import {watches} from "@/app/_lib/data"
export function GET (){
    return new Response(JSON.stringify(watches))
    }
