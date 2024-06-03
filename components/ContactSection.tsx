import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from "@tabler/icons-react";

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
 
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};





const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row mt-20 pt-20 container" id='contact'>
        <div className="flex-1">
            <h2 className="text-4xl">Empower your vision, <span className="text-orange-500">partner with us</span> today</h2>
            <p>Let&apos; s build your website today!</p>
            <p>Contact us and we will get back within 24 hours. We mean it. You saw the testimonials, right?</p>
            
        </div>
        <div className="flex-1">
          <form className="" >
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Durden" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
            </LabelInputContainer>
          
            <LabelInputContainer className="mb-8">
              <Label htmlFor="phoneNumber">Your Phone number</Label>
              <Input
                id="phoneNumber"
                placeholder="Your phone number"
                type="text"
              />
            </LabelInputContainer>
            

            <LabelInputContainer className="mb-8">
              <Label htmlFor="message">Message</Label>
              <textarea placeholder="Message here .." name="" id="message" className="flex h-50 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
                file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-orange-400 dark:focus-visible:ring-orange-500
                disabled:cursor-not-allowed disabled:opacity-50
                dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                group-hover/input:shadow-none transition duration-400">

              </textarea>

            </LabelInputContainer>
    
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-orange-900 to-orange-600 block dark:bg-orange-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--orange-800)_inset,0px_-1px_0px_0px_var(--orange-800)_inset]"
              type="submit"
            > 
              
                Send &rarr;
              <BottomGradient />
            </button>
    
        
            
          </form>
        </div>
    </div>
  )
}



export default ContactSection