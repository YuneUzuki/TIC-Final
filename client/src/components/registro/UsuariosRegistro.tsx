import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';

export default function Usuarios()
{
    //Retrieve State Variables//
    const location = useLocation();
    const username = location.state?.username || '';
    const selected = location.state?.selected || '';

    //Navigation//
    const navigate = useNavigate();
    function navigateTo(route:string){
        navigate(route, {state: {username: username}})
    }
    function unme(){navigateTo('/consultar/unme')}; function tipoprod(){navigateTo('/consultar/tipoprod')};
    function prod(){navigateTo('/consultar/prod')}; function forn(){navigateTo('/consultar/forn')}; function fornprod(){navigateTo('/consultar/fornprod')};
    function tipomov(){navigateTo('/consultar/tipomov')}; function mov(){navigateTo('/consultar/mov')};
    function retornar(){navigateTo(`/consultar/usuarios`)};
    function backToIndex(){navigate("/index", {state: {username: username}})};

    //Variáveis//
    const [nome_usuario, setNome_usuario] = useState('');
    const [senha_usuario, setSenha_usuario] = useState('');

    //Ações//
    const registrarOuEditar = async () => {
        const obj = {
            username: nome_usuario,
            password: senha_usuario
        }

        if(selected == "Diretora")
        {
            alert(`Não é possível editar este usuário.`)
            return;
        }
        else if(selected == '')
        {
            const apicall = await fetch(`http://localhost:776/login/${nome_usuario}/${senha_usuario}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }).then(answer => {alert(`Inserção feita com suceso`); return answer.json()}).catch(error => {alert(`Erro: ${error}`)})
            return;
        }
        else
        {
            const apicall = await fetch(`http://localhost:776/login/${selected}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(obj)
            }).then(answer => {alert(`Alteração feita com sucesso`); return answer.json()}).catch(error => {alert(`Erro: ${error}}`)})
        }
    }

    //Lógica//
    const [firstLoad, setFirstLoad] = useState(true);
    useEffect(() => {
        if(selected != "" && firstLoad)
        {
            setFirstLoad(false);
            const findUser = async () => {
                try {
                    const answer = await fetch(`http://localhost:776/usuarios/single/${selected}`)
                    const user = await answer.json();
                    if(answer.ok)
                    {
                        setNome_usuario(user.username);
                        setSenha_usuario(user.password);
                    }
                    else
                    {
                        alert(`Falha em trazer informações do objeto`)
                    }
                }
                catch (error)
                {
                    alert(`Erro: ${error}`)
                }
            }
            findUser();
        }
    })

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
                        <div className="flex flex-col space-y-4 items-end bg-blue-500 w-full h-full rounded-r-xl p-8">
                            <div className="flex flex-col bg-white w-full h-full rounded-lg overflow-auto p-1">
                                <form className="flex flex-col space-y-4 h-full w-full p-4">
                                    <div className="flex flex-col space-y-2 items-start w-full">
                                        <label htmlFor="nome_usuario" className="text-black font-bold">Nome do Usuário</label>
                                        <input type="text" id="nome_usuario" placeholder="Username" value={nome_usuario}
                                               className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                               onChange={(e) => setNome_usuario(e.target.value)}/>
                                    </div>
                                    <div className="flex flex-col space-y-2 items-start w-full h-full">
                                        <label htmlFor="senha_usuario" className="text-black font-bold">Senha</label>
                                        <input type="text" id="senha_usuario" placeholder="Username" value={senha_usuario}
                                               className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                               onChange={(e) => setSenha_usuario(e.target.value)}/>
                                    </div>
                                </form>
                            </div>
                            <div className="flex flex-row space-x-4 w-full h-[10%]">
                                <button onClick={registrarOuEditar} className="w-full h-full rounded-lg bg-white hover:bg-gray-600 hover:text-white duration-200 text-black">
                                    Confirmar
                                </button>
                                <button onClick={retornar} className="w-full h-full rounded-lg bg-white hover:bg-gray-600 hover:text-white duration-200 text-black">
                                    Voltar
                                </button>
                            </div>  
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