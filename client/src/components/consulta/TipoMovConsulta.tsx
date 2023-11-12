import { useState, useEffect } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import Login from "../Login";

interface objectprops {
    id_tipo_mov: number,
    desc_tipo_mov: string,
    desc_obs: string
}

export default function TipoMovConsulta()
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

    function backToIndex(){navigate("/index", {state: {username: username}})};

    //Ações//
    function registrar(){
        navigateTo(`/editar/tipomov`)
    };
    const remover = async (key: any) => {
        const apicall = await fetch(`http://localhost:776/tipomov/${key}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(answer => {return answer.json()}).catch(error => {alert(`Erro: ${error}`)})
        
        setObjetos(objetos.filter((obj) => obj.id_tipo_mov !== key))
    };
    const editar = (key:any, route:string) => {
        navigate(route, {state: {username: username, selected: key}})
    };

    //Variáveis//
    const [objetos, setObjetos] = useState<objectprops[]>([])

    //Lógica//
    useEffect(() => {
        const getObjetos = async () => {
            try {
                const answer = await fetch(`http://localhost:776/tipomov/all`)
                const objetos = await answer.json();
                if(answer.ok)
                {
                    setObjetos(objetos);
                }
                else
                {
                    alert(`Falha na consulta, tente novamente`)
                }
            }
            catch (error)
            {
                alert(`Erro: ${error}`)
            }
        }
        getObjetos();
    }, [username])

    //Página//
    return(
        <>
            <div className="flex flex-col space-y-2 w-full h-full">
                <div className="flex flex-col items-center justify-center h-[5%] p-2 bg-white text-black font-bold rounded-lg">Usuário atual: {username}</div>
                <div className="flex flex-row space-x-0 w-full max-h-[90%] h-full">
                    <div className="flex flex-col space-y-0 w-[15%] h-full">
                        <button onClick={usuarios} className="flex-1 h-full bg-blue-300 hover:bg-blue-500 hover:shadow-lg duration-200 rounded-tl-lg">Usuarios</button>
                        <button onClick={unme} className="flex-1 h-full bg-red-300 hover:bg-red-500 duration-200 hover:shadow-lg">Unidade Medida</button>
                        <button onClick={tipoprod} className="flex-1 h-full bg-green-300 hover:bg-green-500 hover:shadow-lg duration-200">Tipo de Produto</button>
                        <button onClick={prod} className="flex-1 h-full bg-yellow-300 hover:bg-yellow-500 hover:shadow-lg duration-200">Produto</button>
                        <button onClick={forn} className="flex-1 h-full bg-fuchsia-300 hover:bg-fuchsia-500 hover:shadow-lg duration-200">Fornecedor</button>
                        <button onClick={fornprod} className="flex-1 h-full bg-teal-300 hover:bg-teal-500 hover:shadow-lg duration-200">Associação</button>
                        <button className="h-[15%] bg-purple-500 shadow-xl font-bold text-lg">Tipo de Movimento</button>
                        <button onClick={mov} className="flex-1 h-full bg-rose-300 hover:bg-rose-500 hover:shadow-lg duration-200 rounded-bl-lg">Movimentação</button>
                    </div>
                    <div className="flex flex-col space-y-4 items-end bg-purple-500 w-full rounded-r-xl p-8">
                        <div className="flex flex-col bg-white w-full h-full rounded-lg overflow-auto p-1">
                            <table className="w-full rounded-lg">
                                <thead>
                                    <tr className="flex flex-row">
                                    <th className="flex flex-col items-center justify-center flex-1 border border-gray-600 bg-gray-500 rounded-tl-md">ID</th>
                                        <th className="flex flex-col items-center justify-center flex-1 border border-gray-600 bg-gray-600">Descrição</th>
                                        <th className="flex flex-col items-center justify-center flex-1 border border-gray-600 bg-gray-600">Obervações</th>
                                        <th className="flex flex-col items-center justify-center w-[10%] border border-gray-600 bg-gray-500"></th>
                                        <th className="flex flex-col items-center justify-center w-[10%] border border-gray-600 bg-gray-500 rounded-tr-md"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        objetos.map((obj) => (
                                            <tr className="flex flex-row" key={obj.id_tipo_mov}>
                                                <td className="flex-1 border border-gray-600 bg-gray-400">{obj.id_tipo_mov}</td>
                                                <td className="flex-1 border border-gray-600 bg-gray-500">{obj.desc_tipo_mov}</td>
                                                <td className="flex-1 border border-gray-600 bg-gray-500">{obj.desc_obs}</td>
                                                <td className="w-[10%] border border-gray-600 bg-gray-400 hover:bg-gray-300 duration-200">
                                                    <button onClick={() => editar(obj.id_tipo_mov, '/editar/tipomov')} className="w-full h-full">
                                                        Editar
                                                    </button>
                                                </td>
                                                <td className="w-[10%] border border-gray-600 bg-gray-400 hover:bg-gray-300 duration-200">
                                                    <button onClick={() => remover(obj.id_tipo_mov)} className="w-full h-full">
                                                        Remover
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <button onClick={registrar} className="w-[30%] h-[10%] rounded-lg bg-white hover:bg-gray-600 hover:text-white duration-200 text-black">
                            Registrar Novo
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}