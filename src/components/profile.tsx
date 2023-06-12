'use client';
import ArrowPath from '@/icons/arrow-path';
import MapPin from '@/icons/map-pin';
import moment from 'moment';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Profile({
  lastUpdateDate,
}: {
  lastUpdateDate: string;
}) {
  const [greeting, setGreeting] = useState('Welcome');

  useEffect(() => {
    const currentTime = moment();
    const hour = currentTime.hour();

    let greetingText = '';

    if (hour >= 5 && hour < 12) {
      greetingText = 'Good morning 🌅';
    } else if (hour >= 12 && hour < 18) {
      greetingText = 'Good afternoon 🌇';
    } else {
      greetingText = 'Good evening 🌃';
    }

    setGreeting(greetingText);
  }, []);

  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="bg-crust">
      <div className="relative flex flex-col items-start justify-end gap-4 px-4 pb-4 pt-16">
        <div className="absolute left-4 top-0 h-24 w-24 -translate-y-1/2 overflow-hidden rounded-full bg-base ring-4 ring-crust">
          <div className="relative h-full w-full">
            <Image
              className="object-cover"
              src="/profile.png"
              alt="Profile image"
              width={256}
              height={256}
              priority
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Fajar Maftuh Fadli</h1>
          <span className="font-light text-blue/80">@froggologies</span>
        </div>
        <span className="">
          {greeting} traveler. This one is a frog, hailing from the misty swamps
          of Black Marsh. 🐸 Croak! May the Hist guide your path!
        </span>
        <div className="flex flex-col font-light text-blue/80">
          <div className="flex flex-row items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>Middle Earth</span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <ArrowPath className="h-4 w-4" />
            <span>
              Last updated {moment(lastUpdateDate).format('DD MMMM YYYY')}
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-sm">
            <span className="font-semibold">
              {randomIntFromInterval(10, 99)}
            </span>{' '}
            <span className="font-light text-blue/80">Following</span>
          </div>
          <div className="text-sm">
            <span className="font-semibold">
              {randomIntFromInterval(10, 99)}
            </span>{' '}
            <span className="font-light text-blue/80">Follower</span>
          </div>
        </div>
      </div>
    </div>
  );
}
