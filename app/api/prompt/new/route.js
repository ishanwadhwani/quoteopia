import  { connectToDB } from '@utils/database'
import Prompt from '@models/prompt'

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json() //grabbing labels through post request

    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })
        await newPrompt.save()

        //api route
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Fail to create a new quote", { status: 500 })
    }
}
