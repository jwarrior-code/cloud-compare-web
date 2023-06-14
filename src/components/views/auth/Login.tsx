import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import logoCore from "../../../assets/images/logo-cloud-compare.png"

function Login() {
  return (
    <>
      <div className='relative flex items-center justify-center w-full min-h-full p-8'>
        <img className='z-40 absolute object-cover object-center top-0 left-0 w-full h-full' src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"/>

        <div className="z-50 max-h-full overflow-y-auto bg-white-p p-12 md:p-20 rounded-lg space-y-8 flex flex-col h-fit w-full max-w-[640px]">
            <div className='w-full flex items-center justify-between'>
                <span className='t-title text-st-90'>Inicio de Sesión</span>
                <div>
                    <img className="w-20" src={logoCore}/>
                </div>
            </div>
            <form className="w-full grid md:grid-cols-2 gap-4">
                <div className="input-form w-full">
                    <label>Correo Electrónico</label>
                    <input type="email" />
                    {/*<div className='warning'>
                        <div><ExclamationTriangleIcon></ExclamationTriangleIcon></div>
                        <span>Campo requerido</span>
                    </div>*/}
                </div>
                <div className="input-form w-full">
                    <label>Contraseña</label>
                    <input type="password" />
                    {/*<div className='warning'>
                        <div><ExclamationTriangleIcon></ExclamationTriangleIcon></div>
                        <span>Campo requerido</span>
                    </div>*/}
                </div>
                <div className="text-right md:col-span-2">
                    <a className="underline t-label text-st-50" href="">Recuperar contraseña</a>
                </div>
            </form>
            <div className="flex w-full items-center space-x-4">
                <button className="flex-1 md:flex-none b-secondary">Registrar</button>
                <button className="flex-1 md:flex-none b-primary">Ingresar</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
