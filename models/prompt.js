import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({ 
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User', //one to many relationship
    },
    prompt: {
        type: String,
        required: [true, 'Some quote is required'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required'],
    }
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;
