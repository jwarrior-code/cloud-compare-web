import { CheckBadgeIcon, ArrowLongRightIcon, ClockIcon, CalendarIcon, UserCircleIcon, FunnelIcon, ArrowPathIcon } from "@heroicons/react/24/outline"
import Header from "../../common/Header"
import Footer from "../../common/Footer"

function DashboardAdmin() {
  return (
    <>
      <div className="w-full flex flex-col items-center h-screen">
        <Header></Header>
        <div className="p-6 space-y-8 w-full max-w-[1400px] h-full flex flex-col">
            <div className="flex flex-col space-y-4 w-full h-fit">
                <div className="tag-subtitle w-full h-fit">
                    <div></div>
                    <span>Vista Rápida</span>
                </div>
                <div className="w-full overflow-x-auto border border-st-20 h-fit rounded-lg bg-white-p p-8 flex items-center justify-center">
                    <div className="flex items-center gap-8 w-full max-w-[1200px]">
                        <div className="w-full border-2 border-alert-success flex items-center justify-center space-x-2 p-4 rounded-lg">
                            <div><CheckBadgeIcon className="text-alert-success w-16 h-16"></CheckBadgeIcon></div>
                            <div className="flex flex-col text-left">
                                <span className="text-st-60 t-label">Suscritos Anual</span>
                                <span className="text-st-90 t-title">6</span>
                            </div>
                        </div>
                        <div className="w-full border-2 border-alert-success flex items-center justify-center space-x-2 p-4 rounded-lg">
                            <div><CheckBadgeIcon className="text-alert-success w-16 h-16"></CheckBadgeIcon></div>
                            <div className="flex flex-col text-left">
                                <span className="text-st-60 t-label">Suscritos Mensual</span>
                                <span className="text-st-90 t-title">6</span>
                            </div>
                        </div>
                        <div className="w-full border-2 border-alert-warning flex items-center justify-center space-x-2 p-4 rounded-lg">
                            <div><ClockIcon className="text-alert-warning w-16 h-16"></ClockIcon></div>
                            <div className="flex flex-col text-left">
                                <span className="text-st-60 t-label">No Suscritos</span>
                                <span className="text-st-90 t-title">6</span>
                            </div>
                        </div>
                        <div className="w-full border-2 border-st-50 flex items-center justify-center space-x-2 p-4 rounded-lg">
                            <div><CalendarIcon className="text-st-50 w-16 h-16"></CalendarIcon></div>
                            <div className="flex flex-col text-left">
                                <span className="text-st-60 t-label">Inactivos</span>
                                <span className="text-st-90 t-title">6</span>
                            </div>
                        </div>
                        <div><ArrowLongRightIcon className="text-st-20 w-16 h-16"></ArrowLongRightIcon></div>
                        <div className="w-full border-2 border-c flex items-center justify-center space-x-2 p-4 rounded-lg">
                            <div><UserCircleIcon className="text-c w-16 h-16"></UserCircleIcon></div>
                            <div className="flex flex-col text-left">
                                <span className="text-st-60 t-label">Total Registrados</span>
                                <span className="text-st-90 t-title">6</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-4 w-full h-full">
                <div className="flex items-center justify-between h-fit">
                    <div className="tag-subtitle w-full h-fit">
                        <div></div>
                        <span>Usuarios Registrados</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="b-small">
                            <div><FunnelIcon></FunnelIcon></div>
                            <span>Filtros</span>
                        </button>
                        <button className="b-small">
                            <div><ArrowPathIcon></ArrowPathIcon></div>
                            <span>Actualizar</span>
                        </button>
                    </div>
                </div>
                <div className="w-full border border-st-20 h-fit max-h-full rounded-lg bg-white-p p-8 overflow-x-auto">
                    <table className='table-cebra'>
                        <thead className='text-c t-label-b'>
                        <tr>
                            <th></th>
                            <th>Correo</th>
                            <th>Fecha suscripción</th>
                            <th>Fecha vencimiento suscripción</th>
                            <th>Estado</th>
                        </tr>
                        </thead>
                        <tbody className='t-body text-st-90'>
                            <tr>
                                <td>
                                    <div>
                                        <button className="b-small">Ver</button>
                                    </div>
                                </td>
                                <td>carlos.cardenas@gmail.com</td>
                                <td>Nov 25, 2022, 8:44:02 AM</td>
                                <td>Oct 25, 2022, 8:44:02 AM</td>
                                <td>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-alert-success"></div>
                                        <span>Suscrito Anual</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <button className="b-small">Ver</button>
                                    </div>
                                </td>
                                <td>carlos.cardenas@gmail.com</td>
                                <td>Nov 25, 2022, 8:44:02 AM</td>
                                <td>Oct 25, 2022, 8:44:02 AM</td>
                                <td>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-alert-warning"></div>
                                        <span>No suscrito</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default DashboardAdmin
