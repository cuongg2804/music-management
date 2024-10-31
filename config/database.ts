import mongoose from "mongoose";

export const  connect = async () : Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("Kết nối database thành công !");
       
    } catch(error) {
        console.log("Kết nối database thất bại !\n" + error) ;
    }
}