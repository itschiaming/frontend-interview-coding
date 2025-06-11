import "./App.css";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import DivsCenter from "./divs-center/DivsCenter";
// import StopWatchWrapper from "./stop-watch/StopWatchWrapper";
import StarRatingWrapper from "./star-rating/StarRatingWrapper";

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <main>
        <nav>
          <Button>
            <a href='#divs-center'>Center divs</a>
          </Button>
          <Button>
            <a href='#star-rating'>Star rating</a>
          </Button>
          <Button disabled>
            <a href='#stop-watch'>Stop watch</a>
          </Button>
        </nav>
        <DivsCenter />
        <StarRatingWrapper />
        {/* <StopWatchWrapper /> */}
      </main>
    </ThemeProvider>
  );
}

export default App;
