import { Button } from "@/components/ui/button"
import Logo from "./Logo"


const Footer = () => {
    return (
        <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
            <Logo />
            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center text-muted-foreground">
                <Button variant='ghost'>Privercy Policy</Button>
                <Button variant='ghost'>Terms and Conditions</Button>
            </div>
        </div>
    )
}

export {
    Footer
}