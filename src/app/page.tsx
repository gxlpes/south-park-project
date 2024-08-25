'use client';
import Skeleton from '@/components/Skeleton';
import Spinner from '@/components/Spinner';
import { TypographyH1 } from '@/components/TypographyH1';
import { fetchCharacters } from '@/server/character';
import { fetchCharacterImage } from '@/server/character-image';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Page() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadCharacters = async () => {
      setIsLoading(true);
      const charactersData = await fetchCharacters(page);

      if (charactersData.data.length === 0) {
        setHasMore(false); // Stop loading if no more characters are available
        setIsLoading(false);
        return;
      }

      const charactersList = charactersData.data;

      const characterImages = await Promise.all(
        charactersList.map((character: Character) =>
          fetchCharacterImage(character.name)
        )
      );

      const charactersWithImages = charactersList.map(
        (character: Character, index: number) => ({
          ...character,
          image: characterImages[index],
        })
      );

      setCharacters(prev => [...prev, ...charactersWithImages]);
      setIsLoading(false);
    };

    loadCharacters();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !isLoading &&
      hasMore
    ) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, hasMore]);

  return (
    <section className="mx-auto w-full">
      <div className="m-20 text-center">
        <TypographyH1>South Park Characters</TypographyH1>
      </div>
      <ul className="grid h-full w-full grid-cols-5 grid-rows-5 gap-5">
        {characters.map((character: Character) => (
          <li
            key={character.id}
            className="b-2 flex flex-col items-center justify-end rounded-sm border-2 p-2 md:rounded-md md:p-4"
          >
            {character.image && (
              <Image
                src={character.image}
                alt={character.name + ' profile image'}
                width={0}
                height={0}
                sizes="100vw"
                className="w-1/2 object-cover"
              />
            )}
            {character.name}
          </li>
        ))}
      </ul>
      {isLoading && <Skeleton />}
      {!hasMore && <p>No more characters to load.</p>}
    </section>
  );
}
