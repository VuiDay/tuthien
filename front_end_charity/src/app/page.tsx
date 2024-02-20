import Slider from '@/components/Client/Main/Slider/Slider'
import CardSchool from '@/components/Client/Main/CardSchool/CardSchool'
import TaskbarMenu from '@/components/Client/TaskbarMenu/TaskbarMenu'

export default function page() { 
  return (
    <div>
      <TaskbarMenu></TaskbarMenu>
      <div className='Slider'>
        <Slider></Slider>
      </div>
      <div className='Card-school'>
        <CardSchool></CardSchool>
      </div>
    </div>
  )
}
