import  { connectToDB } from '@utils/database'
import Prompt from '@models/prompt'


// GET (read quotes)
export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator')
        if(!prompt) return new Response("Quote not found", { status: 404})

        return new Response(JSON.stringify(prompt), { staus: 200 })
    } catch (error) {
        return new Response("Failed to load other quotes", { staus: 500 })
    }
}

//Patch (update quotes)
export const PATCH = async (request, { params }) => {
    const {prompt, tag} = await request.json();

    try {
        await connectToDB();
        const existingPrompt = await Prompt.findById(params.id)

        if(!existingPrompt) return new Response("Quote not found", { status: 404})

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save()

        return new Response(JSON.stringify (existingPrompt), { status: 200})
    } catch (error) {
        return new Response("Failed to update your quote", { status: 500})
    }
}

//DELETE (delete quotes)
export const DELETE = async (request, {params}) => {
    try {
        await connectToDB()
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Quote deleted successfully", { status: 500 })
    } catch (error) {
        
    }
}