export const imageUpload = async(image)=>{
const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB}`,{
    method:'POST',
    body:image
})
const data = await res.json()
return data
}