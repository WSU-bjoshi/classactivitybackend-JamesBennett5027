import * as authService from "../services/auth.servoce.js"
export async function regester(req,res) {
    const result = await  authService.register(requestAnimationFrame.body);
    if(!result){
        res.status(result.status).json({error: result.error});
    }
    return res.status(201).json(result.data);
}
export async function login(req,res) {
    const result = await authService.login(req.body);
if (!result.ok){
    return res.status(result.status).json({error:result.error});
}return res.status(200).json(result.data);
}