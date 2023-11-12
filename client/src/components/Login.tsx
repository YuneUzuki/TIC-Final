import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie'

export default function Login()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cookie, setCookie] = useCookies(['username'])
    const navigate = useNavigate();
  
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const apicall = await fetch(`http://localhost:776/login/${username}/${password}`, {
        method: 'GET'
      })
      .then (answer => {
        return answer.json();
      })

      if(apicall){setCookie('username', username); navigate("/index", {state: {username: username}})}else{alert("Nome de usuário e/ou Senha incorretos")}
    }
  
    return (
      <>
        <div className='flex flex-col items-center justify-center w-[50%] bg-white font-bold text-gray-800 py-8 px-20 rounded-2xl shadow-md'>
          <h1 className='text-2xl mb-10'>Login</h1>
          <form onSubmit={handleLogin}>
            <div className='space-y-2'>
              <div className='flex flex-col items-start space-y-1'>
                <label htmlFor="username-login">Nome de Usuário</label>
                <input type="text" placeholder='Username' id='username-login' value={username} onChange={e => {setUsername(e.target.value)}} className='rounded-md bg-gray-300 px-2 py-1 focus:outline-none duration-200 focus:bg-gray-500'/>
              </div>
              <div className='flex flex-col items-start space-y-1'>
                <label htmlFor="password-login">Senha</label>
                <input type="password" placeholder='Password' id='password-login' value={password} onChange={e => {setPassword(e.target.value)}} className='rounded-md bg-gray-300 px-2 py-1 focus:outline-none duration-200 focus:bg-gray-500'/>
              </div>
              <button type='submit' className='bg-blue-300 hover:bg-blue-600 hover:text-white py-1 px-6 hover:px-10 rounded-md duration-200'>Enviar</button>
            </div>
          </form>
        </div>
      </>
    )
}