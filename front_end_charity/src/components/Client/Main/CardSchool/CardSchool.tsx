'use client'
import React, { useEffect } from 'react'
import './CardSchool.css'
import CardChild from '../CardChild/CardChild'
import CardImpotant from '../CardImpotant/CardImpotant'

export default function CardSchool() {
  useEffect(()=> {
    const set = document.querySelector(".Text-header")
    console.dir(set)
  }, [])
  return (
    <div className='Card-School'>
      <div className='Header-card'>
        <div className='Text-header'>
          <h3>Các Hoạt Động Từ Thiện</h3>
        </div>
      </div>
      <CardImpotant></CardImpotant>
      <div className='Title-Charity'>
        <h3>Các Hoàn Cảnh Y Tế</h3>
      </div>
      <CardChild></CardChild>
      <div className='Title-Charity'>
        <h3>Các Hoàn Cảnh Phương Tiện Mưu Sinh</h3>
      </div>
      <CardChild></CardChild>
      <div className='Title-Charity'>
        <h3>Tin tức</h3>
      </div>
      
    </div>
  )
}
