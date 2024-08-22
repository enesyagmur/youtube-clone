import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import homeSlice from "./homeSlice";
import shortSlice from "./shortSlice";
import gameSlice from "./gameSlice";
import sporSlice from "./sporSlice";
import musicSlice from "./musicSlice";
import trendsSlice from "./trendsSlice";
import liveSlice from "./liveSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    homeData: homeSlice,
    shortsData: shortSlice,
    gamesData: gameSlice,
    sporsData: sporSlice,
    musicsData: musicSlice,
    trendsData: trendsSlice,
    liveData: liveSlice,
  },
});
