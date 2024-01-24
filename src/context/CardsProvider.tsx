import { createContext, useContext, useState, useEffect } from "react";

interface CardsContextProps {
  cards: any;
  isLoading: boolean;
  error: string;
  onSearchHandler: (query: string) => void;
}

interface CardsProviderProps {
  children: React.ReactNode;
}

const CardsContext = createContext<CardsContextProps>({
  cards: [],
  isLoading: false,
  error: "",
  onSearchHandler: () => {},
});

const CardsProvider: React.FC<CardsProviderProps> = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://api.pokemontcg.io/v2/cards");
        const data = await res.json();
        setCards(data.data);
      } catch (err: any) {
        console.log(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCards();
  }, []);

  const onSearchHandler = async (query: string) => {
    try {
      setError("");
      setIsLoading(true);
      const res = await fetch(
        `https://api.pokemontcg.io/v2/cards?q=name:${query}`
      );
      if (!res.ok) throw new Error("Cannot find this pokemon");
      const data = await res.json();
      setCards(data.data);
    } catch (err: any) {
      console.log(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CardsContext.Provider
      value={{
        cards,
        isLoading,
        error,
        onSearchHandler,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;

export const useCards = () => {
  const context = useContext(CardsContext);
  if (!context)
    throw new Error("You are trying to use context outside the Provider!");
  return context;
};
