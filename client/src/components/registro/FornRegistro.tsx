import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom'

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
    function retornar(){navigateTo(`/consultar/forn`)};
    function backToIndex(){navigate("/index", {state: {username: username}})};

    //Variáveis//
    const [id_fornecedor, setatt1] = useState(selected)
    const [nome_pessoa, setatt2] = useState('')
    const [num_cpf, setatt3] = useState('')    
    const [email, setatt4] = useState('')
    const [nome_fantasia, setatt5] = useState('')
    const [ramo_atividade, setatt6] = useState('')
    const [fone, setatt7] = useState('')
    const [sta_possui_nfe, setatt8] = useState('')
    const [website, setatt9] = useState('')
    const [num_insc_estatual, setatt10] = useState('')
    const [prazo_entrega, setatt11] = useState(0)
    const [data_cadastro, setatt12] = useState('')

        //variáveis redundantes
        const [pessoa, setpessoa] = useState(true)

    //Ações//
    const registrarOuEditar = async () => {
        const obj = {
            nome_pessoa: nome_pessoa, 
            num_cpf: num_cpf, 
            email: email, 
            nome_fantasia: nome_fantasia, 
            ramo_atividade: ramo_atividade, 
            fone: fone, 
            sta_possui_nfe: sta_possui_nfe, 
            website: website, 
            num_insc_estatual: num_insc_estatual, 
            prazo_entrega: prazo_entrega, 
            data_cadastro: data_cadastro,
            pessoa: pessoa
        }

        if(selected == 0)
        {
            const apicall = await fetch(`http://localhost:776/fornecedor`, {
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
            const apicall = await fetch(`http://localhost:776/fornecedor/${selected}`, {
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
                    const answer = await fetch(`http://localhost:776/fornecedor/${selected}`)
                    const obj = await answer.json();
                    if(answer.ok)
                    {                    
                        setatt1(obj.id_fornecedor)
                        setatt2(obj.nome_pessoa)
                        setatt3(obj.num_cpf)
                        setatt4(obj.email)
                        setatt5(obj.nome_fantasia)
                        setatt6(obj.ramo_atividade)
                        setatt7(obj.fone)
                        setatt8(obj.sta_possui_nfe)
                        setatt9(obj.website)
                        setatt10(obj.num_insc_estatual)
                        setatt11(obj.prazo_entrega)
                        setatt12(obj.data_cadastro)
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
                        <button onClick={unme} className="flex-1 h-full bg-red-300 hover:bg-red-500 duration-200 hover:shadow-lg">Unidade Medida</button>
                        <button onClick={tipoprod} className="flex-1 h-full bg-green-300 hover:bg-green-500 hover:shadow-lg duration-200">Tipo de Produto</button>
                        <button onClick={prod} className="flex-1 h-full bg-yellow-300 hover:bg-yellow-500 hover:shadow-lg duration-200">Produto</button>
                        <button className="h-[15%] bg-fuchsia-500 shadow-xl font-bold text-xl">Fornecedor</button>
                        <button onClick={fornprod} className="flex-1 h-full bg-teal-300 hover:bg-teal-500 hover:shadow-lg duration-200">Associação</button>
                        <button onClick={tipomov} className="flex-1 h-full bg-purple-300 hover:bg-purple-500 hover:shadow-lg duration-200">Tipo de Movimento</button>
                        <button onClick={mov} className="flex-1 h-full bg-rose-300 hover:bg-rose-500 hover:shadow-lg duration-200 rounded-bl-lg">Movimentação</button>
                    </div>
                    <div className="flex flex-col space-y-4 items-end bg-fuchsia-500 w-full h-full rounded-r-xl p-8">
                        <div className="flex flex-col bg-white w-full h-full rounded-lg overflow-auto p-1">
                            <form className="flex flex-col space-y-4 h-full w-full p-4 overflow-y-auto">
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att2" className="text-black font-bold">Nome do Responsável</label>
                                    <input type="text" id="att2" placeholder="Insira o nome do responsável pelo fornecedor, e.g: CEO" value={nome_pessoa}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt2(e.target.value)}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att3" className="text-black font-bold">CPF</label>
                                    <input type="text" id="att3" placeholder="exemplo: 000.000.000-00" value={num_cpf}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt3(e.target.value)}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att4" className="text-black font-bold">E-Mail</label>
                                    <input type="text" id="att4" placeholder="exemplo: email@example.com" value={email}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt4(e.target.value)}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att5" className="text-black font-bold">Nome Fantasia</label>
                                    <input type="text" id="att5" placeholder="Insira o nome fantasia do fornecedor aqui" value={nome_fantasia}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt5(String(e.target.value))}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att6" className="text-black font-bold">Ramo de Atividade</label>
                                    <input type="text" id="att6" placeholder="exemplo: Comércio de Farmaceuticos" value={ramo_atividade}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt6(String(e.target.value))}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att7" className="text-black font-bold">Telefone</label>
                                    <input type="text" id="att7" value={fone} placeholder="exemplo: +55 (16) 98157-8370"
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt7(String(e.target.value))}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att8" className="text-black font-bold">Possui NFE?</label>
                                    <select id="att8" value={sta_possui_nfe}
                                    className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 text-black focus:text-white" 
                                    onChange={(e) => setatt8(e.target.value)}>
                                        <option value="Não Definido">Selecione uma Opção</option>
                                        <option value="sim">Sim</option>
                                        <option value="não">Não</option>
                                    </select>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att9" className="text-black font-bold">Website</label>
                                    <input type="text" id="att9" value={website} placeholder="exemplo: www.nomefantasia.com"
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt9(String(e.target.value))}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att10" className="text-black font-bold">Número de Inscrição Estatual</label>
                                    <input type="text" id="att10" value={num_insc_estatual} placeholder="Insira aqui o número da inscrição estatual do fornecedor"
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt10(String(e.target.value))}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att11" className="text-black font-bold">Prazo de Entrega (Dias)</label>
                                    <input type="number" id="att11" value={prazo_entrega} min={0}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt11(Number(e.target.value))}/>
                                </div>
                                <div className="flex flex-col space-y-2 items-start w-full h-full">
                                    <label htmlFor="att12" className="text-black font-bold">Cadastrado Em:</label>
                                    <input type="date" id="att12" value={data_cadastro}
                                           className="w-full rounded-md bg-gray-300 focus:outline-none focus:bg-gray-500 duration-200 p-2 placeholder:font-bold text-black focus:text-white" 
                                           onChange={(e) => setatt12(String(e.target.value))}/>
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