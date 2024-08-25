"use server"

export async function fetchCharacterImage(name: string) {
    const url = `https://southpark.fandom.com/api.php?action=query&origin=*&titles=${encodeURIComponent(
        name
    )}&prop=pageimages&format=json`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch character image');
    }
    const data = await response.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    const thumbnailSource = pages[pageId].thumbnail?.source;
    return thumbnailSource ? thumbnailSource.split('/revision')[0] : null;
}