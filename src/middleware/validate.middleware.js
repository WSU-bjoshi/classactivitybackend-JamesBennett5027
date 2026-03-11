export function validateBody(requiredFeilds =[]){
    return (req,res,next)=>{
        const missing = requiredFeilds.filter(
        (f) => req.body?.[f] === undefined ||req.body === "");
        if (missing.length){
            return res.status(400).json({error:`missing feilds:  ${missing.join(",")}`});
        }
        next();
    }
}