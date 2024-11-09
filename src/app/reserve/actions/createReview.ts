//CreateReview
export default async function CreateReview() {
  const response = await fetch(
    `https://cd3b-184-22-33-12.ngrok-free.app/users/review/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to create review");
  }
  return await response.json();
}
