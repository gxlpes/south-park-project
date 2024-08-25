interface Character {
    image: string;
    id: number;
    name: string;
    age: number | null;
    sex: 'Male' | 'Female' | 'Other';
    hair_color: string;
    occupation: string;
    grade: string | null;
    religion: string;
    voiced_by: string | null;
    created_at: string;
    updated_at: string;
    url: string;
    family: string;
    relatives: CharacterRelation[];
    episodes: string[];
};

interface CharacterRelation {
    url: string;
    relation: string;
};



