import { useEffect } from 'react'
import '/home/theking/Programacion/React/Digital Presentation/src/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { setImage } from '../../features/imageSlice_1'



const Image = ({ user }: { user?: string }) => {

    const image = useSelector((state: any) => state.image_1.value)
    const dispatch = useDispatch()

    useEffect(() => {
        const callImage = async () => {
            const response = await fetch(`https://api.github.com/users/${user}`)

            try {
                if (response.ok) {
                    {
                        const data = await response.json()
                        dispatch(setImage(data.avatar_url))
                    }

                }
            } catch (error) {
                console.error('Error en la imagen: ' + error)
            }
        }
        if (user) callImage()
    }, [])

    return (
        <div className='flex items-center justify-center'>
            < img className='rounded-[100%] size-30' src={image} alt='Imagen de Ava' />
        </div>
    )
}

export default Image