import '/home/theking/Programacion/React/Digital Presentation/src/index.css'
import { setName, setNumberOfProjects, setMail, setLocation } from '../../features/informationSlice_1'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import type { RootState } from '../../app/store'
import { Github, Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react'
// Componente que muestra información del usuario (nombre, repos, contacto...)
// - Hace peticiones a la API de GitHub para obtener datos públicos del usuario
// - Actualiza el store mediante dispatched actions del slice `information`.

const Information = ({ user }: { user?: string }) => {

    const name = useSelector((state: RootState) => state.informationSlice.name)
    const numberOfProjects = useSelector((state: RootState) => state.informationSlice.numberOfProjects)
    const mail = useSelector((state: RootState) => state.informationSlice.mail)
    const location = useSelector((state: RootState) => state.informationSlice.location)
    const dispatch = useDispatch()

    useEffect(() => {
        const callInformation = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${user}`)
                if (!response.ok) return
                const data = await response.json()
                // Efecto: petición a la API de GitHub para obtener información del usuario
                // - Se ejecuta cuando cambia `user`.
                // - GitHub puede devolver `null` para `email` o `location` si el usuario los oculta;
                //   por eso usamos `?? ''` para evitar asignar null en el store.
                dispatch(setName(data.name ?? ''))
                dispatch(setLocation(data.location ?? ''))
                dispatch(setMail(data.email ?? ''))
            } catch (error) {
                console.error('Error al acceder a la informacion:', error)
            }
        }
        if (user) callInformation()
    }, [user, dispatch])

    useEffect(() => {
        const callRepos = async () => {
            const response = await fetch(`https://api.github.com/users/${user}/repos`)
            try {
                if (response.ok) {
                    const data = await response.json()
                    // Efecto: obtener la lista de repositorios del usuario y contar cuantos hay
                    // Nota: si `user` cambia en runtime, añade `user` y `dispatch` a las dependencias
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
            <p className='pt-5 opacity-40 text-[0.8rem] font-bold'>Connect with me on</p>
            <div className='py-2 flex gap-4 items-center justify-center'>
                <Github size={32}></Github>
                <Instagram size={32}></Instagram>
                <Facebook size={32}></Facebook>
                <Twitter size={32}></Twitter>
            </div>

            <div className='my-3 w-full h-[50%] px-10'>
                <div className='flex flex-row items-center'>
                    <div className='mx-6 my-0 flex items-center justify-center bg-white w-13 h-13 border-2 border-gray-500 rounded-[30%] shadow-2xl shadow-gray-400'>
                        <Mail size={32}></Mail>
                    </div>
                    {/* Mostrar el email almacenado en el store. Si está vacío, no aparecerá */}
                    <p className='font-bold'>{mail || 'No disponible'}</p>
                </div>

                <div className='my-3 flex flex-row items-center'>
                    <div className='mx-6 flex items-center justify-center bg-white w-13 h-13 border-2 border-gray-500 rounded-[30%] shadow-2xl shadow-gray-400'>
                        <MapPin size={32} />
                    </div>
                    <p className='font-bold'>{location}</p>
                </div>
            </div>

        </div>
    )
}

export default Information