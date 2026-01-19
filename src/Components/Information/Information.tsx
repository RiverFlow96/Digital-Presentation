import '/home/theking/Programacion/React/Digital Presentation/src/index.css'
import { setName, setNumberOfProjects, setMail, setLocation } from '../../features/informationSlice_1'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Github, Facebook, Instagram, Twitter, Mail, LocateIcon } from 'lucide-react'

const Information = ({ user }: { user?: string }) => {

    const name = useSelector((state: any) => state.informationSlice.name)
    const numberOfProjects = useSelector((state: any) => state.informationSlice.numberOfProjects)
    const mail = useSelector((state: any) => state.informationSlice.mail)
    const location = useSelector((state: any) => state.informationSlice.location)
    const dispatch = useDispatch()

    useEffect(() => {
        const callInformation = async () => {
            const response = await fetch(`https://api.github.com/users/${user}`)
            try {
                if (response.ok) {
                    const data = await response.json()
                    dispatch(setName(data.name))
                    dispatch(setLocation(data.location))
                    dispatch(setMail(data.email))
                }
            }
            catch (error) {
                throw new Error('Error al acceder a la informacion: ' + error)
            }
        }
        callInformation()
    }, [])

    useEffect(() => {
        const callRepos = async () => {
            const response = await fetch(`https://api.github.com/users/${user}/repos`)
            try {
                if (response.ok) {
                    const data = await response.json()
                    dispatch(setNumberOfProjects(data.length))
                }
            }
            catch (error) {
                throw new Error('Error al acceder a los repositorios: ' + error)
            }
        }
        callRepos()
    }, [])



    return (
        <div className='text-center text-[1.16rem]'>
            <p className='font-bold'>{name}</p>
            <p className='text-[1rem] opacity-40 font-bold'>Programmer</p>
            <p className='font-bold'>Repos: {numberOfProjects}</p>
            <p className='font-bold'>UserName: {user}</p>
            <p className='font-bold'>UserName: {mail}</p>
            <p className='font-bold'>UserName: {location}</p>
            <p className='pt-5 opacity-40 text-[0.8rem] font-bold'>Connect with me on</p>
            <div className='py-2 flex gap-4 items-center justify-center'>
                <Github size={32}></Github>
                <Instagram size={32}></Instagram>
                <Facebook size={32}></Facebook>
                <Twitter size={32}></Twitter>
            </div>

            <div className='w-full h-[70%] px-10 bg-amber-700'>
                <div className='flex items-center justify-center bg-white w-13 h-13 border-2 border-gray-500 rounded-[30%] shadow-2xl shadow-gray-400'>
                    <Mail size={32}></Mail>
                    <p>{mail}</p>
                </div>
                <div>
                    <div className='flex items-center justify-center bg-white w-13 h-13 border-2 border-gray-500 rounded-[30%] shadow-2xl shadow-gray-400'>
                        <LocateIcon size={32}></LocateIcon>
                    </div>
                    <p>{location}</p>
                </div>
            </div>

        </div>
    )
}

export default Information