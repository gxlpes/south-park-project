"use server"

export async function fetchCharacters(page:number) {
    const response = await fetch(`https://spapi.dev/api/characters?page=${page}`);
    if (!response.ok) {
        throw new Error('Failed to fetch characters');
    }
    return response.json();
}
