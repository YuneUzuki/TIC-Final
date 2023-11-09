import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom'

interface unmeprops {
    id_unme: number,
    des_unidade: string,
    unid_sigla: string,
    user_cad: string,
    data_cad: string
}

interface tipoprodprops {
    id_tipo: number,
    segmento: string,
    sta_controla_val: string,
    sta_mov_estoque: string,
    ueps_peps: string,
    user_cad: string,
    data_cad: string
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
    function retornar(){navigateTo(`/consultar/prod`)};
    function backToIndex(){navigate("/index", {state: {username: username}})};

    //Variáveis//
    const [id, setatt1] = useState(selected)
    const [cod_material, setatt2] = useState('')
    const [desc_prod, setatt3] = useState('')    
    const [marca_prod, setatt4] = useState('')
    const [id_tipo, setatt5] = useState(0)
    const [sta_ativo, setatt6] = useState('')
    const [estoque_min, setatt7] = useState(0)
    const [estoque_max, setatt8] = useState(0)
    const [id_unme, setatt9] = useState(0)
    const [user_cad, setatt10] = useState('')
    const [data_cad, setatt11] = useState('')

        //variavel redundante
        const [data_incl, setdata_incl] = useState('')

    const [unidadesMedida, setUnme] = useState<unmeprops[]>([])
    const [tiposProd, setTipo] = useState<tipoprodprops[]>([])

    //Ações//
    const registrarOuEditar = async () => {
        const obj = {
            cod_material: cod_material,
            desc_prod: desc_prod,
            marca_prod: marca_prod,
            id_tipo: id_tipo,
            sta_ativo: sta_ativo,
            estoque_min: estoque_min,
            estoque_max: estoque_max,
            id_unme: id_unme,
            user_cad: user_cad,
            data_cad: data_cad,
            data_incl: data_incl
        }

        if(selected == 0)
        {
            const apicall = await fetch(`http://localhost:776/produto`, {
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
            const apicall = await fetch(`http://localhost:776/produto/${selected}`, {
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
                        const answer = await fetch(`http://localhost:776/produto/${selected}`)
                        const obj = await answer.json();
                        if(answer.ok)
                        {                    
                            setatt1(obj.id);
                            setatt2(obj.cod_material);
                            setatt3(obj.desc_prod);
                            setatt4(obj.marca_prod);
                            setatt5(obj.id_tipo);
                            setatt6(obj.sta_ativo);
                            setatt7(obj.estoque_min);
                            setatt8(obj.estoque_max);
                            setatt9(obj.id_unme);
                            setatt10(obj.user_cad);
                            setatt11(obj.data_cad);
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
                    const unmerq = await fetch(`http://localhost:776/unme/all`)
                    const unme = await unmerq.json();

                    const tipoprodrq = await fetch(`http://localhost:776/tipoprod/all`)
                    const tipoprod = await tipoprodrq.json();

                    if(unmerq.ok && tipoprodrq.ok)
                    {
                        setUnme(unme)
                        setTipo(tipoprod)
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
                        <button className="h-[15%] bg-yellow-500 shadow-xl font-bold text-xl">Produto</button>
                        <button onClick={forn} className="flex-1 h-full bg-fuchsia-300 hover:bg-fuchsia-500 hover:shadow-lg duration-200">Fornecedor</button>
                        <button onClick={fornprod} className="flex-1 h-full bg-teal-300 hover:bg-teal-500 hover:shadow-lg duration-200">Associação</button>
                        <button onClick={tipomov} className="flex-1 h-full bg-purple-300 hover:bg-purple-500 hover:shadow-lg duration-200">Tipo de Movimento</button>
                        <button onClick={mov} className="flex-1 h-full bg-rose-300 hover:bg-rose-500 hover:shadow-lg duration-200 rounded-bl-lg">Movimentação</button>
                    </div>
                    <div className="flex flex-col space-y-4 items-end bg-yellow-500 w-full h-full rounded-r-xl p-8">
                        <div className="flex flex-col bg-white w-full h-full rounded-lg overflow-auto p-1">
                            <form className="flex flex-col space-y-4 h-full w-full p-4 overflow-y-auto">
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att2" className="text-black font-bold">Código do Material</label>
                                    <input type="text" id="att2" placeholder="exemplo: AL001" value={cod_material}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt2(e.target.value)}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att3" className="text-black font-bold">Descrição do Produto</label>
                                    <input type="text" id="att3" placeholder="exemplo: Maçã" value={desc_prod}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt3(e.target.value)}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att4" className="text-black font-bold">Marca do Produto</label>
                                    <input type="text" id="att4" placeholder="exemplo: Quitanda" value={marca_prod}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt4(e.target.value)}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att5" className="text-black font-bold">Tipo do Produto</label>
                                    <select id="att5" value={id_tipo}
                                    className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 text-black focus:text-white"
                                    onChange={(e) => setatt5(Number(e.target.value))}>
                                        <option value={-1}>Selecione uma opção</option>
                                        {
                                            tiposProd.map((tipo) => (
                                                <option key={tipo.id_tipo} value={tipo.id_tipo}>{tipo.segmento}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att6" className="text-black font-bold">Registro Ativo?</label>
                                    <select id="att6" value={sta_ativo}
                                    className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 text-black focus:text-white" 
                                    onChange={(e) => setatt6(e.target.value)}>
                                        <option value="Não Definido">Selecione uma Opção</option>
                                        <option value="sim">Sim</option>
                                        <option value="não">Não</option>
                                    </select>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att7" className="text-black font-bold">Estoque Mínimo</label>
                                    <input type="number" id="att7" value={estoque_min} min={0}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt7(Number(e.target.value))}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att8" className="text-black font-bold">Estoque Máximo</label>
                                    <input type="number" id="att8" value={estoque_max} min={0}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt8(Number(e.target.value))}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att9" className="text-black font-bold">Unidade de Medida</label>
                                    <select id="att9" value={id_unme}
                                    className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 text-black focus:text-white"
                                    onChange={(e) => setatt9(Number(e.target.value))}>
                                        <option value={-1}>Selecione uma opção</option>
                                        {
                                            unidadesMedida.map((unidade) => (
                                                <option key={unidade.id_unme} value={unidade.id_unme}>{unidade.des_unidade}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att10" className="text-black font-bold">Cadastrado Por:</label>
                                    <input type="text" id="att10" placeholder="Insira o nome do seu usuário aqui!!" value={user_cad}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt10(e.target.value)}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att11" className="text-black font-bold">Cadastrado Em:</label>
                                    <input type="date" id="att11" value={data_cad}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt11(String(e.target.value))}/>
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