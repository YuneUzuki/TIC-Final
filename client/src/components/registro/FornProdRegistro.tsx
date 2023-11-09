import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom'

interface fornprops {
    id_fornecedor: number,
    pessoa: boolean,
    nome_pessoa: string,
    data_cadastro: string,
    num_cpf: string,
    email: string,
    nome_fantasia: string,
    ramo_atividade: string,
    fone: string,
    sta_possui_nfe: string,
    website: string,
    num_insc_estatual: string,
    prazo_entrega: number
}

interface prodprops {
    id: number,
    cod_material: string,
    desc_prod: string,
    marca_prod: string,
    id_tipo: number,
    sta_ativo: string,
    estoque_min: number,
    estoque_max: number,
    id_unme: number,
    data_incl: string,
    user_cad: string,
    data_cad: string,
}

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
    function retornar(){navigateTo(`/consultar/fornprod`)};
    function backToIndex(){navigate("/index", {state: {username: username}})};

    //Variáveis//
    const [id_fornprod, setatt1] = useState(0)
    const [id_fornecedor, setatt2] = useState(0)
    const [id_produto, setatt3] = useState(0)

    const [fornecedores, setForns] = useState<fornprops[]>([])
    const [produtos, setProds] = useState<prodprops[]>([])

    //Ações//
    const registrarOuEditar = async () => {
        const obj = {
            id_fornprod: id_fornprod,
            id_fornecedor: id_fornecedor,
            id_produto: id_produto,
        }

        if(selected == 0)
        {
            const apicall = await fetch(`http://localhost:776/fornprod`, {
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
            const apicall = await fetch(`http://localhost:776/fornprod/${selected}`, {
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
        if(firstLoad)
        {
            if(selected != 0)
            {
                //Busca API pra preencher os dados do objeto a ser editado
                const findobj = async () => {
                    try {
                        const answer = await fetch(`http://localhost:776/fornprod/${selected}`)
                        const obj = await answer.json();
                        if(answer.ok)
                        {                    
                            setatt1(obj.selected);
                            setatt2(obj.id_fornecedor);
                            setatt3(obj.id_produto);
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

            const fillselect = async () => {
                try {
                    const fornrq = await fetch(`http://localhost:776/fornecedor/all`)
                    const forn = await fornrq.json();

                    const prodrq = await fetch(`http://localhost:776/produto/all`)
                    const prod = await prodrq.json();

                    if(fornrq.ok && prodrq.ok)
                    {
                        setForns(forn)
                        setProds(prod)
                    }
                }
                catch{}
            }
            fillselect();
            setFirstLoad(false);
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
                        <button onClick={unme} className="flex-1 h-full bg-red-300 hover:bg-red-500 duration-200 hover:shadow-lg">Unidade Medida</button>
                        <button onClick={tipoprod} className="flex-1 h-full bg-green-300 hover:bg-green-500 hover:shadow-lg duration-200">Tipo de Produto</button>
                        <button onClick={prod} className="flex-1 h-full bg-yellow-300 hover:bg-yellow-500 hover:shadow-lg duration-200">Produto</button>
                        <button onClick={forn} className="flex-1 h-full bg-fuchsia-300 hover:bg-fuchsia-500 hover:shadow-lg duration-200">Fornecedor</button>
                        <button onClick={fornprod} className="h-[15%] bg-teal-500 shadow-xl font-bold text-xl">Associação</button>
                        <button onClick={tipomov} className="flex-1 h-full bg-purple-300 hover:bg-purple-500 hover:shadow-lg duration-200">Tipo de Movimento</button>
                        <button onClick={mov} className="flex-1 h-full bg-rose-300 hover:bg-rose-500 hover:shadow-lg duration-200 rounded-bl-lg">Movimentação</button>
                    </div>
                    <div className="flex flex-col space-y-4 items-end bg-teal-500 w-full h-full rounded-r-xl p-8">
                        <div className="flex flex-col bg-white w-full h-full rounded-lg overflow-auto p-1">
                            <form className="flex flex-col space-y-4 h-full w-full p-4 overflow-y-auto">
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att2" className="text-black font-bold">Fornecedor</label>
                                    <select id="att2" value={id_fornecedor}
                                    className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 text-black focus:text-white"
                                    onChange={(e) => setatt2(Number(e.target.value))}>
                                        <option value={-1}>Selecione uma opção</option>
                                        {
                                            fornecedores.map((forn) => (
                                                <option key={forn.id_fornecedor} value={forn.id_fornecedor}>{forn.nome_fantasia}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att3" className="text-black font-bold">Produto</label>
                                    <select id="att3" value={id_produto}
                                    className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 text-black focus:text-white"
                                    onChange={(e) => setatt3(Number(e.target.value))}>
                                        <option value={-1}>Selecione uma opção</option>
                                        {
                                            produtos.map((prod) => (
                                                <option key={prod.id} value={prod.id}>{prod.desc_prod}</option>
                                            ))
                                        }
                                    </select>
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