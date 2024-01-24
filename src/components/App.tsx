import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import PokemonDetails from "./PokemonDetails/PokemonDetails";
import Homepage from "../pages/Homepage";
import AppLayout from "../pages/AppLayout";
import { onShowDetailsHandler } from "./PokemonDetails/PokemonDetails";
import CardsProvider from "../context/CardsProvider";

// improve error handling
// add card filtering
// optional: add card favoriting
// remove ts-ignore

function App() {
  const RoutesJSX = (
    <Route path="">
      <Route path="/" element={<Homepage />} />
      <Route
        path="app"
        element={
          <CardsProvider>
            <AppLayout />
          </CardsProvider>
        }
      ></Route>
      <Route
        path="details/:pokemonName"
        loader={({ params }) => onShowDetailsHandler(params.pokemonName ?? "")}
        element={<PokemonDetails />}
        errorElement={<p>There was some error</p>}
      />
      <Route path="*" element={<p>page not found</p>} />
    </Route>
  );
  const routes = createRoutesFromElements(RoutesJSX);
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
