import { InferenceClient } from "@huggingface/inference";

const token = import.meta.env.VITE_HF_TOKEN;
const client = new InferenceClient(token);

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

export default async function chefAI(ingredientsArray) {
    const ingredientsString = ingredientsArray.join(", ");
    try{
        const chatCompletion = await client.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.2:featherless-ai",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        });
        return chatCompletion.choices[0].message.content;
    }
    catch(error){
        console.error("Error fetching recipe:", error);
        return "Sorry, I couldn't fetch a recipe at this time.";
    }
}