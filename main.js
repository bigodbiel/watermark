const fs = require("fs")
const path = require("path")
const Jimp = require("jimp")

let stampText = process.argv[3] || `Stamped File ${new Date().getDay()}.${new Date().getMonth()}`

let files;
if (false){
    files = path.extname(process.argv[2]) != "" && process.argv[3] != "" ? [process.argv[2]] : fs.readdirSync(process.argv[2]) 
} else files = fs.readdirSync(__dirname) 

const main = async ()=>{
    if (process.argv[2] == "-h"){
        console.log(`Water Marking tool: first arg files || all files current folder, second arg stamp text`)
        return 1
    }
    try{
    
    for (let file of files){
        
        if (path.extname(file) == ".jpg"){
            await watermarkAdd(file)
    }
    }}
    
    catch(err){
        console.log(`error occurred: during main going through files ${err}`)
    }
}


//const text = process.argv[2] || 

const crop = async (image, x, y)=>{
    console.log(image.bitmap.width, " : ", image.bitmap.width)
    await image.crop(x,y,image.bitmap.width,image.bitmap.height - y);
}

const watermarkAdd = async (file)=>{
    try{
    const text = `${path.basename(file,".jpg")} ${stampText}`
    console.log(`writing to ${file}`)
    let image = await Jimp.read(file)
    await image.crop(0,20,image.bitmap.width,image.bitmap.height - 20);
    
    // Jimp.loadFont(Jimp.FONT_SANS_128_BLACK).then((font)=>image.print(font, 50, 50, text).write(path.join(__dirname,file)))
    // console.log(`watermark added to ${file}`)
    
}
    catch(err){
        console.log(`Error adding Watermark and saving ${err}`)
    }
}

main()