import { UserIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline"
import logoCore from "../../assets/images/logo-cloud-compare.png"

function Footer() {
  return (
    <>
      <div className="w-full h-fit flex justify-center">
        <div className="w-full max-w-[1400px] h-16 text-st-40 t-subtitle flex items-center justify-between">
          <div><img className="opacity-30 saturate-0 w-16" src={logoCore} /></div>
          <span>2023 ®</span>
        </div>
      </div>
    </>
  )
}

export default Footer
