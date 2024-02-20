'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from 'antd'
import Pic from '@/assests/School/download (1).jpg'
import './CardChild.css'

export default function CardChild() {
  return (
    <div className='List-Card'>
        <div className='Item-Card'>
          <div className='Image-Card'>
            <Image src={Pic} alt={''}></Image> 
          </div>
          <div className='Body-Card'>
            <h4>Tên nơi từ thiện</h4>
            <p>Mô tả địa điểm từ thiện</p>
          </div>
          <div className='Button-Card'>
            <Button type='primary'>Đóng Góp</Button>
          </div>
        </div>
        <div className='Item-Card'>
          <div className='Image-Card'>
            <Image src={Pic} alt={''}></Image> 
          </div>
          <div className='Body-Card'>
            <h4>Tên nơi từ thiện</h4>
            <p>Mô tả địa điểm từ thiện</p>
          </div>
          <div className='Button-Card'>
            <Button type='primary'>Đóng Góp</Button>
          </div>
        </div>
        <div className='Item-Card'>
          <div className='Image-Card'>
            <Image src={Pic} alt={''}></Image> 
          </div>
          <div className='Body-Card'>
            <h4>Tên nơi từ thiện</h4>
            <p>Mô tả địa điểm từ thiện</p>
          </div>
          <div className='Button-Card'>
            <Button type='primary'>Đóng Góp</Button>
          </div>
        </div>
        <div className='Item-Card'>
          <div className='Image-Card'>
            <Image src={Pic} alt={''}></Image> 
          </div>
          <div className='Body-Card'>
            <h4>Tên nơi từ thiện</h4>
            <p>Mô tả địa điểm từ thiện</p>
          </div>
          <div className='Button-Card'>
            <Button type='primary'>Đóng Góp</Button>
          </div>
        </div>
      </div>
  )
}
