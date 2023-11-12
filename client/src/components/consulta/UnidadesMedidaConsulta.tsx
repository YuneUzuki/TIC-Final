import { useState, useEffect } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import Login from "../Login";

interface unmeProps {
    id_unme: number,
    des_unidade: string,
    unid_sigla: string,
    user_cad: string,
    data_cad: string
}

export default function UnidadesMedidaConsulta()
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
    function usuarios(){navigateTo('/consultar/usuarios')}; function tipoprod(){navigateTo('/consultar/tipoprod')};
    function prod(){navigateTo('/consultar/prod')}; function forn(){navigateTo('/consultar/forn')}; function fornprod(){navigateTo('/consultar/fornprod')};
    function tipomov(){navigateTo('/consultar/tipomov')}; function mov(){navigateTo('/consultar/mov')};

    function backToIndex(){navigate("/index", {state: {username: username}})};

    //Ações//
    function registrar(){
        navigateTo(`/editar/unme`)
    };
    const remover = async (key: any) => {
        const apicall = await fetch(`http://localhost:776/unme/${key}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(answer => {return answer.json()}).catch(error => {alert(`Erro: ${error}`)})
        
        setUnidadesMedida(unidadesMedida.filter((unme) => unme.id_unme !== key))
    };
    const editar = (key:number, route:string) => {
        navigate(route, {state: {username: username, selected: key}})
    };

    //Variáveis//
    const [unidadesMedida, setUnidadesMedida] = useState<unmeProps[]>([])

    //Lógica//
    useEffect(() => {
        const getObjetos = async () => {
            try {
                const answer = await fetch(`http://localhost:776/unme/all`)
                const objetos = await answer.json();
                if(answer.ok)
                {
                    setUnidadesMedida(objetos);
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
                        <button className="h-[15%] bg-red-500 font-bold shadow-xl text-lg">Unidade Medida</button>
                        <button onClick={tipoprod} className="flex-1 h-full bg-green-300 hover:bg-green-500 hover:shadow-lg duration-200">Tipo de Produto</button>
                        <button onClick={prod} className="flex-1 h-full bg-yellow-300 hover:bg-yellow-500 hover:shadow-lg duration-200">Produto</button>
                        <button onClick={forn} className="flex-1 h-full bg-fuchsia-300 hover:bg-fuchsia-500 hover:shadow-lg duration-200">Fornecedor</button>
                        <button onClick={fornprod} className="flex-1 h-full bg-teal-300 hover:bg-teal-500 hover:shadow-lg duration-200">Associação</button>
                        <button onClick={tipomov} className="flex-1 h-full bg-purple-300 hover:bg-purple-500 hover:shadow-lg duration-200">Tipo de Movimento</button>
                        <button onClick={mov} className="flex-1 h-full bg-rose-300 hover:bg-rose-500 hover:shadow-lg duration-200 rounded-bl-lg">Movimentação</button>
                    </div>
                    <div className="flex flex-col space-y-4 items-end bg-red-500 w-full rounded-r-xl p-8">
                        <div className="flex flex-col bg-white w-full h-full rounded-lg overflow-auto p-1">
                            <table className="w-full rounded-lg">
                                <thead>
                                    <tr className="flex flex-row">
                                        <th className="flex-1 border border-gray-600 bg-gray-500 rounded-tl-md">ID</th>
                                        <th className="flex-1 border border-gray-600 bg-gray-600">Descrição</th>
                                        <th className="flex-1 border border-gray-600 bg-gray-600">Sigla</th>
                                        <th className="flex-1 border border-gray-600 bg-gray-600">Cadastrado por:</th>
                                        <th className="flex-1 border border-gray-600 bg-gray-600">Cadastrado em:</th>
                                        <th className="w-[10%] border border-gray-600 bg-gray-500"></th>
                                        <th className="w-[10%] border border-gray-600 bg-gray-500 rounded-tr-md"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        unidadesMedida.map((objeto) => (
                                            <tr className="flex flex-row" key={objeto.id_unme}>
                                                <td className="flex-1 border border-gray-600 bg-gray-400">{objeto.id_unme}</td>
                                                <td className="flex-1 border border-gray-600 bg-gray-500">{objeto.des_unidade}</td>
                                                <td className="flex-1 border border-gray-600 bg-gray-500">{objeto.unid_sigla}</td>
                                                <td className="flex-1 border border-gray-600 bg-gray-500">{objeto.user_cad}</td>
                                                <td className="flex-1 border border-gray-600 bg-gray-500">{objeto.data_cad}</td>
                                                <td className="w-[10%] border border-gray-600 bg-gray-400 hover:bg-gray-300 duration-200">
                                                    <button onClick={() => editar(objeto.id_unme, '/editar/unme')} className="w-full h-full">
                                                        Editar
                                                    </button>
                                                </td>
                                                <td className="w-[10%] border border-gray-600 bg-gray-400 hover:bg-gray-300 duration-200">
                                                    <button onClick={() => remover(objeto.id_unme)} className="w-full h-full">
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