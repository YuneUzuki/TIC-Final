import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';

interface UsuarioProps {
    username: string,
    password: string
}

export default function UsuariosConsulta()
{
    //Retrieve Username Var//
    const location = useLocation();
    const username = location.state?.username || '';

    //Navigation//
    const navigate = useNavigate();
    function navigateTo(route:string){
        navigate(route, {state: {username: username}})
    }
    function unme(){navigateTo('/consultar/unme')}; function tipoprod(){navigateTo('/consultar/tipoprod')};
    function prod(){navigateTo('/consultar/prod')}; function forn(){navigateTo('/consultar/forn')}; function fornprod(){navigateTo('/consultar/fornprod')};
    function tipomov(){navigateTo('/consultar/tipomov')}; function mov(){navigateTo('/consultar/mov')};

    function backToIndex(){navigate("/index", {state: {username: username}})};

    //Ações//
    function registrar(){
        navigateTo(`/editar/usuarios`)
    };
    const remover = async (key: any) => {
        if(username == key)
        {
            alert(`A ação não pode ser concluída pois está tentando apagar o usuário ao qual está logado ou um usuário com permissões maiores que a sua`)
            return;
        }
        else
        {
            const apicall = await fetch(`http://localhost:776/login/${key}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(answer => {return answer.json()}).catch(error => {alert(`Erro: ${error}`)})

            setUsuarios(usuarios.filter((user) => user.username !== key))
        }
    };
    const editar = (key:any, route:string) => {
        navigate(route, {state: {username: username, selected: key}})
    };

    //Variáveis//
    const [usuarios, setUsuarios] = useState<UsuarioProps[]>([])

    //Lógica//
    useEffect(() => {
        const getUsuarios = async () => {
            try {
                const answer = await fetch(`http://localhost:776/usuarios/${username}`)
                const usuarios = await answer.json();
                if(answer.ok)
                {
                    setUsuarios(usuarios);
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
        getUsuarios();
    }, [username])

    //Página//
    if(username == "Diretora")
    {
        return(
            <>
                <div className="flex flex-col space-y-2 w-full h-full">
                    <div className="flex flex-col items-center justify-center h-[5%] p-2 bg-white text-black font-bold rounded-lg">Usuário atual: {username}</div>
                    <div className="flex flex-row space-x-0 w-full max-h-[90%] h-full">
                        <div className="flex flex-col space-y-0 w-[15%] h-full">
                            <button className="h-[15%] bg-blue-500 shadow-xl duration-200 rounded-tl-lg font-bold text-xl">Usuarios</button>
                            <button onClick={unme} className="flex-1 h-full bg-red-300 hover:bg-red-500 hover:shadow-lg duration-200">Unidade Medida</button>
                            <button onClick={tipoprod} className="flex-1 h-full bg-green-300 hover:bg-green-500 hover:shadow-lg duration-200">Tipo de Produto</button>
                            <button onClick={prod} className="flex-1 h-full bg-yellow-300 hover:bg-yellow-500 hover:shadow-lg duration-200">Produto</button>
                            <button onClick={forn} className="flex-1 h-full bg-fuchsia-300 hover:bg-fuchsia-500 hover:shadow-lg duration-200">Fornecedor</button>
                            <button onClick={fornprod} className="flex-1 h-full bg-teal-300 hover:bg-teal-500 hover:shadow-lg duration-200">Associação</button>
                            <button onClick={tipomov} className="flex-1 h-full bg-purple-300 hover:bg-purple-500 hover:shadow-lg duration-200">Tipo de Movimento</button>
                            <button onClick={mov} className="flex-1 h-full bg-rose-300 hover:bg-rose-500 hover:shadow-lg duration-200 rounded-bl-lg">Movimentação</button>
                        </div>
                        <div className="flex flex-col space-y-4 items-end bg-blue-500 w-full rounded-r-xl p-8">
                            <div className="flex flex-col bg-white w-full h-full rounded-lg overflow-auto p-1">
                                <table className="w-full rounded-lg">
                                    <thead>
                                        <tr className="flex flex-row">
                                            <th className="flex-1 border border-gray-600 bg-gray-500 rounded-tl-md">Nome de Usuário</th>
                                            <th className="flex-1 border border-gray-600 bg-gray-600">Senha</th>
                                            <th className="w-[10%] border border-gray-600 bg-gray-500"></th>
                                            <th className="w-[10%] border border-gray-600 bg-gray-500 rounded-tr-md"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            usuarios.map((user) => (
                                                <tr className="flex flex-row" key={user.username}>
                                                    <td className="flex-1 border border-gray-600 bg-gray-400">{user.username}</td>
                                                    <td className="flex-1 border border-gray-600 bg-gray-500">{user.password}</td>
                                                    <td className="w-[10%] border border-gray-600 bg-gray-400 hover:bg-gray-300 duration-200">
                                                        <button onClick={() => editar(user.username, '/editar/usuarios')} className="w-full h-full">
                                                            Editar
                                                        </button>
                                                    </td>
                                                    <td className="w-[10%] border border-gray-600 bg-gray-400 hover:bg-gray-300 duration-200">
                                                        <button onClick={() => remover(user.username)} className="w-full h-full">
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
    else
    {
        return(
            <>
                <div className="flex flex-col space-y-4 items-center justify-center">
                    <h1 className="text-red-500">Sem permissão para ver essa página</h1>
                    <button onClick={backToIndex} className="flex flex-col items-center justify-center h-10 w-64 bg-white rounded-md hover:bg-gray-600 hover:text-white text-black p-4 duration-200"><h1 className="text-lg">Voltar</h1></button>
                </div>
            </>
        );
    }
}