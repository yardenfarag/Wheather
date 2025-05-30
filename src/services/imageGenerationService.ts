const API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";
const API_KEY = "YOUR_HUGGING_FACE_API_KEY"; // Replace with your API key

export async function generateClothingImage(prompt: string): Promise<string> {
  try {
    console.log("Generating image with prompt:", prompt);
    
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          negative_prompt: "ugly, blurry, low quality, distorted, deformed",
          num_inference_steps: 30,
          guidance_scale: 7.5,
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`Image generation failed: ${response.statusText}`);
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
}

export function createImagePrompt(weatherContext: {
  temperature: number;
  description: string;
  recommendation: string;
}): string {
  const { temperature, description, recommendation } = weatherContext;
  
  // Extract clothing items from the recommendation
  const clothingItems = recommendation
    .toLowerCase()
    .match(/\b(jacket|coat|sweater|shirt|pants|jeans|shorts|dress|skirt|boots|shoes|sandals|hat|scarf|gloves)\b/g)
    ?.join(", ") || "";

  return `A professional photograph of a man and woman standing side by side, wearing ${clothingItems}, 
    in a ${description} weather setting, temperature ${temperature}°C, 
    high quality, photorealistic, detailed clothing, natural pose, 
    well-lit, professional photography style, 4k, sharp focus`;
} 