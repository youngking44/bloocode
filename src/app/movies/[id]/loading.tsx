import Container from "@/components/container/Container";
import React from "react";
import Skeleton from "react-loading-skeleton";

const loading = () => {
  return (
    <main>
      <section>
        <Container>
          <div className="w-[60%] pt-[180px] pb-20 flex flex-col gap-5">
            <Skeleton height={30} />
            <Skeleton width={300} />
            <Skeleton width={200} />
            <Skeleton width={200} />
            <Skeleton width={300} />
            <Skeleton width={200} />
            <Skeleton width={200} />
            <Skeleton width={200} />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default loading;
