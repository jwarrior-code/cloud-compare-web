import { 
    ChevronLeftIcon,
    ChevronRightIcon,
    CodeBracketSquareIcon,
    CheckIcon,
    XMarkIcon,
    EyeIcon,
    EyeSlashIcon,
    ExclamationTriangleIcon
 } from "@heroicons/react/24/outline";
 import { 
    CheckCircleIcon,
    XCircleIcon
 } from "@heroicons/react/24/solid";
import logoAWS from "../../../assets/images/logo-aws.png"
import logoAzure from "../../../assets/images/logo-azure.png"
import Header from "../../common/Header";

function Profile() {

  return (
    <>
      <div className="w-full flex flex-col items-center h-full">
        <Header></Header>
        <div className="p-6 space-y-5 w-full max-w-[560px] flex-1 flex flex-col">
            <div className="w-full flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-1 text-alert-warning">
                    <div className="w-5 h-5"><ExclamationTriangleIcon></ExclamationTriangleIcon></div>
                    <span className="t-label-b">NO SUSCRITO</span>
                </div>
                <div className="flex items-center space-x-1 text-alert-success">
                    <div className="w-5 h-5"><CheckCircleIcon></CheckCircleIcon></div>
                    <span className="t-label-b">SUSCRITO</span>
                </div>
                <span className="text-center t-title text-st-90">laura.walteros@gmail.com</span>
                <span className="text-center t-label text-st-60">Para habilitar funcionalidades de comparación debes contar con una suscripción activa.</span>
            </div>
            <div className="w-full border-t-2 border-st-20"></div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="input-form w-full">
                    <label>Opciones de perfil</label>
                    <button className="w-full b-secondary">Cambiar contraseña</button>
                </div>
                <div className="input-form w-full">
                    <label>Opciones de suscripción</label>
                    <button className="w-full b-primary">Cambiar contraseña</button>
                </div>
                <div className="md:col-span-2 flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4"/>
                    <label className="t-body text-st-60">Renovar suscripción automáticamente</label>
                </div>
            </div>
            <div className="w-full border-t-2 border-st-20"></div>

            <div className="w-full flex flex-col space-y-6 border border-st-20 h-fit max-h-full rounded-lg bg-white-p p-8 overflow-x-auto">
                <div className="flex text-left flex-col space-y-1">
                    <span className="t-subtitle text-st-90">Historial de pagos</span>
                    <span className="t-label text-st-60">Trazabilidad del proceso de validación de tu cuenta.</span>
                </div>
                <table className='table-cebra'>
                    <thead className='text-c t-label-b'>
                        <tr>
                            <th>Costo</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody className='t-body text-st-90'>
                        <tr>
                            <td>$124123</td>
                            <td>12/01/2023 - 02:22</td>
                        </tr>
                        <tr>
                            <td>$124123</td>
                            <td>12/01/2023 - 02:22</td>
                        </tr>
                        <tr>
                            <td>$124123</td>
                            <td>12/01/2023 - 02:22</td>
                        </tr>
                        <tr>
                            <td>$124123</td>
                            <td>12/01/2023 - 02:22</td>
                        </tr>
                        <tr>
                            <td>$124123</td>
                            <td>12/01/2023 - 02:22</td>
                        </tr>
                        <tr>
                            <td>$124123</td>
                            <td>12/01/2023 - 02:22</td>
                        </tr>
                        <tr>
                            <td>$124123</td>
                            <td>12/01/2023 - 02:22</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="w-full flex flex-col space-y-6 border border-st-20 h-fit max-h-full rounded-lg bg-white-p p-8 overflow-x-auto">
                <div className="flex items-start space-x-12 justify-between">
                    <div className="flex text-left flex-col space-y-1">
                        <span className="t-subtitle text-st-90">Detalles de la Suscripción</span>
                        <span className="t-label text-st-60">Esta suscripción sera válida del 12/01/2023 al 12/02/2023</span>
                    </div>
                    <div className="w-48 h-12 flex items-center space-x-2 rounded-full bg-white-p border border-st-20 p-2">
                        <button className="flex-1 b-tab-on">Mensual</button>
                        <button className="flex-1 b-tab">Anual</button>
                    </div>
                </div>
                <div className="w-full border border-st-20 rounded-lg flex items-center justify-center p-12">
                    <span className="t-label-b text-st-40">Formulario de Pagos</span>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Profile
