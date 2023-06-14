import { 
    ChevronLeftIcon,
    ChevronRightIcon,
    CodeBracketSquareIcon,
    CheckIcon,
    XMarkIcon,
    EyeIcon,
    EyeSlashIcon
 } from "@heroicons/react/24/outline";
 import { 
    CheckCircleIcon,
    XCircleIcon
 } from "@heroicons/react/24/solid";
import logoAWS from "../../../assets/images/logo-aws.png"
import logoAzure from "../../../assets/images/logo-azure.png"
import Header from "../../common/Header";

var costTime = 'month'
var costMaxM = 0;
var costMaxY = 0;

function calcHeightCost(num: string) {
    var heightCost = (parseFloat(num) / costMaxM) * 100;
    return heightCost;
}

function changeCostTime(type: string) {
    costTime = type;
    console.log(costTime);
}

function Results() {

    var productsAWS = [
        {
            "product": "MV-001",
            "cost_m": "500",
            "cost_y": "21124.30"
        },
        {
            "product": "MV-002",
            "cost_m": "1000",
            "cost_y": "31124.30"
        },
        {
            "product": "MV-003",
            "cost_m": "250",
            "cost_y": "41124.30"
        },
        {
            "product": "MV-001",
            "cost_m": "500",
            "cost_y": "21124.30"
        },
        {
            "product": "MV-002",
            "cost_m": "1000",
            "cost_y": "31124.30"
        },
        {
            "product": "MV-002",
            "cost_m": "1000",
            "cost_y": "31124.30"
        },
        {
            "product": "MV-003",
            "cost_m": "250",
            "cost_y": "41124.30"
        },
        {
            "product": "MV-001",
            "cost_m": "500",
            "cost_y": "21124.30"
        },
        {
            "product": "MV-002",
            "cost_m": "1000",
            "cost_y": "31124.30"
        }
    ];

    var productsAzure = [
        {
            "product": "MV-001",
            "cost_m": "750",
            "cost_y": "21124.30"
        },
        {
            "product": "MV-002",
            "cost_m": "250",
            "cost_y": "31124.30"
        },
        {
            "product": "MV-003",
            "cost_m": "500",
            "cost_y": "41124.30"
        },
        {
            "product": "MV-001",
            "cost_m": "750",
            "cost_y": "21124.30"
        },
        {
            "product": "MV-002",
            "cost_m": "250",
            "cost_y": "31124.30"
        },
        {
            "product": "MV-002",
            "cost_m": "250",
            "cost_y": "31124.30"
        },
        {
            "product": "MV-003",
            "cost_m": "500",
            "cost_y": "41124.30"
        },
        {
            "product": "MV-001",
            "cost_m": "750",
            "cost_y": "21124.30"
        },
        {
            "product": "MV-002",
            "cost_m": "250",
            "cost_y": "31124.30"
        }
    ];

    productsAWS.forEach((item) => {
        if(costMaxM < parseFloat(item.cost_m)){
            costMaxM = parseFloat(item.cost_m);
        }
        if(costMaxY < parseFloat(item.cost_y)){
            costMaxY = parseFloat(item.cost_y);
        }
    });

    productsAzure.forEach((item) => {
        if(costMaxM < parseFloat(item.cost_m)){
            costMaxM = parseFloat(item.cost_m);
        }
        if(costMaxY < parseFloat(item.cost_y)){
            costMaxY = parseFloat(item.cost_y);
        }
    });



  return (
    <>
      <div className="w-full flex flex-col items-center h-full">
        <Header></Header>
        <div className="p-6 space-y-8 w-full max-w-[1400px] flex-1 flex flex-col">
            <div className="flex w-full items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                    <button className="b-small">
                        <ChevronLeftIcon className="w-5 h-5"></ChevronLeftIcon>
                        <span>Volver</span>
                    </button>
                    <div className="rounded-sm w-2 h-6 bg-c"></div>
                    <div className="flex items-center space-x-2">
                        <span className="t-subtitle text-st-90">Financiera QA</span>
                        <ChevronRightIcon className="w-5 h-5 text-c"></ChevronRightIcon>
                        <span className="t-subtitle text-st-90">Comparación</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="t-label-b text-st-50">Ver Costos:</span>
                    <div className="w-48 h-12 flex items-center space-x-2 rounded-full bg-white-p border border-st-20 p-2">
                        <button onClick={() => changeCostTime('month')} className={"flex-1 "+(costTime == 'month' ? 'b-tab-on':'b-tab')}>Mensuales</button>
                        <button onClick={() => changeCostTime('year')} className={"flex-1 "+(costTime == 'year' ? 'b-tab-on':'b-tab')}>Anuales</button>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-4 justify-between">
                <div className="aws flex flex-col items-start space-y-2">
                    <div className="flex items-center space-x-2">
                        <img src={logoAWS} alt="AWS" className="h-12"/>
                        <span className="t-title text-st-60">$13,452.32</span>
                        <div className="text-alert-error w-10 h-10"><XCircleIcon></XCircleIcon></div>
                    </div>
                    <div className="flex space-x-2">
                        <button className="b-small">
                            <div><CodeBracketSquareIcon></CodeBracketSquareIcon></div>
                            <span>Generar Código</span>
                        </button>
                        <button className="b-small">
                            <div><EyeIcon></EyeIcon></div>
                            <div><EyeSlashIcon></EyeSlashIcon></div>
                        </button>
                    </div>
                </div>
                <div className="azure flex flex-col items-end space-y-2">
                    <div className="flex items-center space-x-2">
                    <div className="animate-bounce text-alert-success w-10 h-10"><CheckCircleIcon></CheckCircleIcon></div>
                        <span className="t-title text-st-60">$9,564.55</span>
                        <img src={logoAzure} alt="Azure" className="h-12"/>
                    </div>
                    <div className="flex space-x-2">
                        <button className="b-small">
                            <div><EyeIcon></EyeIcon></div>
                            <div><EyeSlashIcon></EyeSlashIcon></div>
                        </button>
                        <button className="b-small">
                            <span>Generar Código</span>
                            <div><CodeBracketSquareIcon></CodeBracketSquareIcon></div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-x-auto h-fit bg-white-p border border-st-20 rounded-lg flex flex-col items-start space-y-4 p-8">
                <div className="w-full h-fit text-center flex space-x-2">
                    {productsAWS.map((item, index) => (
                        <div key={index} className="flex-1 min-w-[120px]">
                            <span className="t-label text-c">{item.product}</span>
                        </div>
                    ))}
                </div>
                <div className="relative w-full h-[240px] flex space-x-2">
                    {productsAWS.map((item, index) => (
                        <div key={index} className="flex-1 h-full bg-st-5 border border-st-20 relative flex items-end space-x-2 justify-center rounded min-w-[120px]">
                            <div className="group border-2 border-aws cursor-pointer w-6 relative hover:bg-aws rounded-t" style={{ height: calcHeightCost(productsAWS[index].cost_m)+'%' }}>
                                <div className="hidden z-50 mr-1 t-label-b group-hover:block absolute right-full top-0 drop-shadow-lg bg-c text-white-fx px-2 py-1 rounded">${productsAWS[index].cost_m}</div>
                            </div>
                            <div className="group border-2 border-azure cursor-pointer w-6 relative hover:bg-azure rounded-t" style={{ height: calcHeightCost(productsAzure[index].cost_m)+'%' }}>
                                <div className="hidden z-50 ml-1 t-label-b group-hover:block absolute left-full top-0 drop-shadow-lg bg-c text-white-fx px-2 py-1 rounded">${productsAzure[index].cost_m}</div>
                            </div>
                        </div>
                    ))}
                    <div className="absolute rounded bg-white -top-4 -left-6 border border-st-20 px-2 py-1">${costTime == 'month' ? costMaxM : costMaxY }</div>
                    <div className="absolute rounded bg-white -bottom-4 -left-6 border border-st-20 px-2 py-1">$0</div>
                </div>
                <div className="w-full h-fit flex space-x-2">
                    {productsAWS.map((item, index) => (
                        <div key={index} className="flex-1 flex justify-center items-center min-w-[120px] space-x-1">
                            <div className="w-4 h-4 text-alert-success"><CheckCircleIcon></CheckCircleIcon></div>
                            <div className="w-4 h-4 text-alert-error"><XCircleIcon></XCircleIcon></div>
                            <img className="h-5" src={parseFloat(productsAWS[index].cost_m) < parseFloat(productsAzure[index].cost_m) ? logoAWS : logoAzure} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="tables flex space-x-6">
                <div className="w-full border-2 border-aws h-fit max-h-full rounded-lg bg-white-p p-4 overflow-x-auto">
                    <table className='table-cebra'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Producto</th>
                                <th>Costo Mensual</th>
                                <th>Costo Anual</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <button className="b-small">
                                            <div><EyeIcon></EyeIcon></div>
                                        </button>
                                    </div>
                                </td>
                                <td><a className="underline" href="">MV-001</a></td>
                                <td>$124123</td>
                                <td>$124123</td>
                                <td>
                                    <div className="flex">
                                        <CheckIcon className="w-4 h-4 text-alert-success"></CheckIcon>
                                        <XMarkIcon className="w-4 h-4 text-alert-error"></XMarkIcon>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <button className="b-small">
                                            <div><EyeIcon></EyeIcon></div>
                                        </button>
                                    </div>
                                </td>
                                <td><a className="underline" href="">MV-001</a></td>
                                <td>$124123</td>
                                <td>$124123</td>
                                <td>
                                    <div className="flex">
                                        <CheckIcon className="w-4 h-4 text-alert-success"></CheckIcon>
                                        <XMarkIcon className="w-4 h-4 text-alert-error"></XMarkIcon>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <button className="b-small">
                                            <div><EyeIcon></EyeIcon></div>
                                        </button>
                                    </div>
                                </td>
                                <td><a className="underline" href="">MV-001</a></td>
                                <td>$124123</td>
                                <td>$124123</td>
                                <td>
                                    <div className="flex">
                                        <CheckIcon className="w-4 h-4 text-alert-success"></CheckIcon>
                                        <XMarkIcon className="w-4 h-4 text-alert-error"></XMarkIcon>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full border-2 border-azure h-fit max-h-full rounded-lg bg-white-p p-4 overflow-x-auto">
                    <table className='table-cebra'>
                        <thead className='text-c t-label-b'>
                            <tr>
                                <th></th>
                                <th>Producto</th>
                                <th>Costo Mensual</th>
                                <th>Costo Anual</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='t-body text-st-90'>
                            <tr>
                                <td>
                                    <div>
                                        <button className="b-small">
                                            <div><EyeIcon></EyeIcon></div>
                                        </button>
                                    </div>
                                </td>
                                <td><a className="underline" href="">MV-001</a></td>
                                <td>$124123</td>
                                <td>$124123</td>
                                <td>
                                    <div className="flex">
                                        <CheckIcon className="w-4 h-4 text-alert-success"></CheckIcon>
                                        <XMarkIcon className="w-4 h-4 text-alert-error"></XMarkIcon>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                    <button className="b-small">
                                            <div><EyeIcon></EyeIcon></div>
                                        </button>
                                    </div>
                                </td>
                                <td><a className="underline" href="">MV-001</a></td>
                                <td>$124123</td>
                                <td>$124123</td>
                                <td>
                                    <div className="flex">
                                        <CheckIcon className="w-4 h-4 text-alert-success"></CheckIcon>
                                        <XMarkIcon className="w-4 h-4 text-alert-error"></XMarkIcon>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <button className="b-small">
                                            <div><EyeIcon></EyeIcon></div>
                                        </button>
                                    </div>
                                </td>
                                <td><a className="underline" href="">MV-001</a></td>
                                <td>$124123</td>
                                <td>$124123</td>
                                <td>
                                    <div className="flex">
                                        <CheckIcon className="w-4 h-4 text-alert-success"></CheckIcon>
                                        <XMarkIcon className="w-4 h-4 text-alert-error"></XMarkIcon>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Results
