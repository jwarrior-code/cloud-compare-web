import { CloudIcon, ArrowLongRightIcon, FolderPlusIcon } from "@heroicons/react/24/outline"
import logoAWS from "../../../assets/images/logo-aws.png"
import logoAzure from "../../../assets/images/logo-azure.png"
import Header from "../../common/Header"
import Footer from "../../common/Footer"

function Dashboard() {
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
                    <div className="flex items-center gap-8 w-full max-w-[800px]">
                        <div className="w-full border-2 border-alert-success flex items-center justify-center space-x-2 p-4 rounded-lg">
                            <div><CloudIcon className="text-alert-success w-16 h-16"></CloudIcon></div>
                            <div className="flex flex-col text-left">
                                <span className="text-st-60 t-label">Proyectos</span>
                                <span className="text-st-90 t-title">6</span>
                            </div>
                        </div>
                        <div><ArrowLongRightIcon className="text-st-20 w-16 h-16"></ArrowLongRightIcon></div>
                        <div className="w-full border-2 border-aws flex items-center justify-center space-x-2 p-4 rounded-lg">
                            <div className="w-24 h-16"><img src={logoAWS} /></div>
                            <div className="flex flex-col text-left">
                                <span className="text-st-60 t-label">AWS</span>
                                <span className="text-st-90 t-title">4</span>
                            </div>
                        </div>
                        <div className="w-full border-2 border-azure flex items-center justify-center space-x-2 p-4 rounded-lg">
                            <div className="w-16 h-16"><img src={logoAzure} /></div>
                            <div className="flex flex-col text-left">
                                <span className="text-st-60 t-label">Azure</span>
                                <span className="text-st-90 t-title">2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-4 w-full h-full">
                <div className="flex items-center justify-between h-fit">
                    <div className="tag-subtitle w-full h-fit">
                        <div></div>
                        <span>Proyectos</span>
                    </div>
                    <button className="b-small">
                        <div><FolderPlusIcon></FolderPlusIcon></div>
                        <span>Nuevo Proyecto</span>
                    </button>
                </div>
                <div className="w-full border border-st-20 h-fit max-h-full rounded-lg bg-white-p p-8 overflow-x-auto">
                    <table className='table-cebra'>
                        <thead className='text-c t-label-b'>
                        <tr>
                            <th></th>
                            <th>Nombre Proyecto</th>
                            <th>Fecha de Creación</th>
                            <th>AWS</th>
                            <th>Azure</th>
                        </tr>
                        </thead>
                        <tbody className='t-body text-st-90'>
                            <tr>
                                <td>
                                    <div>
                                        <button className="b-small">Ver</button>
                                    </div>
                                </td>
                                <td>Banco Panamex</td>
                                <td>24/05/2023 05:41 PM</td>
                                <td>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-alert-error"></div>
                                        <span>$21,124.30</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-alert-success"></div>
                                        <span>$13,564.55</span>
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

export default Dashboard
