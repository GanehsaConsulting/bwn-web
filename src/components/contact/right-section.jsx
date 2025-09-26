import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export const RightSection = () => {
  return (
    <div className=" w-full md:w-1/2 flex flex-col justify-between items-center h-full">
      {/* Background Pattern */}
      <div className="relative w-full h-[380px] rounded-2xl overflow-hidden flex justify-center pt-10 border">
        <Image
          src="https://plus.unsplash.com/premium_photo-1678997779953-4bc1966178dd?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="contact illustration"
          fill
          className="object-cover "
        />
      </div>

      <div className="mt-6 w-full space-y-4">
        <div className="flex items-center gap-3 backdrop-blur-md bg-white/50 dark:bg-dark-color/50 p-4 rounded-xl shadow-sm dark:text-white border border-white/40">
          <Mail className="text-mainColorLight dark:text-white w-6 h-6" />
          <div>
            <p className="text-sm font-medium">Email</p>
            <p className="opacity-70 dark:text-white/80">
              info@ganeshaconsulting.id
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 backdrop-blur-md bg-white/50 dark:bg-dark-color/50 p-4 rounded-xl shadow-sm dark:text-white border border-white/40">
          <Phone className="text-mainColorLight dark:text-white w-6 h-6" />
          <div>
            <p className="text-sm font-medium">Phone</p>
            <p className="opacity-70 dark:text-white/80">+62 889‑9945‑1996</p>
          </div>
        </div>
      </div>
    </div>
  );
};
