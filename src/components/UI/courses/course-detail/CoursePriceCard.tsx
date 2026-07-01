import { Badge, Camera, ChartColumn, FileText } from 'lucide-react';
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';
import Button from '../../Button';

interface CoursePriceCardProps {
  thumbnail: string;
  price: string;
  originalPrice: string;
  percentageOff: number;
  timeLeft: number;
  training: number;
  modules: number;
}

export default function CoursePriceCard({
  thumbnail,
  price,
  originalPrice,
  percentageOff,
  timeLeft,
  training,
  modules,
}: CoursePriceCardProps) {
  return (
    <div className=' bg-white rounded-2xl w-[320px] '>
      <div className='p-4 flex flex-col gap-6'>
        <img src={thumbnail} alt='thumbnail' />
        <div className='flex justify-between items-center'>
          <h3 className='text-3xl font-bold'>{price}</h3>
          <p className='text-muted font-semibold line-through'>
            {originalPrice}
          </p>
          <p className='text-muted font-semibold '>{percentageOff}% Off</p>
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-primary font-semibold text-sm'>
            {timeLeft} hours left at this price
          </p>
        </div>
        <Button variant='primary' className='rounded-2xl'>
          Buy now
        </Button>
        <div className='bg-muted h-[1px]' />
        <div className='flex flex-col gap-3'>
          <h3 className='font-semibold text-lg'>This Course includes</h3>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <Badge className='w-5 h-5 text-primary' />
              <p className='text-sm text-muted font-semibold'>
                Money back Guarantee
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <Camera className='w-5 h-5 text-primary' />
              <p className='text-sm text-muted font-semibold'>
                Access on all devices
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <FileText className='w-5 h-5 text-primary' />
              <p className='text-sm text-muted font-semibold'>
                Certification of completion
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <ChartColumn className='w-5 h-5 text-primary' />
              <p className='text-sm text-muted font-semibold'>
                {modules} modules
              </p>
            </div>
          </div>
        </div>
        <div className='bg-muted h-[1px]' />
        <h3 className='text-lg font-semibold'>
          Training {training} or more people
        </h3>
        <p className='text-xs text-muted tracking-wide leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies,
          ligula eu tempus dignissim
        </p>
        <div className='bg-muted h-[1px]' />
        <h3 className='text-lg font-semibold'>Share this course</h3>
        <div className='flex gap-4'>
          <FaTwitter className='w-5 h-5' />
          <FaFacebookF className='w-5 h-5' />
          <FaYoutube className='w-5 h-5' />
          <FaInstagram className='w-5 h-5' />
          <FaTelegramPlane className='w-5 h-5' />
          <FaWhatsapp className='w-5 h-5' />
        </div>
      </div>
    </div>
  );
}
