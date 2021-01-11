import hiflix from '../assets/hiflix.png'
import CineOne21 from '../assets/CineOne21.png'
import ebvid from '../assets/ebv.id.png'

const cinemaList = [
  {
    id: 1,
    image: hiflix,
    name: 'Hiflix Cinema',
    address: 'Colonel street No. 2, East Purwokerto',
    time: [
      {
        id: 1,
        readable: '8.30am'
      },
      {
        id: 2,
        readable: '9.30am'
      },
      {
        id: 3,
        readable: '10.30am'
      },
      {
        id: 4,
        readable: '11.30am'
      },
    ],
    price: 100
  },
  {
    id: 2,
    image: CineOne21,
    name: 'CineOne21 Cinema',
    address: 'Downcare street  No. 21, East Purwokerto',
    time: [
      {
        id: 1,
        readable: '8.30am'
      },
      {
        id: 2,
        readable: '9.30am'
      },
      {
        id: 3,
        readable: '10.30am'
      },
      {
        id: 4,
        readable: '11.30am'
      },
    ],
    price: 60
  },
  {
    id: 3,
    image: ebvid,
    name: 'ebv.id Cinema',
    address: 'Whatever street No.12, South Purwokerto',
    time: [
      {
        id: 1,
        readable: '8.30am'
      },
      {
        id: 2,
        readable: '9.30am'
      },
      {
        id: 3,
        readable: '10.30am'
      },
      {
        id: 4,
        readable: '11.30am'
      },
    ],
    price: 88
  }
]

export default cinemaList