import Filters from "./Filters"
import Header from "./Header";
import Cards from "./Cards";

export function Home(){
    return(
        <div>
            <Header></Header>
            <h1>Home</h1>
            <h3> This is another header</h3>
            <input name='Search'></input>
            
            <Filters />
            <Cards></Cards>
        </div>
    )
}
