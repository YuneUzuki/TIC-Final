import { useState, useEffect } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import Login from "./Login";

export default function Index()
{
    //Retrieve Username Var//
    const location = useLocation();
    const username = location.state?.username || '';

    const [cookie] = useCookies(['username'])
    if(cookie.username == undefined) return <Login />
    
    //Navigation//
    const navigate = useNavigate();
    function navigateTo(route:string){
        navigate(route, {state: {username: username}})
    }
    function unme(){navigateTo('/consultar/unme')}; function usuarios(){navigateTo('/consultar/usuarios')}; function tipoprod(){navigateTo('/consultar/tipoprod')};
    function prod(){navigateTo('/consultar/prod')}; function forn(){navigateTo('/consultar/forn')}; function fornprod(){navigateTo('/consultar/fornprod')};
    function tipomov(){navigateTo('/consultar/tipomov')}; function mov(){navigateTo('/consultar/mov')};
    
    return(
        <>
            <div className="items-center justify-start flex flex-col space-y-5 w-[80%] h-[20%] p-3 bg-white rounded-2xl shadow-xl">
                <h2 className="w-[80%] bg-blue-400 text-white rounded-t-md text-xl font-bold p-1 shadow-md">Menu de Opções</h2>
                <div className="flex flex-row w-[80%] h-full space-x-2">
                    <button onClick={usuarios} className="flex-1 h-full bg-blue-300 hover:bg-blue-500 hover:shadow-lg duration-200 rounded-bl-xl">Usuários</button>
                    <button onClick={unme} className="flex-1 h-full     bg-red-300 hover:bg-red-500 hover:shadow-lg duration-200 ">Unidade Medida</button>
                    <button onClick={tipoprod} className="flex-1 h-full bg-green-300 hover:bg-green-500 hover:shadow-lg duration-200 ">Tipo de Produto</button>
                    <button onClick={prod} className="flex-1 h-full     bg-yellow-300 hover:bg-yellow-500 hover:shadow-lg duration-200 ">Produto</button>
                    <button onClick={forn} className="flex-1 h-full     bg-fuchsia-300 hover:bg-fuchsia-500 hover:shadow-lg duration-200 ">Fornecedor</button>
                    <button onClick={fornprod} className="flex-1 h-full bg-teal-300 hover:bg-teal-500 hover:shadow-lg duration-200 ">Associação</button>
                    <button onClick={tipomov} className="flex-1 h-full  bg-purple-300 hover:bg-purple-500 hover:shadow-lg duration-200 ">Tipo Movimento</button>
                    <button onClick={mov} className="flex-1 h-full      bg-rose-300 hover:bg-rose-500 hover:shadow-lg duration-200 rounded-br-xl p-1">Movimentação</button>
                </div>
            </div>
            <div className="items-center justify-start flex flex-col w-[80%] h-[7%] p-3 mt-4 bg-white rounded-2xl shadow-xl text-black">
                Selecione uma das opções acima para consultar, registrar, editar ou remover uma entrada na seção correspondente
            </div>
        </>
    )
}