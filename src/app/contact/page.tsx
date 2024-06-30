import Footer from "@/components/Footer";
import { NavigationMenuBar } from "@/components/ShadcnNavbar";
import Image from "next/image";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/linkedin'
import 'react-social-icons/x'
import 'react-social-icons/youtube'

export default function Home() {
  return (
    <div>
      <NavigationMenuBar />
      <div className="container flex justify-between gap-8 p-24 pt-16">
        <div className="pr-16 w-[50%]">
          <h2 className="text-6xl font-bold">Have any questions left?</h2>
          <p className="py-8 text-lg">Get in touch with our team and gain insights into what you can
              achieve with our AI no-code platform.
          </p>
          <div className="flex justify-start gap-16">
              <div className="text-[#74788B] text-sm flex flex-col">
                  <span>Call us</span>
                  <span>+8801710533911</span>
                  <span>+8801717158743</span>
              </div>
              <div className="text-[#74788B] text-sm flex flex-col">
                  <span>Address</span>
                  <span>104, Block D, Banani, Dhaka</span>
                  <span>Bangladesh</span>
              </div>
          </div>
          <p className="py-8 text-blue-600">buckyypaymentsolutions@gmail.com</p>
          <div className="flex gap-4">
              <SocialIcon network="facebook" href="https://www.facebook.com" />
              <SocialIcon network="linkedin" href="https://www.linkedin.com" />
              <SocialIcon network="x" href="https://www.x.com" />
              <SocialIcon network="youtube" href="https://www.youtube.com" />
          </div>
        </div>
        <div className="w-[50%] border-r-8">
          <Image 
              src='/hello.png'
              alt="contact image"
              width={100}
              height={100}
              layout="responsive"
              className="rounded-2xl"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
