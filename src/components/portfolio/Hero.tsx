import { motion } from "framer-motion";
import { Download, MessageCircle, Github, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Spline from '@splinetool/react-spline';


const Hero = () => {
  return (
    <>

<section 
  id="home" 
  className="min-h-screen flex items-center relative overflow-hidden bg-background"
> 
 {/* Spline Background (interactive) */}
<div className="absolute inset-0 z-0 pointer-events-auto overflow-hidden">
  <div className="w-full h-full scale-[1.20] translate-x-[50px]">
    <Spline scene="https://prod.spline.design/hZIuJ3e8IciqiLrP/scene.splinecode" />
  </div>
</div>


{/* Overlay that lets mouse pass through */}
<div className="absolute inset-0 z-10 pointer-events-none" />


  {/* ✅ Foreground Content — z-10 */}
<div className="container mx-auto px-4 py-20 relative z-20 pointer-events-none">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-foreground font-extrabold">Shreya</span>
              <br />
              <span className="text-primary font-extrabold">Frontend Developer</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>& <span className="text-secondary font-extrabold">Freelancer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg font-medium"
            >
              I build <span className="text-primary font-semibold">fast</span>, 
              <span className="text-secondary font-semibold"> beautiful</span>, and 
              <span className="text-primary font-semibold"> scalable</span> websites for startups and
              individuals. Let's bring your ideas to life! ✨
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <div className="pointer-events-auto">
              <Button 
                className="btn-gradient hover-lift hover-glow font-semibold" 
                size="lg"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="mr-2" size={20} />
                View Resume
              </Button>
              </div>
              <div className="pointer-events-auto">
              <Button 
                variant="outline" 
                className="btn-ghost hover-lift hover-glow font-semibold border-2" 
                size="lg"
                onClick={() => document.getElementById('hire')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MessageCircle className="mr-2" size={20} />
                Hire Me
              </Button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-4"
            >
              <div className="pointer-events-auto">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover-scale hover-glow rounded-full bg-primary/10 hover:bg-primary/20"
                onClick={() => window.open('https://github.com/shreya', '_blank')}
              >
                <Github size={24} />
              </Button>
              </div>
              <div className="pointer-events-auto">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover-scale hover-glow rounded-full bg-secondary/10 hover:bg-secondary/20"
                onClick={() => window.open('https://linkedin.com/in/shreya-singh', '_blank')}
              >
                <Linkedin size={24} />
              </Button>
              </div>
              <div className="pointer-events-auto">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover-scale hover-glow rounded-full bg-primary/10 hover:bg-primary/20"
                onClick={() => window.open('https://wa.me/+919876543210', '_blank')}
              >
                <Phone size={24} />
              </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Video Placeholder */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
           >
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <div className="aspect-video bg-gradient-primary flex items-center justify-center text-primary-foreground">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <div className="w-0 h-0 border-l-8 border-r-0 border-t-6 border-b-6 border-l-primary-foreground border-t-transparent border-b-transparent ml-1"></div>
                  </motion.div>
                  <p className="text-lg font-medium">
                    AI-Generated Video Intro
                  </p>
                  <p className="text-sm opacity-80">Coming Soon!</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            {/* <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"
            />
          </motion.div> */} 
        </div>
      </div>
      
    </section>
          {/* SVG Wave Divider */}
<div className="w-full overflow-hidden leading-[0] relative -mt-1">
  <svg
    className="w-full h-[50px] md:h-[60px]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 100"
    preserveAspectRatio="none"
  >
    <path
      fill="#457D84"
      d="M929 38c-12-5-24-8-36-8l-10 8c-22-9-42-18-72-18l-28 25H217l-28-25c-31 0-51 10-72 18l-9-8c-13 0-25 3-37 8L40 50l31 13c12 5 24 7 37 7l9-8c22 9 42 18 72 18l28-25h566l28 25c31 0 51-10 72-18l10 8c12 0 24-2 36-7l31-13-31-12Z"
    />
  </svg>
</div>

    </>
  );
};

export default Hero;