import Loadable from "react-loadable";
import Loading from "../components/loading"

export const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

export const Classify = Loadable({
    loader:()=>import("./classify"),
    loading:Loading
})


export const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})


export const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})


export const Search = Loadable({
    loader:()=>import("./search"),
    loading:Loading
})
