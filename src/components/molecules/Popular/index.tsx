import CardPlay from "@/components/atoms/CardPlay";
import TitleBox from "@/components/atoms/TitleBox";
import React from "react";

interface PopularProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
}

const Popular: React.FC<PopularProps> = ({ items }) => {
  return (
    <section className="w-full flex flex-col gap-1">
      <TitleBox title="Popular " />
      <div className="grid grid-cols-7 gap-4 max-w-full">
        <CardPlay
          image="https://i.scdn.co/image/ab6761610000517497d758a5602772c33428697e"
          isArtist
          content="Artist"
          title='ANH TRAI "SAY HI"'
        />
        <CardPlay
          image="https://i.scdn.co/image/ab6761610000517497d758a5602772c33428697e"
          isArtist
          content="Artist"
          title='ANH TRAI "SAY HI"'
        />
        <CardPlay
          image="https://i.scdn.co/image/ab6761610000517497d758a5602772c33428697e"
          isArtist
          content="Artist"
          title='ANH TRAI "SAY HI"'
        />

        <CardPlay
          image="https://i.scdn.co/image/ab6761610000517497d758a5602772c33428697e"
          isArtist
          content="Artist"
          title='ANH TRAI "SAY HI"'
        />
        <CardPlay
          image="https://i.scdn.co/image/ab6761610000517497d758a5602772c33428697e"
          isArtist
          content="Artist"
          title='ANH TRAI "SAY HI"'
        />
        <CardPlay
          image="https://i.scdn.co/image/ab6761610000517497d758a5602772c33428697e"
          isArtist
          content="Artist"
          title='ANH TRAI "SAY HI"'
        />

        <CardPlay
          image="https://i.scdn.co/image/ab6761610000517497d758a5602772c33428697e"
          isArtist
          content="Artist"
          title='ANH TRAI "SAY HI"'
        />
      </div>
    </section>
  );
};

export default Popular;
