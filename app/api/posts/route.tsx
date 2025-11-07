import ConnectMongo from "@/utils/connectMongo";
import postModel from "@/models/postModel";


export async function GET() {
  try {

    await ConnectMongo();   
    const posts = await postModel.find({});
    return  Response.json(posts);
  }
  catch (error) {
    return  Response.json({message: error.message }, {status: 500});
  }
}