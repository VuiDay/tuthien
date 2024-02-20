'use client'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'
import Pic from '@/assests/School/download (1).jpg'
import './CardImpotant.css'

export default function CardImpotant() {
  return (
    <div className='CardIm'>
      <div className='Image-CardIm'>
        <Image src={Pic} alt=''></Image>
        <p>Dự Án Quan Trọng</p>
      </div>
      <div className='Text-CardIm'>
        <h3>Tên nơi từ thiện</h3>
        <p>Nội dung từ thiện Nội dung từ thiệnNội dung từ thiện Nội dung từ thiện Nội dung từ thiện Nội dung từ thiện Nội dung từ thiện</p>
      </div>
    </div>
  );
}