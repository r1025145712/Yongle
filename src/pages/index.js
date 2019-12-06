import Loadable from "react-loadable";
import Loading from "../components/loading"

export const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

export const Category = Loadable({
    loader:()=>import("./category"),
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

export const Opera = Loadable({
    loader:()=>import("./opera"),
    loading:Loading
})

export const Register = Loadable({
    loader:()=>import("./register"),
    loading:Loading
})

export const Admin = Loadable({
    loader:()=>import("./admin"),
    loading:Loading
})
