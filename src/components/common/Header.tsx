import { UserIcon, ArrowRightOnRectangleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import logoCore from "../../assets/images/logo-cloud-compare.png"

function Header() {
  return (
    <>
      <div className="w-full h-fit flex justify-center px-6 bg-white-p border-b border-st-20">
        <div className="relative w-full max-w-[1400px] h-16 flex items-center justify-between">
          <div><img className="w-20" src={logoCore} /></div>
          <div className="input-form w-64">
            <input className="hidden md:block" type="text" placeholder="Buscar Proyecto"/>
          </div>
          <div className="flex items-center space-x-4">
            <button className="md:hidden b-small">
              <div><MagnifyingGlassIcon></MagnifyingGlassIcon></div>
            </button>
            <button className="b-small">
              <div><UserIcon></UserIcon></div>
              <span className="hidden md:inline">Perfil</span>
            </button>
            <button className="b-small">
            <div><ArrowRightOnRectangleIcon></ArrowRightOnRectangleIcon></div>
              <span className="hidden md:inline">Cerrar Sesión</span>
            </button>
          </div>

          <div className="hidden absolute flex space-x-2 items-center top-16 right-0 p-4 w-full border rounded-b-lg border-st-20 bg-white-p drop-shadow-lg">
            <input className="input-ghost w-full" type="text" placeholder="Buscar Proyecto"/>
            <button className="b-small">
              <span>Buscar</span>
              <div><MagnifyingGlassIcon></MagnifyingGlassIcon></div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
