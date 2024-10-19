import { InstagramIcon, Linkedin, LinkedinIcon, Mail, PhoneIncoming, Twitter, TwitterIcon, YoutubeIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="h-[57rem] md:h-[500px] bg-black space-y-20 md:space-y-40 pt-6 md:pt-20 ">
            <div className="container mx-auto max-w-sm md:max-w-6xl flex flex-col md:flex-row justify-between items-start space-y-5 md:space-y-0">
                <div className="flex flex-col space-y-5 text-white">
                    <div className="text-2xl text-[#E0F2FF] font-semibold">HR</div>
                    <div className="space-y-3">
                        <div className="flex space-x-3 items-center">
                            <Mail className="w-4 h-4" /> <span>info@hr.com</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <PhoneIncoming className="w-4 h-4" /> <span>+2348157949148</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-5 text-white">
                    <div className="text-md font-semibold">Solution</div>
                    <div className="space-y-3">
                        <div className="flex space-x-3 items-center">
                            <span>Why HR?</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span>Features</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span>OpenAI</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span>Technology</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span>Security</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-5 text-white">
                    <div className="text-md font-semibold">Customers</div>
                    <div className="space-y-3">
                        <div className="flex space-x-3 items-center">
                            <span>Procurement</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span>Sales</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span>Legal</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span>Medium</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span>Enterprise</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-5 text-white">
                    <div className="text-md font-semibold">Resources</div>
                    <div className="space-y-3">
                        <div className="flex space-x-3 items-center">
                            <span>Pricing</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span>Contact Sales</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span>ChangeLog</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span>Blog</span>
                        </div>
                    </div>
                </div>

                
            </div>
            <div className=" container mx-auto max-w-md md:max-w-6xl flex justify-between items-center text-white">
                    <p className="text-white text-xs md:text-base">© Copyright 2024 HR. All rights reserved</p>
                    <div className="flex space-x-6 text-xs md:text-base">
                    <div>
                            <TwitterIcon />
                        </div>
                        <div>
                            <YoutubeIcon />
                        </div>
                        <div>
                            <InstagramIcon />
                        </div>
                        <div>
                            <LinkedinIcon />
                        </div>
                        
                    </div>
                </div>
        </footer>
    );
}
