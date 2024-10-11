import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
  setOrdering: (order: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (id: number) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        genreId: id,
      },
    })),
  setPlatformId: (id: number) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        platformId: id,
      },
    })),
  setOrdering: (order: string) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        ordering: order,
      },
    })),
  // This will be different because when user searching we must disable other filtering properties -> user may searching games in bad genre
  setSearchText: (searchText: string) =>
    set(() => ({
      gameQuery: {
        searchText: searchText,
      },
    })),
}));

if (process.env.NODE_ENV === 'development')
  mountStoreDevtool('GameQuery Store', useGameQueryStore);

export default useGameQueryStore;
