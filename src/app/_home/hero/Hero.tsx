import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import ParticlesBackground from "@/components/particlesBackground/ParticlesBackground";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen relative bg-hero bg-cover bg-center bg-no-repeat">
      <ParticlesBackground id="particles" />
      <div className="w-full h-full bg-black/55">
        <Container>
          <div className="pt-[180px] flex flex-col items-center md:items-start gap-7 text-white">
            <h1
              className="text-4xl md:text-6xl text-center md:text-left font-bold 
            font-protest-revolution uppercase"
            >
              Bloocode Movies
            </h1>
            <p className="text-center md:text-left">
              Dive into a world of cinematic wonders where every film tells a
              story. <br className="hidden md:block" />
              Whether {`you're`} in the mood for heart-pounding action,
              heartwarming <br className="hidden md:block" /> romance, or
              thrilling adventures, Bloocode Movies has something{" "}
              <br className="hidden md:block" /> for everyone. Explore our
              extensive library of films. Join us{" "}
              <br className="hidden md:block" /> on this journey and let the
              magic of movies inspire you!
            </p>
            <Link href="#trending">
              <Button variant="primary" rounded animate>
                Watch Now!!!
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
