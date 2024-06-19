import Logo from "./Logo";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex justify-center items-center">
          <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8 flex justify-center items-center">
              <div className="flex items-center space-x-3 mt-9">
              <Logo/>
              </div>

              <span className="whitespace-nowrap inline-flex items-center px-3 py-2 text-sm font-medium bg-green shadow-md rounded-xl bg-green-soft mx-auto">
                # The permissionless health financing and claim proving insurance protocol
              </span>
             
              <ul className="flex items-center space-x-3 mt-9">
              
              </ul>
            </div>

           
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;