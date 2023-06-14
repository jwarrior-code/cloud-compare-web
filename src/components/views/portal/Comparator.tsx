import { 
    MapIcon,
    ChevronUpIcon,
    ChevronLeftIcon,
    PlusIcon,
    ClockIcon,
    Squares2X2Icon,
    PencilIcon,
    TrashIcon,
    QueueListIcon,
    XMarkIcon
 } from "@heroicons/react/24/outline"
import iconVM from "../../../assets/images/icon-virtual-machine.png"
import iconS from "../../../assets/images/icon-storage.png"
import iconDB from "../../../assets/images/icon-data-base.png"
import Header from "../../common/Header"

function Comparator() {
  return (
    <>
      <div className="w-full flex flex-col items-center h-full">
        <Header></Header>
        <div className="p-6 space-y-8 w-full max-w-[1400px] flex-1 flex flex-col">
            <div className="flex flex-col space-y-4 w-full flex-1">
                <div className="w-full h-fit">
                    <div className="flex items-center space-x-2 w-full md:w-fit h-fit whitespace-nowrap">
                        <button className="b-small">
                            <ChevronLeftIcon className="w-5 h-5"></ChevronLeftIcon>
                            <span>Volver</span>
                        </button>
                        <div className="rounded-sm w-2 h-6 bg-c"></div>
                        <span className="hidden t-body-b text-c">Nuevo Proyecto</span>
                        <input className="input-only flex-1 md:w-24" type="text" placeholder="Nuevo Proyecto"/>
                        <div className="border-l border-st-40 h-4"></div>

                        <div className="md:hidden relative">
                            <button className="b-small">
                                <span>Regiones</span>
                                <div><MapIcon></MapIcon></div>
                            </button>
                            <div className="hidden absolute flex space-x-2 items-center top-8 right-0 p-4 w-80 border rounded-b-lg border-st-20 bg-white-p drop-shadow-lg">
                                <div className="grid grid-cols-2 gap-4 w-full">
                                    <div className="input-form">
                                        <label>Región AWS</label>
                                        <select></select>
                                    </div>
                                    <div className="input-form">
                                        <label>Región Azure</label>
                                        <select></select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <span className="hidden md:block t-body text-c">Región AWS:</span>
                        <select className="hidden md:block input-only w-24">
                            <option value="Colombia">Colombia</option>
                        </select>
                        <span className="hidden md:block t-body text-c">Región Azure:</span>
                        <select className="hidden md:block input-only w-24">
                            <option value="Colombia">Colombia</option>
                        </select>
                    </div>
                </div>
                <div className="md:hidden h-12 flex items-center space-x-2 rounded-full bg-white-p border border-st-20 p-2">
                    <button className="flex-1 b-tab-on">Formulario</button>
                    <button className="flex-1 b-tab">Registros</button>
                    <button className="flex-1 b-tab">Historial</button>
                </div>
                <div className="w-full flex-1 flex gap-8">
                    <div className="w-full md:max-w-[320px] lg:max-w-[480px] overflow-y-auto h-screen-compare-sm md:h-screen-compare space-y-4 p-8 bg-white-p border border-st-20 rounded-lg">
                        <div className="flex flex-col space-y-4 w-full">
                            <div className="flex space-x-2 items-center">
                                <div><img src={iconVM} /></div>
                                <span className="text-st-90 t-body flex-1">Maquina Virtual</span>
                                <div><ChevronUpIcon className="w-5 h-5"></ChevronUpIcon></div>
                            </div>
                            <form className="grid grid-cols-2 gap-4">
                                <div className="input-form col-span-2">
                                    <label>Nombre</label>
                                    <input type="text" />
                                </div>
                                <div className="input-form">
                                    <label>Memoria (GB)</label>
                                    <input type="number" />
                                </div>
                                <div className="input-form">
                                    <label>Procesador</label>
                                    <select name="" id=""></select>
                                </div>
                                <div className="input-form col-span-2">
                                    <label>Sistema Operativo</label>
                                    <select name="" id=""></select>
                                </div>
                            </form>
                            <button className="b-small-rounded-full">
                                <div><PlusIcon></PlusIcon></div>
                                <span>Agregar</span>
                            </button>
                            <div className="flex items-center space-x-2">
                                <button className="b-small-rounded-full">
                                    <span>Cancelar</span>
                                </button>
                                <button className="b-small-rounded-full">
                                    <span>Aplicar cambios</span>
                                </button>
                            </div>
                        </div>
                        <div className="w-full border-t border-st-20"></div>
                        <div className="flex flex-col space-y-4 w-full">
                            <div className="flex space-x-2 items-center">
                                <div><img src={iconS} /></div>
                                <span className="text-st-90 t-body flex-1">Almacenamiento</span>
                                <div><ChevronUpIcon className="w-5 h-5"></ChevronUpIcon></div>
                            </div>
                            <form className="grid grid-cols-2 gap-4">
                                <div className="input-form col-span-2">
                                    <label>Nombre</label>
                                    <input type="text" />
                                </div>
                                <div className="input-form">
                                    <label>Tipo</label>
                                    <select name="" id=""></select>
                                </div>
                                <div className="input-form">
                                    <label>Tecnología del disco</label>
                                    <select name="" id=""></select>
                                </div>
                                <div className="input-form">
                                    <label>Tamaño (GB)</label>
                                    <input type="number" name="" id="" />
                                </div>
                            </form>
                            <button className="b-small-rounded-full">
                                <div><PlusIcon></PlusIcon></div>
                                <span>Agregar</span>
                            </button>
                            <div className="flex items-center space-x-2">
                                <button className="b-small-rounded-full">
                                    <span>Cancelar</span>
                                </button>
                                <button className="b-small-rounded-full">
                                    <span>Aplicar cambios</span>
                                </button>
                            </div>
                        </div>
                        <div className="w-full border-t border-st-20"></div>
                        <div className="flex flex-col space-y-4 w-full">
                            <div className="flex space-x-2 items-center">
                                <div><img src={iconDB} /></div>
                                <span className="text-st-90 t-body flex-1">Base de Datos</span>
                                <div><ChevronUpIcon className="w-5 h-5"></ChevronUpIcon></div>
                            </div>
                            <form className="grid grid-cols-2 gap-4">
                                <div className="input-form col-span-2">
                                    <label>Nombre</label>
                                    <input type="text" />
                                </div>
                                <div className="input-form">
                                    <label>Memoria (GB)</label>
                                    <input type="number" />
                                </div>
                                <div className="input-form">
                                    <label>Procesador</label>
                                    <select name="" id=""></select>
                                </div>
                                <div className="input-form col-span-2">
                                    <label>Motor</label>
                                    <select name="" id=""></select>
                                </div>
                            </form>
                            <button className="b-small-rounded-full">
                                <div><PlusIcon></PlusIcon></div>
                                <span>Agregar</span>
                            </button>
                            <div className="flex items-center space-x-2">
                                <button className="b-small-rounded-full">
                                    <span>Cancelar</span>
                                </button>
                                <button className="b-small-rounded-full">
                                    <span>Aplicar cambios</span>
                                </button>
                            </div>
                        </div>
                        <div className="w-full border-t border-st-20"></div>
                        <button className="b-secondary">Guardar Cambios</button>
                    </div>
                    <div className="overflow-x-auto flex-1 h-screen-compare-sm md:h-screen-compare space-y-4 flex flex-col">
                        <div className="flex items-center justify-between space-x-2">
                            <div className="flex items-center space-x-2">
                                <button className="b-secondary icon-warning">
                                    <span>Guardar Cambios</span>
                                    <div><ClockIcon></ClockIcon></div>
                                </button>
                                <button className="b-secondary">
                                    <span className="hidden md:inline">Ver historial de comparación</span>
                                    <div><QueueListIcon></QueueListIcon></div>
                                </button>
                            </div>
                            <button className="b-primary">
                                <span>Comparar</span>
                                <div><Squares2X2Icon></Squares2X2Icon></div>
                            </button>
                        </div>
                        <div className="w-fit overflow-y-auto md:w-full h-fit md:max-h-full space-y-4 p-8 bg-white-p border border-st-20 rounded">
                            <table className="table-cebra">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Producto</th>
                                        <th>Especificaciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <button className="b-small">
                                                    <div><PencilIcon></PencilIcon></div>
                                                </button>
                                                <button className="b-small icon-error">
                                                    <div><TrashIcon></TrashIcon></div>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <div><img src={iconVM} /></div>
                                                <span>Maquina virtual 001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-1 flex-row md:flex-wrap">
                                                <div className="b-small">8 GB</div>
                                                <div className="b-small">Intel Core i9</div>
                                                <div className="b-small">Windows 10</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <button className="b-small">
                                                    <div><PencilIcon></PencilIcon></div>
                                                </button>
                                                <button className="b-small icon-error">
                                                    <div><TrashIcon></TrashIcon></div>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <div><img src={iconS} /></div>
                                                <span>Almacenamiento 001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-1 flex-row md:flex-wrap">
                                                <div className="b-small">Bloque (SSD)</div>
                                                <div className="b-small">200 GB</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <button className="b-small">
                                                    <div><PencilIcon></PencilIcon></div>
                                                </button>
                                                <button className="b-small icon-error">
                                                    <div><TrashIcon></TrashIcon></div>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <div><img src={iconDB} /></div>
                                                <span>Base de datos 001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-1 flex-row md:flex-wrap">
                                                <div className="b-small">32 GB</div>
                                                <div className="b-small">Intel Core i9</div>
                                                <div className="b-small">Postgresql</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <button className="b-small">
                                                    <div><PencilIcon></PencilIcon></div>
                                                </button>
                                                <button className="b-small icon-error">
                                                    <div><TrashIcon></TrashIcon></div>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <div><img src={iconVM} /></div>
                                                <span>Maquina virtual 001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-1 flex-row md:flex-wrap">
                                                <div className="b-small">8 GB</div>
                                                <div className="b-small">Intel Core i9</div>
                                                <div className="b-small">Windows 10</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <button className="b-small">
                                                    <div><PencilIcon></PencilIcon></div>
                                                </button>
                                                <button className="b-small icon-error">
                                                    <div><TrashIcon></TrashIcon></div>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <div><img src={iconS} /></div>
                                                <span>Almacenamiento 001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-1 flex-row flex-wrap">
                                                <div className="b-small">Bloque (SSD)</div>
                                                <div className="b-small">200 GB</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <button className="b-small">
                                                    <div><PencilIcon></PencilIcon></div>
                                                </button>
                                                <button className="b-small icon-error">
                                                    <div><TrashIcon></TrashIcon></div>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <div><img src={iconDB} /></div>
                                                <span>Base de datos 001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-1 flex-row flex-wrap">
                                                <div className="b-small">32 GB</div>
                                                <div className="b-small">Intel Core i9</div>
                                                <div className="b-small">Postgresql</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <button className="b-small">
                                                    <div><PencilIcon></PencilIcon></div>
                                                </button>
                                                <button className="b-small icon-error">
                                                    <div><TrashIcon></TrashIcon></div>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <div><img src={iconVM} /></div>
                                                <span>Maquina virtual 001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-1 flex-row flex-wrap">
                                                <div className="b-small">8 GB</div>
                                                <div className="b-small">Intel Core i9</div>
                                                <div className="b-small">Windows 10</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <button className="b-small">
                                                    <div><PencilIcon></PencilIcon></div>
                                                </button>
                                                <button className="b-small icon-error">
                                                    <div><TrashIcon></TrashIcon></div>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <div><img src={iconS} /></div>
                                                <span>Almacenamiento 001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-1 flex-row flex-wrap">
                                                <div className="b-small">Bloque (SSD)</div>
                                                <div className="b-small">200 GB</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <button className="b-small">
                                                    <div><PencilIcon></PencilIcon></div>
                                                </button>
                                                <button className="b-small icon-error">
                                                    <div><TrashIcon></TrashIcon></div>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <div><img src={iconDB} /></div>
                                                <span>Base de datos 001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-1 flex-row flex-wrap">
                                                <div className="b-small">32 GB</div>
                                                <div className="b-small">Intel Core i9</div>
                                                <div className="b-small">Postgresql</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <button className="b-small">
                                                    <div><PencilIcon></PencilIcon></div>
                                                </button>
                                                <button className="b-small icon-error">
                                                    <div><TrashIcon></TrashIcon></div>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <div><img src={iconVM} /></div>
                                                <span>Maquina virtual 001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-1 flex-row flex-wrap">
                                                <div className="b-small">8 GB</div>
                                                <div className="b-small">Intel Core i9</div>
                                                <div className="b-small">Windows 10</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <button className="b-small">
                                                    <div><PencilIcon></PencilIcon></div>
                                                </button>
                                                <button className="b-small icon-error">
                                                    <div><TrashIcon></TrashIcon></div>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <div><img src={iconS} /></div>
                                                <span>Almacenamiento 001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-1 flex-row flex-wrap">
                                                <div className="b-small">Bloque (SSD)</div>
                                                <div className="b-small">200 GB</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <button className="b-small">
                                                    <div><PencilIcon></PencilIcon></div>
                                                </button>
                                                <button className="b-small icon-error">
                                                    <div><TrashIcon></TrashIcon></div>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <div><img src={iconDB} /></div>
                                                <span>Base de datos 001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-1 flex-row flex-wrap">
                                                <div className="b-small">32 GB</div>
                                                <div className="b-small">Intel Core i9</div>
                                                <div className="b-small">Postgresql</div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="hidden overflow-x-auto flex-1 h-screen-compare-sm md:h-screen-compare space-y-4 flex flex-col">
                        <div className="flex items-center justify-between space-x-2">
                            <div className="flex items-center space-x-2">
                                <button className="b-small-rounded-full">
                                    <XMarkIcon className="w-5 h-5"></XMarkIcon>
                                    <span>Cerrar</span>
                                </button>
                                <span className="t-body-b text-c">Historial de comparación</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="input-form"><input type="date"/></div>
                                <div className="input-form"><input type="date"/></div>
                            </div>
                        </div>
                        <div className="w-fit overflow-y-auto md:w-full h-fit md:max-h-full space-y-4 p-8 bg-white-p border border-st-20 rounded">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="rounded-full w-2 h-2 bg-c"></div>
                                    <span className="t-body text-c">24/05/2023 05:41 PM</span>
                                </div>
                                <button className="b-small">Ver</button>
                            </div>
                            <table className="table-cebra">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Producto</th>
                                        <th>Especificaciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <button className="b-small">
                                                    <div><PencilIcon></PencilIcon></div>
                                                </button>
                                                <button className="b-small icon-error">
                                                    <div><TrashIcon></TrashIcon></div>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <div><img src={iconVM} /></div>
                                                <span>Maquina virtual 001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-1 flex-row md:flex-wrap">
                                                <div className="b-small">8 GB</div>
                                                <div className="b-small">Intel Core i9</div>
                                                <div className="b-small">Windows 10</div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="rounded-full w-2 h-2 bg-c"></div>
                                    <span className="t-body text-c">24/05/2023 05:41 PM</span>
                                </div>
                                <button className="b-small">Ver</button>
                            </div>
                            <table className="table-cebra">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Producto</th>
                                        <th>Especificaciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <button className="b-small">
                                                    <div><PencilIcon></PencilIcon></div>
                                                </button>
                                                <button className="b-small icon-error">
                                                    <div><TrashIcon></TrashIcon></div>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-1">
                                                <div><img src={iconVM} /></div>
                                                <span>Maquina virtual 001</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex gap-1 flex-row md:flex-wrap">
                                                <div className="b-small">8 GB</div>
                                                <div className="b-small">Intel Core i9</div>
                                                <div className="b-small">Windows 10</div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Comparator
