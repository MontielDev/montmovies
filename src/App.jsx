import { MoviesGrid } from "./Movies_Grid";
import styles from "./App.module.css";

export function App() {
    return <div>
        <header>
            <h1 className={styles.title}>MontMovies</h1>
        </header>
        <main>
            <MoviesGrid />
        </main>
    </div>;
}