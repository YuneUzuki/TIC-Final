import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';

export default function UnidadesMedidaRegistro()
{
    //Retrieve State Variables//
    const location = useLocation();
    const username = location.state?.username || '';
    const selected = location.state?.selected || 0;

    //Navigation//
    const navigate = useNavigate();
    function navigateTo(route:string){
        navigate(route, {state: {username: username}})
    }
    function unme(){navigateTo('/consultar/unme')}; function usuarios(){navigateTo('/consultar/usuarios')}; function tipoprod(){navigateTo('/consultar/tipoprod')};
    function prod(){navigateTo('/consultar/prod')}; function forn(){navigateTo('/consultar/forn')}; function fornprod(){navigateTo('/consultar/fornprod')};
    function tipomov(){navigateTo('/consultar/tipomov')}; function mov(){navigateTo('/consultar/mov')};
    function retornar(){navigateTo(`/consultar/unme`)};
    function backToIndex(){navigate("/index", {state: {username: username}})};

    //Variáveis//
    const [id_unme, setid_unme] = useState(selected);
    const [des_unidade, setdes_unidade] = useState('');
    const [unid_sigla, setunid_sigla] = useState('')    
    const [user_cad, setuser_cad] = useState('')
    const [data_cad, setdata_cad] = useState('')

    //Ações//
    const registrarOuEditar = async () => {
        const obj = {
            id_unme: id_unme,
            des_unidade: des_unidade,
            unid_sigla: unid_sigla,
            user_cad: user_cad,
            data_cad: data_cad
        }

        if(selected == 0)
        {
            const apicall = await fetch(`http://localhost:776/unme`, {
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
            const apicall = await fetch(`http://localhost:776/unme/${selected}`, {
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
        if(selected != 0 && firstLoad)
        {
            setFirstLoad(false);
            const findobj = async () => {
                try {
                    const answer = await fetch(`http://localhost:776/unme/${selected}`)
                    const obj = await answer.json();
                    if(answer.ok)
                    {                    
                        setid_unme(obj.id_unme);
                        setdes_unidade(obj.des_unidade);
                        setunid_sigla(obj.unid_sigla);
                        setuser_cad(obj.user_cad);
                        setdata_cad(obj.data_cad);
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
            findobj();
        }
    })

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
                    <div className="flex flex-col space-y-4 items-end bg-red-500 w-full h-full rounded-r-xl p-8">
                        <div className="flex flex-col bg-white w-full h-full rounded-lg overflow-auto p-1">
                            <form className="flex flex-col space-y-4 h-full w-full p-4">
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="des_unidade" className="text-black font-bold">Descrição</label>
                                    <input type="text" id="des_unidade" placeholder="exemplo: Kilogramas" value={des_unidade}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setdes_unidade(e.target.value)}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="unid_sigla" className="text-black font-bold">Sigla</label>
                                    <input type="text" id="unid_sigla" placeholder="exemplo: Kg" value={unid_sigla}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setunid_sigla(e.target.value)}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="user_cad" className="text-black font-bold">Cadastrado Por:</label>
                                    <input type="text" id="user_cad" placeholder="Insira o nome do seu usuário aqui!!" value={user_cad}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setuser_cad(e.target.value)}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="data_cad" className="text-black font-bold">Cadastrado Em:</label>
                                    <input type="date" id="data_cad" value={data_cad}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setdata_cad(String(e.target.value))}/>
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